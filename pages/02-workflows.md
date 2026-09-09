---
layout: section
module: 2
---

# Les cinq patterns d'orchestration

<div class="opacity-50 pt-2">75 minutes · le graphe est écrit par vous</div>

---
layout: default
---

# Le principe du workflow

<div class="text-xl pt-2 pb-6">
Vous écrivez le graphe. Le modèle remplit les cases.
</div>

<div class="grid grid-cols-2 gap-10">
<div>

**Ce que vous gardez**

- L'ordre des étapes
- Les conditions de passage
- Le nombre d'appels au modèle, donc le coût
- La capacité à rejouer une exécution à l'identique
- Un point de reprise après panne

</div>
<div>

**Ce que vous déléguez**

- Le contenu de chaque étape
- La compréhension du langage naturel
- La classification, l'extraction, la rédaction

</div>
</div>

<div v-click class="pt-8 callout-cool">
Cinq patterns couvrent la quasi-totalité des cas réels. Ils se combinent : un vrai système en empile généralement deux ou trois.
</div>

<!--
Bien poser que ces cinq patterns ne sont pas une taxonomie académique mais un
vocabulaire d'atelier. L'intérêt est de pouvoir dire "ça c'est du routage" en réunion
et que tout le monde voie la même chose.
-->

---
layout: default
---

# 1 · Chaînage séquentiel

<div class="grid grid-cols-[1.05fr_1fr] gap-7 pt-1 compact">
<div>

```mermaid {scale: 0.85}
flowchart LR
  I([Entrée]) --> A["Étape 1<br>générer"] --> G{"contrôle"}
  G -->|ok| B["Étape 2<br>transformer"] --> C["Étape 3<br>formater"] --> O([Sortie])
  G -->|non| A
```

```ts
const brouillon = await generate(
  "Rédige un énoncé d'exercice sur " + sujet)

// contrôle déterministe, sans modèle
const ok = brouillon.length > 200
        && brouillon.includes("Consigne")

const final = await generate(
  "Reformule pour un bachelier 2 : " + brouillon)
```

</div>
<div class="text-sm space-y-3 pt-1">

**Quand** — la séquence est connue d'avance et ne change pas selon l'entrée.

**À la fac** — produire un énoncé, en vérifier le niveau, puis générer le corrigé.

**Le piège** — l'erreur de l'étape 1 est amplifiée par l'étape 3. Mettez des contrôles **déterministes** entre les maillons, pas un second modèle qui hallucine son accord.

**Coût** — parfaitement prévisible : *n* étapes, *n* appels.

</div>
</div>

<!--
Le contrôle entre étapes est le vrai apport du pattern. Un chaînage sans contrôle,
c'est juste un prompt plus long, et souvent moins bon.
-->

---
layout: default
---

# 2 · Routage

<div class="grid grid-cols-[1.05fr_1fr] gap-7 pt-1 compact">
<div>

```mermaid {scale: 0.8}
flowchart LR
  I([Requête]) --> R{"Classifier<br>(petit modèle)"}
  R -->|administratif| A["Réponse type"]
  R -->|pédagogique| B["Modèle large<br>+ syllabus"]
  R -->|doute| C["Escalade<br>humaine"]
```

```ts
const { categorie, confiance } = await generateObject({
  model: petitModele,           // rapide, peu cher
  schema: z.object({
    categorie: z.enum([
      "administratif", "pedagogique", "technique"]),
    confiance: z.number().min(0).max(1),
  }),
  prompt: mail,
})

if (confiance < 0.7) return escaladeHumaine(mail)
```

</div>
<div class="text-sm space-y-3 pt-1">

**Quand** — les entrées sont hétérogènes et appellent des traitements franchement différents.

**À la fac** — le flux de mails entrants d'un secrétariat, trié avant d'atterrir chez quelqu'un.

**Le levier économique** — un petit modèle classe, un grand ne traite que ce qui le mérite. Souvent une division du coût par cinq.

**À ne pas oublier** — la route « je ne sais pas ». Un routeur sans porte de sortie envoie de travers avec aplomb.

</div>
</div>

<!--
Le score de confiance n'est pas une probabilité calibrée, c'est une auto-évaluation.
Utile comme signal relatif, jamais comme garantie. Le seuil se règle empiriquement
sur un jeu de cas réels.
-->

