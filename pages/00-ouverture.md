---
layout: section
module: 0
---

# Ouverture

<!--
**Transition :** ouvrir la journée par les personnes présentes, puis montrer trois agents concrets avant d’expliquer leur mécanique.
-->
---
layout: default
---

# Deux mots sur qui vous parle

<div class="pt-6 grid grid-cols-[1fr_auto] gap-10 items-start">
<div class="max-w-[36ch]">

<div class="text-3xl pb-7">Clément Janssens</div>

<div class="space-y-3">
<v-clicks>
<div class="rail">Ancien étudiant d'ici</div>
<div class="rail">Développeur freelance, pour des startups</div>
<div class="rail">Six mois à exploiter une plateforme d'agents</div>
<div class="rail">Sur X à peu près tous les jours</div>
</v-clicks>
</div>

</div>
<div class="pt-2 w-[380px]">
<img src="/x-profil.png" alt="Profil X de Clément Janssens" class="w-full rounded-md border border-hairline">
</div>
</div>

<!--
**Idée clé :** je parle depuis la pratique et ses échecs, pas depuis une veille technologique.

- **Dire :** ancien étudiant ici, freelance qui construit seul, puis opérateur d’agents en production.
- **Préciser :** sur X, je raconte surtout ce que je casse et ce que je répare.
- **Éviter :** nommer la plateforme maintenant. La déclaration d’intérêt arrive sur le mur de marques.
- **Transition :** « Rien de ce qui suit ne vient d’une veille. Ça vient de ce qui a marché, et surtout de ce qui a cassé. »
-->

---
layout: default
---

# Et vous, d'où parlez-vous ?

<div class="pt-8 space-y-5 text-[1.15rem] max-w-[62ch]">

<v-clicks>

<div class="rail">Qui a déjà branché un modèle sur autre chose qu'un chat ?</div>
<div class="rail">Qui a déjà vu un travail visiblement produit par un agent ?</div>

</v-clicks>

</div>

<!--
**Idée clé :** mesurer la salle pour doser la suite.

- **Demander :** mains levées sur les deux questions, puis « qui est ici pour construire, qui est ici pour comprendre ? »
- **Limiter :** cinq minutes et deux ou trois prises de parole.
- **Noter :** la répartition construire/comprendre au tableau. Elle servira au module 6.
- **Adapter :** si « comprendre » domine, alléger le code du module 3 et développer les modes d’échec.
-->

---
layout: default
---

# Ces noms vous disent quelque chose ?

<div class="brand-wall is-tight pt-1">

<BrandRow v-click label="Entreprises" marks="*openai OpenAI, *anthropic Anthropic, google Google, mistralai Mistral AI" />

<BrandRow v-click label="Produits" marks="*openai ChatGPT, *claude Claude, googlegemini Gemini, githubcopilot GitHub Copilot" />

<BrandRow v-click label="Plateformes sans code" marks="n8n n8n, zapier Zapier, make Make, dify Dify" />

<BrandRow v-click label="Systèmes d'agents" marks="hermes.png Hermes, openclaw OpenClaw, *rerun rerun.build, crewai CrewAI" />

<BrandRow v-click label="Bibliothèques" marks="langchain LangChain, *aisdk AI SDK, tanstack TanStack AI, mastra Mastra" />

</div>

<div v-click class="pt-2 text-xs text-accent">En violet, ce que j'utilise.</div>

<!--
**Idée clé :** ce mur mesure la familiarité de la salle. Il ne classe aucun outil.

- **Dire avant le premier clic :** « Ce mur n’est pas un comparatif. Je veux seulement savoir où vous en êtes. »
- **Faire :** une rangée par clic et une main levée par rangée. Ne commenter que les familles.
- **Expliquer :** entreprise, produit et modèle sont trois niveaux différents. La rangée 5 mesure l’aisance avec le code.
- **Adapter :** rangée 5 vide, alléger le code. Rangée 3 connue, relier au module 2.

**Si question :** CrewAI est une bibliothèque, contrairement aux agents continus voisins. Le violet signale les outils que j’utilise, pas une recommandation.
-->

