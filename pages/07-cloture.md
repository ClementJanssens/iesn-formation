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

<div class="rail">Le bon réflexe — <strong>chercher les bornes avant la démo</strong></div>

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

Le bon réflexe, développé : quand un nouvel outil sort, cherchez d'abord ses
BORNES — où il s'arrête, ce qu'il a le droit de faire, ce qu'il enregistre.
La démonstration est toujours belle ; les bornes disent le reste.
C'est la grille de lecture qu'ils emportent.
-->

---
layout: default
---

# Pour continuer

<div class="pt-8 grid grid-cols-2 gap-12 text-base">
<div v-click>

**Deux documentations**

<div class="pt-3 space-y-3 opacity-80">
<div>Patterns, contrôle de boucle, délégation, approbations</div>
<div>Mémoire persistante et compétences auto-générées</div>
</div>

</div>
<div v-click>

**Par quoi commencer**

<div class="pt-3 space-y-2">

1. Une tâche de la colonne verte
2. La fiche en cinq lignes
3. Trente cas réels
4. Le workflow le plus bête qui marche
5. L'agent, seulement si un cas l'exige

</div>

</div>
</div>

<!--
Les deux références, à donner à l'oral et à écrire au tableau :
— ai-sdk.dev : les patterns d'orchestration, le contrôle de boucle, la délégation
  et les approbations d'outils, avec du code exécutable. C'est la documentation
  la plus proche du plan suivi aujourd'hui.
— hermes-agent.nousresearch.com/docs (Nous Research) : une implémentation complète
  et ouverte de la boucle d'apprentissage vue au module 4.

Bien redire : ce sont des sources techniques, pas des recommandations d'outillage.
D'autres bibliothèques font la même chose autrement.

Sur l'ordre de démarrage : la grande majorité des projets qui échouent ont commencé
à l'étape 4 en sautant les trois premières. Le dire comme ça, c'est la dernière
chose utile de la journée.
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
