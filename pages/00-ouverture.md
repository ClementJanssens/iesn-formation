---
layout: section
module: 0
---

# Ouverture

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
Deux minutes, montre en main. Juste le point d'où je parle.

Ligne 1 — l'école : j'ai été assis à votre place, dans ces bâtiments. C'est la
raison pour laquelle je suis dans cette salle plutôt qu'une autre. Le dire en
premier, simplement, ça détend — et ça vaut mieux que n'importe quel CV.

Ligne 2 — freelance : je construis des produits pour des startups, la plupart
du temps seul dans le code. Donc je vis avec ce que je déploie.

Ligne 3 — la plateforme : des agents qui font tourner une entreprise au quotidien,
pas des assistants qui répondent à des questions. Ne pas la nommer ICI — le nom
tombe deux slides plus loin, sur le mur de marques, et il y tombe comme une
déclaration d'intérêt. Ici, on reste sur ce que je fais, pas sur ce que je vends.

Ligne 4 — X : j'y écris surtout ce que je casse, et ce que je répare ensuite.

LA phrase à ne pas rater, à dire en sortant de la slide :
« rien de ce qui suit ne vient d'une veille technologique. Ça vient de ce qui a
marché en production — et surtout de ce qui a cassé. »
Elle installe le contrat de ton : on va regarder des échecs toute la journée,
y compris les miens.
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
Cinq minutes maximum. Main levée sur les deux questions affichées, personne ne
développe. Puis, sans slide : « qui est ici pour construire, qui est ici pour
comprendre ? » Là, laisser deux ou trois personnes parler, pas plus.

Pourquoi je pose ces questions — le dire à voix haute, ça justifie l'exercice :
— la journée a deux moitiés qui se dosent, l'architecture d'un côté,
  l'usage pédagogique de l'autre ;
— la répartition de la salle décide de l'endroit où j'appuie aux modules 3 et 6 ;
— la deuxième question, c'est déjà le sujet du module 6, sauf qu'on n'a pas
  encore le vocabulaire pour en parler correctement. Le dire, et couper court
  si le débat démarre maintenant.

Noter au tableau la répartition construire / comprendre. Elle sert au module 6.
Si la salle penche nettement « comprendre » : alléger le code du module 3,
allonger la partie modes d'échec.

Ajouter : « si vous êtes venu pour construire, dites-le maintenant,
ça change ce que je détaille cet après-midi ».
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
Quatre minutes, pas plus. C'est un thermomètre, pas un tour d'horizon.

Le dire AVANT d'afficher la première rangée, sinon la salle lit un palmarès :
« ce mur n'est pas un comparatif, je n'en recommande aucun, et il en manque
cinquante. Je veux juste savoir où vous en êtes. »

Une rangée par clic, une main levée par rangée, et JE NE COMMENTE PAS les
outils. L'endroit où les mains cessent de se lever est la seule information
que je cherche.

Rangée 1 — les entreprises qui entraînent les modèles. Elle ne mesure rien,
  toutes les mains se lèvent : elle est là pour poser un mot sur chaque étage,
  parce que la salle mélange les trois en permanence. Le dire en une phrase :
  « OpenAI est une entreprise, ChatGPT est son produit, GPT-5.6 est le modèle
  qui tourne dedans — trois choses différentes, et on va passer la journée à
  les distinguer. » (Les noms de modèles se détaillent au module 1, pas ici.) Anthropic / Claude et Google / Gemini répètent le même
  escalier ; Mistral est là parce que c'est le laboratoire européen, et que
  la question de l'hébergement des données tombera de toute façon au module 5.
  Le glyphe d'OpenAI est le même sur les deux premières rangées : c'est vrai,
  la marque ne distingue pas l'entreprise du produit. Si quelqu'un le relève,
  lui donner raison — c'est exactement la confusion que la slide règle.
Rangée 2 — des produits finis, grand public. Presque tout le monde lève la main.
Rangée 3 — des plateformes où l'on dessine un enchaînement à la souris. Public
  mixte : souvent les gens qui gèrent des inscriptions, des formulaires,
  des envois de mails.
