---
layout: section
module: 0
---

# Ouverture

<div class="opacity-50 pt-2">30 minutes</div>

---
layout: default
---

# Deux mots sur qui vous parle

<div class="pt-4 grid grid-cols-[1fr_auto] gap-10 items-start">
<div class="max-w-[48ch] space-y-4">

Je m'appelle **Clément Janssens**. Je suis **développeur freelance** : je construis des produits pour des startups, la plupart du temps seul dans le code.

Depuis six mois, je construis et j'exploite **une plateforme de déploiement d'agents** — des systèmes qui font tourner une entreprise au quotidien, pas des assistants qui répondent à des questions.

J'écris à peu près tous les jours sur **X**, surtout sur ce que je casse et sur ce que je répare ensuite.

Et j'ai fait mes études ici. C'est la raison pour laquelle je suis dans cette salle plutôt qu'une autre.

<div class="callout-note !mt-6">
Rien de ce qui suit ne vient d'une veille technologique. Ça vient de ce qui a marché en production — et surtout de ce qui a cassé.
</div>

</div>
<div class="pt-1 w-[286px]">
<img src="/x-profil.png" alt="Profil X de Clément Janssens" class="w-full rounded-md border border-hairline">
<div class="text-meta pt-2 leading-snug">Le fil où tout ça se discute<br>au jour le jour</div>
</div>
</div>

<!--
Deux minutes, pas plus. Le but n'est pas le CV, c'est d'établir d'où viennent
les exemples de la journée : de la production, pas d'articles.

La phrase à ne pas rater : « ce qui a cassé ». Elle installe le contrat de ton
du support — on va regarder des échecs toute la journée, y compris les miens.

Ne pas nommer la plateforme. Le cadre est académique, pas commercial.
-->

---
layout: default
---

# Et vous, d'où parlez-vous ?

<div class="pt-6 grid grid-cols-2 gap-10">
<div>

**Trois questions, à main levée**

<div class="pt-3 space-y-4">
<div class="rail">Qui a déjà branché un modèle sur autre chose qu'une fenêtre de chat ?</div>
<div class="rail">Qui a déjà vu un étudiant rendre un travail visiblement produit par un agent ?</div>
<div class="rail">Qui est ici pour <strong>construire</strong>, et qui est ici pour <strong>comprendre</strong> ?</div>
</div>

</div>
<div>

**Pourquoi je demande**

<div class="text-sm opacity-75 pt-3 space-y-3">
<div>La journée a deux moitiés qui se dosent : l'architecture d'un côté, l'usage pédagogique de l'autre.</div>
<div>La répartition de la salle décide de l'endroit où j'appuie aux modules 3 et 6.</div>
<div>Et la deuxième question, c'est déjà le sujet du module 6 — sauf qu'on n'a pas encore le vocabulaire pour en parler correctement.</div>
</div>

</div>
</div>

<div class="pt-10 text-sm opacity-60">
Personne n'a besoin d'avoir écrit une ligne de code pour suivre. Mais si vous êtes venu pour construire, dites-le maintenant : ça change ce que je détaille cet après-midi.
</div>

<!--
Cinq minutes maximum. Main levée pour les deux premières questions.
Laisser deux ou trois personnes développer sur la troisième, pas plus.

Noter au tableau la répartition construire / comprendre : elle sert au module 6.
Si la salle penche nettement « comprendre », alléger le module 3 sur le code
et allonger la partie modes d'échec.
-->

---
layout: center
class: text-center
---

<div class="kicker pb-5">Avant d'ouvrir le capot</div>

# Le mot « IA » recouvre trois choses<br>que cinq ans séparent

<div class="pt-10 text-xl opacity-70 max-w-2xl mx-auto">
Beaucoup de gens dans cette salle ont formé leur intuition<br>sur la version d'il y a deux ans. Elle n'est plus juste.
</div>

<!--
Enchaîner directement sur le tableau suivant, sans commentaire ici.
La slide est là pour marquer un temps d'arrêt : on remet les compteurs à zéro
avant de parler d'agents.

Si quelqu'un lâche « oui enfin, ça reste de l'autocomplétion » — le noter,
et promettre d'y revenir à la slide suivante. Ne pas débattre maintenant.
-->

---
layout: default
---

# Cinq ans, trois machines différentes

