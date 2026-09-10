---
layout: section
module: 6
---

# Usages dans l'enseignement

<div class="opacity-50 pt-2">vos usages, et le sujet qui fâche</div>

---
layout: default
---

# Trier avant de construire

<div class="pt-6 grid grid-cols-3 gap-6">

<div v-click class="card-ok">
<div class="font-semibold pb-1">Automatisable</div>
<div class="eyebrow pb-4">l'erreur est visible</div>
<div class="text-base space-y-2 opacity-85">
<div>Reformater des supports</div>
<div>Extraire des références</div>
<div>Varier un exercice</div>
<div>Résumer un compte rendu</div>
<div>Router des demandes</div>
</div>
</div>

<div v-click class="card-warn">
<div class="font-semibold pb-1">Assistable</div>
<div class="eyebrow pb-4">l'humain décide</div>
<div class="text-base space-y-2 opacity-85">
<div>Pré-relire selon une grille</div>
<div>Repérer des similitudes</div>
<div>Proposer un plan de séance</div>
<div>Constituer une bibliographie</div>
<div>Rédiger un premier jet</div>
</div>
</div>

<div v-click class="card-bad">
<div class="font-semibold pb-1">À garder humain</div>
<div class="eyebrow pb-4">l'erreur est irréparable</div>
<div class="text-base space-y-2 opacity-85">
<div>Attribuer une note</div>
<div>Décider d'un échec</div>
<div>Qualifier une fraude</div>
<div>Répondre à une détresse</div>
<div>Tout ce qui relève d'un recours</div>
</div>
</div>

</div>

<div v-click class="pt-10 text-base">
Le critère de la troisième colonne : <strong>quelqu'un doit pouvoir en répondre devant la personne concernée.</strong>
</div>

<!--
Ouvrir la discussion ici, cinq minutes : est-ce que quelqu'un placerait un item
dans une autre colonne ? Les désaccords sont instructifs et souvent disciplinaires.
Ne pas trancher à leur place — l'objectif est qu'ils repartent avec la grille,
pas avec mon classement.

Le critère de la troisième colonne, développé : la responsabilité. La question
à poser est « qui répond de cette décision ? », et jamais « est-ce que la
machine y arriverait ? ». Une décision qu'on ne peut pas justifier reste
inacceptable, quelle que soit sa qualité.
C'est un argument qui tient en conseil pédagogique.

Rappeler la grille du module 2 : une fois la colonne choisie, on choisit
le pattern. Les trois slides suivantes font exactement ça sur trois cas.
-->

---
layout: default
---

# Cas 1 · Les mails du secrétariat

<div class="teaching-case">

<div class="case-situation">
<div class="eyebrow">Situation</div>
<div>Deux mails arrivent : « Où trouver le formulaire ? » et « Puis-je encore m'inscrire ? »</div>
</div>

<div class="case-path">

<div v-click class="case-step">
<div class="case-step-number">01</div>
<div class="case-step-title">L'agent classe le mail</div>
<div class="case-step-copy">Information publique, situation personnelle ou doute.</div>
</div>

<div v-click class="case-step">
<div class="case-step-number">02</div>
<div class="case-step-title">Il choisit une action</div>
<div class="case-step-copy case-choices">
<div><strong>Public</strong><span>réponse avec lien</span></div>
<div><strong>Personnel</strong><span>brouillon à relire</span></div>
<div><strong>Doute</strong><span>transmission sans réponse</span></div>
</div>
</div>

<div v-click class="case-step">
<div class="case-step-number">03</div>
<div class="case-step-title">L'humain reprend la main</div>
<div class="case-step-copy">Le secrétariat traite les cas personnels et tous les doutes.</div>
</div>

</div>

<div v-click class="case-footer">
<div><span>Architecture</span><strong>Routage</strong></div>
<div><span>Limite</span><strong>Aucun accès aux dossiers étudiants</strong></div>
<div><span>À mesurer</span><strong>Les réponses erronées</strong></div>
</div>

</div>

<!--
Commencer par lire les deux mails. Le premier appelle une information publique
et stable. Le second dépend d'une situation personnelle. C'est cette différence,
très ordinaire, qui justifie le routage.

