<!--
  Plateau isométrique.

  C'est la pièce de signature du langage visuel : des blocs posés sur une grille
  2:1, reliés par des faisceaux et des câbles. Elle n'a l'air d'être en 3D que
  par construction — il n'y a ni perspective ni source de lumière, juste un
  losange aplati et deux parallélogrammes cisaillés en dessous. C'est ce qui
  garde le rendu net à n'importe quel zoom, y compris à l'export PDF.

  Géométrie (valeurs du guide, à ne pas arrondir) :
  - tuile 56 × 28, losange 2:1 découpé au clip-path ;
  - hauteur de bloc 7px, les deux faces latérales ;
  - face gauche skewY(26.565deg) depuis son coin haut-gauche, luminosité 0,7 ;
  - face droite skewY(-26.565deg) depuis son coin haut-droit, luminosité 0,5 ;
  - position d'une cellule : left = (col - row) × 28, top = (col + row) × 14 ;
  - empreinte d'un agent : 2 × 2 cellules, donc 112 × 56 — son sommet tombe sur
    celui de sa cellule d'ancrage, d'où le retrait de 28 sur l'abscisse ;
  - profondeur : z-index = col + row, ce qui est derrière est dessiné d'abord.

  26,565° n'est pas arbitraire : c'est l'angle dont la tangente vaut 0,5, soit
  exactement ce qu'il faut pour qu'une face latérale rejoigne le dessus d'un
  losange 2:1 sans couture.
-->
<template>
  <div class="iso-board" :style="{ transform: `scale(${zoom})`, width: `${w}px`, height: `${h}px` }">
    <!-- Le sol : une cellule = un losange à filet, rien de plus. -->
    <div
      v-for="c in floor" :key="`f${c.col}-${c.row}`"
      class="iso-cell"
      :style="{ left: `${(c.col - c.row) * 28 + ox}px`, top: `${(c.col + c.row) * 14}px` }"
    />

    <!-- Les liens passent sous les blocs : un fil qui coupe une face casse
         immédiatement la lecture du volume. -->
    <svg v-if="wires.length" class="iso-wires" :width="w" :height="h">
      <g v-for="(l, i) in wires" :key="`w${i}`">
        <polyline :points="l.points" class="iso-wire" :class="`iso-wire-${l.kind}`" />
        <polyline
          v-if="l.kind === 'beam'" :points="l.points"
          class="iso-current" :style="{ animationDelay: `${l.delay}s` }"
        />
      </g>
    </svg>

    <div
      v-for="(a, i) in agents" :key="`a${i}`"
      class="iso-agent" :class="`is-${a.state || 'idle'}`"
      :style="{
        left: `${(a.col - a.row) * 28 + ox - 28}px`,
        top: `${(a.col + a.row) * 14}px`,
        zIndex: 10 + a.col + a.row,
        '--tint': tint(a.state),
        '--beat': `${1.4 + ((a.col * 7 + a.row * 13) % 9) * 0.12}s`,
      }"
    >
      <!-- Deux anneaux, décalés de 0,6 s : un agent qui attend une réponse
           humaine doit se voir depuis le fond de la salle. -->
      <template v-if="a.state === 'waiting'">
        <span class="iso-ping" />
        <span class="iso-ping" style="animation-delay: .6s" />
      </template>

      <div class="iso-face-l" />
      <div class="iso-face-r" />
      <div class="iso-top" />
      <div v-if="a.label" class="iso-label">{{ a.label }}</div>
    </div>

    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Agent { col: number, row: number, state?: string, label?: string }
interface Link { from: number, to: number, kind?: 'beam' | 'cable' }

const props = withDefaults(defineProps<{
  agents?: Agent[]
  links?: Link[]
  cols?: number
  rows?: number
  zoom?: number
}>(), {
  cols: 6,
  rows: 6,
  zoom: 1,
})

const agents = computed(() => props.agents ?? [])

/* Le repère isométrique produit des abscisses négatives dès que row > col :
   on décale tout le plateau pour que la cellule la plus à gauche tombe à 0. */
const ox = computed(() => (props.rows - 1) * 28)
const w = computed(() => (props.cols + props.rows) * 28)
const h = computed(() => (props.cols + props.rows) * 14 + 28)

const floor = computed(() => {
  const cells: { col: number, row: number }[] = []
  for (let col = 0; col < props.cols; col++)
    for (let row = 0; row < props.rows; row++) cells.push({ col, row })
  return cells
})

/* Centre du dessus d'un bloc de 2 × 2 cellules. */
function centre(a: Agent) {
  return [(a.col - a.row) * 28 + ox.value + 28, (a.col + a.row) * 14 + 28]
}

/* Un lien suit les axes du plateau, jamais la diagonale de l'écran : on change
   de colonne, puis de rangée. C'est ce coude qui fait lire le plateau comme un
   circuit plutôt que comme un diagramme. */