---
layout: center
class: text-center
---

<div class="kicker pb-5">Trois cas d'usage qui tiennent la route</div>

# Trois agents.<br>Personne entre les étapes.

<!--
**Idée clé :** observer la chaîne d’actions et l’absence d’humain entre deux étapes.

- **Dire exactement :** « Je vais dérouler trois chaînes, étape par étape. Vous les lirez plus vite que je ne les dis. Ce qui compte, c’est qu’il n’y a personne entre deux. »
- **Montrer :** une étape par clic. Ne jamais commenter une étape avant son affichage.
- **Préciser :** ce sont des cas d’usage, pas des démonstrations en direct.
- **Éviter :** dire « le mien » pour un agent que je n’exploite pas réellement.
-->

---
layout: default
---

# Un agent qui tient le référencement d'un site

<div class="pt-3 grid grid-cols-[1.15fr_1fr] gap-12">
<div>

<div class="eyebrow pb-4">Il démarre tout seul, tous les lundis à 6h</div>

<div class="space-y-[9px] text-[1.05rem]">
<v-clicks>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">01</span><span>Relève les positions et le trafic</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">02</span><span>Repère les pages qui décrochent</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">03</span><span>Cherche les requêtes à prendre</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">04</span><span>Réécrit les pages, corrige les liens</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">05</span><span>Rédige ce qui manque</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">06</span><span>Compare avant / après</span></div>
</v-clicks>
</div>

</div>
<div>

<div class="eyebrow pb-3">Les outils qu'il pilote</div>
<img src="/illustrations/agent-seo.png" alt="Plateau isométrique : le bloc « Référencement » relié aux outils qu'il actionne" class="block w-full rounded-md border border-hairline">

</div>
</div>

<div class="grid grid-cols-2 gap-x-12 pt-7 text-[1.05rem]">
<v-clicks>
<div class="rail"><strong>Ce qui reste à vous</strong> — la ligne éditoriale, et ce qu'on ne dira pas</div>
<div class="rail-bad"><strong>Ce qui coince</strong> — publier en volume sans valeur, c'est du spam</div>
</v-clicks>
</div>

<div v-click class="pt-6 text-base">
↻ Le lundi suivant, il repart de <strong>ses propres chiffres</strong>.
</div>

<SourceNote :items="[
  ['Google, « Spam policies for Google web search » — abus de contenu à grande échelle', 'developers.google.com/search/docs/essentials/spam-policies'],
]" />

<!--
**Idée clé :** l’agent observe, agit, puis mesure seul l’effet de son action.

- **Montrer :** six clics en 90 secondes, une phrase par étape. Le plateau sert seulement de carte.
- **Dire au dernier clic :** chaque étape est banale. Leur enchaînement sans humain fait la différence.
- **Insister :** aucun chiffre de performance. Search Console fournit positions, impressions et clics.
- **Transition :** l’étape 06 introduit la mémoire entre deux exécutions.

**Si question :** Google qualifie de « scaled content abuse » la production massive de pages sans valeur ajoutée, y compris avec l’IA générative.
-->

---
layout: default
---

# Un agent qui pilote un budget publicitaire

<div class="pt-3 grid grid-cols-[1.15fr_1fr] gap-12">
<div>

<div class="eyebrow pb-4">Il se réveille toutes les heures</div>

<div class="space-y-[9px] text-[1.05rem]">
<v-clicks>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">01</span><span>Regarde ce que diffusent les concurrents</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">02</span><span>Écrit les accroches, génère les visuels</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">03</span><span>Publie, et répartit le budget</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">04</span><span>Mesure le coût par résultat</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">05</span><span>Coupe ce qui ne convertit pas</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">06</span><span>Duplique ce qui marche, teste une variante</span></div>
</v-clicks>
</div>

</div>
<div>

<div class="eyebrow pb-3">Les outils qu'il pilote</div>
<img src="/illustrations/agent-ads.png" alt="Plateau isométrique : le bloc « Budget pub » relié aux outils qu'il actionne" class="block w-full rounded-md border border-hairline">

