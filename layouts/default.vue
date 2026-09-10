<!--
  Le layout de contenu — 64 des 83 slides.

  Il remplace le `default` du thème, qui se contentait d'empiler le markdown
  contre le bord haut. Trois choses manquaient, et c'est ce que celui-ci ajoute :

  1. Un en-tête plutôt qu'un titre. Une ligne de repère (« Module 2 · Les cinq
     patterns »), le titre, puis un filet qui traverse la page avec le segment
     d'accent de 56 × 2 px à son extrémité gauche — le même que sur la
     couverture. Le titre a enfin un socle au lieu de flotter dans le blanc, et
     on sait en permanence où on en est dans la journée.

  2. La ligne de repère se déduit toute seule : on remonte les slides jusqu'au
     dernier séparateur de module et on en reprend le numéro et le titre. Aucune
     frontmatter à maintenir sur 64 slides. `eyebrow:` permet de forcer le
     libellé (les slides de cadrage, qui précèdent le module 0), `eyebrow: ''`
     de le retirer.

  3. Le corps se place au tiers de l'espace laissé libre sous le filet — voir
     .deck-gap / .deck-tail dans style.css. Le support ne porte que des repères,
     et les slides s'étaient mises à tenir dans leur tiers haut, une moitié de
     page vide dessous.
-->
<template>
  <div class="slidev-layout deck-default">
    <div v-if="eyebrowText" class="deck-topline">
      <span class="deck-topline-code">
        {{ eyebrowLabel }}<span v-if="moduleNumber" class="deck-topline-num">{{ moduleNumber }}</span>
      </span>
      <template v-if="moduleName">
        <span class="deck-topline-sep" />
        <span class="deck-topline-name">{{ moduleName }}</span>
      </template>
    </div>
    <slot />

    <!-- Les deux ressorts qui placent le corps. Ils sont ici, après le contenu,
         parce qu'un slot ne se découpe pas — `order` les renvoie à leur place
         (voir .deck-gap / .deck-tail dans style.css). -->
    <div class="deck-gap" />
    <div class="deck-tail" />
  </div>
</template>

<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'

const props = defineProps<{ eyebrow?: string }>()

const { slides, currentSlideNo } = useNav()

/* Le séparateur de module qui précède la slide courante. `module` n'est porté
   que par les slides `layout: section`, une par module. */
const section = computed(() => {
  for (let i = currentSlideNo.value - 1; i >= 0; i--) {
    const slide = slides.value[i]?.meta?.slide as any
    const mod = slide?.frontmatter?.module
    if (mod !== undefined && mod !== null)
      return { module: String(mod), title: slide?.title as string | undefined }
  }
  return undefined
})

const eyebrowText = computed(() => {
  if (props.eyebrow !== undefined)
    return props.eyebrow || undefined
  return section.value ? `Module ${section.value.module}` : undefined
})

const eyebrowLabel = computed(() =>
  moduleNumber.value ? 'Module' : eyebrowText.value,
)

/* Le chiffre sort du mono : DM Mono barre son zéro, et « MODULE ø » se lit de
   travers depuis le fond de la salle — c'est la raison qui vaut déjà pour le
   grand chiffre des séparateurs de module. */
const moduleNumber = computed(() =>
  props.eyebrow === undefined ? section.value?.module : undefined,
)

/* Le titre du module n'accompagne que le repère déduit : sur un libellé forcé
   à la main, il n'y a rien à qualifier. */
const moduleName = computed(() =>
  props.eyebrow === undefined ? section.value?.title : undefined,
)
</script>
