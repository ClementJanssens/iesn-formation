<!--
  Tuile encadrée.

  Le traitement qui, dans le système, sert de socle au symbole et aux icônes :
  une grille carrée estompée par un masque radial, un reflet central, puis le
  contenu par-dessus. Ici elle porte les chiffres de module.

  Deux éléments imbriqués et non un seul : la grille et le reflet occupent déjà
  les deux pseudo-éléments de `.tile-mark`, le faisceau a donc besoin de son
  propre bord. C'est aussi ce qui lui permet de dépasser du `overflow: hidden`
  qui découpe la grille.

  Le faisceau est épinglé à l'angle passé en prop : deux tuiles voisines ne
  s'allument jamais du même côté.
-->
<template>
  <div
    class="tile-beam" :class="{ beam, 'beam-spin': spin }"
    :style="{ borderRadius: `${radius}px`, '--beam-angle': `${angle}deg` }"
  >
    <div
      class="tile-mark"
      :style="{ width: `${size}px`, height: `${size}px`, borderRadius: `${radius}px` }"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  size?: number
  /* 22 % du côté : le rayon du symbole, reporté à l'échelle de la tuile. */
  radius?: number
  angle?: number
  beam?: boolean
  spin?: boolean
}>(), {
  size: 96,
  radius: 21,
  angle: 35,
  beam: true,
  spin: false,
})
</script>

<style scoped>
.tile-beam {
  display: inline-block;
  line-height: 0;
}
</style>
