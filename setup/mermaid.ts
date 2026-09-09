/* Deux contraintes de Slidev dictent la forme de ce fichier :

   1. Le `theme` renvoyé ici n'est pas fiable. modules/mermaid.ts fait
      `initialize({ ...setupMermaid(), ...clearUndefined(options) })` et
      Mermaid.vue passe `theme: isDark ? 'dark' : undefined` dans `options`.
      En schéma clair la clé est `undefined`, donc retirée par clearUndefined —
      c'est le `theme: 'default'` du client qui s'applique, et c'est ce qu'on
      veut. On ne le redéfinit pas : en sombre il serait écrasé de toute façon.
      `themeVariables` et `themeCSS`, eux, survivent dans les deux cas.

   2. Les diagrammes sont rendus dans un ShadowRoot. Aucune CSS externe ne les
      atteint : tout passe par themeVariables et themeCSS. C'est aussi le seul
      moyen de porter le rayon de 6px dans les diagrammes, mermaid n'ayant pas
      de variable pour ça. */

export default () => ({
  fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
  flowchart: {
    curve: 'basis',
    htmlLabels: true,
    useMaxWidth: true,
    padding: 8,
    nodeSpacing: 36,
    rankSpacing: 44,
  },
  themeVariables: {
    darkMode: false,
    background: '#ffffff',
    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
    fontSize: '15px',

    mainBkg: '#f8f8f8',
    nodeBorder: '#c9c9c9',
    nodeTextColor: '#111111',
    textColor: '#111111',
    titleColor: '#111111',

    primaryColor: '#f8f8f8',
    primaryTextColor: '#111111',
    primaryBorderColor: '#c9c9c9',
    secondaryColor: '#f6f6f6',
    secondaryTextColor: '#111111',
    secondaryBorderColor: '#c9c9c9',
    tertiaryColor: '#f8f8f8',
    tertiaryTextColor: '#414141',
    tertiaryBorderColor: '#e2e2e2',

    /* Les arêtes sont un cran sous les bordures de nœud : le graphe se lit
       nœuds d'abord, connexions ensuite. */
    lineColor: '#9a9a9a',
    arrowheadColor: '#616161',

    /* Les libellés d'arête sont posés sur le fond, pas sur une plaque. */
    edgeLabelBackground: '#ffffff',
    labelBackground: '#ffffff',
    labelTextColor: '#616161',
    labelBoxBkgColor: '#f8f8f8',
    labelBoxBorderColor: '#c9c9c9',

    clusterBkg: '#fafafa',
    clusterBorder: '#e2e2e2',
    border1: '#c9c9c9',
    border2: '#e2e2e2',

    noteBkgColor: '#f6f6f6',
    noteTextColor: '#414141',
    noteBorderColor: '#c9c9c9',
  },
  themeCSS: `
    .label, .nodeLabel, .edgeLabel {
      font-family: Inter, ui-sans-serif, system-ui, sans-serif;
      font-weight: 400;
      letter-spacing: -0.005em;
    }
    .nodeLabel b, .nodeLabel strong { font-weight: 500; }
    .node rect, .node polygon, .node path, .basic.label-container {
      stroke-width: 1px; rx: 6px; ry: 6px;
    }
    .cluster rect { stroke-width: 1px; rx: 10px; ry: 10px; }
    .edgePath .path, .flowchart-link { stroke-width: 1.25px; }
    .edgeLabel rect, .edgeLabel .label rect { fill: #ffffff; }
    .edgeLabel foreignObject div, .edgeLabel span.edgeLabel {
      background: #ffffff !important; color: #616161; font-size: 12px;
    }
    .marker, .marker path { fill: #616161 !important; stroke: #616161 !important; }
  `,
})