Rangée 4 — des agents qui tournent en continu, avec une mémoire qui persiste
  entre les sessions, et qu'on joint depuis une messagerie plutôt que depuis
  un site. Hermes est celui de Nous Research, open source, sorti en février
  2026 ; OpenClaw est l'agent personnel auto-hébergé de Peter Steinberger,
  rebaptisé depuis Clawdbot / Moltbot en janvier 2026.
  ATTENTION, à assumer si on me pose la question : CrewAI n'est pas de la
  même nature que les trois autres, c'est une bibliothèque Python qu'on
  importe, pas un agent qui tourne. Elle est ici parce qu'elle compose
  elle aussi une équipe d'agents autonomes. Si quelqu'un tique, lui donner
  raison — c'est le genre de précision qu'un public de profs relève.
Rangée 5 — de la plomberie, donc du code. C'est là que la salle se sépare
  en deux, et c'est exactement ce que j'ai besoin de savoir.

Les tuiles violettes : OpenAI et ChatGPT, Anthropic et Claude, rerun.build,
AI SDK. Le dire d'une phrase, sans détailler et sans y revenir — « le violet
marque ce que j'utilise tous les jours, je vous le déclare pour que vous
sachiez d'où je parle, pas pour vous le vendre. » C'est une déclaration
d'intérêt, au même titre que la slide « deux mots sur qui vous parle ».
Que les deux premières rangées s'allument surtout du même côté est en soi une
information à assumer : je ne suis pas neutre, et c'est pour ça que je le dis
avant de commenter quoi que ce soit. Si quelqu'un demande ce qu'est
rerun.build : répondre en une phrase, et enchaîner. Le détail se donne hors
micro, à la pause.

Ce que je fais de la salle, à décider en direct :
— rangée 5 quasi vide → module 3 allégé côté code, appuyer sur les modes d'échec ;
— rangée 5 bien fournie → garder le code, et pousser plus loin le module 5 ;
— rangée 3 très fournie → excellente accroche pour le module 2, ces gens ont
  déjà construit des workflows sans le savoir. Le leur dire à ce moment-là,
  ça vaut tous les schémas.

Si quelqu'un lance un débat outil contre outil : couper. « On regarde des
formes aujourd'hui, pas des produits. Celui qui gagne cette année aura changé
de nom l'an prochain, la forme, non. »

Si quelqu'un cite un nom absent du mur : le noter au tableau, le remercier,
et le réutiliser comme exemple au module 2. C'est le meilleur cadeau que
la salle puisse faire à cette slide.
-->

---
layout: center
class: text-center
---

<div class="kicker pb-5">Trois cas d'usage qui tiennent la route</div>

# Trois agents.<br>Personne entre les étapes.

<!--
Trente secondes. La slide sert à donner la consigne de lecture AVANT les trois
cas, sinon la salle lit trois listes de tâches et ne voit pas ce qui compte.

LA CONSIGNE, à dire mot pour mot : « je vais dérouler trois chaînes, étape
par étape. Vous les lirez plus vite que je ne les dis. Ce qui compte, c'est
qu'il n'y a personne entre deux. »

Les trois cas se déroulent au clic, une étape à la fois. C'est ce qui rend le
bloc supportable : la salle ne lit pas une liste, elle regarde une chaîne
s'allonger. Le corollaire est une discipline — ne jamais parler d'une étape
avant de l'avoir affichée.

Pourquoi ce bloc arrive ICI et pas plus tôt : on vient de mesurer la salle,
et ces trois cas sont ce que les outils de la rangée 3 font vraiment quand
on les laisse tourner. Le lien est à faire à voix haute, il vaut un schéma.

BUDGET DE TEMPS — le bloc coûte cinq à six minutes, que le programme ne
prévoit pas. Les reprendre sur le tour de salle : deux questions à main levée,
pas de tour de table nominatif. Si la salle est petite et bavarde, sauter la
slide de l'agenda — les deux premiers cas suffisent à poser la forme.

