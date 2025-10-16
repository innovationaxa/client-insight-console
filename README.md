# Salesforce Client Shell - IA Panel

Interface de type Salesforce pour la gestion de fiches clients avec panneau d'assistance IA intégré.

## 🆕 Version statique HTML / CSS / JavaScript

La branche `html-static` fournit une traduction complète de l'interface en fichiers HTML, CSS et JavaScript natifs.

- 📁 Code source : [`static-site/`](static-site/)
- ▶️ Utilisation : ouvrir `static-site/index.html` dans un navigateur moderne ou servir le dossier avec n'importe quel serveur HTTP.
- 🧠 Fonctionnalités : onglets, filtres, panneau Genesys, recommandations IA et ajout d'interactions fonctionnent sans dépendances externes.

> Astuce : pour un aperçu rapide, exécuter `npx serve static-site` ou `python -m http.server --directory static-site`.

![Screenshot](docs/screenshot.png)

## 🎯 Objectif du projet

Ce projet fournit une base front statique reproduisant la structure visuelle d'une "fiche client" Salesforce, avec un panneau latéral droit dédié aux outils IA (résumés, suggestions, KYC, pistes commerciales). Conçu pour être facilement intégré avec des APIs backend lors d'un hackathon ou d'un POC.

## 🚀 Démarrage rapide

### Prérequis
- Node.js 18+ et npm
- ou Python 3 pour un serveur local simple

### Installation

```bash
# Cloner le repository
git clone https://github.com/YOUR_USERNAME/salesforce-client-shell-ia-panel.git
cd salesforce-client-shell-ia-panel

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:8080`

## 📁 Structure du projet

```
salesforce-client-shell-ia-panel/
├── src/
│   ├── components/
│   │   ├── SalesforceHeader.tsx      # Header avec navigation
│   │   ├── AccountCard.tsx           # Carte compte client (gauche)
│   │   ├── InteractionsPanel.tsx     # Panneau interactions (gauche)
│   │   ├── AccountDetails.tsx        # Détails compte avec onglets (centre)
│   │   └── AIAssistantPanel.tsx      # Panneau IA sticky (droite)
│   ├── pages/
│   │   └── Index.tsx                 # Page principale
│   ├── index.css                     # Design system (CSS variables)
│   └── main.tsx                      # Point d'entrée
├── public/                           # Assets statiques
├── docs/
│   └── architecture.md               # Documentation technique
└── README.md
```

## 🎨 Design System

Le projet utilise un système de design basé sur des CSS variables définies dans `src/index.css` :

### Couleurs principales
- **Primary** : `#0176d3` (Bleu Salesforce)
- **Accent** : `#7f3ddb` (Violet IA)
- **Success** : `#16a34a`
- **Warning** : `#f59e0b`
- **Danger** : `#ef4444`

### Composants
- Cards avec ombre portée légère
- Accordéons avec transitions fluides
- Badges colorés selon le statut
- Progress bars pour KYC et confiance
- Sticky right panel (reste visible au scroll)

## 🔌 Intégration API

### IDs et sélecteurs pour scripts

Le HTML est structuré avec des IDs stables pour faciliter l'intégration :

#### Zones principales
- `#app` - Racine de l'application
- `#app-header` - Header
- `#col-left` - Colonne gauche
- `#col-center` - Colonne centrale
- `#col-right` - Panneau IA (droite)

#### Panneau IA
- `#ai-panel` - Conteneur principal
- `#ai-summary` - Synthèse fiche client
- `#ai-household` - Situation du foyer
- `#ai-profile` - Profil client
- `#ai-kyc` - Complétude KYC
- `#ai-next-best-actions` - Pistes commerciales
- `#ai-console` - Console d'entrée IA
- `#ai-history` - Historique

#### Boutons d'action
- `#btn-summary-refresh` - Rafraîchir synthèse
- `#btn-kyc-request` - Demander pièce KYC
- `#btn-nba-generate` - Générer pistes commerciales

### Attributs data-slot

Chaque section IA possède un attribut `data-slot` pour injection JSON :

```html
<div id="ai-summary" data-slot="summary">...</div>
<div id="ai-household" data-slot="household">...</div>
<div id="ai-profile" data-slot="profile">...</div>
<div id="ai-kyc" data-slot="kyc">...</div>
<div id="ai-next-best-actions" data-slot="next-best-actions">...</div>
```

