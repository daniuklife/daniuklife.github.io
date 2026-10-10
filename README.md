# GREENSTAR — site vitrine

Site statique responsive réalisé en HTML, CSS et JavaScript, sans dépendance de build et sans coût d'hébergement obligatoire.

## Fichiers

- `index.html` : contenu et structure de la page.
- `style.css` : identité visuelle noir / vert électrique et responsive design.
- `script.js` : menu mobile, année automatique et formulaire qui prépare un email.

## Avant publication

1. **Remplacer l'email** `contact@greenstar.fr` dans `script.js` par une adresse que vous contrôlez.
2. Vérifier le nom commercial et le domaine Greenstar avant de communiquer officiellement sous ce nom.
3. Adapter les offres et les prix à votre périmètre réel de prestation.
4. Ajouter les mentions légales complètes, les coordonnées de l'éditeur, les informations d'hébergement et une politique de confidentialité adaptée.
5. Tester le formulaire, les liens, l'affichage mobile et les contrastes.

### Limite du formulaire

Le formulaire ne transmet pas de données à un serveur et ne les enregistre pas. Il ouvre l'application email de l'utilisateur via `mailto:`. Il ne fonctionnera pas comme un formulaire avec stockage ou envoi serveur si l'utilisateur n'a pas d'application email configurée. Pour un formulaire serveur, il faudra choisir et configurer un service distinct, en vérifiant ses conditions et sa politique de confidentialité.

## Tester en local

Double-cliquez sur `index.html` pour ouvrir le site dans un navigateur. Pour un meilleur confort de développement, ouvrez le dossier dans Visual Studio Code et utilisez une extension de serveur local si vous le souhaitez.

## Publier gratuitement avec GitHub Pages

1. Créez un compte sur https://github.com/ si vous n'en avez pas.
2. Créez un nouveau dépôt public, par exemple `greenstar-site`.
3. Téléversez `index.html`, `style.css`, `script.js` et ce fichier `README.md` à la racine du dépôt.
4. Dans le dépôt, ouvrez **Settings → Pages**.
5. Dans la section de déploiement, sélectionnez **Deploy from a branch**, puis `main` et `/ (root)`, puis enregistrez.
6. Attendez la fin du déploiement. GitHub affichera l'adresse publique dans la section Pages.

La disponibilité et les conditions de GitHub Pages dépendent des règles du service. Un domaine personnalisé n'est pas inclus gratuitement : utilisez d'abord l'URL fournie par GitHub Pages.

## Notes commerciales

- Les tarifs affichés sont des prix indicatifs de départ, pas des offres contractuelles définitives.
- Aucun résultat commercial n'est garanti.
- Les coûts d'outils, d'hébergement, d'API ou de services tiers ne sont pas inclus par défaut.
- Avant toute activité commerciale, vérifiez les formalités applicables à votre situation et ajoutez les informations légales requises.
