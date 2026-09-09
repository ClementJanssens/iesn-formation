---
layout: section
module: 7
---

# Clôture

<div class="opacity-50 pt-2">15 minutes</div>

---
layout: default
---

# Sept idées à emporter

<div class="pt-4 space-y-3">
<v-clicks>

<div class="flex gap-4 items-baseline"><span class="text-accent font-bold w-6">1</span><div>Un agent, c'est <strong>un modèle, des outils, une boucle</strong>. Le reste est de l'emballage.</div></div>

<div class="flex gap-4 items-baseline"><span class="text-accent font-bold w-6">2</span><div>Le modèle <strong>décide</strong>, votre code <strong>agit</strong>. Tous les garde-fous se placent sur cette frontière.</div></div>

<div class="flex gap-4 items-baseline"><span class="text-accent font-bold w-6">3</span><div>Sa mémoire est un tableau de messages <strong>que vous contrôlez</strong>. Ce n'est pas une propriété du modèle, c'est une décision d'ingénierie.</div></div>

<div class="flex gap-4 items-baseline"><span class="text-accent font-bold w-6">4</span><div>Si vous savez énoncer les étapes, <strong>écrivez-les en code</strong>. Gardez le modèle pour ce que vous ne savez pas décrire.</div></div>

<div class="flex gap-4 items-baseline"><span class="text-accent font-bold w-6">5</span><div>Passer à l'agent, c'est troquer le contrôle de l'enchaînement contre <strong>le contrôle des bornes</strong>. Posez les bornes.</div></div>

<div class="flex gap-4 items-baseline"><span class="text-accent font-bold w-6">6</span><div>Données sensibles + contenu non maîtrisé + canal de sortie : <strong>coupez un côté du triangle</strong>.</div></div>

<div class="flex gap-4 items-baseline"><span class="text-accent font-bold w-6">7</span><div>« Ça a l'air bien » n'est pas une évaluation. <strong>Trente cas réels et un critère par cas.</strong></div></div>

</v-clicks>
</div>

---
layout: default
---

# Ce qui aura bougé dans douze mois

<div class="pt-4 space-y-5">

<div class="rail">
<div class="font-semibold">Ce qui va probablement changer</div>
<div class="text-sm opacity-75 pt-1">Le coût par tâche continuera de baisser. Les boucles longues deviendront banales. L'exécution s'éloignera de la machine locale vers des environnements gérés. Les mécanismes d'apprentissage entre sessions vont se stabiliser et sortir de la phase expérimentale.</div>
</div>

<div class="rail">
<div class="font-semibold">Ce qui ne changera pas</div>
<div class="text-sm opacity-75 pt-1">Le modèle restera sans état. Le contexte restera une ressource à budgéter. L'injection de prompt indirecte restera structurelle. La liste d'outils restera la première défense. Et « qui répond de cette décision » restera une question humaine.</div>
</div>

<div class="rail">
<div class="font-semibold">Le bon réflexe</div>
<div class="text-sm opacity-75 pt-1">Quand un nouvel outil sort, cherchez d'abord ses <strong>bornes</strong> : où il s'arrête, ce qu'il a le droit de faire, ce qu'il enregistre. La démonstration est toujours belle ; les bornes disent le reste.</div>
</div>

</div>

---
layout: default
---

# Pour continuer

<div class="pt-4 grid grid-cols-2 gap-10">
<div>

**Documentations de référence**

<div class="text-sm space-y-3 pt-2">
<div>
<div>Les patterns d'orchestration, le contrôle de boucle, la délégation et les approbations d'outils sont documentés en détail — avec du code exécutable — dans la documentation de plusieurs bibliothèques d'agents. Celle du <strong>Vercel AI SDK</strong> (<span class="font-mono text-xs">ai-sdk.dev</span>) est la plus proche du plan suivi aujourd'hui.
</div>
</div>
<div>
Sur la mémoire persistante et les compétences auto-générées, la documentation de <strong>Hermes Agent</strong> (Nous Research) décrit une implémentation complète et ouverte de la boucle d'apprentissage vue au module 4.
</div>
</div>

</div>
<div>

**Ce que je conseille de faire en premier**

<div class="text-sm space-y-2 pt-2">
<div>Prenez <strong>une</strong> tâche de la colonne verte du module 6.</div>
<div>Remplissez la fiche en cinq lignes.</div>
<div>Constituez trente cas réels avant d'écrire une ligne de code.</div>
<div>Construisez le workflow le plus bête qui marche.</div>
<div>Ne passez à l'agent que si un cas réel vous y force.</div>
</div>

<div class="pt-5 text-sm opacity-70">
La grande majorité des projets qui échouent ont commencé à l'étape 4 en sautant les trois premières.
</div>

</div>
</div>

<div class="pt-8 text-xs opacity-50">
Ces documentations sont citées comme sources techniques, pas comme recommandations d'outillage. Les concepts de la journée sont indépendants de toute bibliothèque.
</div>

---
layout: center
class: text-center
---

# Questions

<div class="pt-10 text-base opacity-60">
Et si vous voulez creuser un cas précis, on peut le passer<br>dans la fiche en cinq lignes maintenant.
</div>

<!--
Garder 10 minutes. Si personne ne parle, relancer avec :
"quelqu'un a un cas concret qu'il aimerait qu'on architecture ensemble ?"

C'est le meilleur usage de la fin de journée : appliquer la grille en direct
sur un cas apporté par la salle.
-->