HONNÊTETÉ, à trancher avant de monter sur scène : ces trois cas sont des cas
d'usage, pas une démo en direct — ne jamais laisser croire que quelque chose
tourne à cette seconde dans la salle. Et ne dire « le mien » que des agents
que j'exploite vraiment ; pour les autres, « ce que je vois tourner ailleurs ».
Un public de profs sent la différence, et je perds la journée entière si on
me prend en flagrant délit d'exagération.
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
Premier des trois cas. La consigne de lecture a été donnée à la slide
précédente : on ne lit pas les étapes, on regarde qu'il n'y a personne entre
elles. Ne pas la redonner, l'appliquer.

Quatre-vingt-dix secondes, SIX CLICS. Une étape par clic, une phrase par étape,
jamais deux. Le rythme EST la slide : la chaîne s'allonge pendant que je parle,
et c'est sa longueur qui fait l'effet, pas le contenu des étapes. Ne pas prendre
d'avance sur le clic — si je commente 04 alors que 03 est à l'écran, l'effet
tombe et il ne revient pas.

La phrase à dire sur le dernier clic : aucune de ces six étapes n'est
impressionnante prise seule. Ce qui l'est, c'est qu'il n'y a personne
entre elles.

LE PLATEAU, À DROITE : il est là dès l'affichage, avant le premier clic, et il
sert de carte pendant que la colonne se déroule. Un bloc au centre, les outils
autour, un fil par outil — il n'y a rien d'autre à en dire. Les marques qui y
figurent sont des exemples, pas des recommandations : si le débat outil contre
outil démarre, répondre « n'importe quel outil qui expose une API fait
l'affaire » et revenir à la colonne. Le même plateau revient sur les deux cas
suivants avec d'autres outils — c'est déjà l'argument de la slide de synthèse,
sauf qu'on ne le dit pas encore.

AUCUN CHIFFRE DE RÉSULTAT ici : ni pourcentage de trafic, ni « ×3 ». Je décris
une architecture, pas une performance. Si on m'en demande un, je ne le donne
que si je peux le montrer dans la minute.

D'où viennent les chiffres de l'étape 01 — d'une API, pas d'une intuition :
Search Console expose les positions, les impressions et les clics requête par
requête. Le dire coupe court au « il invente ses données ».

L'étape 06 est celle qui sépare un agent d'un générateur de texte : il mesure
ce que sa modification de la semaine dernière a donné. → module 4, la mémoire.

CE QUI COINCE, à assumer sans le contourner : Google range explicitement dans
ses règles anti-spam le fait de générer beaucoup de pages — « notamment avec
des outils d'IA générative » — sans valeur ajoutée pour le lecteur. Le terme
exact est « scaled content abuse ». Ce que Google vise, c'est le volume sans
valeur ajoutée, quel que soit l'outil qui l'a produit. Et ça pose la bonne
question pour toute la journée : qu'est-ce qui reste de vous là-dedans ?
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
Quatre-vingt-dix secondes, six clics, même rythme que la slide précédente.
Aller vite sur 01, 02, 04, 06 et RALENTIR sur 03 et 05 : ce sont les deux
étapes où la salle réalise ce qui se passe.

Le point est aux étapes 03 et 05 : il engage de l'argent, et il en coupe, sans
repasser par moi. Écrire une accroche, n'importe quel modèle sait le faire.

LE PLATEAU : deuxième fois la même image, le bloc a changé de nom et les outils
avec. Ne pas le commenter, c'est la troisième occurrence qui portera l'argument.

CE QUE PERMET VRAIMENT L'API, si on me pousse : l'API Marketing de Meta expose
le budget quotidien d'un ensemble de publicités (champ `daily_budget`) et son
état (champ `status`, valeurs ACTIVE / PAUSED, entre autres). Changer un budget
ou mettre une publicité en pause, c'est un appel HTTP. Rien de spéculatif.
Source : developers.facebook.com/docs/marketing-api/reference/ad-campaign/

LA NUANCE SUR L'ÉTAPE 01, à donner si la question vient — et à ne pas cacher :
la bibliothèque publicitaire de Meta est publique et montre les publicités
actives de n'importe quel annonceur, mais son API officielle, elle, ne couvre
que les publicités politiques et de société. Un agent qui va regarder la
concurrence ne passe donc pas par la porte officielle. C'est une zone grise,
je ne la présente pas comme propre.