---
layout: default
---

# 3 · Parallélisation

<div class="grid grid-cols-[1.05fr_1fr] gap-7 pt-1 compact">
<div>

```mermaid {scale: 0.8}
flowchart LR
  I([Mémoire]) --> A["Lecture<br>méthodologie"]
  I --> B["Lecture<br>sources"]
  I --> C["Lecture<br>forme"]
  A --> S["Agrégation"]
  B --> S
  C --> S
  S --> O([Grille])
```

```ts
const [methodo, sources, forme] = await Promise.all([
  lire(texte, "rigueur méthodologique"),
  lire(texte, "qualité et actualité des sources"),
  lire(texte, "structure et langue"),
])

const synthese = await generate(
  "Consolide ces trois relectures : " + ...)
```

</div>
<div class="text-sm space-y-3 pt-1">

**Quand** — plusieurs regards indépendants sur un même objet, ou des sous-tâches sans dépendance.

**À la fac** — pré-relecture d'un mémoire selon trois axes distincts, avant lecture humaine.

**Pourquoi c'est mieux qu'un seul prompt** — un modèle à qui on demande trois choses en fait deux bien et une mal. Trois contextes séparés, trois attentions pleines.

**Le coût** — il se paie en argent, pas en temps. Trois appels simultanés, une seule latence.

**Le vrai travail** est dans l'agrégation : trois avis qui se contredisent, il faut décider qui tranche.

</div>
</div>

---
layout: default
---

# 4 · Orchestrateur et exécutants

<div class="grid grid-cols-[0.9fr_1.1fr] gap-7 pt-1">
<div>

```mermaid {scale: 0.9}
flowchart TD
  I([Objectif]) --> O["<b>Orchestrateur</b><br>découpe la tâche"]
  O --> W1["Exécutant A"]
  O --> W2["Exécutant B"]
  O --> W3["Exécutant C"]
  W1 --> M["Consolidation"]
  W2 --> M
  W3 --> M
  M -->|incomplet| O
  M -->|complet| F([Résultat])
```

</div>
<div class="text-sm space-y-3 pt-2">

**La différence avec la parallélisation** — ici **le modèle décide** du découpage. Vous ne connaissiez à l'avance ni le nombre ni la nature des sous-tâches. C'est le premier pattern vraiment agentique de la liste : le curseur vient de se déplacer.

**À la fac** — « construis le syllabus d'un cours de 12 séances sur *X* » : l'orchestrateur décide qu'il faut douze exécutants, un par séance, plus un pour la bibliographie.

**Le piège** — l'orchestrateur ne voit pas ce que font les exécutants pendant qu'ils travaillent. S'il a mal découpé, il ne le découvre qu'à la fin, après avoir tout payé.

**Le garde-fou** — plafonner le nombre d'exécutants, et faire valider le plan **avant** de lancer.

</div>
</div>

<!--
"Faire valider le plan avant de lancer" est un pattern à part entière : plan-then-execute.
Un humain, ou un contrôle déterministe, approuve le découpage. Ça coûte une interruption
et ça évite de payer quarante sous-tâches sur un mauvais plan.
-->

---
layout: default
---

# 5 · Évaluateur et optimiseur

<div class="grid grid-cols-[1.05fr_1fr] gap-7 pt-1 compact">
<div>

```mermaid {scale: 0.8}
flowchart LR
  I([Entrée]) --> G["Produire"]
  G --> E{"Évaluer"}
  E -->|"< seuil et<br>tours restants"| R["Corriger"]
  R --> G
  E -->|"seuil atteint<br>ou budget épuisé"| O([Sortie])
```

```ts
let sortie = await produire(entree)

for (let i = 0; i < 3; i++) {
  const { score, retour } = await evaluer(sortie)
  if (score >= 0.8) break
  sortie = await corriger(sortie, retour)
}
// on sort TOUJOURS, avec ou sans le seuil
```

</div>
<div class="text-sm space-y-3 pt-1">

**Quand** — il existe un critère de qualité exprimable, et une seconde passe améliore réellement.

**À la fac** — traduire un support de cours en vérifiant que la terminologie du domaine est respectée.

