---
layout: section
module: 6
---

# Et à la fac ?

<div class="opacity-50 pt-2">45 minutes · vos usages, et le sujet qui fâche</div>

---
layout: default
---

# Trier avant de construire

<div class="stagger pt-4 grid grid-cols-3 gap-5">

<div v-click class="card-ok">
<div class="font-semibold pb-1">Automatisable</div>
<div class="eyebrow pb-3">l'erreur est visible et rattrapable</div>
<div class="text-sm space-y-2 opacity-85">
<div>Convertir et reformater des supports</div>
<div>Extraire les références d'un corpus</div>
<div>Produire des variantes d'un même exercice</div>
<div>Résumer un compte rendu de réunion</div>
<div>Trier et router des demandes entrantes</div>
</div>
</div>

<div v-click="'+0'" class="card-warn">
<div class="font-semibold pb-1">Assistable</div>
<div class="eyebrow pb-3">l'agent prépare, l'humain décide</div>
<div class="text-sm space-y-2 opacity-85">
<div>Pré-relire un travail selon une grille</div>
<div>Repérer les similitudes entre copies</div>
<div>Proposer un plan de séance à retravailler</div>
<div>Constituer une bibliographie à valider</div>
<div>Rédiger un premier jet de retour</div>
</div>
</div>

<div v-click="'+0'" class="card-bad">
<div class="font-semibold pb-1">À garder humain</div>
<div class="eyebrow pb-3">l'erreur est invisible ou irréparable</div>
<div class="text-sm space-y-2 opacity-85">
<div>Attribuer une note</div>
<div>Décider d'une réussite ou d'un échec</div>
<div>Qualifier une fraude</div>
<div>Répondre à un étudiant en difficulté</div>
<div>Tout ce qui relève d'un recours</div>
</div>
</div>

</div>

<div v-click class="pt-8 text-sm opacity-75 max-w-3xl">
Le critère de la troisième colonne n'est pas « c'est trop dur pour la machine ». C'est : <strong>quelqu'un doit pouvoir en répondre devant la personne concernée.</strong> Une décision qu'on ne peut pas justifier n'est pas une décision acceptable, quelle que soit sa qualité.
</div>

<!--
Ouvrir la discussion ici, 5 minutes : est-ce que quelqu'un placerait un item
dans une autre colonne ? Les désaccords sont instructifs et souvent disciplinaires.

Ne pas trancher à leur place. L'objectif est qu'ils repartent avec la grille,
pas avec mon classement.
-->

---
layout: default
---

# Cas 1 · Le flux de demandes entrantes

<div class="pt-3 grid grid-cols-2 gap-8">
<div>

```mermaid {scale: 1.05}
flowchart TD
  M([Demande]) --> C{"Classifier"}
  C -->|"info publique"| A["Réponse type<br>+ lien"]
  C -->|"cas particulier"| B["Brouillon<br>→ humain"]
  C -->|"doute"| H["File humaine"]
  A --> L[(Journal)]
  B --> L
  H --> L
```

<div class="pt-3 text-sm opacity-70">
Pattern : <strong>routage</strong>, avec sortie « je ne sais pas ».
</div>

</div>
<div class="text-sm space-y-3">

**Ce qui rend le cas viable** — la majorité des demandes portent sur une information publique et stable. Le volume est réel, la valeur ajoutée humaine est nulle sur cette part.

**Le garde-fou** — la classe « doute » doit exister et être généreuse. Mieux vaut escalader trop que répondre de travers à quelqu'un qui s'inquiète d'une inscription.

**Le triangle du module 5** — cet agent est exposé à du contenu non maîtrisé (des mails) et possède un canal de sortie (répondre). Donc il **n'a pas** accès aux dossiers. S'il en faut, on sépare en deux services.

**La mesure** — part traitée sans humain, part escaladée, et surtout : nombre de réponses fausses détectées après coup.

</div>
</div>

---
layout: default
---

# Cas 2 · La pré-relecture d'un travail écrit

<div class="pt-3 grid grid-cols-2 gap-8">
<div>

```mermaid {scale: 1.05}
flowchart TD
  T([Travail]) --> A["Méthode"]
  T --> B["Sources"]
  T --> C["Structure<br>et langue"]
  A --> S["Consolidation"]
  B --> S
  C --> S
  S --> R([Grille annotée<br>sans note])
  R --> H["Lecture<br>humaine"]
```

<div class="pt-3 text-sm opacity-70">
Pattern : <strong>parallélisation</strong>. Trois lectures indépendantes.
</div>

</div>
<div class="text-sm space-y-3">

**La règle non négociable** — la sortie est une **grille de remarques localisées**, jamais un score. Dès qu'un chiffre apparaît, il devient l'ancre de la lecture humaine et le travail d'évaluation est perdu.

**Pourquoi trois lectures et pas une** — un modèle à qui on demande trois choses en même temps en fait deux bien. Trois contextes séparés, trois attentions pleines. Le vrai travail est ensuite dans la consolidation des avis divergents.

**Ce que ça fait gagner** — pas du temps de correction : du **temps de correction utile**. L'humain arrive avec les passages déjà repérés.

**À dire aux étudiants** — explicitement, dès le début du cours. Une pré-relecture automatique non annoncée est un problème de confiance avant d'être un problème technique.

</div>
</div>

