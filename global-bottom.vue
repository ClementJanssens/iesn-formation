<!--
  Chrome de page, présent sur les 77 slides.

  Deux filets verticaux, quatre marqueurs de 8px, un folio en mono. C'est la
  seule chose qui se répète d'un bout à l'autre du support, et c'est elle qui
  fait qu'une slide peu remplie reste composée : le texte a un bord contre
  lequel se poser au lieu de flotter au milieu du blanc.

  Le folio saute la couverture — une page de titre numérotée fait rapport.
-->
<template>
  <div class="deck-frame">
    <div class="rule" style="left: 22px" />
    <div class="rule" style="right: 22px" />

    <div class="mark" style="left: 18px; top: 18px" />
    <div class="mark" style="right: 18px; top: 18px" />
    <div class="mark" style="left: 18px; bottom: 18px" />
    <div class="mark" style="right: 18px; bottom: 18px" />

    <div v-if="$slidev.nav.currentPage > 1" class="deck-folio">
      {{ String($slidev.nav.currentPage).padStart(2, '0') }}
    </div>
  </div>
</template>
