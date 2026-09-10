#!/usr/bin/env python3
"""Vérifie qu'aucun texte des sources n'a été rogné à l'export PDF.

Slidev coupe en silence ce qui dépasse du cadre 16:9 : la dernière ligne d'une
slide trop chargée disparaît du PDF sans le moindre avertissement. Ce script
compare le texte des fichiers Markdown au texte réellement présent dans le PDF
et signale ce qui manque.

    python3 scripts/check-clipping.py [chemin/vers.pdf]

Prérequis : pdftotext (paquet poppler).
"""
import html
import re
import subprocess
import sys
import unicodedata
from pathlib import Path

RACINE = Path(__file__).resolve().parent.parent
PDF = Path(sys.argv[1]) if len(sys.argv) > 1 else RACINE / "dist/orchestrateurs-ia.pdf"
LONGUEUR_MIN = 30  # en dessous, trop de faux positifs (titres, puces courtes)

REMPLACEMENTS = str.maketrans({
    "’": "'", "‘": "'", "‚": "'", "‛": "'",
    "“": '"', "”": '"', "„": '"',
    "‑": "-", "‒": "-", "–": "-", "—": "-", "―": "-",
    "«": "", "»": "", "…": "...",
    " ": " ", " ": " ", " ": " ",
})


def normaliser(texte: str) -> str:
    texte = unicodedata.normalize("NFC", html.unescape(texte)).translate(REMPLACEMENTS)
    return re.sub(r"\s+", "", texte).lower()


def fragments_du_fichier(chemin: Path):
    """Renvoie (ligne, fragment) pour chaque morceau de texte destiné à l'écran."""
    source = chemin.read_text(encoding="utf-8")
    source = re.sub(r"<!--.*?-->", "", source, flags=re.S)      # notes du présentateur
    source = re.sub(r"```mermaid.*?```", "", source, flags=re.S)  # diagrammes : rendus en SVG

    lignes = source.splitlines()
    dans_frontmatter = False
    dans_code = False
    dans_source_note = False

    for numero, ligne in enumerate(lignes, start=1):
        brute = ligne.strip()

        # Les notes de source portent leurs références dans un tableau JS, pas
        # dans du Markdown : sans ce cas particulier, la ligne comparée serait
        # `['Liu et al., …', 'arxiv.org/…'],`, qui ne peut évidemment pas se
        # retrouver telle quelle dans le PDF. On compare chaque chaîne citée.
        if brute.startswith("<SourceNote"):
            dans_source_note = True
        if dans_source_note:
            for chaine in re.findall(r"'(.*?)'\s*(?:,|\])", brute):
                if len(normaliser(chaine)) >= LONGUEUR_MIN:
                    yield numero, chaine
            if brute.endswith("/>"):
                dans_source_note = False
            continue

        if brute.startswith("```"):
            dans_code = not dans_code
            continue

        if dans_code:
            # Le code s'affiche tel quel : on le compare sans nettoyage Markdown.
            if len(normaliser(brute)) >= LONGUEUR_MIN:
                yield numero, brute
            continue

        # Un `---` ouvre ou ferme un bloc de métadonnées (ou sépare deux slides).
        if brute == "---":
            precedent = lignes[numero - 2].strip() if numero >= 2 else ""
            suivant = lignes[numero].strip() if numero < len(lignes) else ""
            if dans_frontmatter:
                dans_frontmatter = False
            elif re.match(r"^[a-zA-Z_]+:", suivant) and precedent in ("", "---"):
                dans_frontmatter = True
            continue

        if dans_frontmatter or not brute or brute.startswith("#"):
            continue

        # On découpe la ligne aux frontières de balises et de cellules de tableau.
        # pdftotext peut réordonner deux blocs voisins (colonnes d'une grille,
        # heure et libellé d'un planning) mais jamais l'intérieur d'un même bloc :
        # vérifier morceau par morceau évite une pluie de faux positifs.
        for morceau in re.split(r"<[^>]+>|\|", brute):
            morceau = re.sub(r"[*_`]+", " ", morceau)   # emphase Markdown
            morceau = re.sub(r"^-\s+", " ", morceau)    # puces
            morceau = morceau.strip()
            if len(normaliser(morceau)) >= LONGUEUR_MIN:
                yield numero, morceau


def main() -> int:
    if not PDF.exists():
        print(f"PDF introuvable : {PDF}\nLancez d'abord `pnpm export`.")
        return 2

    # Les deux modes d'extraction ordonnent le texte différemment. Sur une slide
    # en colonnes, l'un peut entrelacer ce que l'autre garde d'un bloc : on ne
    # signale un fragment que s'il manque dans les deux.
    def extraire(*options: str) -> str:
        return normaliser(subprocess.run(
            ["pdftotext", *options, str(PDF), "-"],
            capture_output=True, text=True, check=True,
        ).stdout)

    pdf_par_colonnes = extraire()
    pdf_par_flux = extraire("-raw")

    # L'export peut échouer en silence : Playwright rend des pages vides quand
    # le serveur d'export a un problème, et le PDF fait alors ~17 Ko au lieu
    # d'1 Mo. Sans ce garde-fou, le rapport ci-dessous liste 350 fragments
    # « rognés » et on cherche un problème de mise en page qui n'existe pas.
    if len(pdf_par_colonnes) < 5000:
        print(
            "Le PDF ne contient presque aucun texte "
            f"({len(pdf_par_colonnes)} caractères, {PDF.stat().st_size // 1024} Ko).\n"
            "L'export a probablement échoué en silence — relancez `pnpm export`."
        )
        return 2

    fichiers = [RACINE / "slides.md", *sorted((RACINE / "pages").glob("*.md"))]
    manquants = [
        (chemin.name, numero, texte)
        for chemin in fichiers
        for numero, texte in fragments_du_fichier(chemin)
        if (normaliser(texte) not in pdf_par_colonnes
            and normaliser(texte) not in pdf_par_flux)
    ]

    if not manquants:
        print("Tout le texte des sources est présent dans le PDF.")
        return 0

    print(f"{len(manquants)} fragment(s) absents du PDF — contenu vraisemblablement rogné :\n")
    for nom, numero, texte in manquants:
        apercu = texte if len(texte) <= 95 else texte[:92] + "..."
        print(f"  {nom}:{numero}\n    {apercu}\n")
    return 1


if __name__ == "__main__":
    sys.exit(main())