|  | ~ 2021 | ~ 2023 | 2026 |
|---|---|---|---|
| **Ce qu'il produit** | la suite probable d'un texte | une réponse, quand on la demande | une **suite d'actions** |
| **L'unité de travail** | une phrase | une tâche de dix minutes | une tâche de plusieurs heures |
| **Qui enchaîne les étapes** | vous, en copiant-collant | vous, en reformulant | **le modèle, tout seul** |
| **Ce qu'il a sous les yeux** | quelques pages | un dossier de documents | un dépôt entier, des écrans, du son |
| **Ce qu'il peut toucher** | rien | rien | **vos fichiers, vos API, votre boîte mail** |

<div class="pt-7 text-sm opacity-60">
Les trois premières lignes sont une progression. Les deux dernières sont une <strong>rupture</strong> : entre « produire du texte » et « avoir un effet sur le monde », il n'y a pas de continuum.
</div>

<div class="pt-7 grid grid-cols-3 gap-7 text-sm">
<div class="card">
<div class="font-semibold pb-1">La marche de 2023</div>
<div class="opacity-70">Le modèle a pu émettre autre chose que du texte : un appel de fonction, structuré, qu'un programme sait exécuter.</div>
</div>
<div class="card">
<div class="font-semibold pb-1">La marche de 2026</div>
<div class="opacity-70">On lui redonne le résultat de cet appel, et il choisit à nouveau. Cette flèche de retour, c'est toute la journée.</div>
</div>
<div class="card">
<div class="font-semibold pb-1">Ce qui n'a pas bougé</div>
<div class="opacity-70">Il ne touche toujours rien lui-même. La dernière ligne dit ce que <em>votre code</em> l'autorise à faire, rien de plus.</div>
</div>
</div>

<!--
Ne pas lire le tableau ligne par ligne, la salle le lit plus vite que moi.
Lire uniquement la dernière ligne à voix haute, en marquant le silence après.

Les dates sont volontairement approximatives — c'est une échelle de temps
vécue, pas une frise historique. Si on me demande une date précise sur une
capacité, répondre que ça dépend du fournisseur et que ça n'est pas le sujet.

Le point de bascule à nommer si la question vient : le moment où un modèle a
pu émettre autre chose que du texte — un appel de fonction structuré. Tout le
reste de la journée découle de ça.
-->

---
layout: default
---

# Ce qui a le plus bougé n'est pas ce qu'on croit

<div class="pt-4 space-y-5">

<v-clicks>

<div class="rail">
<div class="font-semibold">Ce qui progresse le plus lentement : la qualité d'une phrase</div>
<div class="text-sm opacity-75 pt-1">Entre un texte de 2023 et un texte d'aujourd'hui, l'écart se discute. Sur ce terrain-là, le grand saut est derrière nous — et c'est pourtant le seul dont le grand public parle.</div>
</div>

<div class="rail">
<div class="font-semibold">Ce qui a explosé : la longueur de la laisse</div>
<div class="text-sm opacity-75 pt-1">Un aller-retour hier, des centaines d'étapes enchaînées aujourd'hui sans qu'on reprenne la main entre les deux. Ce n'est pas un changement de degré, c'est un changement de nature.</div>
</div>

<div class="rail">
<div class="font-semibold">Ce qui est apparu : la capacité d'agir</div>
<div class="text-sm opacity-75 pt-1">Un modèle ne touche toujours rien lui-même — ça, ce n'est pas près de changer. Mais on lui a donné des mains : du code, écrit par vous, qui exécute ce qu'il demande.</div>
</div>

</v-clicks>

</div>

<div v-click class="pt-8 callout-note">
Tant qu'un modèle rédige un mail, c'est <strong>vous</strong> qui décidez de la prochaine action. Tout ce qui a changé tient dans le déplacement de ce curseur — et c'est exactement la question qu'on va se poser toute la journée.
</div>

<!--
Le point 1 est celui qui désamorce. Le public s'attend à un discours
d'émerveillement sur la qualité de rédaction : on dit l'inverse, ça achète
la crédibilité pour les deux points suivants.

Le point 3 est le contresens numéro un du grand public. Y revenir au module 1,
ligne « Outil » du tableau de vocabulaire.

Le callout renvoie à la slide « Qu'est-ce qui décide de la prochaine action ? ».
Le dire explicitement : « on vient de la voir il y a trois minutes, on va y
revenir six fois ».
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
