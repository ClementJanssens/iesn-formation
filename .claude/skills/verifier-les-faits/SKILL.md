---
name: verifier-les-faits
description: Vérifie toute affirmation factuelle du support de formation IESN avant qu'elle atterrisse dans une slide ou dans les notes de l'animateur — dates, versions, chiffres, noms d'outils, API, citations, attributions. Utiliser avant d'écrire une affirmation, et pour auditer des slides existantes. Ce qui ne se source pas est retiré ou requalifié en opinion assumée.
---

# Vérifier chaque affirmation

Le support est présenté devant des enseignants du supérieur. C'est un public qui vérifie.
Une seule affirmation fausse discrédite la journée entière.

Cette règle vaut **y compris pour ce que Clément apporte lui-même**. S'il donne
une info fausse ou approximative, le dire et la corriger — ne pas l'intégrer
telle quelle.

## Ce qui compte comme affirmation à vérifier

Dans les slides **et** dans les notes de l'animateur (`<!-- ... -->`), qui sont
dites à voix haute et donc tout aussi engageantes :

- **dates et versions** — sortie d'un modèle, d'un produit, d'un protocole
- **chiffres** — benchmarks, prix, tailles de contexte, taux d'adoption, effets mesurés
- **noms propres** — outils, entreprises, personnes, URLs de documentation
- **API et code** — noms de fonctions, de champs, signatures : ils se vérifient dans la doc
- **attributions** — « c'est untel qui a montré que », « la littérature dit que »
- **définitions techniques** — agent, workflow, RAG, MCP, orchestrateur
- **cohérence interne** — un tableau chiffré doit s'additionner, deux slides ne
  doivent pas donner deux nombres différents pour la même chose

## La procédure

1. **Remonter à la source primaire.** Doc officielle, papier, annonce du
   fournisseur, dépôt. Pas un article de seconde main, pas un blog SEO, pas
   un résumé de moteur de recherche.
2. **Vérifier la date de la source elle-même.** La formation vise 2026 ; les
   connaissances d'un modèle peuvent être périmées, et un article de 2024 sur
   un outil de 2026 ne vaut rien.
3. **Refaire les calculs.** Tout tableau chiffré doit tenir à l'addition, et
   tout facteur annoncé (« 160 fois ») doit se déduire des nombres affichés.
4. **Vérifier les API dans la doc de la bibliothèque**, pas de mémoire. Les
   noms changent entre versions majeures.

## Le verdict, trois issues et pas quatre

| Cas | Ce qu'on fait |
|---|---|
| Sourcé | Garder, et **mettre la source dans les notes** pour pouvoir la donner en salle |
| Non sourçable mais vécu | Requalifier en opinion assumée : « mon expérience », « ce que j'ai vu ». Jamais « la majorité des projets », jamais un chiffre inventé |
| Non sourçable et non vécu | Retirer |

Un nombre sans source est **toujours** à retirer ou à remplacer par la
formulation qualitative correspondante. « Deux centimes par appel » se retire ;
« une fraction de centime » se garde.

## Attribution

Un découpage, une nomenclature ou un argument repris à quelqu'un se crédite
d'une phrase. Devant des chercheurs, présenter comme sien un cadre emprunté
coûte plus cher que la phrase de crédit.

## À signaler à Clément

À la fin de chaque passe, lister explicitement :

- ce qui a été **corrigé**, avec l'ancienne et la nouvelle valeur ;
- ce qui a été **requalifié** en opinion, et pourquoi ;
- ce qui **n'a pas pu être confirmé** — notamment tout ce qui dépend du
  comportement d'un produit et se vérifie en le manipulant, pas sur le web.

Voir aussi les mémoires `slides-trame-pas-texte` et `pas-de-pub-dans-les-supports`.