Au premier clic, l'agent ne répond encore à rien : il classe. Au deuxième,
montrer que chaque classe ouvre une action différente. Une information publique
peut recevoir une réponse avec sa source. Un cas personnel ne reçoit qu'un
brouillon. En cas de doute, aucun message ne part.

Au troisième clic, faire nommer le rôle humain : le secrétariat reprend les cas
personnels et les doutes. Le garde-fou doit favoriser le doute au démarrage.
Mieux vaut transmettre trop de mails que répondre de travers à une personne
qui s'inquiète de son inscription.

Cet agent lit du contenu non maîtrisé et peut envoyer une réponse. Il possède
donc déjà deux capacités risquées du module 5. Il n'accède pas aux dossiers
étudiants. Si cet accès devient nécessaire, on sépare les deux services.

La mesure principale reste le nombre de réponses erronées découvertes après
l'envoi. La part automatisée n'a de sens qu'à côté de ce chiffre.
-->

---
layout: default
---

# Cas 2 · Préparer la correction

<div class="teaching-case">

<div class="case-situation">
<div class="eyebrow">Situation</div>
<div>Quatre-vingts travaux doivent être relus avec la même grille.</div>
</div>

<div class="case-path">

<div v-click class="case-step">
<div class="case-step-number">01</div>
<div class="case-step-title">Trois lectures séparées</div>
<div class="case-step-copy case-choices">
<div><strong>Méthode</strong><span>la démarche répond-elle à la question ?</span></div>
<div><strong>Sources</strong><span>les affirmations sont-elles étayées ?</span></div>
<div><strong>Clarté</strong><span>où le raisonnement devient-il difficile à suivre ?</span></div>
</div>
</div>

<div v-click class="case-step">
<div class="case-step-number">02</div>
<div class="case-step-title">Une grille annotée</div>
<div class="case-step-copy">Chaque remarque renvoie à un passage précis. Aucun score n'est produit.</div>
</div>

<div v-click class="case-step">
<div class="case-step-number">03</div>
<div class="case-step-title">L'enseignant décide</div>
<div class="case-step-copy">Il garde, corrige ou écarte les remarques, puis formule son retour.</div>
</div>

</div>

<div v-click class="case-footer">
<div><span>Architecture</span><strong>Parallélisation</strong></div>
<div><span>Limite</span><strong>L'agent ne note pas</strong></div>
<div><span>À mesurer</span><strong>Remarques utiles et temps gagné</strong></div>
</div>

</div>

<SourceNote :items="[
  ['Malouff & Thorsteinsson, « Bias in grading », Australian Journal of Education, 2016', 'doi.org/10.1177/0004944116664618'],
]" />

<!--
Commencer par le problème concret : quatre-vingts travaux, une grille commune,
et du temps enseignant absorbé par le repérage des passages à revoir.

Au premier clic, expliquer la parallélisation sans jargon : trois lecteurs
reçoivent le même travail, mais chacun n'observe qu'une dimension. Ils ne
produisent pas trois corrections concurrentes.

Au deuxième clic, leur sortie commune est une grille de remarques localisées,
jamais un score. Dès qu'un chiffre apparaît, il devient l'ancre de la lecture
humaine.

CE QUE DIT VRAIMENT LA LITTÉRATURE, à donner exactement comme ça si on me
demande la source — c'est un public qui la demandera : la méta-analyse de
Malouff & Thorsteinsson (« Bias in grading », Australian Journal of Education,
2016 ; 20 études, 1 935 correcteurs) mesure un biais de correction significatif,
d'effet g = 0,36, notamment quand le correcteur connaît une performance
antérieure faible de l'étudiant. Donc : l'effet est établi et il est modéré,
pas « fort ». Dire « mesurable et documenté », jamais « fortement ».
L'application à une pré-note produite par un agent est une extrapolation
raisonnable — la présenter comme telle. Ça reste un argument recevable en
conseil pédagogique.

Au troisième clic, l'enseignant reste le correcteur. Il vérifie le travail,
écarte les remarques faibles et décide du retour. Le gain recherché concerne
le repérage, pas la responsabilité de la correction.

Mesurer deux choses sur un petit lot : la part des remarques que l'enseignant
conserve, puis le temps réellement gagné. Si les remarques sont nombreuses
mais peu utiles, le système a seulement déplacé le travail.

