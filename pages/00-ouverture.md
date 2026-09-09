---
layout: section
module: 0
---

# Ouverture

<div class="opacity-50 pt-2">30 minutes</div>

---
layout: default
---

# Deux mots, puis on ouvre le capot

<div class="pt-6 grid grid-cols-2 gap-10">
<div>

**D'où je parle**

Je construis et j'exploite des systèmes d'agents en production. Ce qui suit vient de ce qui a marché — et surtout de ce qui a cassé.

J'ai fait mes études ici. C'est la raison pour laquelle je suis dans cette salle plutôt qu'une autre.

</div>
<div>

**D'où vous parlez**

- Qui a déjà branché un modèle sur autre chose qu'une fenêtre de chat ?
- Qui a déjà vu un étudiant rendre un travail visiblement produit par un agent ?
- Qui est ici pour construire, et qui est ici pour comprendre ?

</div>
</div>

<div class="pt-10 text-sm opacity-50">
Les réponses à droite déterminent où j'appuie dans les modules 3 et 6.
</div>

<!--
Tour de table rapide, 5 minutes maximum, à main levée pour les deux premières questions.
La troisième question, laisser deux ou trois personnes développer.
Noter au tableau la répartition construire / comprendre : elle sert au module 6.
-->

---
layout: statement
class: text-center
---

# Démonstration

<div class="text-xl opacity-60 pt-6">
Une tâche. Un agent. Quatre minutes.
</div>

<div class="pt-12 text-base opacity-80">
Consigne : « Trouve les trois articles les plus cités publiés cette année sur <em>X</em>,<br>
vérifie que les liens fonctionnent, et écris-moi une synthèse d'une page. »
</div>

<div class="pt-10 text-sm opacity-50">
Ne regardez pas le résultat. Regardez ce qui défile.
</div>

<!--
DÉMO EN DIRECT — préparer la veille, tester le matin, avoir la trace en capture d'écran
sur les slides suivantes au cas où le réseau lâche.

Pendant que ça tourne, commenter à voix haute :
- « là il cherche »
- « là il a reçu 40 résultats, il en garde 6 »
- « là il vérifie un lien, il tombe sur une 404, il repart chercher »
- « là il n'a plus rien à faire, il rédige »

Ne PAS commenter la qualité du texte final. Ce n'est pas le sujet.
-->

---
layout: default
---

# Ce que vous venez de voir

<div class="pt-4">

<v-clicks>

- Le modèle n'a **pas** répondu à la question. Il a décidé **quoi faire ensuite**, dix-sept fois de suite.

- Entre chaque décision, du code non-IA s'est exécuté : une recherche, une requête HTTP, un parseur.

- Personne n'a écrit « d'abord cherche, puis filtre, puis vérifie ». **L'enchaînement a été improvisé.**

- Il s'est trompé au moins une fois, et s'est corrigé. C'est normal, c'est même le mécanisme.

- Ça a coûté environ **0,40 €** et **4 minutes**. Retenez ces deux nombres, on va y revenir toute la journée.

</v-clicks>

</div>

<div v-click class="pt-8 callout-warn">
Un orchestrateur IA, c'est ça : <strong>une boucle qui laisse un modèle choisir la prochaine action</strong>, et du code autour pour que ces actions aient un effet sur le monde.
</div>

<!--
Les cinq points sont l'ossature de la journée entière.
Point 3 = module 2 (qui décide de l'enchaînement).
Point 4 = module 3 (la boucle, ses dérapages).
Point 5 = module 5 (coût, observabilité).

Le chiffre de 0,40 € : l'adapter à la démo réelle. C'est un ancrage, il doit être vrai.
-->