**La condition de validité** — l'évaluateur doit être **plus fiable que le producteur** sur ce critère. Sinon vous itérez vers son biais.

**Toujours** — un budget d'itérations. Une boucle qualité sans plafond est une facture sans plafond.

Un évaluateur **déterministe** (tests, schéma, compilation) bat un évaluateur-modèle chaque fois qu'il est possible.

</div>
</div>

<!--
Le point "plus fiable que le producteur" est subtil et important. Si le même modèle
produit et évalue avec un prompt à peine différent, on obtient surtout de la confirmation.
Ce qui marche : un évaluateur différent, ou un critère vérifiable mécaniquement.
-->

---
layout: default
---

# Choisir : la grille

| Vous êtes dans ce cas | Le pattern |
|---|---|
| La séquence est connue et fixe | **Chaînage** |
| Les entrées sont hétérogènes | **Routage** |
| Plusieurs angles sur un même objet | **Parallélisation** |
| Le découpage dépend de l'entrée | **Orchestrateur / exécutants** |
| Il existe un critère de qualité vérifiable | **Évaluateur / optimiseur** |
| Vous ne savez pas dire les étapes à l'avance | **Agent** — module 3 |
| Vous savez dire les étapes, et il n'y a pas de langage naturel | **Ni l'un ni l'autre.** Écrivez le code. |

<div v-click class="pt-6 callout-bad text-sm">
La dernière ligne est celle qu'on oublie. Un <code>if</code> qui coûte zéro milliseconde et se teste au unitaire vaut mieux qu'un appel de modèle qui coûte 200 ms, deux centimes, et se trompe une fois sur cinquante.
</div>

---
layout: default
---

# Trois anti-patterns qu'on voit tout le temps

<div class="pt-4 space-y-6">
<v-clicks>

<div class="rail-bad">
<div class="font-semibold">« Un agent pour tout »</div>
<div class="opacity-70 text-sm pt-1">On donne 30 outils à un modèle et on espère. Résultat : il en utilise 5, se trompe d'outil, boucle. Un système d'agents se conçoit comme un organigramme — des rôles étroits, des périmètres clairs.</div>
</div>

<div class="rail-bad">
<div class="font-semibold">Le modèle comme colle</div>
<div class="opacity-70 text-sm pt-1">Un appel de modèle pour reformater un JSON, extraire une date, choisir entre deux branches booléennes. C'est cher, lent, et non déterministe pour un travail que du code fait parfaitement.</div>
</div>

<div class="rail-bad">
<div class="font-semibold">Le prompt géant</div>
<div class="opacity-70 text-sm pt-1">Trois pages d'instructions qui décrivent un enchaînement d'étapes. Si vous êtes capable d'écrire la séquence dans le prompt, vous êtes capable de l'écrire en code — et là, elle sera respectée.</div>
</div>

</v-clicks>
</div>

<!--
Le troisième est le plus fréquent chez les gens qui débutent, parce que c'est le plus
facile à écrire. Reformulation à donner : "si tu peux le décrire, code-le ;
garde le modèle pour ce que tu ne peux pas décrire".
-->

---
layout: default
---

# Ce qu'il faut retenir du module 2

<div class="pt-6 space-y-4 text-lg">
<v-clicks>

<div class="flex gap-4"><span class="text-accent font-bold">1</span><div>Cinq patterns, et ils se combinent : <strong>chaînage, routage, parallélisation, orchestrateur/exécutants, évaluateur/optimiseur</strong>.</div></div>

<div class="flex gap-4"><span class="text-accent font-bold">2</span><div>Dans un workflow, le coût et le comportement sont <strong>prévisibles</strong>. C'est sa valeur principale.</div></div>

<div class="flex gap-4"><span class="text-accent font-bold">3</span><div>Un contrôle <strong>déterministe</strong> entre deux étapes vaut mieux qu'un second modèle qui valide le premier.</div></div>

<div class="flex gap-4"><span class="text-accent font-bold">4</span><div>Si vous savez énoncer les étapes, <strong>écrivez-les</strong> — dans le code, pas dans le prompt.</div></div>

</v-clicks>
</div>

<div class="pt-10 opacity-50 text-sm">Déjeuner. Cet après-midi : ce qui se passe quand on retire le graphe.</div>
