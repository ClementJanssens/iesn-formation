---
layout: section
module: 4
---

# Contexte, mémoire, délégation

<div class="opacity-50 pt-2">75 minutes · la ressource rare</div>

---
layout: default
---

# La fenêtre de contexte est un budget, pas un coffre

<div class="pt-4 grid grid-cols-2 gap-10">
<div>

**Ce qui la remplit, dans l'ordre**

<div class="pt-3 space-y-2 text-sm">
<div class="flex gap-3"><span class="text-meta w-12 whitespace-nowrap">~5 %</span><span>Les instructions système</span></div>
<div class="flex gap-3"><span class="text-meta w-12 whitespace-nowrap">~5 %</span><span>Les descriptions d'outils</span></div>
<div class="flex gap-3"><span class="text-meta w-12 whitespace-nowrap">~5 %</span><span>La demande de l'utilisateur</span></div>
<div class="flex gap-3"><span class="text-meta w-12 whitespace-nowrap">~85 %</span><span class="font-semibold">Les résultats d'outils accumulés</span></div>
</div>

<div class="pt-6 text-sm opacity-70">
Une seule requête HTTP mal découpée peut injecter 30 000 tokens de HTML dans le contexte. En un tour.
</div>

</div>
<div>

**Le point non-intuitif**

<div class="pt-3 text-sm space-y-3">

Une fenêtre d'un million de tokens ne résout pas le problème — elle le déplace.

Un modèle nourri de 400 000 tokens ne « raisonne » pas aussi bien qu'avec 20 000. L'information pertinente est noyée, l'attention se dilue, les instructions du début perdent du poids.

<div class="callout-warn">
Le contexte se gère comme un budget serré, <strong>même quand la limite technique est loin</strong>.
</div>

</div>

</div>
</div>

<!--
Analogie qui passe bien : un bureau. On peut avoir un très grand bureau,
ça ne veut pas dire qu'on travaille bien avec 400 documents ouverts dessus.

Anecdote à raconter si le temps le permet : le résultat d'outil non tronqué
est la première cause d'explosion de facture sur les agents en production.
-->

---
layout: default
---

# Quatre stratégies, dans l'ordre où on les applique

<div class="pt-4 space-y-5">

<div class="flex gap-5 items-start">
<div class="w-40 shrink-0"><span class="font-semibold text-cool">1 · Réduire</span><div class="text-xs opacity-50">à la source</div></div>
<div class="text-sm opacity-85">Tronquer et filtrer le résultat d'outil <strong>avant</strong> qu'il n'entre dans le contexte. Renvoyer 10 résultats, pas 200. Extraire le texte, pas le HTML. C'est la stratégie la plus rentable et la plus négligée.</div>
</div>

<div class="flex gap-5 items-start">
<div class="w-40 shrink-0"><span class="font-semibold text-cool">2 · Décharger</span><div class="text-xs opacity-50">hors contexte</div></div>
<div class="text-sm opacity-85">Écrire le gros volume sur disque ou en base, ne garder dans le contexte qu'une référence. L'agent relit le fichier s'il en a besoin. Le contexte redevient un index.</div>
</div>

<div class="flex gap-5 items-start">
<div class="w-40 shrink-0"><span class="font-semibold text-cool">3 · Résumer</span><div class="text-xs opacity-50">en cours de route</div></div>
<div class="text-sm opacity-85">Quand le contexte atteint un seuil, remplacer les vingt premiers tours par un résumé. On perd du détail, on gagne de la marge. À faire à des points de coupure choisis, pas au milieu d'une séquence d'outils.</div>
</div>

<div class="flex gap-5 items-start">
<div class="w-40 shrink-0"><span class="font-semibold text-cool">4 · Isoler</span><div class="text-xs opacity-50">déléguer</div></div>
<div class="text-sm opacity-85">Confier l'exploration coûteuse à un sous-agent qui a son propre contexte, et n'en ramener que la conclusion. On y vient dans trois slides.</div>
</div>