L'annonce aux étudiants : une pré-relecture automatique non annoncée
est un problème de confiance avant d'être un problème technique.
-->

---
layout: default
---

# Cas 3 · Aider à réviser un cours

<div class="teaching-case">

<div class="case-situation">
<div class="eyebrow">Situation</div>
<div>Un étudiant demande : « Quelle différence entre corrélation et causalité ? »</div>
</div>

<div class="case-path">

<div v-click class="case-step">
<div class="case-step-number">01</div>
<div class="case-step-title">Chercher dans le cours</div>
<div class="case-step-copy">L'assistant consulte uniquement les supports fournis par l'enseignant.</div>
</div>

<div v-click class="case-step">
<div class="case-step-number">02</div>
<div class="case-step-title">Faire réfléchir d'abord</div>
<div class="case-step-copy">Il demande : « Quelle différence vois-tu déjà entre les deux notions ? »</div>
</div>

<div v-click class="case-step">
<div class="case-step-number">03</div>
<div class="case-step-title">Répondre ou refuser</div>
<div class="case-step-copy">Il cite la page du support. Si le cours ne répond pas, il le dit.</div>
</div>

</div>

<div v-click class="case-footer">
<div><span>Architecture</span><strong>Agent borné</strong></div>
<div><span>Limite</span><strong>Le cours, rien d'autre</strong></div>
<div><span>Pour l'enseignant</span><strong>Les questions récurrentes</strong></div>
</div>

</div>

<!--
Lire d'abord la question de l'étudiant. Elle paraît simple, mais un assistant
général pourrait répondre avec une définition différente de celle du cours.

Au premier clic, poser la borne : l'assistant cherche dans les supports fournis,
et nulle part ailleurs. L'étudiant obtient ainsi une réponse ancrée dans le cours.

Au deuxième clic, montrer le choix pédagogique. Avant d'expliquer, l'assistant
demande à l'étudiant de formuler ce qu'il comprend déjà. Sans cette étape, une
réponse trop complète peut remplacer l'effort de rappel.

Au troisième clic, la réponse cite une page précise. Si aucune page ne soutient
la réponse, l'assistant refuse d'improviser et annonce que la question dépasse
le cours.

Le sous-produit utile pour l'enseignant est le journal agrégé des questions.
Il révèle les incompréhensions récurrentes avant l'examen. Ne pas conserver
les conversations nominatives si elles ne sont pas nécessaires.
-->

---
layout: default
---

# Le sujet qui fâche

<div class="pt-6 text-2xl pb-10">
Vos étudiants ont déjà des agents.
</div>

<div class="grid grid-cols-2 gap-x-14 text-base">
<div v-click class="card-bad">

<div class="eyebrow !text-bad">Ce qui ne fonctionne plus</div>

<div class="pt-3">

- noter le seul fichier rendu
- sanctionner sur un score de détecteur
- « IA interdite » écrit dans la consigne

</div>

</div>
<div v-click class="card-ok">

<div class="eyebrow !text-ok">Ce qui fonctionne encore</div>

- noter les versions successives, pas le fichier
- deux questions sur son rendu, sans machine
- exiger la trace et ce que l'agent a raté

</div>
</div>

<div v-click class="mt-10 callout-cool">
De « as-tu produit ce texte ? » vers <strong>« peux-tu répondre de ce texte ? »</strong>
</div>

<SourceNote :items="[
  ['Liang et al., « GPT detectors are biased against non-native English writers », Patterns, 2023', 'doi.org/10.1016/j.patter.2023.100779'],
]" />

<!--
Prévoir que ce soit le moment le plus animé de la journée. Laisser dix minutes.

Ouvrir avec : la question porte sur ce qu'on évalue, une fois l'IA dans la salle.

Ce qui ne fonctionne plus, développé :
— noter le seul fichier rendu : un travail de dix heures et un travail de dix
  minutes arrivent dans la même boîte de dépôt, dans le même format. Rien dans
  le fichier ne permet de les distinguer ;
