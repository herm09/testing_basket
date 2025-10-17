## 🧩 **Examen – Développement piloté par les tests (TDD)**

**Durée :** 1 heure
**Total :** 100 points

---

### 🧠 **Partie 1 – Compréhension rapide (15 points, ~10 min)**

**1.** En une ou deux phrases, expliquez le principe du TDD et ses trois étapes clés. *(5 pts)*

Le TDD est une méthode de développement où le but est d'écrire des tests automatisées qui échouent puis le code minimal afin de le faire marcher et ensuite de refactoriser le code. Il suit un cycle rouge, vert et bleu.

Les 3 étapes clés sont tout d'abord de faire des tests qui échouent au début. Ensuite, il ne faut pas écrire plus d'un test à la fois pour ne pas avoir à corriger tous les bugs en même temps. Et enfin, il ne faut pas écrire trop de code, de rajouter des choses pas utiles.

**2.** Citez deux avantages concrets du TDD. *(5 pts)*

Le TDD permets de réduire les bugs car les tests garantissent que les fonctionnalités soient validées.
Le TDD permet également un code plus propre car le cycle est là pour inciter à écrire un code clair.

**3.** Quelle est la différence entre un fake et un stub ? Donnez un exemple rapide. *(5 pts)*

La différence entre un fake et un stub va être le niveau de complexité et le comportement. Un stub est un objet simplifié qui renvoie des valeurs prédéfinies afin que le test s'éxecute. Un fake est une implémentation simplifiée d'un composant existant.
Par exemple, pour le stub, getUserEmail() renverra toujours "test@gmail.com" alors que fake aura une fausse base de données en mémoire qui stockera des utilisateurs pour simuler un vrai stockage sans avoir à utiliser une vraie base de données.

---

### 💻 **Partie 2 – Cas pratique : gestion de panier e-commerce (85 points, ~50 min)**

#### **Contexte :**

Vous développez un système qui permet d’ajouter des produits et de calculer le total du panier.
Chaque produit a un nom et un prix. Le panier doit appliquer une **réduction de 10 %** si le total dépasse **100 €**.

---

#### **Objectif :**

Mettre en œuvre le cycle **TDD complet** pour cette fonctionnalité.

---


Le panier doit permettre :

- d’ajouter des produits (nom + prix),
- de calculer le total du panier,
- d’appliquer une réduction de 10 % si le total dépasse 100 €,
- et de renvoyer un total exact dans tous les cas.

Vous devez produire :

1. Les tests unitaires nécessaires pour valider le comportement attendu.
2. Le code correspondant (implémentation complète et propre).
3. Un code final refactorisé, lisible et cohérent.
4. Expliquez en quelques lignes comment vous intégreriez ces tests dans un pipeline CI/CD.

---

### 🧾 **Barème récapitulatif**

| Partie    | Description             |  Points |
| :-------- | :---------------------- | :-----: |
| 1         | Compréhension rapide    |    15   |
| 2.1       | Rédaction des tests     |    25   |
| 2.2       | Implémentation minimale |    25   |
| 2.3       | Refactoring             |    25   |
| 2.4       | Intégration continue    |    10   |
| **Total** |                         | **100** |