</div>

<div class="pt-6 text-sm opacity-60">
La recherche documentaire (« RAG ») n'est pas une architecture. C'est <strong>un outil</strong> au service de la stratégie 2.
</div>

---
layout: default
---

# Trois mémoires qu'il faut distinguer

<div class="pt-4 grid grid-cols-3 gap-5">

<div class="box p-5">
<div class="font-semibold pb-2">De travail</div>
<div class="eyebrow pb-3">le tableau de messages</div>
<div class="text-sm opacity-80">Ce qui s'est passé depuis le début de <em>cette</em> tâche. Disparaît à la fin. C'est ce qu'on gère avec les quatre stratégies précédentes.</div>
</div>

<div class="box p-5">
<div class="font-semibold pb-2">Persistante</div>
<div class="eyebrow pb-3">des faits durables</div>
<div class="text-sm opacity-80">« Ce cours compte 12 séances. » « Cette personne veut ses réponses en français. » Petit, stable, réinjecté à chaque session. Se range dans une base ou un fichier.</div>
</div>

<div class="box p-5">
<div class="font-semibold pb-2">Procédurale</div>
<div class="eyebrow pb-3">des façons de faire</div>
<div class="text-sm opacity-80">« Pour préparer une séance, commencer par relire les objectifs, puis… » Long, chargé <em>seulement</em> quand c'est pertinent. C'est un mode d'emploi, pas un fait.</div>
</div>

</div>

<div class="pt-8 text-sm opacity-75 max-w-3xl">
La distinction n'est pas cosmétique : elle détermine <strong>quand</strong> chaque chose entre dans le contexte. Un fait durable est toujours là. Une procédure ne se charge qu'au moment où on en a besoin — sinon elle mange le budget pour rien.
</div>

---
layout: default
---

# L'agent qui apprend de ses exécutions

<div class="pt-2 grid grid-cols-2 gap-10">
<div>

**Le mécanisme**

<div class="text-sm space-y-3 pt-2">

L'agent termine une tâche non triviale. Il écrit la marche à suivre dans un fichier, sous forme de procédure réutilisable. La fois suivante, il la charge au lieu de réinventer.

Certains systèmes vont plus loin : les corrections répétées de l'utilisateur deviennent des entrées de mémoire persistante, et les écritures peuvent être **soumises à validation** avant d'affecter les sessions futures.

C'est la boucle d'apprentissage : *faire → constater → écrire → recharger*.

</div>

</div>
<div>

**Ce qu'il faut regarder de près**

<div class="text-sm space-y-3 pt-2">

<div><strong>La qualité de l'écriture.</strong> Une procédure apprise d'un cas particulier et appliquée à un cas général produit des erreurs confiantes.</div>

<div><strong>L'accumulation.</strong> Sans élagage, la bibliothèque de procédures devient un bruit qui coûte du contexte à chaque session.</div>

<div><strong>La validation.</strong> Un agent qui écrit sa propre mémoire sans relecture humaine peut consolider une erreur pour de bon.</div>

<div class="pt-1 opacity-70">C'est un des sujets ouverts les plus intéressants de 2026 — et un excellent objet de mémoire de fin d'études.</div>

</div>

</div>
</div>

<!--
Signaler que plusieurs projets, open source comme propriétaires, explorent cette voie
avec des approches différentes. L'intérêt pédagogique ici n'est pas l'outil,
c'est la question : qu'est-ce qu'un système a le droit d'apprendre tout seul,
et qui relit ?

C'est un pont naturel vers le module 6 (la fac) — un vrai sujet de recherche accessible.
-->

---
layout: default
---

# Les sous-agents : déléguer pour isoler