— sanctionner sur un score de détecteur : le taux de faux positifs est trop
  élevé pour fonder une sanction. Être factuel là-dessus, et ajouter le point
  qui compte, avec sa source, parce qu'ici on me la demandera : Liang, Yuksekgonul,
  Mao, Wu & Zou, « GPT detectors are biased against non-native English writers »,
  Patterns (Cell Press), 2023. Sept détecteurs testés ; plus de la moitié des
  copies TOEFL rédigées par des non-natifs sont classées « générées par IA »,
  alors que les détecteurs sont quasi parfaits sur des copies de collégiens
  américains. Une sanction fondée là-dessus est difficilement défendable ;
— « IA interdite » écrit dans la consigne : la phrase n'est pas vérifiable, donc
  elle ne trie pas les étudiants selon leur travail, elle les trie selon leur
  obéissance. Ceux qui la respectent sont les seuls à en payer le prix.

Ce qui fonctionne encore — trois gestes, pas trois principes :
— noter les versions successives, pas le fichier : demander le dépôt à trois
  dates, ou l'historique du document. Le barème porte sur ce qui a bougé entre
  deux versions. C'est ce qui coûte le moins cher à mettre en place ;
— deux questions sur son rendu, sans machine : « pourquoi ce choix-là page 3 »,
  « qu'est-ce qui casse si on change cette hypothèse ». Deux minutes par étudiant,
  à l'oral ou à l'écrit en début de séance. On ne défend pas ce qu'on n'a pas lu ;
— exiger la trace et ce que l'agent a raté : la consigne devient « utilise un
  agent, joins la conversation, et écris un paragraphe sur ce qu'il a écrit de
  faux ». Le paragraphe est la partie notée — il est impossible à écrire sans
  avoir relu.

Si on me demande quoi mettre en place demain matin, répondre : les versions
successives et les deux questions. Les deux se font sans changer le sujet
d'examen ni acheter quoi que ce soit.

Le callout : c'est la seule question qui reste vérifiable — et c'était sans doute
déjà la bonne avant.

NE PAS prendre position sur la politique de l'établissement : hors de mon rôle.
Décrire ce qui tient techniquement et ce qui ne tient pas, et les laisser décider.
-->

---
layout: default
---

# Une architecture tient en cinq lignes

<div class="mt-8 box p-7 space-y-5 text-base">

<v-clicks>

<div class="flex gap-8"><div class="w-48 shrink-0 font-semibold text-cool">Objectif</div><div class="opacity-70">une phrase</div></div>

<div class="flex gap-8"><div class="w-48 shrink-0 font-semibold text-cool">Outils</div><div class="opacity-70">la liste, classée par réversibilité</div></div>

<div class="flex gap-8"><div class="w-48 shrink-0 font-semibold text-cool">Pattern</div><div class="opacity-70">lequel des cinq, et pourquoi pas l'autre</div></div>

<div class="flex gap-8"><div class="w-48 shrink-0 font-semibold text-cool">Bornes</div><div class="opacity-70">arrêt, plafond, budget, ce qui passe par un humain</div></div>

<div class="flex gap-8"><div class="w-48 shrink-0 font-semibold text-cool">Critère de succès</div><div class="opacity-70">un nombre, sur trente cas réels</div></div>

</v-clicks>

</div>

<div v-click class="pt-8 text-base">
Si vous ne pouvez pas la remplir, le projet n'est pas prêt.
</div>

<!--
C'est le livrable de la journée. Le dire, et proposer de la remplir en direct
sur un cas apporté par la salle — c'est le meilleur usage des dix dernières minutes.

Développer chaque ligne :
— Objectif : ce que le système produit, pour qui, et À LA PLACE DE QUOI.
  La troisième partie est celle qu'on oublie.
— Outils : la liste exhaustive, chacun classé réversible / coûteux à défaire /
  irréversible.
— Pattern : lequel des cinq, ou agent borné. Et pourquoi pas celui d'à côté.
— Bornes : condition d'arrêt, plafond d'étapes, budget, ce qui passe par un humain.
— Critère de succès : un nombre mesurable sur trente cas réels. Pas « ça marche bien ».

LA remarque à faire en sortant : la ligne qui bloque le plus souvent est
la dernière. C'est presque toujours le signe que l'objectif de la première
n'est pas assez précis. Remonter, ne pas forcer.
-->