</div>
</div>

<div class="grid grid-cols-2 gap-x-12 pt-7 text-[1.05rem]">
<v-clicks>
<div class="rail"><strong>Ce qui reste à vous</strong> — le plafond de dépense, et l'image</div>
<div class="rail-bad"><strong>Ce qui coince</strong> — l'erreur ne se voit pas, elle se facture</div>
</v-clicks>
</div>

<div v-click class="pt-6 text-base">
↻ À partir de l'étape 03, chaque décision engage <strong>de l'argent.</strong>
</div>

<!--
**Idée clé :** une décision automatique peut engager ou couper de l’argent.

- **Montrer :** six clics en 90 secondes. Ralentir sur 03 et 05.
- **Insister :** une erreur de texte se voit, une erreur de budget se facture toute la nuit. Il faut un plafond et un arrêt automatique.
- **Éviter :** le débat sur la publicité. Revenir à la forme d’architecture.

**Si question :** l’API Marketing de Meta expose `daily_budget` et `status`. Sa bibliothèque publique est générale, mais son API officielle de recherche concurrentielle ne couvre que les publicités politiques et de société.
-->

---
layout: default
---

# Un agent qui remplit un agenda

<div class="pt-3 grid grid-cols-[1.15fr_1fr] gap-12">
<div>

<div class="eyebrow pb-4">Il tourne en continu, un profil après l'autre</div>

<div class="space-y-[9px] text-[1.05rem]">
<v-clicks>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">01</span><span>Cherche des profils proches des clients</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">02</span><span>Note chacun, écarte la plupart</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">03</span><span>Fabrique une ressource qui a de la valeur</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">04</span><span>Écrit, relance, propose un créneau</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">05</span><span>Prépare le briefing avant le rendez-vous</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">06</span><span>Résume après, déclenche la suite</span></div>
</v-clicks>
</div>

</div>
<div>

<div class="eyebrow pb-3">Les outils qu'il pilote</div>
<img src="/illustrations/agent-agenda.png" alt="Plateau isométrique : le bloc « Agenda » relié aux outils qu'il actionne" class="block w-full rounded-md border border-hairline">

</div>
</div>

<div class="grid grid-cols-2 gap-x-12 pt-7 text-[1.05rem]">
<v-clicks>
<div class="rail"><strong>Ce qui reste à vous</strong> — le rendez-vous, et ce qu'on y promet</div>
<div class="rail-bad"><strong>Ce qui coince</strong> — écrire à prenom.nom@ suppose un consentement</div>
</v-clicks>
</div>

<div v-click class="pt-6 text-base">
↻ Le seul moment humain de la chaîne, <strong>c'est le rendez-vous</strong>.
</div>

<SourceNote :items="[
  ['SPF Économie, « Le spam en 23 questions et réponses »', 'economie.fgov.be/fr/themes/line/commerce-electronique/spam'],
]" />

<!--
**Idée clé :** l’agent parle à des humains en mon nom et poursuit la chaîne jusqu’après le rendez-vous.

- **Montrer :** six clics en 90 secondes. Marquer une pause après 04.
- **Insister :** l’étape 03 doit apporter une valeur réelle au destinataire. Les étapes 05 et 06 prolongent la boucle.
- **Dire :** « Je viens de vous afficher trois fois la même image. »
- **Éviter :** présenter l’accès aux profils comme simple ou propre.

**Si question :** en Belgique, le consentement préalable reste requis pour une adresse nominative. L’exception B2B vise les adresses impersonnelles comme `info@`.
-->

---
layout: default
---

# Trois métiers, une seule forme

<div class="pt-3 grid grid-cols-[1.15fr_1fr] gap-12">
<div>

<div class="eyebrow pb-4">Un déclencheur — une heure, un événement, un message</div>

<div class="space-y-[9px] text-[1.05rem]">
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">01</span><span>Observe l'état des choses</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">02</span><span>Décide de la prochaine action</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">03</span><span>Agit, avec de vrais outils</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">04</span><span>Mesure l'effet</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">05</span><span>Écrit ce qu'il a appris</span></div>
<div class="flex gap-4"><span class="text-meta mono-value w-5 pt-1">↻</span><span>Recommence, en repartant de ses notes</span></div>
</div>