CE QUI COINCE, développé : une erreur d'agent sur du texte se voit. Une erreur
d'agent sur un budget se facture, et elle se facture toute la nuit. C'est le
premier argument de la journée en faveur des bornes dures — plafond de dépense,
montant maximal par décision, arrêt automatique. → module 3 pour les conditions
d'arrêt, module 5 pour le contrôle humain.

NE PAS ouvrir le débat publicité / éthique ici, il coûte dix minutes. S'il
démarre : « on regarde une forme, pas un métier — et cette forme, on la
retrouve sur des sujets qui vous parleront davantage cet après-midi. »
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
Quatre-vingt-dix secondes, six clics. C'est la chaîne la plus longue des trois,
et la seule où l'agent parle à des humains en mon nom. Marquer un temps après
le clic 04 : c'est là que quelqu'un dans la salle réalise qu'il a peut-être
déjà reçu un de ces messages.

Ce qu'il faut faire remarquer, c'est l'étape 03 : il ne se contente pas d'écrire
un message, il fabrique d'abord quelque chose qui a de la valeur pour la personne
d'en face. C'est ce qui sépare un agent d'un envoyeur de spam — et ça ne suffit
pas à le rendre légal, voir plus bas.

Les étapes 05 et 06 sont celles qui font lever les sourcils : préparer le
briefing avant un rendez-vous, le résumer après, et déclencher ce qui suit.
C'est exactement la mécanique de l'agent SEO — observer, décider, agir, mesurer —
sur une matière qui n'a rien à voir. C'est le sujet de la slide suivante.

LE PLATEAU : troisième fois le même dessin, troisième jeu d'outils. C'est ici
qu'on le fait remarquer, d'une phrase et en le montrant — « je viens de vous
afficher trois fois la même image » — parce que la slide suivante se contente
d'en retirer les noms.

CE QUI COINCE, et c'est du droit, pas de l'opinion : en Belgique, la publicité
par courrier électronique suppose le consentement PRÉALABLE du destinataire
(livre XII du Code de droit économique, arrêté royal du 4 avril 2003).
L'exception B2B est bien plus étroite qu'on ne le croit : elle couvre les
adresses impersonnelles d'une personne morale — info@, contact@, sales@ — et
PAS les adresses nominatives du type prenom.nom@entreprise.be, qui restent des
adresses personnelles même quand elles ne servent qu'à un usage professionnel.
Le SPF Économie l'écrit noir sur blanc dans « Le spam en 23 questions et
réponses ». À ajouter, parce que c'est le vrai enseignement : un agent qui
prospecte met l'illégalité à un prompt de distance, et c'est la personne qui
l'a déployé qui répond, pas l'agent.

Si on me demande où il trouve les profils de l'étape 01 : répondre honnêtement
que l'accès aux données est le vrai sujet, que les plateformes l'encadrent par
leurs conditions d'utilisation, et que je ne présente pas comme propre ce qui
ne l'est pas. → module 5.
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
Trente secondes, pas plus. C'est la slide qui transforme trois anecdotes en
programme de journée.

Le geste : c'est la MÊME slide que les trois précédentes, avec les mots du
métier enlevés. Colonne de gauche identique, même numérotation, même ligne de
boucle en bas. Le dire en le montrant — « regardez, c'est la colonne que vous
venez de lire trois fois » — et ne rien développer de plus.

Elle est la seule du bloc à s'afficher d'un coup, et c'est volontaire : la
salle a déjà lu cette colonne trois fois au clic, la dérouler une quatrième
fois tuerait l'argument. Ce qui se clique ici, ce sont les deux rails et la
chute.

Ce que la liste installe, à annoncer comme le plan de la journée :
— le déclencheur : un agent ne démarre pas forcément parce qu'on lui parle → module 1 ;
— la décision : c'est le fil rouge qu'on vient de poser il y a deux minutes,
  et la réponse ici est « le modèle » → toute la journée ;
— l'action : elle passe par du code ordinaire, écrit par un humain → module 1 ;
— les notes : ce qui survit d'une exécution à l'autre → module 4 ;
— ce qui N'EST PAS dans la liste : les bornes. C'est justement pour ça qu'on
  fait la journée → module 3.

Le callout rebranche explicitement sur « Qu'est-ce qui décide de la prochaine
action ? ». Première des six fois où on y revient.

