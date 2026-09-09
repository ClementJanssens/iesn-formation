<!--
  Couverture.

  Classe racine `deck-cover` et non `cover` : le thème par défaut applique
  `.slidev-layout.cover h1 { text-6xl }` et un `grid` centré. Changer de nom
  évite d'avoir à lutter en spécificité.

  Le texte est aligné sur un axe unique à x=56px — le segment d'accent en haut,
  l'eyebrow, le titre, le filet, la date. Le tiers bas droit, qui restait vide,
  porte maintenant le plateau : trois blocs sur une grille isométrique, reliés
  par deux faisceaux. Il ne décore pas, il annonce le sujet de la journée avant
  le premier mot — et il installe le langage visuel du support d'emblée.
-->
<template>
  <div class="slidev-layout deck-cover">
    <div class="iso-grid-bg" />

    <!-- Le seul aplat de la couleur de marque du support : 56 × 2 px.
         Sur papier c'est le violet plein qui porte, là où sur fond sombre il
         aurait fallu un tint plus clair pour qu'il reste visible à 2px. -->
    <div class="absolute left-14 top-0 w-14 h-[2px] bg-accent-rule" />

    <div class="cover-board">
      <IsoBoard
        :cols="7" :rows="5" :zoom="0.9"
        :agents="[
          { col: 1, row: 0, state: 'idle', label: 'plan' },
          { col: 3, row: 2, state: 'accent', label: 'exécute' },
          { col: 5, row: 0, state: 'idle', label: 'vérifie' },
        ]"
        :links="[
          { from: 0, to: 1, kind: 'beam' },
          { from: 1, to: 2, kind: 'beam' },
        ]"
      />
    </div>

    <div class="my-auto relative z-10">
      <div v-if="eyebrow" class="eyebrow pb-4">{{ eyebrow }}</div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ eyebrow?: string }>()
</script>

<style scoped>
/* Le plateau est calé sur le filet droit du cadre de page : il partage son
   bord avec lui, ce qui l'ancre dans la composition au lieu de le laisser
   flotter dans le coin. */
.cover-board {
  position: absolute;
  right: 26px;
  bottom: 40px;
  z-index: 1;
}
</style>
