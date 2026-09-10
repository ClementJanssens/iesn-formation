---
layout: section
module: 6
---

# Usages dans l'enseignement

<div class="opacity-50 pt-2">vos usages, et le sujet qui fâche</div>

<!--
**Transition :** appliquer la grille aux usages de la salle, puis ouvrir la question de l’évaluation des étudiants.
-->
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
**Idée clé :** classer un usage selon la responsabilité humaine avant de choisir son architecture.

- **Demander :** « Quelqu’un déplacerait-il un exemple dans une autre colonne ? »
- **Laisser :** cinq minutes de discussion sans imposer mon classement.
- **Insister :** la question est « Qui répond de cette décision ? », pas « La machine peut-elle le faire ? »
- **Transition :** les trois cas suivants appliquent cette grille puis choisissent un pattern.
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
**Idée clé :** router selon le risque avant de répondre.

- **Lire :** distinguer la demande publique de la situation personnelle.
- **Montrer :** l’agent classe d’abord. Public reçoit une réponse sourcée, personnel un brouillon, doute aucune réponse.
- **Demander :** faire nommer le rôle du secrétariat sur les cas personnels et douteux.
- **Insister :** aucun accès aux dossiers étudiants. Séparer les services si cet accès devient nécessaire.

**Mesurer :** le nombre de réponses erronées après envoi, pas seulement la part automatisée.
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
**Idée clé :** plusieurs lecteurs automatiques repèrent des passages, mais l’enseignant reste le correcteur.

- **Montrer :** trois lectures séparées sur méthode, sources et clarté.
- **Insister :** produire des remarques localisées, jamais un score.
- **Dire :** l’enseignant garde, corrige ou écarte chaque remarque.
- **Mesurer :** remarques conservées et temps réellement gagné. Annoncer la pré-relecture aux étudiants.

**Si question :** Malouff et Thorsteinsson, 2016, analysent 20 études et 1 935 correcteurs. Le biais est significatif et modéré, `g = 0,36`. L’application à une pré-note d’agent reste une extrapolation.
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
**Idée clé :** l’assistant répond depuis le cours et fait réfléchir avant d’expliquer.

- **Lire :** la question sur corrélation et causalité.
- **Montrer :** recherche limitée aux supports, question de rappel, puis réponse avec page précise.
- **Insister :** si le cours ne répond pas, l’assistant refuse d’improviser.
- **Dire :** le journal agrégé des questions aide l’enseignant à repérer les incompréhensions.

**Éviter :** conserver des conversations nominatives sans nécessité.
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
**Idée clé :** évaluer le processus et la compréhension plutôt que tenter de détecter l’IA dans un fichier final.

- **Laisser :** dix minutes. Ce sera probablement le débat le plus animé.
- **Dire :** fichier unique, score de détecteur et simple interdiction ne donnent pas une preuve défendable.
- **Proposer :** versions successives, deux questions ciblées sur le rendu, puis trace de l’agent avec analyse de ses erreurs.
- **Éviter :** décider la politique de l’établissement. Décrire ce qui tient techniquement.

**Si question :** Liang et al., Patterns 2023, testent sept détecteurs. Plus de la moitié des copies TOEFL non natives sont classées comme générées, malgré de bons résultats sur des copies de collégiens américains.
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
**Idée clé :** objectif, outils, pattern, bornes et mesure suffisent pour cadrer un premier système.

- **Dire :** c’est le livrable de la journée.
- **Préciser :** objectif pour qui et à la place de quoi, outils classés par réversibilité, pattern choisi, arrêt et validation humaine.
- **Insister :** le succès doit se mesurer sur trente cas réels.
- **Demander :** proposer de remplir la grille sur un cas de la salle.

**Si blocage :** une mesure impossible révèle souvent un objectif trop vague. Revenir à la première ligne.
-->