La dernière ligne est là pour que personne ne reparte avec l'idée que ces
systèmes sont réservés au marketing. Ne pas la développer : elle est reprise
au module 6, et « flux de demandes entrantes » y devient un cas complet.

TRANSITION à dire en sortant : « voilà la forme. Maintenant, pourquoi est-ce
que ça n'existait pas il y a trois ans ? » — et on enchaîne sur les trois
machines. Le bloc des cas a servi à donner envie ; les deux slides qui suivent
remettent les compteurs à zéro.
-->

---
layout: center
class: text-center
---

<div class="kicker pb-5">Avant d'ouvrir le capot</div>

# Le mot « IA » recouvre trois machines<br>que quatre ans séparent

<!--
Enchaîner directement sur le tableau suivant. La slide est là pour marquer
un temps d'arrêt, pas pour être commentée.

La phrase à dire pendant le silence : presque tout le monde ici a formé son
intuition sur la première de ces trois machines — celle de fin 2022, celle
à qui on pose une question. Elle n'a plus grand-chose à voir avec celle
dont on va parler aujourd'hui. On remet les compteurs à zéro.

Si quelqu'un lâche « oui enfin, ça reste de l'autocomplétion » : le noter,
promettre d'y revenir dans deux slides. Ne pas débattre maintenant.
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
Ne pas lire le tableau : la salle le lit plus vite que moi. Raconter les trois
machines debout, une minute chacune, et lire à voix haute UNIQUEMENT les deux
dernières lignes de la colonne de droite.

Le tableau s'ouvre sur ses six intitulés de lignes, sans réponses : la salle a
les questions avant d'avoir les réponses. Une colonne par clic, et je ne clique
qu'une fois que j'ai fini de raconter la machine précédente. Ne pas prendre
de l'avance sur le clic — c'est toute l'utilité du découpage.

MACHINE 1 — fin 2022. ChatGPT sort le 30 novembre 2022. On lui pose une question,
il rend du texte. L'analogie à donner : c'est une requête Google qui rédige
la réponse au lieu de donner dix liens. Il ne voit pas le web, il n'exécute rien,
il ne garde rien d'une session à l'autre. C'est cette machine-là que la salle a
en tête, et c'est pour ça qu'on commence par elle.

MACHINE 2 — 2023-2024. Deux dates réelles, si on me les demande : les plugins
ChatGPT en mars 2023, puis l'appel de fonction dans l'API en juin 2023. À partir
de là le modèle ne rend plus seulement du texte : il rend une demande structurée
qu'un programme sait exécuter. Une recherche web, un envoi de mail, une requête
en base. Insister sur la limite : UN geste, dans le fil de la conversation,
et c'est toujours vous qui relancez derrière. Le chatbot a gagné un bras,
pas une volonté.

MACHINE 3 — aujourd'hui. Trois choses changent en même temps, et c'est le plan
de la journée :
— il enchaîne lui-même des dizaines d'actions sans qu'on reprenne la main ;
— il ne démarre plus forcément parce qu'on lui parle : un événement le réveille
  (un horaire, un mail qui arrive, un dépôt qui bouge) ;
— il garde des notes entre deux exécutions et les relit au démarrage.

SUR LA DERNIÈRE LIGNE — dire « il relit ses notes », pas « il s'améliore tout
seul ». La nuance tient la route face à un public académique : ce sont des
fichiers écrits par l'agent, relus au tour suivant. L'amélioration autonome
d'un modèle, elle, est un sujet de recherche ouvert, pas ce que je déploie.
Si on me pousse là-dessus : je décris ce qui tourne en production, le reste
n'est pas mon terrain. → module 4.

CE QUI N'A PAS BOUGÉ, à dire en sortant du tableau : il ne touche toujours rien
lui-même. La ligne « il peut toucher » décrit ce que VOTRE CODE l'autorise
à faire, rien de plus. C'est le contresens numéro un, on y revient au module 1.

Les dates sont des repères vécus, pas une frise. Les trois machines se
chevauchent : la machine 1 tourne encore dans la moitié des usages de la salle.
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
Trois axes, même forme : la dimension, puis le verdict. Les nommer dans l'ordre
inverse de ce que la salle attend.

