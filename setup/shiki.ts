/* « vitesse-light » : faible saturation, contraste franc sur blanc, et surtout
   peu de teintes — cohérent avec la règle « une seule couleur saturée à
   l'écran », et sans concurrencer le système sémantique du support (si la
   syntaxe est bariolée, la salle se met à y lire du sens).

   Son fond natif est blanc. On le repeint en #f6f6f6 dans style.css pour que
   le bloc se détache de la page par un écart de valeur, doublé d'un filet.

   Forme à un seul thème, pas `themes: { dark, light }` : cette dernière force
   `defaultColor: false` dans resolveShikiOptions, ce qui fait passer chaque
   jeton par des variables CSS — du poids mort quand le schéma est verrouillé. */

export default () => ({
  theme: 'vitesse-light',
})
