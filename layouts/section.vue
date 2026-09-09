<!--
  Séparateur de module.

  Trois colonnes : la tuile, un filet vertical, le titre. Le filet fait un
  travail structurel — c'est la règle « séparer par un filet » appliquée à la
  mise en page, pas à une bordure de boîte.

  Le chiffre est maintenant posé dans la tuile encadrée du système : grille
  carrée estompée, reflet central, faisceau épinglé sur le bord. L'angle du
  faisceau est dérivé du numéro de module, donc chaque séparateur s'allume par
  un côté différent — rien ne bat à l'unisson, y compris d'une slide à l'autre.

  En bas, un filet de progression rempli à (module + 1) / total : le seul
  élément violet du support qui porte de l'information. Il répond à « où en
  est-on dans la journée ? » sans un mot de chrome.

  Sans `module` en frontmatter, la colonne de la tuile et le filet de
  progression disparaissent et la slide reste correcte.
-->
<template>
  <div class="slidev-layout deck-section">
    <div class="iso-grid-bg" />

    <div class="my-auto relative z-10">
      <div v-if="hasModule" class="grid grid-cols-[auto_1px_1fr] gap-x-7 items-center">
        <TileMark :size="118" :radius="26" :angle="angle">
          <div class="module-numeral">{{ module }}</div>
        </TileMark>
        <div class="w-px h-[86px] bg-hairline" />
        <div>
          <div class="eyebrow pb-1.5">Module</div>
          <slot />
        </div>
      </div>
      <slot v-else />
    </div>

    <div v-if="hasModule" class="absolute left-0 bottom-0 w-full h-[2px] bg-hairline">
      <div class="progress-fill h-full bg-accent-rule" :style="{ width: progress }" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  module?: number | string
  total?: number
}>()

const hasModule = computed(() => props.module !== undefined && props.module !== null)

/* L'angle vient du numéro de module — stable d'un rendu à l'autre, différent
   d'un module à l'autre. C'est la règle « chaque faisceau statique est épinglé
   à son propre angle » appliquée à une série de huit slides. */
const angle = computed(() => (Number(props.module) || 0) * 47 + 35)

const progress = computed(() => {
  const n = Number(props.module)
  const total = props.total ?? 7
  if (Number.isNaN(n))
    return '0%'
  return `${Math.round(((n + 1) / (total + 1)) * 100)}%`
})
</script>
