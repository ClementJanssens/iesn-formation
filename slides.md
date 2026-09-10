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
**Idée clé :** repartir capable de comprendre, évaluer et cadrer un système d’agents.

- **Dire :** « Aujourd’hui, on ouvre le capot. On ne vend aucun outil. »
- **Annoncer :** six heures de contenu et trois pauses à 10h30, 12h00 et 15h15.
- **Objectif :** savoir lire une architecture, expliquer ses échecs et décider si elle a sa place dans un cours.
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
**Idée clé :** la journée porte sur les mécanismes et les choix d’architecture.

- **Dire :** cinq patterns, des cas réussis et ratés, puis trois labos dans le navigateur.
- **Insister :** le TypeScript montre une forme. Personne ne doit apprendre ni recopier le code.
- **Éviter :** comparatif d’outils, promesse de remplacement ou débat sur le meilleur framework.
- **Transition :** la déclaration d’intérêt viendra au labo 1, lorsque la plateforme apparaîtra.
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
**Idée clé :** le matin construit le vocabulaire, l’après-midi l’applique aux risques et à l’enseignement.

- **Dire :** le module 6 sera adapté aux réponses du tour de salle.
- **Annoncer :** pauses à 10h30, 12h00 et 15h15.
- **Préciser :** trois labos dans le navigateur, sans installation ni paiement. Travail à deux possible.
- **Demander :** ouvrir avant 10h45 l’accès reçu par mail.
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
