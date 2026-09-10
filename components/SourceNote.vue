<!--
  La note de source, en pied de slide.

  Le support tient ses affirmations chiffrées dans les notes de l'animateur :
  c'est ce qu'il faut pour répondre en salle. Pour qu'un participant aille
  vérifier le lendemain, il faut la source à l'écran. Les slides qui portent de la
  matière vérifiable — un effet mesuré, un prix, un taux, une nomenclature
  empruntée — affichent donc leur source.

  Pas partout : une slide de définition ou de méthode n'en a pas, et une note
  vide serait un ornement. Douze slides sur quatre-vingt-sept en portent une.

  Elle se pose en bas de page, sous le ressort de queue du layout (`order: 6`,
  voir style.css) : elle ne participe pas à la composition du corps, elle la
  ferme. Registre machine — mono, 10,5 px, encre faible — c'est une référence
  à recopier, pas une phrase à lire depuis le fond de la salle.

  Usage :
    <SourceNote :items="[
      ['Liu et al., « Lost in the Middle », TACL 2024', 'arxiv.org/abs/2307.03172'],
    ]" />

  `label` remplace « Sources » quand la note crédite au lieu de sourcer
  (« D'après » sur la slide des cinq patterns).
-->
<template>
  <div class="deck-sources">
    <div class="deck-sources-label">{{ label }}</div>
    <div class="deck-sources-list">
      <div v-for="([ref, url], i) in items" :key="i" class="deck-sources-item">
        <span>{{ ref }}</span>
        <a v-if="url" :href="`https://${url}`" class="deck-sources-url">{{ url }}</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  items: [string, string?][]
  label?: string
}>(), { label: 'Sources' })
</script>
