<!--
  Une rangée des deux murs de marques : le module 0 (prise de contact) et le
  module 4 (le paysage des systèmes de mémoire).

  Les glyphes ne sont pas des <img> mais des masques : le fichier SVG découpe
  un aplat de `currentColor`. Deux raisons, et elles tiennent toutes les deux
  à la charte — une seule couleur saturée à l'écran, donc aucun logo n'arrive
  avec la sienne ; et le glyphe suit alors l'encre du support, y compris quand
  la rangée est encore masquée par un v-click.

  Un slug préfixé d'une étoile (`*rerun`) marque un outil que l'animateur
  utilise lui-même : filet et encre passent à l'accent. Une seule couleur
  saturée à l'écran, donc c'est la seule chose colorée de la slide — et la
  légende doit préciser que c'est une déclaration d'intérêt, pas un conseil.

  Les fichiers vivent dans public/logos/. Ceux de Simple Icons arrivent déjà
  monochromes sur une grille 24 × 24 ; les autres ont été ramenés à la même
  forme à la main — pastille de fond retirée, illustration passée en masque
  alpha. Sans cette normalisation, seize logos côte à côte pèsent chacun d'un
  poids différent et la rangée cesse de se lire comme une rangée.

  La boîte du glyphe est plus large que haute : les marques carrées s'y posent
  à 32 px, les logotypes en toutes lettres (AI SDK) s'étendent sur la largeur
  au lieu de se réduire à un trait.

  Les métriques d'une rangée — côté de la tuile, boîte du glyphe, corps du nom,
  écarts — sont lues dans des variables CSS plutôt qu'écrites en dur. Le mur du
  module 0 porte cinq rangées et touche le bas de page, celui du module 4 n'en
  porte que trois : `.brand-wall.is-tight` resserre le premier sans toucher au
  second. Une variable traverse le style scopé du composant, une classe non.

  `marks` est une chaîne « slug Nom affiché, slug Nom affiché » plutôt qu'un
  tableau : la slide reste lisible en markdown, ce qui est tout l'intérêt d'un
  support dont la trame doit s'amender en dix secondes avant de monter sur scène.
-->
<template>
  <div class="brand-row">
    <div class="brand-row-label">{{ label }}</div>
    <div class="brand-row-marks">
      <div v-for="m in parsed" :key="m.slug" class="brand-mark" :class="{ 'is-mine': m.mine }">
        <div class="brand-tile tile-mark">
          <span class="brand-glyph" :style="{ '--glyph': `url(/logos/${m.file})` }" />
        </div>
        <div class="brand-name">{{ m.name }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ label: string, marks: string }>()

/* Le nom peut contenir des espaces (« GitHub Copilot »), le slug jamais :
   on coupe au premier seulement. Le slug porte son extension quand ce n'est
   pas un SVG — une illustration trop détaillée pour être vectorisée proprement
   arrive en PNG à canal alpha, et se masque exactement pareil. */
const parsed = computed(() => props.marks.split(',').map((entry) => {
  const [raw, ...name] = entry.trim().split(/\s+/)
  /* Une étoile en tête déclare un intérêt : c'est un outil que l'animateur
     utilise lui-même. L'intérêt se déclare, et la légende de la slide doit
     continuer à le dire. */
  const mine = raw.startsWith('*')
  const slug = mine ? raw.slice(1) : raw
  return {
    slug,
    mine,
    file: slug.includes('.') ? slug : `${slug}.svg`,
    name: name.join(' '),
  }
}))
</script>

<style scoped>
.brand-row {
  display: grid;
  grid-template-columns: 168px 1fr;
  align-items: start;
  column-gap: 24px;
}

/* Le libellé de rangée est un registre machine, comme toutes les autres
   colonnes du support : il classe, il ne commente pas. */
.brand-row-label {
  font-family: var(--deck-mono);
  font-size: 11px;
  line-height: 1.35;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--c-t3);
  padding-top: var(--brand-label-pad, 20px);
  border-left: 2px solid var(--c-hairline);
  padding-left: 14px;
  align-self: stretch;
}

.brand-row-marks {
  display: grid;
  grid-template-columns: repeat(4, 132px);
  gap: 14px;
}

.brand-mark {
  display: grid;
  justify-items: center;
  gap: var(--brand-stack-gap, 6px);
}

.brand-tile {
  width: var(--brand-tile, 62px);
  height: var(--brand-tile, 62px);
  border-radius: 10px;
}

.brand-glyph {
  display: block;
  width: var(--brand-glyph-w, 46px);
  height: var(--brand-glyph-h, 30px);
  background: var(--c-t2);
  -webkit-mask-image: var(--glyph);
  mask-image: var(--glyph);
  -webkit-mask-repeat: no-repeat;
  mask-repeat: no-repeat;
  -webkit-mask-position: center;
  mask-position: center;
  -webkit-mask-size: contain;
  mask-size: contain;
}

.brand-name {
  font-size: var(--brand-name, 12px);
  line-height: 1.25;
  text-align: center;
  color: var(--c-t3);
}

/* L'outil déclaré. Filet d'accent et écart de valeur, jamais un aplat plein :
   c'est la règle qui vaut pour toutes les surfaces du support. Le nom passe en
   500, la graisse courante — il suffit qu'il se détache des autres, restés en
   t3, sans hausser la voix plus haut que le titre de la slide. */
.brand-mark.is-mine .brand-tile {
  border-color: var(--c-accent);
  background: var(--c-accent-wash);
}

.brand-mark.is-mine .brand-glyph {
  background: var(--c-accent);
}

.brand-mark.is-mine .brand-name {
  color: var(--c-accent);
  font-weight: 500;
}
</style>
