# Orchestrateurs IA — support de formation

Support d'une journée destinée à des enseignants du supérieur. 70 slides, en français,
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
pnpm export           # → dist/orchestrateurs-ia.pdf — le livrable, 70 pages
pnpm export:handout   # même pagination + sommaire, pour les participants
pnpm export:build     # une page par étape de clic (~125 pages), pour répéter
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
rend tout visible, une page par slide. Seul `export:build` déplie les étapes.

Produire le PDF livrable **sur la machine qui a servi aux tests** : Inter et DM Mono
sont récupérées chez Google Fonts, et hors ligne les métriques de repli décalent tout.

## Structure

| Fichier | Module | Durée |
|---|---|---|
| `slides.md` | Page de titre, contrat de la journée, programme, fil rouge | — |
| `pages/00-ouverture.md` | Présentation, tour de table, cinq ans de progrès, démonstration d'entrée | 30 min |
| `pages/01-fondations.md` | Modèle, outils, boucle — les fondations | 75 min |
| `pages/02-workflows.md` | Les cinq patterns d'orchestration | 75 min |
| `pages/03-agent-boucle.md` | L'agent autonome, ses bornes, ses modes d'échec | 75 min |
| `pages/04-contexte-memoire.md` | Contexte, mémoire, sous-agents | 75 min |
| `pages/05-production.md` | Exécution, contrôle humain, observabilité, sécurité | 60 min |
| `pages/06-a-la-fac.md` | Cartographie des usages, trois cas, évaluation des étudiants | 45 min |
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
| `layouts/cover.vue` | Couverture : axe de texte à gauche, plateau en bas à droite |
| `layouts/section.vue` | Séparateur de module : tuile, filet, barre de progression de la journée |

Trois règles tiennent l'ensemble : les titres sont en graisse **500, jamais en gras** ;
une surface se sépare par un **filet 1px + un écart de valeur**, jamais par une ombre ;
le mouvement **se pose** (courbe `cubic-bezier(0.22, 1, 0.36, 1)`, 150–300 ms, aucun rebond).

Trois interdits, qui expliquent l'absence de choses qu'on s'attendrait à trouver :
pas de zoom ni d'agrandissement au survol (le retour passe par la couleur, la bordure
ou l'opacité) ; pas d'ombre portée décorative ; **jamais de grande surface remplie de
violet** — la couleur de marque marque une chose à la fois, sur 66 slides elle ne
couvre que le segment de la couverture, un bloc du plateau, les anneaux des tuiles,
la barre de progression et le titre des deux slides d'énoncé.

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

## Parti pris

Neutralité technologique. Les concepts sont présentés indépendamment de toute
bibliothèque ; les implémentations n'apparaissent qu'en illustration, au pluriel,
et les deux documentations citées en clôture le sont comme sources techniques.
Le code est en TypeScript et sert à montrer une forme, pas à être recopié.
