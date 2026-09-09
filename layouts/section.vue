<!--
  Séparateur de module.

  Trois colonnes : le chiffre, un filet vertical, le titre. Le filet fait un
  travail structurel — c'est la règle « séparer par un filet » appliquée à la
  mise en page, pas à une bordure de boîte.

  En bas, un filet de progression rempli à (module + 1) / total : le seul
  élément violet du support qui porte de l'information. Il répond à « où en
  est-on dans la journée ? » sans un mot de chrome.

  Sans `module` en frontmatter, la colonne du chiffre et le filet de
  progression disparaissent et la slide reste correcte.
-->
<template>
  <div class="slidev-layout deck-section">
    <div class="my-auto">
      <div v-if="hasModule" class="grid grid-cols-[auto_1px_1fr] gap-x-7 items-center">
        <div class="module-numeral">{{ module }}</div>
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
const progress = computed(() => {
  const n = Number(props.module)
  const total = props.total ?? 7
  if (Number.isNaN(n))
    return '0%'
  return `${Math.round(((n + 1) / (total + 1)) * 100)}%`
})
</script>