const wires = computed(() => (props.links ?? []).map((l, i) => {
  const a = agents.value[l.from]
  const b = agents.value[l.to]
  if (!a || !b)
    return null
  const [x1, y1] = centre(a)
  const [x2, y2] = centre(b)
  const [xm, ym] = centre({ col: b.col, row: a.row })
  return {
    kind: l.kind ?? 'beam',
    points: `${x1},${y1} ${xm},${ym} ${x2},${y2}`,
    // Chaque courant a son propre départ : rien ne bat à l'unisson.
    delay: ((i * 37) % 17) / 10,
  }
}).filter(Boolean) as { kind: string, points: string, delay: number }[])

function tint(state?: string) {
  return ({
    working: 'var(--iso-working)',
    error: 'var(--iso-error)',
    waiting: 'var(--iso-waiting)',
    accent: 'var(--iso-accent)',
    offline: 'var(--iso-idle)',
  } as Record<string, string>)[state ?? ''] ?? 'var(--iso-idle)'
}
</script>

<style scoped>
.iso-board {
  position: relative;
  transform-origin: top left;
}

/* Les cellules pavent le plan sans jeu : sans le retrait, elles se soudent en
   un aplat gris et la grille disparaît. 0,88 laisse un filet de vide entre
   deux losanges — c'est ce vide qui fait lire le sol comme un quadrillage. */
.iso-cell {
  position: absolute;
  width: 56px;
  height: 28px;
  background: var(--iso-floor);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  transform: scale(0.88);
}

.iso-wires {
  position: absolute;
  inset: 0;
  overflow: visible;
  pointer-events: none;
}
.iso-wire {
  fill: none;
  stroke-linejoin: round;
}
/* Le faisceau — un agent qui en appelle un autre : gaine épaisse et mate. */
.iso-wire-beam {
  stroke: var(--iso-beam);
  stroke-width: 3;
}
/* Le câble — un agent qui parle à un outil extérieur : un simple filet. */
.iso-wire-cable {
  stroke: var(--iso-cable);
  stroke-width: 1;
  stroke-dasharray: 3 3;
}
.iso-current {
  fill: none;
  stroke: var(--iso-accent);
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-dasharray: 6 16;
  animation: iso-current 1.2s linear infinite;
}
@keyframes iso-current {
  to { stroke-dashoffset: -22; }
}

.iso-agent {
  position: absolute;
  width: 112px;
  height: 56px;
}

.iso-top {
  position: absolute;
  inset: 0;
  background: var(--tint);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
}

.iso-face-l,
.iso-face-r {
  position: absolute;
  width: 56px;
  height: 7px;
  background: var(--tint);
}
.iso-face-l {
  left: 0;
  top: 28px;
  transform: skewY(26.565deg);
  transform-origin: top left;
  filter: brightness(0.7);
}
.iso-face-r {
  left: 56px;
  top: 56px;
  transform: skewY(-26.565deg);
  transform-origin: top left;
  filter: brightness(0.5);
}

/* Le libellé est une étiquette de machine : mono, 8px, chiffres tabulaires. */
.iso-label {
  position: absolute;
  left: 0;
  right: 0;
  top: 20px;
  text-align: center;
  font-family: var(--deck-mono);
  font-size: 8px;
  line-height: 1;
  letter-spacing: 0.02em;
  color: var(--iso-label);
  font-variant-numeric: tabular-nums;
}

/* ── États ────────────────────────────────────────────────────────────────
   La couleur porte l'état, le mouvement le confirme. Un bloc au repos ne
   bouge pas du tout : c'est ce qui rend les quatre autres lisibles. */

.is-working .iso-top {
  background:
    linear-gradient(115deg, transparent 40%, var(--iso-sheen) 50%, transparent 60%),
    var(--tint);
  background-size: 260% 100%, 100% 100%;
  animation: iso-sheen 4s linear infinite;
}
.is-working .iso-face-l { animation: iso-sheen-face 4s linear infinite .5s; }
.is-working .iso-face-r { animation: iso-sheen-face 4s linear infinite 1s; }
@keyframes iso-sheen {
  from { background-position: 160% 0, 0 0; }
  to { background-position: -160% 0, 0 0; }
}
@keyframes iso-sheen-face {
  0%, 100% { filter: brightness(0.7); }
  50% { filter: brightness(0.86); }
}
.is-working .iso-face-r { filter: brightness(0.5); }

.is-error .iso-top { animation: iso-pulse 0.8s var(--ease-breathe) infinite; }
@keyframes iso-pulse {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}

.iso-ping {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 112px;
  height: 56px;
  margin: -28px 0 0 -56px;
  border: 1px solid var(--iso-waiting);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation: iso-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}
@keyframes iso-ping {
  from { transform: scale(0.9); opacity: 0.7; }
  to { transform: scale(1.9); opacity: 0; }
}

.is-offline { opacity: 0.45; }

/* Réglage système respecté : les boucles s'arrêtent sur leur dernière image,
   les courants disparaissent. Le plateau doit se lire sans une seule animation
   — c'est aussi ce que voit le PDF. */
@media (prefers-reduced-motion: reduce) {
  .iso-current { display: none; }
  .is-working .iso-top,
  .is-working .iso-face-l,
  .is-working .iso-face-r,
  .is-error .iso-top,
  .iso-ping { animation: none; }
  .iso-ping { opacity: 0.35; }
}
</style>