</div>
<div class="space-y-5 pt-11">

<v-clicks>

<div class="rail"><strong>Ce qui change</strong> — le métier, et les outils qu'on lui branche</div>
<div class="rail"><strong>Ce qui ne change pas</strong> — le déclencheur, la boucle, les notes</div>

</v-clicks>

</div>
</div>

<div v-click class="mt-8 callout-note">
Dans les trois, personne n'a écrit l'enchaînement. <strong>C'est le modèle qui a décidé de la suite.</strong>
</div>

<div v-click class="pt-4 text-meta">
La même forme tourne ailleurs : support, veille, reporting, recrutement, flux de demandes entrantes.
</div>

<!--
**Idée clé :** les trois métiers reposent sur la même boucle.

- **Montrer :** « Regardez, c’est la colonne que vous venez de lire trois fois. »
- **Dire :** déclencheur, décision, action et notes forment la boucle. Les bornes manquent encore.
- **Insister :** le modèle décide de la prochaine action. Le code l’exécute.
- **Transition :** « Voilà la forme. Pourquoi n’existait-elle pas il y a trois ans ? »
-->

---
layout: center
class: text-center
---

<div class="kicker pb-5">Avant d'ouvrir le capot</div>

# Le mot « IA » recouvre trois machines<br>que quatre ans séparent

<!--
**Idée clé :** l’intuition construite avec ChatGPT en 2022 ne suffit plus pour comprendre les agents actuels.

- **Dire :** « On remet les compteurs à zéro. »
- **Faire :** laisser un court silence, puis passer directement au tableau.
- **Éviter :** débattre maintenant de « l’autocomplétion ». Promettre d’y revenir après le tableau.
-->

---
layout: default
---

# Quatre ans, trois machines différentes

<table class="w-full">
<colgroup><col class="w-[22%]"><col class="w-[26%]"><col class="w-[26%]"><col class="w-[26%]"></colgroup>
<thead><tr>
<th></th>
<th v-click="1">2022 · il répond</th>
<th v-click="2">2023–24 · il agit un peu</th>
<th v-click="3">2025–26 · il travaille</th>
</tr></thead>
<tbody>
<tr>
<td><strong>On lui donne</strong></td>
<td v-click="1">une question</td>
<td v-click="2">une question</td>
<td v-click="3"><strong>une tâche</strong></td>
</tr>
<tr>
<td><strong>Il rend</strong></td>
<td v-click="1">du texte</td>
<td v-click="2">du texte, et un geste</td>
<td v-click="3"><strong>une suite d'actions</strong></td>
</tr>
<tr>
<td><strong>Il peut toucher</strong></td>
<td v-click="1">rien</td>
<td v-click="2">ce qu'un connecteur expose</td>
<td v-click="3"><strong>vos fichiers, vos API</strong></td>
</tr>
<tr>
<td><strong>Qui enchaîne</strong></td>
<td v-click="1">vous</td>
<td v-click="2">vous</td>
<td v-click="3"><strong>le modèle</strong></td>
</tr>
<tr>
<td><strong>Qui le réveille</strong></td>
<td v-click="1">vous</td>
<td v-click="2">vous</td>
<td v-click="3"><strong>un événement</strong></td>
</tr>
<tr>
<td><strong>Entre deux fois</strong></td>
<td v-click="1">il oublie tout</td>
<td v-click="2">il oublie tout</td>
<td v-click="3"><strong>il relit ses notes</strong></td>
</tr>
</tbody>
</table>

<div v-click="4" class="pt-8 text-base">
Les deux premières colonnes, c'est la même machine avec un bras plus long.<br>
La troisième <strong>ne vous attend plus</strong>.
</div>

<!--
**Idée clé :** texte, appel d’outil et agent autonome sont trois machines distinctes.