Axe 1 — la qualité d'une phrase. Entre un texte de 2023 et un texte
d'aujourd'hui, l'écart se discute. Sur ce terrain-là le grand saut est derrière
nous, et c'est pourtant le seul dont le grand public parle. Cet axe désamorce :
la salle attend un discours d'émerveillement, on dit l'inverse, ça achète
la crédibilité pour les deux suivants.

Axe 2 — le nombre d'étapes sans vous. Un aller-retour hier, des centaines
d'étapes enchaînées aujourd'hui sans qu'on reprenne la main entre les deux.
Le problème change de nature. C'est la colonne 3 du tableau précédent,
nommée.

Axe 3 — le pouvoir d'agir. Un modèle ne touche toujours rien lui-même, et ça
va durer. Le pouvoir d'agir est dans le code, écrit par vous, qui exécute ce
qu'il demande. C'est le
contresens numéro un du grand public ; y revenir au module 1, ligne « Outil »
du tableau de vocabulaire.

Le callout pose le contraste en deux temps, chatbot puis agent, et ouvre le
fil rouge de la journée : « Qu'est-ce qui décide de la prochaine action ? Vous,
quand vous écrivez le code, ou le modèle, au moment de l'exécution ? ». Poser
la question ici, et annoncer qu'on y revient toute la journée.
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
**DÉMO 1 · 4 MIN · EN DIRECT**

**Avant de lancer**

Dire : « Ne regardez pas le résultat. Regardez ce qui défile. »

**À taper devant eux**

> Trouve-moi les dix cabinets comptables de Namur : nom, adresse,
> téléphone, site. Et dis-moi ceux que tu n'as pas pu vérifier.

**Pendant l'exécution**

1. Quand il cherche : « Là, il cherche. »
2. Quand il consulte une page : « Là, il ouvre un site, comme vous le feriez. »
3. S'il rencontre une page morte : « Là, il abandonne cette piste et repart. »
4. Quand il termine : « Là, il décide qu'il n'a plus rien à faire et rend sa réponse. »

Noter le **nombre d'étapes** et le **coût réel**. Ces deux chiffres resserviront.

**À la fin**

- Dix résultats, dont certains sont douteux : « Il a complété jusqu'à dix parce que je lui ai demandé dix. Retenez ce moment. »
- Moins de dix résultats, avec une explication : « Il s'est arrêté avant dix et nous dit pourquoi. Retenez ce moment aussi. »

Les deux issues conviennent. Ne pas commenter la mise en forme ou le style.

**Transition**

« On refait ce geste trois fois aujourd'hui. À 11h, vous le faites vous-mêmes. À 13h, vous en sortez un PDF. À 14h45, vous le programmez chaque lundi matin. »

**Si le réseau lâche :** ouvrir les captures de secours et commenter les mêmes étapes.
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
Ces quatre points sont l'ossature de la journée entière. Les annoncer comme tels.

Point 1 — dix-sept décisions, pas une réponse. C'est le déplacement du curseur,
en direct.
Point 2 — une recherche, une requête HTTP, un parseur. Du code ordinaire,
et c'est là et nulle part ailleurs qu'il y a un effet réel. → module 1.
Point 3 — personne n'a écrit « d'abord cherche, puis ouvre, puis vérifie ».
→ module 2, qui décide de l'enchaînement.
Point 4 — l'erreur puis la correction, c'est le mécanisme même. → module 3,
la boucle et ses dérapages. SI LA DÉMO N'A PAS PRODUIT D'ERREUR VISIBLE :
prendre le moment où il a ouvert une page morte et où il est reparti chercher
ailleurs, ça suffit. Et s'il a complété la liste pour arriver à dix, c'est
encore mieux : le point 4 se dit alors sur son erreur à lui, et le module 3
est annoncé sans effort.

Dire à l'oral ce que ça a coûté et combien de temps ça a pris, en reprenant
les vrais chiffres de la démo du matin. → module 5, coût et observabilité.

ADAPTER le nombre d'étapes à la démo réelle du matin. Il doit être vrai,
c'est tout l'intérêt de le citer.
-->
