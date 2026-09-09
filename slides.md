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
Bonjour. Une journée, six heures de contenu, quatre pauses.
Objectif : qu'en repartant vous sachiez lire l'architecture d'un système d'agents,
dire pourquoi il échoue, et décider s'il a sa place dans votre cours.
-->

---
layout: default
---

# Le contrat de la journée

<div class="grid grid-cols-2 gap-8 pt-4">
<div>

## <span class="text-ok">On va faire</span>

- Ouvrir le capot : ce qu'il y a vraiment dans la boucle
- Nommer les cinq patterns qui couvrent 90 % des cas
- Regarder des traces d'exécution, y compris ratées
- Parler coût, sécurité et évaluation
- Finir sur vos usages à vous

</div>
<div>

## <span class="text-bad">On ne va pas faire</span>

- Un cours de *prompt engineering*
- Un comparatif d'outils du marché
- Une promesse de remplacement
- Du code que vous devrez copier

</div>
</div>

<div class="pt-10 text-sm opacity-60">
Les exemples de code sont en TypeScript. Ils sont là pour <em>montrer une forme</em>, pas pour être appris.
</div>

<!--
Insister : "montrer une forme". Le public est mid-tech, le code sert de support visuel
à un concept, jamais d'exercice. Personne ne doit noter du code.
-->

---
layout: default
---

# La journée

<div class="pt-5 text-[0.95rem] leading-relaxed">

<div class="eyebrow pb-1">Matin</div>

<div class="flex gap-5"><span class="text-meta w-14">09h00</span><span><strong>0 ·</strong> Ouverture — et une trace</span></div>
<div class="flex gap-5"><span class="text-meta w-14">09h30</span><span><strong>1 ·</strong> Modèle, outils, boucle</span></div>
<div class="flex gap-5"><span class="text-meta w-14">10h45</span><span><strong>2 ·</strong> Les cinq patterns d'orchestration</span></div>
<div class="flex gap-5"><span class="text-meta w-14">12h00</span><span class="opacity-50">Déjeuner</span></div>

<div class="eyebrow pt-4 pb-1">Après-midi</div>

<div class="flex gap-5"><span class="text-meta w-14">13h00</span><span><strong>3 ·</strong> L'agent autonome et sa boucle</span></div>
<div class="flex gap-5"><span class="text-meta w-14">14h15</span><span><strong>4 ·</strong> Contexte, mémoire, délégation</span></div>
<div class="flex gap-5"><span class="text-meta w-14">15h30</span><span><strong>5 ·</strong> Ce qui casse en production</span></div>
<div class="flex gap-5"><span class="text-meta w-14">16h30</span><span><strong>6 ·</strong> Et à la fac ?</span></div>
<div class="flex gap-5"><span class="text-meta w-14">17h15</span><span><strong>7 ·</strong> Clôture</span></div>

</div>

---
layout: center
class: text-center
---

<div class="kicker pb-5">Le fil rouge de la journée</div>

# Qu'est-ce qui décide<br>de la prochaine action ?

<div class="pt-10 text-xl opacity-70">
Vous, quand vous écrivez le code ?<br>
Ou le modèle, au moment de l'exécution ?
</div>

<div class="pt-10 text-sm opacity-50">
Tout le reste — patterns, mémoire, garde-fous, factures — découle de la position de ce curseur.
</div>

<!--
C'est LA slide à laquelle on reviendra six fois dans la journée.
Chaque décision d'architecture est un déplacement de ce curseur.
Plus il va vers le modèle : plus c'est flexible, plus c'est cher, moins c'est prévisible.
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
src: ./pages/06-a-la-fac.md
---

---
src: ./pages/07-cloture.md
---