```mermaid {scale: 1.3}
flowchart LR
  P["<b>Agent principal</b><br>contexte : 12 k tokens"] -->|"« explore le corpus »"| S["<b>Sous-agent</b><br>contexte : 180 k tokens<br>fenêtre neuve"]
  S -->|"résumé : 600 tokens"| P
  classDef s1 fill:#eef7fa,stroke:#2c8aa4,color:#111111,stroke-width:1.5px
  classDef s2 fill:#fdf7ec,stroke:#a5762f,color:#111111,stroke-width:1.5px
  class P s1
  class S s2
```

<div class="pt-6 grid grid-cols-2 gap-10 text-sm">
<div>

**L'idée**

Le sous-agent démarre avec une fenêtre vierge, brûle autant de tokens qu'il veut, et ne remonte qu'une conclusion. Le parent ne voit jamais les 180 000 tokens — seulement les 600.

C'est la seule façon de faire de l'exploration lourde sans détruire la cohérence de l'agent principal.

</div>
<div>

**Ce qu'on y perd**

Le parent ne peut plus juger la démarche, seulement le résumé. Si le sous-agent s'est trompé, l'erreur remonte proprement formatée et devient très difficile à repérer.

La délégation est un **échange** : de la place contre de la traçabilité.

</div>
</div>

<!--
Le point sur la traçabilité est important et rarement dit. Un résumé de sous-agent
qui contient une erreur est plus dangereux qu'une trace brute qui contient la même erreur,
parce qu'il a l'air propre.

Bonne pratique : conserver la trace complète du sous-agent dans les logs même si
le parent ne reçoit que le résumé. Ça coûte du stockage, pas du contexte.
-->

---
layout: default
---

# Multi-agents : quand ça aide, quand ça nuit

<div class="pt-4 grid grid-cols-2 gap-8">
<div>

## <span class="text-ok">Ça aide quand</span>

<div class="text-sm space-y-2 pt-2">
<div>Les sous-tâches sont <strong>vraiment indépendantes</strong> et vérifiables séparément</div>
<div>Chaque agent a un périmètre d'outils <strong>différent</strong>, donc des droits différents</div>
<div>L'exploration est coûteuse en contexte et sa conclusion est courte</div>
<div>Vous voulez plusieurs avis divergents sur le même objet</div>
</div>

</div>
<div>

## <span class="text-bad">Ça nuit quand</span>

<div class="text-sm space-y-2 pt-2">
<div>Les agents doivent se coordonner en continu — le coût de coordination dépasse le gain</div>
<div>Une même information doit être partagée par tous : elle est alors payée <em>n</em> fois</div>
<div>Vous cherchez à corriger un mauvais agent en en ajoutant un deuxième</div>
<div>Personne ne peut dire, après coup, <strong>lequel</strong> s'est trompé</div>
</div>

</div>
</div>

<div v-click class="pt-8 callout">
Le multi-agents n'est pas un niveau supérieur de sophistication. C'est un <strong>compromis</strong>, à prendre quand l'isolation de contexte ou de droits le justifie — et à refuser le reste du temps.
</div>

---
layout: default
---

# Ce qu'il faut retenir du module 4

<div class="pt-6 space-y-4 text-lg">
<v-clicks>

<div class="flex gap-4"><span class="text-accent font-bold">1</span><div>Le contexte est un <strong>budget serré</strong>, même quand la fenêtre est immense.</div></div>

<div class="flex gap-4"><span class="text-accent font-bold">2</span><div>Réduire à la source bat tout le reste. <strong>Tronquez les résultats d'outils.</strong></div></div>

<div class="flex gap-4"><span class="text-accent font-bold">3</span><div>Trois mémoires distinctes : de travail, persistante, procédurale. Elles n'entrent pas dans le contexte au même moment.</div></div>

<div class="flex gap-4"><span class="text-accent font-bold">4</span><div>Déléguer, c'est échanger <strong>de la place contre de la traçabilité</strong>. Gardez les traces même si le parent ne les lit pas.</div></div>

</v-clicks>
</div>

<div class="pt-10 opacity-50 text-sm">Pause 15 minutes. Ensuite : ce qui casse quand on met tout ça en production.</div>
