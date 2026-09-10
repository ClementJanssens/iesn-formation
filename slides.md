---
theme: default
title: Orchestrateurs IA
info: |
  Formation d'une journée — comprendre et concevoir des systèmes d'agents.
colorSchema: light
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: fade
mdc: true
fonts:
  sans: Inter
  mono: DM Mono
  weights: '400,500,600'
  provider: google
layout: cover
eyebrow: Formation d'une journée
---

# Orchestrateurs IA

<div class="pt-6 text-[1.1875rem] leading-relaxed text-t2 max-w-[54ch]">
Comprendre, concevoir et encadrer<br>des systèmes qui agissent
</div>

<div class="w-18 h-px bg-hairline-strong mt-12 mb-3" />

<div class="text-meta">Septembre 2026</div>

<!--
Bonjour. Une journée, six heures de contenu, trois pauses — 10h30, le déjeuner, 15h15.

Objectif annoncé d'entrée : qu'en repartant vous sachiez lire l'architecture d'un
système d'agents, dire pourquoi il échoue, et décider s'il a sa place dans votre cours.

Ton à installer dès la première minute : on ne vend rien, on ouvre le capot.
-->

---
layout: default
eyebrow: Avant de commencer
---

# Le contrat de la journée

<div class="grid grid-cols-2 gap-x-14">
<div v-click class="card-ok">

<div class="eyebrow !text-ok">On va faire</div>

<div class="pt-3 space-y-1">

- Comprendre le fonctionnement d'un agent
- Identifier les cinq patterns d'orchestration
- Analyser des cas réels, réussis et ratés
- Évaluer coût, sécurité et fiabilité
- Échanger sur vos usages
- **Trois labos, sur vos machines**

</div>

</div>
<div v-click class="card-bad">

<div class="eyebrow !text-bad">On ne va pas faire</div>

<div class="pt-3 space-y-1">

- Du *prompt engineering*
- Un comparatif d'outils
- Une promesse de remplacement
- Apprendre un framework

</div>

</div>
</div>

<!--
Développer chaque ligne de gauche en une phrase, pas plus :
— « comprendre le fonctionnement » : on regarde ce qu'il y a vraiment dans la boucle,
   pas la description marketing.
— « cinq patterns » : un vocabulaire d'atelier, pas une taxonomie académique.
— « réussis et ratés » : deux démos, dont une qui échoue. C'est volontaire.
— « vos usages » : le module 6 est à vous, il se règle sur ce que vous direz ce matin.
— « trois labos » : annoncer tout de suite qu'ils sortent leur portable trois fois
   dans la journée, à 10h, à 13h et à 14h45. Une manip par labo, rien à installer.

Colonne de droite, la phrase à dire : le code à l'écran est en TypeScript, il est là
pour MONTRER UNE FORME, jamais pour être appris ni noté. Public mid-tech :
le code sert de support visuel à un concept. Personne ne recopie rien.

Insister sur « pas de comparatif d'outils » : cadre académique, je ne fais pas
la promotion d'une bibliothèque. Les concepts d'abord, les implémentations
en illustration et toujours au pluriel.

Ne PAS déclarer le conflit d'intérêts ici — c'est trop tôt, ça n'a pas encore
de sens pour eux. La déclaration se fait au labo 1, à 10h05, quand la plateforme
apparaît à l'écran. Elle est écrite mot pour mot dans les notes de cette slide-là.
-->

---
layout: default
eyebrow: Programme
---

# La journée

<div class="pt-5 text-[0.95rem] leading-relaxed">

<div v-click>

<div class="eyebrow pb-1">Matin</div>

<div class="flex gap-5"><span class="text-meta w-14">09h00</span><span><strong>0 ·</strong> Ouverture</span></div>
<div class="flex gap-5"><span class="text-meta w-14">09h30</span><span><strong>1 ·</strong> Comment fonctionne un agent<span class="text-meta pl-3">labo</span></span></div>
<div class="flex gap-5"><span class="text-meta w-14">10h45</span><span><strong>2 ·</strong> Les cinq patterns d'orchestration</span></div>
<div class="flex gap-5"><span class="text-meta w-14">12h00</span><span class="opacity-50">Déjeuner</span></div>

</div>

<div v-click>

<div class="eyebrow pt-4 pb-1">Après-midi</div>

<div class="flex gap-5"><span class="text-meta w-14">13h00</span><span><strong>3 ·</strong> L'agent autonome<span class="text-meta pl-3">labo</span></span></div>
<div class="flex gap-5"><span class="text-meta w-14">14h15</span><span><strong>4 ·</strong> Contexte et mémoire<span class="text-meta pl-3">labo</span></span></div>
<div class="flex gap-5"><span class="text-meta w-14">15h30</span><span><strong>5 ·</strong> Passer en production</span></div>
<div class="flex gap-5"><span class="text-meta w-14">16h30</span><span><strong>6 ·</strong> Usages dans l'enseignement</span></div>
<div class="flex gap-5"><span class="text-meta w-14">17h15</span><span><strong>7 ·</strong> Clôture</span></div>

</div>

</div>

<!--
Ne pas commenter ligne par ligne. Deux repères seulement :
— le matin construit le vocabulaire, l'après-midi le met sous tension ;
— le module 6 est le leur, et il est calibré sur le tour de salle de 09h15.

Signaler les pauses : 10h30, 12h00, 15h15. Les gens s'installent mieux
quand ils savent quand ils sortent.

Les trois « labo » du programme : dire maintenant qu'il leur faut un portable
et rien d'autre — tout se passe dans le navigateur, il n'y a rien à installer
et rien à payer. Ceux qui n'en ont pas se mettent à deux, c'est même mieux.
Leur accès a été envoyé hier par mail : leur demander de l'ouvrir pendant la
pause de 10h30 s'ils ne l'ont pas encore fait.
-->

---
src: ./pages/00-ouverture.md
---

---
src: ./pages/01-fondations.md
---

---
src: ./pages/02-workflows.md
---

---
src: ./pages/03-agent-boucle.md
---

---
src: ./pages/04-contexte-memoire.md
---

---
src: ./pages/05-production.md
---

---
src: ./pages/06-enseignement.md
---

---
src: ./pages/07-cloture.md
---