- **Montrer :** une colonne par clic, après l’explication de la précédente.
- **Dire :** 2022 produit du texte. 2023-2024 ajoute un geste exécutable. Aujourd’hui, la boucle enchaîne des actions, démarre sur événement et relit ses notes.
- **Insister :** « Il relit ses notes », jamais « il s’améliore tout seul ». Le code porte toujours le pouvoir d’agir.

**Si question :** ChatGPT date du 30 novembre 2022, les plugins de mars 2023 et l’appel de fonction de juin 2023.
-->

---
layout: default
---

# Où le saut a vraiment eu lieu

<div class="pt-8 space-y-6 text-[1.2rem]">

<v-clicks>

<div class="rail">La qualité d'une phrase — <strong>le grand saut est derrière nous</strong></div>

<div class="rail">Le nombre d'étapes sans vous — <strong>de une à des centaines</strong></div>

<div class="rail">Le pouvoir d'agir — <strong>nouveau, et il vient du code</strong></div>

</v-clicks>

</div>

<div v-click class="mt-10 callout-note">
Un modèle qui rédige un mail vous laisse décider de la suite.<br>
Un <strong>agent</strong> décide à votre place.
</div>

<!--
**Idée clé :** le saut concerne surtout la longueur des chaînes et leur pouvoir d’agir.

- **Dire :** le progrès sur la qualité d’une phrase se discute. Le nombre d’étapes sans humain change la nature du problème.
- **Insister :** le modèle ne touche rien directement. Le code exécute ses demandes.
- **Demander :** « Qui décide de la prochaine action : votre code à l’avance, ou le modèle pendant l’exécution ? »
- **Transition :** annoncer que cette question reviendra toute la journée.
-->

---
layout: statement
class: text-center
---

# Démonstration

<div class="text-xl opacity-60 pt-6">
Une tâche. Un agent. Quatre minutes.
</div>

<div class="pt-14 text-sm opacity-50">
Ne regardez pas le résultat. Regardez ce qui défile.
</div>

<!--
**Objectif :** regarder les décisions de l’agent, pas la qualité de sa réponse.

1. **Dire :** « Ne regardez pas le résultat. Regardez ce qui défile. »
2. **Taper :** « Trouve-moi les dix cabinets comptables de Namur : nom, adresse, téléphone, site. Et dis-moi ceux que tu n’as pas pu vérifier. »
3. **Commenter :** recherche, ouverture d’un site, abandon d’une piste, puis arrêt.
4. **Noter :** nombre d’étapes et coût réel.

**Débrief :** dix résultats douteux montrent qu’il complète la consigne. Moins de dix montre qu’il sait parfois s’arrêter. Les deux issues conviennent.

**Transition :** « Vous referez ce geste à 11h, à 13h et à 14h45. »

**Si problème :** utiliser les captures de secours.
-->

---
layout: default
---

# Ce que vous venez de voir

<div class="pt-6 space-y-4 text-[1.1rem]">

<v-clicks>

- Il n'a pas répondu. Il a décidé **quoi faire ensuite**, dix-sept fois.
- Entre chaque décision, du **code non-IA** s'est exécuté.
- Personne n'a écrit l'enchaînement. **Il a été improvisé.**
- Il s'est trompé, puis corrigé. C'est le mécanisme, pas le bug.

</v-clicks>

</div>

<div v-click class="mt-8 callout-warn">
Un orchestrateur IA : <strong>une boucle qui laisse un modèle choisir la prochaine action</strong>, et du code autour pour que ces actions aient un effet.
</div>

<!--
**Idée clé :** un agent prend plusieurs décisions, puis du code ordinaire agit pour lui.

- **Dire :** reprendre le nombre réel d’étapes, le coût et la durée de la démonstration.
- **Montrer :** personne n’a codé l’ordre recherche, ouverture, vérification. Le modèle l’a choisi.
- **Insister :** l’erreur puis la correction font partie de la boucle.
- **Transition :** outils au module 1, enchaînement au module 2, dérapages au module 3, coût au module 5.

**Si aucune erreur visible :** utiliser la page morte abandonnée ou un résultat ajouté seulement pour atteindre dix.
-->
