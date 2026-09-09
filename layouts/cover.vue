<!--
  Couverture.

  Classe racine `deck-cover` et non `cover` : le thème par défaut applique
  `.slidev-layout.cover h1 { text-6xl }` et un `grid` centré. Changer de nom
  évite d'avoir à lutter en spécificité.

  Tout est aligné sur un axe unique à x=56px — le segment d'accent en haut,
  l'eyebrow, le titre, le filet, la date. C'est la seule slide du support qui
  laisse son tiers bas vide.
-->
<template>
  <div class="slidev-layout deck-cover">
    <!-- Le seul aplat de la couleur de marque du support : 56 × 2 px.
         Sur papier c'est le violet plein qui porte, là où sur fond sombre il
         aurait fallu un tint plus clair pour qu'il reste visible à 2px. -->
    <div class="absolute left-14 top-0 w-14 h-[2px] bg-accent-rule" />

    <div class="my-auto">
      <div v-if="eyebrow" class="eyebrow pb-4">{{ eyebrow }}</div>
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ eyebrow?: string }>()
</script>