### Fonctions d'intégration (à implémenter)

Les fonctions suivantes sont prêtes à être connectées à vos APIs :

```typescript
// Appels API (à implémenter)
async function fetchAISummary(accountId: string) {
  // TODO: remplacer par votre endpoint
  // GET /api/ai/summary/{accountId}
}

async function fetchAIHousehold(accountId: string) {
  // TODO: remplacer par votre endpoint
  // GET /api/ai/household/{accountId}
}

async function fetchAIProfile(accountId: string) {
  // TODO: remplacer par votre endpoint
  // GET /api/ai/profile/{accountId}
}

async function fetchAIKYCStatus(accountId: string) {
  // TODO: remplacer par votre endpoint
  // GET /api/ai/kyc/{accountId}
}

async function fetchNextBestActions(accountId: string) {
  // TODO: remplacer par votre endpoint
  // GET /api/ai/next-best-actions/{accountId}
}

// Rendu des données (acceptent du JSON)
function renderSummary(json: any) {
  const element = document.querySelector('#ai-summary [data-slot="summary"]');
  // Injecter le contenu
}

// ... autres fonctions de rendu
```

### Format JSON attendu

#### Synthèse (`/api/ai/summary/{accountId}`)
```json
{
  "summary": "Sylviane Dupond a 41 ans...",
  "confidence": 87
}
```

#### Situation foyer (`/api/ai/household/{accountId}`)
```json
{
  "contracts": [
    {
      "type": "Auto",
      "count": 1,
      "details": "Renault Captur (2028), usage personnel"
    },
    {
      "type": "Habitation",
      "count": 2,
      "details": "Résidence principale + secondaire"
    }
  ]
}
```

#### Profil (`/api/ai/profile/{accountId}`)
```json
{
  "loyalty": "Très fidèle, 22 ans d'ancienneté",
  "incidents": "Aucun incident de paiement",
  "scoring": 3
}
```

#### KYC (`/api/ai/kyc/{accountId}`)
```json
{
  "completeness": 50,
  "missing": ["identity_document"],
  "alerts": [
    {
      "type": "error",
      "message": "Pièce d'identité obligatoire à collecter"
    }
  ]
}
```

#### Next Best Actions (`/api/ai/next-best-actions/{accountId}`)
```json
{
  "actions": [
    {
      "title": "Assurance vie épargne",
      "score": 8,
      "reason": "Profil stable avec capacité d'épargne"
    },
    {
      "title": "Mutuelle santé famille",
      "score": 6,
      "reason": "2 enfants jeunes adultes à couvrir"
    }
  ]
}
```

## 📱 Responsive Design

L'interface s'adapte automatiquement :

- **≥1280px** : 3 colonnes (gauche + centre + droite sticky)
- **1024-1279px** : 3 colonnes (étroites)
- **≤1023px** : 2 colonnes (gauche+centre fusionnées, droite en bas)
- **≤640px** : 1 colonne (vertical stack)

## ♿ Accessibilité

- Navigation clavier complète
- Rôles ARIA appropriés
- États de focus visibles
- Contrastes AA (WCAG 2.1)
- Labels explicites pour les contrôles

## 🧪 Checklist Hackathon

- [x] Layout 3 colonnes reproduit
- [x] Design system Salesforce-like
- [x] Panneau IA avec 6 sections
- [x] Accordéons fonctionnels
- [x] IDs et data-slots pour API
- [ ] Connecter endpoints API réels
- [ ] Ajouter authentification
- [ ] Tests d'intégration
- [ ] Déploiement production

## 🛠️ Technologies

- **React 18** avec TypeScript
- **Vite** pour le build rapide
- **Tailwind CSS** pour le styling
- **Shadcn/ui** pour les composants
- **Lucide React** pour les icônes

## 📝 Licence

MIT License - Voir [LICENSE](LICENSE) pour plus de détails.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📧 Contact

Pour toute question : [votre-email@example.com]

---

**Note** : Ce projet est une interface statique conçue pour être rapidement intégrée avec des APIs backend. Les données affichées sont des exemples fictifs pour la démonstration.