<!--
Le point sur l'ancrage est appuyé par la littérature en évaluation : un score affiché
avant lecture déplace fortement la note finale. C'est un argument recevable
en conseil pédagogique, pas juste une précaution de prudence.
-->

---
layout: default
---

# Cas 3 · L'assistant de révision d'un cours

<div class="pt-3 grid grid-cols-2 gap-8">
<div>

```mermaid {scale: 1.05}
flowchart TD
  Q([Question<br>étudiant]) --> A{"Agent borné"}
  A --> R["chercher_dans_le_cours"]
  R --> A
  A --> V["poser_une_question<br>de vérification"]
  V --> A
  A --> S(["Réponse<br>+ renvoi au support"])
  A -.->|"hors périmètre"| X(["« Ce n'est pas<br>dans ce cours »"])
```

<div class="pt-3 text-sm opacity-70">
Pattern : <strong>agent borné</strong>, corpus fermé.
</div>

</div>
<div class="text-sm space-y-3">

**Le choix structurant** — le corpus est **fermé** : vos supports, et rien d'autre. L'agent cite ses sources par numéro de page. Hors périmètre, il refuse au lieu d'improviser.

**Ce que ça change pédagogiquement** — l'étudiant obtient une réponse ancrée dans le cours, pas dans une moyenne du web. Et vous voyez, en agrégé, **sur quoi il bute**.

**Le sous-produit le plus intéressant** — le journal des questions. C'est une donnée d'enseignement que vous n'aviez jamais eue : les incompréhensions réelles, en volume, avant l'examen.

**La limite honnête** — un agent qui répond trop bien remplace l'effort de recherche. Le faire poser une question de vérification avant de répondre change complètement l'effet.

</div>
</div>

---
layout: default
---

# Le sujet qui fâche

<div class="pt-2 text-xl pb-6">
Vos étudiants ont déjà des agents. La question n'est pas de savoir s'il faut l'autoriser.
</div>

<div class="grid grid-cols-2 gap-10">
<div>

**Ce qui ne fonctionne plus**

<div class="text-sm space-y-2 pt-2">
<div>Le devoir à rendre à la maison, sans autre garde-fou</div>
<div>La détection automatique de texte généré — le taux de faux positifs est trop élevé pour fonder une sanction</div>
<div>L'interdiction non vérifiable, qui pénalise surtout ceux qui la respectent</div>
</div>

</div>
<div>

**Ce qui fonctionne encore**

<div class="text-sm space-y-2 pt-2">
<div>Évaluer le <strong>processus</strong> autant que le produit : versions successives, journal de travail, choix justifiés</div>
<div>La soutenance courte, même cinq minutes : on ne défend pas ce qu'on n'a pas compris</div>
<div>Rendre l'usage <strong>obligatoire et documenté</strong> : « utilise un agent, joins la trace, critique sa sortie »</div>
<div>Des sujets ancrés dans un contexte local que l'agent n'a pas</div>
</div>

</div>
</div>

<div v-click class="pt-6 callout-cool text-sm">
Le déplacement à opérer : <strong>de « as-tu produit ce texte ? » vers « peux-tu répondre de ce texte ? »</strong>. C'est la seule question qui reste vérifiable, et c'était sans doute déjà la bonne avant.
</div>

<!--
Prévoir que ce soit le moment le plus animé de la journée. Laisser 10 minutes.

Ne pas prendre position sur la politique de l'établissement — ce n'est pas mon rôle.
Décrire ce qui tient techniquement et ce qui ne tient pas, et les laisser décider.

Sur la détection : être factuel. Les détecteurs produisent des faux positifs, et ils
en produisent davantage sur les textes de personnes qui n'écrivent pas dans leur langue
maternelle. Une sanction fondée là-dessus est difficilement défendable.
-->

---
layout: default
---

# Une architecture tient en cinq lignes

<div class="pt-4 text-base opacity-80 pb-5">
Avant d'écrire du code, remplissez ceci. Si vous ne pouvez pas, le projet n'est pas prêt.
</div>

<div class="box p-5 space-y-3">

<div class="flex gap-5"><div class="w-44 shrink-0 font-semibold text-cool">Objectif</div><div class="opacity-60 text-sm">Une phrase. Ce que le système produit, pour qui, et à la place de quoi.</div></div>

<div class="flex gap-5"><div class="w-44 shrink-0 font-semibold text-cool">Outils</div><div class="opacity-60 text-sm">La liste exhaustive. Chacun classé : réversible, coûteux à défaire, irréversible.</div></div>

<div class="flex gap-5"><div class="w-44 shrink-0 font-semibold text-cool">Pattern</div><div class="opacity-60 text-sm">Lequel des cinq, ou agent borné. Et pourquoi pas celui d'à côté.</div></div>

<div class="flex gap-5"><div class="w-44 shrink-0 font-semibold text-cool">Bornes</div><div class="opacity-60 text-sm">Condition d'arrêt, plafond d'étapes, budget, ce qui passe par un humain.</div></div>

<div class="flex gap-5"><div class="w-44 shrink-0 font-semibold text-cool">Critère de succès</div><div class="opacity-60 text-sm">Un nombre mesurable sur trente cas réels. Pas « ça marche bien ».</div></div>

</div>

<div class="pt-6 text-sm opacity-60">
La ligne qui bloque le plus souvent est la dernière. C'est presque toujours le signe que l'objectif de la première n'est pas assez précis.
</div>
