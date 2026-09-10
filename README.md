# Orchestrateurs IA — support de formation

Support d'une journée destinée à des enseignants du supérieur. 87 slides, en français,
écrites en Markdown et rendues avec [Slidev](https://sli.dev). Le livrable est un PDF ;
la version web est utilisable telle quelle pour présenter.

## Démarrer

```bash
pnpm install
pnpm dev          # présentation locale, rechargement à chaud
```

Pendant la présentation : <kbd>f</kbd> plein écran, <kbd>o</kbd> vue d'ensemble,
flèches pour naviguer. Le support est en **clair verrouillé** (`colorSchema: light`),
la bascule <kbd>d</kbd> est donc sans effet. Les **notes de l'animateur** s'affichent en ouvrant
`/presenter` dans un second onglet — chaque slide en a, avec les points à appuyer,
les questions à poser et les pièges à éviter.

## Produire le PDF

```bash
pnpm export           # → dist/orchestrateurs-ia.pdf — le livrable, 87 pages
pnpm export:handout   # même pagination + sommaire, pour les participants
pnpm export:build     # une page par étape de clic (~260 pages), pour répéter
pnpm check            # vérifie qu'aucun texte n'a été rogné à l'export
```

`pnpm check` compare le texte des sources à celui réellement présent dans le PDF.
Slidev coupe en silence ce qui dépasse du cadre 16:9 : sans cette vérification, la
dernière ligne d'une slide trop chargée disparaît sans le moindre avertissement.
**À relancer après chaque modification de contenu.**

Le contrôle signale aussi un PDF quasi vide : l'export peut échouer en silence
(pages blanches, fichier de ~17 Ko au lieu d'1 Mo) quand il imprime avant que les
diagrammes Mermaid aient fini de se rendre. C'est pour ça que les trois scripts
d'export passent `--wait-until networkidle --wait 1500` : sans eux la panne est
intermittente, et elle ne se voit qu'en ouvrant le PDF.

Les révélations progressives n'affectent que la version présentée : `pnpm export`
rend tout visible, une page par slide. Seul `export:build` déplie les étapes — c'est
lui qu'on relit pour vérifier qu'un bloc se dévoile au bon moment.

Produire le PDF livrable **sur la machine qui a servi aux tests** : Inter et DM Mono
sont récupérées chez Google Fonts, et hors ligne les métriques de repli décalent tout.

## Structure

| Fichier | Module | Durée |
|---|---|---|
| `slides.md` | Page de titre, contrat de la journée, programme | — |
| `pages/00-ouverture.md` | Présentation, tour de table, trois agents en production, trois machines en quatre ans, démonstration d'entrée | 35 min |
| `pages/01-fondations.md` | Comment fonctionne un agent — modèle, outils, boucle · **labo 1** | 75 min |
| `pages/02-workflows.md` | Les cinq patterns d'orchestration | 75 min |
| `pages/03-agent-boucle.md` | **Labo 2**, l'agent autonome, ses bornes, ses modes d'échec | 75 min |
| `pages/04-contexte-memoire.md` | Contexte, mémoire, sous-agents · **labo 3** | 75 min |
| `pages/05-production.md` | Exécution, contrôle humain, observabilité, sécurité | 60 min |
| `pages/06-enseignement.md` | Cartographie des usages, trois cas, évaluation des étudiants | 45 min |
| `pages/07-cloture.md` | Sept idées à emporter, ressources, questions | 15 min |

### L'habillage

| Fichier | Rôle |
|---|---|
| `uno.config.ts` | La palette et le vocabulaire de classes (`callout-warn`, `rail`, `box`, `eyebrow`…) |
| `style.css` | Tokens de couleur, échelle typographique, tableaux, code, mouvement, puis la couche de signature |
| `setup/shiki.ts` | Thème de coloration syntaxique (`vitesse-light`) |
| `setup/mermaid.ts` | Habillage des 13 diagrammes — ils sont rendus dans un ShadowRoot, aucune CSS externe ne les atteint |
| `global-bottom.vue` | Le cadre de page : deux filets verticaux, quatre marqueurs de 8px, le folio |
| `components/IsoBoard.vue` | Le plateau isométrique — blocs, états, faisceaux et câbles |
| `components/TileMark.vue` | La tuile encadrée : grille estompée, reflet, faisceau épinglé |
| `components/BrandRow.vue` | Une rangée des deux murs de marques (modules 0 et 4) : glyphes en masque, encre du support, accent sur les outils déclarés |
| `components/SourceNote.vue` | Le pied de source des huit slides qui portent de la matière vérifiable |
| `layouts/default.vue` | Les 64 slides de contenu : ligne de repère, titre, filet traversant, puis le corps |
| `layouts/cover.vue` | Couverture : axe de texte à gauche, plateau en bas à droite |
| `layouts/section.vue` | Séparateur de module : tuile, filet, barre de progression de la journée |

L'en-tête du layout de contenu se déduit tout seul : il remonte les slides
jusqu'au dernier séparateur et en reprend le numéro et le titre — « Module 2 ·
Les cinq patterns d'orchestration ». Rien à maintenir en frontmatter, sauf pour
les slides qui précèdent le module 0 : `eyebrow: Programme` force le libellé,
`eyebrow: ''` le retire. Le filet sous le titre porte à gauche le même segment
d'accent de 56 × 2 px que la couverture.

Sous ce filet, le corps se place au tiers de l'espace libre plutôt qu'au bord
haut : une slide ne portant que des repères, il y a presque toujours du vide à
placer. Le layout absorbe aussi le `pt-*` posé en tête de slide — l'écart sous
le titre lui appartient, ne pas le rétablir à la main.

Un libellé de colonne s'écrit `<div class="eyebrow">`, au-dessus d'une colonne
en `card` (filet 2px) — `card-ok` / `card-bad` quand les deux colonnes
s'opposent. C'est le seul registre de libellé du support : ni `**gras**`, ni
`##`, ni `text-sm opacity-60`.

Trois règles tiennent l'ensemble : les titres sont en graisse **500, jamais en gras** ;
une surface se sépare par un **filet 1px + un écart de valeur**, jamais par une ombre ;
le mouvement **se pose** (courbe `cubic-bezier(0.22, 1, 0.36, 1)`, 150–300 ms, aucun rebond).

Trois interdits, qui expliquent l'absence de choses qu'on s'attendrait à trouver :
pas de zoom ni d'agrandissement au survol (le retour passe par la couleur, la bordure
ou l'opacité) ; pas d'ombre portée décorative ; **jamais de grande surface remplie de
violet** — la couleur de marque marque une chose à la fois, sur 87 slides elle ne
couvre que le segment de la couverture, un bloc du plateau, les anneaux des tuiles,
la barre de progression et le titre des deux slides d'énoncé.

### Les sources affichées

Les chiffres et les attributions du support sont sourcés dans les notes de
l'animateur — c'est ce qu'il faut pour répondre en salle. Ça ne suffit pas pour
qu'un participant aille vérifier le lendemain : **les slides qui portent de la
matière vérifiable affichent leur référence en pied de page**, via
`<SourceNote>`.

```html
<SourceNote :items="[
  ['Liu et al., « Lost in the Middle », TACL 2024', 'arxiv.org/abs/2307.03172'],
  ['Modarressi et al., « NoLiMa », ICML 2025', 'arxiv.org/abs/2502.05167'],
]" />
```

Le composant se pose en dernier dans le corps de la slide ; la CSS le renvoie
sous le ressort de queue du layout, contre le bas de page. `label` remplace
« Sources » quand la note crédite au lieu de sourcer — `label="D'après"` sur la
slide des cinq patterns, dont la nomenclature est empruntée.

**Douze slides en portent une, pas une de plus.** Le critère : la slide avance un
effet mesuré, un prix, un taux, une date contestable ou un cadre repris à
quelqu'un — ou, pour les deux cas d'ouverture, une règle opposable dont on
affirme le contenu au nom d'un tiers. Une slide de définition, de méthode ou de
vocabulaire n'a rien à sourcer, et une note vide y serait un ornement. La liste :
l'agent SEO et l'agent de prospection (module 0), le harness retaillé par modèle
et la frise des prix (module 1), les cinq patterns (module 2), la fenêtre
exploitable (module 4), l'injection de prompt et MCP (module 5), le biais de
correction et les détecteurs de texte généré (module 6).

La référence reste **une référence** : auteur, titre, année, URL. Les chiffres
qui la justifient — g = 0,36, 99,3 % → 69,7 %, 72,8 % — restent dans les notes,
où ils sont dits à voix haute. Les mettre à l'écran allongerait la slide pour
répéter ce que l'animateur est en train de dire.

Toute affirmation, sur la slide comme dans les notes, passe d'abord par la
compétence `verifier-les-faits` (`.claude/skills/`) : source primaire, date de
la source, calculs refaits. Ce qui ne se source pas est retiré ou requalifié en
opinion assumée.

### Les révélations progressives

Une slide dense ne s'affiche pas d'un coup : elle se dévoile au clic, dans l'ordre
où l'animateur en parle. La règle est **un clic par bloc de discours**, pas un clic
par ligne :

- deux colonnes qui s'opposent (`card-ok` / `card-bad`, « on va faire » / « on ne va
  pas faire ») — `v-click` sur chaque colonne, jamais sur leurs puces ;
- une pile de repères (`rail`, `rail-bad`, une frise, un `space-y-*`) que les notes
  développent point par point — `<v-clicks>` autour de la pile ;
- une conclusion, un `callout` ou une chute sous un tableau ou un schéma —
  un `v-click` à elle seule, pour qu'elle ne soit pas lue avant d'être dite ;
- **une exception à la règle du bloc** : les chaînes numérotées des trois cas
  d'ouverture se dévoilent étape par étape, un clic par ligne. Ce que la salle
  doit sentir, c'est une durée — la chaîne s'allonge pendant que l'animateur
  parle, et c'est sa longueur qui porte l'argument. La slide de synthèse qui les
  suit, elle, s'affiche d'un bloc : la salle a déjà lu la colonne trois fois ;
- un tableau qui garde une ligne pour la fin — `<v-clicks at="+0" every="n">`
  autour du tableau : les *n* premières lignes sont là d'emblée, la suivante au clic.
  C'est ce que fait « Choisir : la grille », dont la dernière ligne est une question
  posée à la salle.

Ce qui **ne** se révèle **pas** : un schéma Mermaid, un bloc de code (il a déjà ses
étapes de surlignage, `` ```ts {all|2-8|…} `` ), un tableau de référence qu'on laisse
lire d'un bloc, et les slides `layout: section` ou `statement`.

`v-click="'+0'"` accroche un élément au clic précédent — deux blocs qui se posent
ensemble. Combiné à `class="stagger"` sur leur parent, les frères se décalent de
40 ms. À réserver aux cas où les blocs ne se commentent pas séparément : les trois
de « la combinaison à ne jamais réunir » en sont le seul usage restant.

Le mouvement n'existe que dans la version présentée : le plateau anime son courant,
ses reflets et ses anneaux d'attente. Tout est derrière `prefers-reduced-motion`,
et le PDF rend la dernière image — le support doit se lire sans une seule animation.

`style.css` est le levier à actionner en premier si une slide est trop serrée. Attention :
les utilitaires `opacity-40/50/70` y sont redéfinis en couleurs (`--c-t2`, `--c-t3`) —
les opacités se multiplient en cascade et délavent aussi les filets et les lavis,
là où un token de couleur ne touche que le texte.

## Le visuel à fournir

La slide « Deux mots sur qui vous parle » affiche `public/x-profil.png`. Le fichier
présent dans le dépôt est un **repère à remplacer** par la capture du profil X, en
portrait, autour de 570 × 760 px. Le cadre de la slide fait 286 px de large : une
capture plus petite sera floue au vidéoprojecteur.

La slide « Chaque modèle a son propre token » affiche `public/pizza-tokens.jpg`
(1 000 × 455 px) : le visuel des deux pizzas publié par T. Sottiaux sur X, recadré
sur le bandeau. Le crédit est porté sous l'image et la note de source renvoie au fil.

## Le mur de marques

La slide « Ces noms vous disent quelque chose ? » (module 0) affiche vingt tuiles sur
cinq rangées — entreprises, produits, plateformes sans code, systèmes d'agents,
bibliothèques. Les deux premières se lisent ensemble : une rangée nomme ceux qui
entraînent les modèles, l'autre ce qu'on utilise, parce que la salle confond les deux
et que la journée entière repose sur la distinction. Le glyphe d'OpenAI y sert deux
fois, en entreprise puis en produit — la marque elle-même ne les distingue pas, et
les notes de l'animateur disent quoi répondre si quelqu'un le relève.

Les glyphes sont tirés de `public/logos/` — dix-neuf fichiers pour vingt tuiles.
Quinze viennent de [Simple Icons](https://simpleicons.org) (icônes sous CC0, les
marques restant la propriété de leurs détenteurs) ; les quatre autres ont été
récupérés sur les sites des projets puis ramenés à la même forme — pastille de fond
retirée pour rerun.build, Mastra et TanStack, illustration de Nous Research convertie
en masque alpha pour Hermes. `BrandRow` ne les affiche pas en `<img>` mais s'en sert
comme masque sur un aplat d'encre, pour qu'aucune couleur de marque n'entre sur la
slide.

Ajouter ou remplacer un nom : déposer `public/logos/<slug>.svg` — en vérifiant qu'il
porte bien son `xmlns`, sans quoi le masque reste vide — puis ajouter
`<slug> Nom affiché` à la chaîne `marks` de la rangée. Une étoile en tête du slug
(`*rerun rerun.build`) passe la tuile à l'accent : c'est la déclaration d'intérêt de
l'animateur, les outils qu'il utilise lui-même. La légende de la slide doit continuer
à dire que c'en est une, et non une recommandation.

Cinq rangées ne tiennent dans le cadre 16:9 qu'en se resserrant : le mur du module 0
porte la classe `brand-wall is-tight`, qui surcharge les variables de taille lues par
`BrandRow` (`--brand-tile`, `--brand-glyph-w`, `--brand-name`…). Le mur du module 4
n'a que trois rangées et reste en `brand-wall`, à la taille pleine. Ajouter une
sixième rangée demanderait de revoir ces valeurs — vérifier au PDF, pas à l'écran.

La slide est un thermomètre de salle, pas un panorama — elle ne classe rien, et les
notes de l'animateur disent quoi faire de chaque rangée de mains levées. La rangée 1
ne mesure d'ailleurs rien : toutes les mains se lèvent, elle est là pour poser le
vocabulaire. Les notes signalent aussi le point discutable de la rangée 4 : CrewAI y
voisine trois agents qui tournent en continu alors que c'est une bibliothèque qu'on
importe.

## Les deux démonstrations à préparer

Deux slides annoncent une démo en direct. Elles sont le cœur de la journée : la
première montre qu'un agent *décide*, la seconde montre qu'il peut se tromper en
gardant l'air sûr de lui.

1. **Slide « Une tâche. Un agent. Quatre minutes. »** (module 0)
   Un agent qui cherche, vérifie des liens, puis rédige. À tester le matin même.
   Relever le **coût réel** et le **nombre d'étapes** : les deux chiffres sont cités
   tout au long de la journée et doivent être vrais.

2. **Slide « La trace d'un agent qui déraille »** (module 3)
   Une trace ratée, **sauvegardée à l'avance** et déroulée pas à pas. Ne pas rejouer
   en direct : on veut un échec reproductible, pas la loterie.

Prévoir des captures d'écran de secours pour les deux.

## Les trois cas d'ouverture

Le module 0 s'ouvre sur l'animateur et sur la salle ; le bloc des cas vient
**après le mur de marques**, une fois la salle mesurée, et avant la remise à
plat du vocabulaire. Cinq slides : une slide d'annonce qui donne la consigne de
lecture (« ne lisez pas les étapes, regardez qu'il n'y a personne entre elles »),
puis trois agents décrits par leur chaîne d'étapes — le référencement d'un site,
un budget publicitaire, un agenda commercial — puis une dernière qui reprend la
même colonne de gauche avec les mots du métier retirés. C'est le seul argument
du bloc : trois métiers, une seule forme. Les quatre slides de cas partagent donc
volontairement la même composition, et le rapprochement se casse si on en habille
une différemment.

Deux règles tiennent ce bloc :

**Aucun chiffre de résultat.** Ni pourcentage de trafic, ni coût par lead, ni
« ×3 ». Le bloc décrit des architectures, pas des performances. Un chiffre
avancé en salle doit pouvoir être montré dans la minute, sinon il ne se dit pas.

**Chaque cas porte sa contrainte.** Le rail `rail-bad` de chaque slide dit ce
qui coince, et chaque contrainte est documentée : le volume de pages
générées sans valeur est nommé dans les règles anti-spam de Google (« scaled
content abuse »), et en Belgique la publicité par courrier électronique suppose
le consentement préalable du destinataire — l'exception B2B ne couvre que les
adresses impersonnelles d'une personne morale, pas `prenom.nom@entreprise.be`.
Ces deux-là sont sourcées à l'écran ; les autres points de vigilance sont dans
les notes, avec la référence de l'API Marketing de Meta pour ce qu'un agent
peut réellement y changer.

Ce que l'animateur doit trancher avant de monter sur scène : lesquels de ces
trois agents il exploite lui-même. Les notes le rappellent — « le mien » ne se
dit que de ce qui tourne vraiment, le reste se dit « ce que je vois tourner ».

## Parti pris

**La slide est une trame, pas un texte.** C'est l'animateur qui parle ; les
diapositives ne portent que les repères sur lesquels il rebondit — un titre, des
libellés courts, un tableau, un schéma. Aucune slide ne contient de paragraphe :
dès qu'un raisonnement demande plus d'une ligne, il descend dans les notes de
l'animateur. Ces notes sont donc le vrai script — développements, chiffres à
citer, questions à poser à la salle, points à ne pas rater — et elles se lisent
dans `/presenter`.

La conséquence à garder en tête en modifiant le support : **allonger une slide
est presque toujours une erreur**. Le bon geste est de raccourcir la ligne
visible et d'écrire le reste dans le bloc `<!-- … -->` en dessous.

**Jamais la tournure « ce n'est pas X, c'est Y ».** Ni ses variantes — « ce
n'est plus du texte, c'est un virement », « il ne s'agit pas de… mais de… »,
« non pas X mais Y ». Elle donne un balancement d'article de blog et elle
revient trop vite quand on écrit vite. On écrit l'affirmation directement :
« à partir de l'étape 03, chaque décision engage de l'argent ». Une négation
simple reste permise quand elle porte le sens à elle seule (« ce mur n'est pas
un comparatif ») ; c'est le pivot vers la formule de remplacement qui est
proscrit.

Neutralité technologique. Les concepts sont présentés indépendamment de toute
bibliothèque ; les implémentations n'apparaissent qu'en illustration, au pluriel,
et les deux documentations citées en clôture le sont comme sources techniques.
Le code est en TypeScript et sert à montrer une forme, pas à être recopié.
