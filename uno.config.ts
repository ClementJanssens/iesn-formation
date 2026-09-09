/* Palette et vocabulaire visuel du support.
   Slidev fusionne ce fichier avec sa propre config UnoCSS (racine utilisateur
   en dernier), donc tout ce qui est ici étend les utilitaires existants.

   Deux principes gouvernent les valeurs :
   - une surface se distingue par un écart de valeur + un filet 1px, jamais par une ombre ;
   - les cinq couleurs sémantiques sont redescendues en luminosité pour le papier,
     en gardant leur teinte d'origine. Elles se retrouvent toutes entre 5,7:1 et
     5,9:1 sur blanc : aucune ne crie plus fort qu'une autre, le sens vient de la
     teinte, pas de la luminosité. */

/* Objet nu plutôt que defineConfig() : unocss n'est pas hissé dans
   node_modules à la racine, et setupUnocss ne lit que l'export par défaut. */
export default {
  theme: {
    colors: {
      paper: '#ffffff',
      surface: { 1: '#f8f8f8', 2: '#f6f6f6', 3: '#eeeeee', 4: '#e6e6e6' },
      hairline: { DEFAULT: '#e2e2e2', strong: '#c9c9c9', faint: '#ededed' },

      // texte : t4 est sous le seuil de lisibilité, réservé au décoratif
      t1: '#111111', // 18.88:1
      t2: '#414141', // 10.21:1
      t3: '#616161', //  6.19:1
      t4: '#828282', //  3.84:1

      accent: {
        DEFAULT: '#4d34f7', //  6.67:1 — sur papier, le violet plein est sûr en texte
        rule: '#4d34f7',    //  filets de 2px
        core: '#220fa0',    // 12.77:1 — marques les plus fortes
        wash: '#f3f1fe',
        // Ces deux-là ne touchent jamais du texte : ils ne servent qu'aux
        // dégradés et aux faisceaux, où le contraste ne se mesure pas.
        light: '#b7a8ff',
        deep: '#220fa0',
      },

      ok: { DEFAULT: '#15754a', rule: '#2f8d63', wash: '#f0f8f4' },
      warn: { DEFAULT: '#8a5a10', rule: '#a5762f', wash: '#fdf7ec' },
      bad: { DEFAULT: '#b8332c', rule: '#c8564e', wash: '#fdf2f1' },
      cool: { DEFAULT: '#0f6f88', rule: '#2c8aa4', wash: '#eef7fa' },
      info: '#57575f',
    },
    borderRadius: { xs: '6px', sm: '8px', md: '10px', lg: '14px' },
  },

  shortcuts: {
    // Les raccourcis de Slidev pointent vers #121212 / #ddd : on les redirige.
    'bg-main': 'bg-paper',
    'text-main': 'text-t1',
    'border-main': 'border-hairline',
    'bg-active': 'bg-black/5',

    // Typographie
    'eyebrow': 'text-[11px] font-600 uppercase tracking-[0.12em] leading-[1.2] text-t3',
    'kicker': 'text-[1.0625rem] leading-snug text-t3',
    'text-meta': 'text-[13px] leading-[1.4] text-t3 tabular-nums',
    // Le registre machine : tout ce qui se lit comme une valeur plutôt que
    // comme une phrase passe en mono. C'est le partage des deux familles qui
    // donne sa texture au support, plus que n'importe quelle couleur.
    'mono-value': 'font-mono tabular-nums tracking-[0.01em]',
    'chip': 'inline-block px-1.5 py-[1px] rounded-xs bg-surface-4 text-t2 text-[0.8em] leading-[1.5]',

    // Encadré à filet gauche : un lavis + un trait de 2px coloré.
    'callout': 'px-5 py-3 rounded-r-xs bg-surface-1 border-l-2 border-hairline-strong',
    'callout-note': 'px-5 py-3 rounded-r-xs bg-accent-wash border-l-2 border-accent-rule',
    'callout-warn': 'px-5 py-3 rounded-r-xs bg-warn-wash border-l-2 border-warn-rule',
    'callout-bad': 'px-5 py-3 rounded-r-xs bg-bad-wash border-l-2 border-bad-rule',
    'callout-cool': 'px-5 py-3 rounded-r-xs bg-cool-wash border-l-2 border-cool-rule',
    'callout-ok': 'px-5 py-3 rounded-r-xs bg-ok-wash border-l-2 border-ok-rule',

    // Empilement de libellés : sans lavis, sinon trois d'affilée lisent comme trois boîtes.
    'rail': 'pl-5 border-l-2 border-hairline',
    'rail-bad': 'pl-5 border-l-2 border-bad-rule',

    // Carte à filet haut
    'card': 'pt-3 border-t-2 border-hairline-strong',
    'card-ok': 'pt-3 border-t-2 border-ok-rule',
    'card-warn': 'pt-3 border-t-2 border-warn-rule',
    'card-bad': 'pt-3 border-t-2 border-bad-rule',

    // Boîte fermée. L'emphase vient du contraste du filet, pas de son épaisseur.
    'box': 'p-4 rounded-md bg-surface-1 border border-hairline',
    'box-bad': 'p-4 rounded-md bg-bad-wash border border-bad-rule',
    'box-strong': 'p-4 rounded-md bg-surface-1 border border-hairline-strong',
    'box-strong-bad': 'p-4 rounded-md bg-bad-wash border border-bad-rule',

    'rule-h': 'h-px w-full bg-hairline',
    'rule-v': 'w-px self-stretch bg-hairline',
  },
}
