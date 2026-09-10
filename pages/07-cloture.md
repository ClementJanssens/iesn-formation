---
layout: section
module: 7
---

# Clôture

---
layout: default
---

# Sept idées à emporter

<div class="pt-6 space-y-3 text-[1.05rem]">
<v-clicks>

<div class="flex gap-4 items-baseline"><span class="text-accent font-bold w-6">1</span><div>Un agent : <strong>un modèle, des outils, une boucle</strong>.</div></div>

<div class="flex gap-4 items-baseline"><span class="text-accent font-bold w-6">2</span><div>Le modèle <strong>décide</strong>, votre code <strong>agit</strong>.</div></div>

<div class="flex gap-4 items-baseline"><span class="text-accent font-bold w-6">3</span><div>Sa mémoire est un tableau <strong>que vous contrôlez</strong>.</div></div>

<div class="flex gap-4 items-baseline"><span class="text-accent font-bold w-6">4</span><div>Si vous savez énoncer les étapes, <strong>écrivez-les en code</strong>.</div></div>

<div class="flex gap-4 items-baseline"><span class="text-accent font-bold w-6">5</span><div>Passer à l'agent, c'est <strong>poser les bornes</strong>.</div></div>

<div class="flex gap-4 items-baseline"><span class="text-accent font-bold w-6">6</span><div>Sensible + non maîtrisé + sortie : <strong>retirez-en un.</strong></div></div>

<div class="flex gap-4 items-baseline"><span class="text-accent font-bold w-6">7</span><div>Sortez de « ça a l'air bien » : <strong>trente cas réels.</strong></div></div>

</v-clicks>
</div>

<!--
Les reprendre une par une, en développant celle qui a le mieux marché
dans la journée — regarder la salle, pas la slide.

Les compléments s'ils sont utiles :
2 — tous les garde-fous se placent sur cette frontière.
3 — l'autonomie est une décision d'ingénierie, elle se règle dans le code.
4 — gardez le modèle pour ce que vous ne savez pas décrire.
5 — on troque le contrôle de l'enchaînement contre celui des bornes.
6 — deux sur trois, c'est gérable ; les trois ensemble, la fuite est une
    question de temps.
7 — et un critère par cas.
-->

---
layout: default
---

# Ce qui aura bougé dans douze mois

<div class="pt-8 space-y-6 text-[1.15rem]">

<v-clicks>

<div class="rail">Ce qui va changer — <strong>le coût, la longueur des boucles</strong></div>

<div class="rail">Ce qui ne changera pas — <strong>le sans-état, le budget, l'injection</strong></div>

<div class="rail">Face à un nouvel outil — <strong>vérifiez ce qu'il peut faire, ce qu'il conserve et quand il s'arrête</strong></div>

</v-clicks>

</div>

<!--
Ce qui va probablement changer : le coût par tâche continuera de baisser.
Les boucles longues deviendront banales. L'exécution s'éloignera de la machine
locale vers des environnements gérés. Les mécanismes d'apprentissage entre
sessions vont se stabiliser et sortir de la phase expérimentale.

Ce qui ne changera pas : le modèle restera sans état. Le contexte restera
une ressource à budgéter. L'injection de prompt indirecte restera structurelle.
La liste d'outils restera la première défense. Et « qui répond de cette décision »
restera une question humaine.

Face à un nouvel outil, ne vous arrêtez pas à la démonstration. Vérifiez ce
qu'il a le droit de faire, ce qu'il enregistre et ce qui met fin à son action.
C'est là que se joue son usage réel.
C'est la grille de lecture qu'ils emportent.
-->

---
layout: default
---

# Demain matin

<div class="pt-8 grid grid-cols-3 gap-6 text-base">

<div v-click class="card-ok">
<div class="eyebrow pb-4">1 · Choisir</div>
<div class="font-semibold">Une tâche fréquente et peu risquée</div>
<div class="pt-3 opacity-75">Son résultat se vérifie facilement.</div>
</div>

<div v-click class="card">
<div class="eyebrow pb-4">2 · Définir</div>
<div class="font-semibold">Le résultat attendu et les limites</div>
<div class="pt-3 opacity-75">Ce que le système peut faire, quand il s'arrête et quand l'humain reprend.</div>
</div>

<div v-click class="card">
<div class="eyebrow pb-4">3 · Tester</div>
<div class="font-semibold">Des cas réels, avant le déploiement</div>
<div class="pt-3 opacity-75">Mesurez les erreurs, corrigez, puis élargissez le périmètre.</div>
</div>

</div>

<div v-click class="mt-8 callout-cool">
Si les étapes sont connues, construisez un workflow. Ajoutez une boucle agent seulement quand le prochain choix ne peut pas être écrit à l'avance.
</div>

<!--
La dernière marche à suivre doit se comprendre sans renvoi à une slide précédente.

1 — Partir d'une tâche fréquente, réversible et dont une erreur se voit. Éviter
les décisions qui engagent une personne : note, fraude, échec, recours.
2 — Écrire avant le code : le résultat attendu, les outils autorisés, la condition
d'arrêt, le plafond d'actions et le moment où un humain reprend la main.
3 — Tester sur des cas réellement rencontrés. Compter les erreurs importantes,
pas seulement les réponses jugées convaincantes.

La conclusion reprend la distinction centrale de la journée : un workflow quand
l'enchaînement est connu ; une boucle agent bornée quand le système doit choisir
la prochaine action à partir de ce qu'il observe.
-->

---
layout: center
class: text-center
---

# Questions

<!--
Garder dix minutes. Si personne ne parle, relancer avec :
« quelqu'un a un cas concret qu'il aimerait qu'on architecture ensemble ? »

C'est le meilleur usage de la fin de journée : appliquer la grille en direct
sur un cas apporté par la salle. Écrire les cinq lignes au tableau
pendant qu'ils parlent.

Remercier, et donner un moyen de me joindre pour les questions d'après.
-->
