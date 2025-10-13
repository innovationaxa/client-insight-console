# Architecture Technique

## Vue d'ensemble

Cette application reproduit l'interface d'une console Salesforce pour la gestion de fiches clients, avec un panneau d'assistance IA intégré.

## Structure des composants

```
┌─────────────────────────────────────────────────────────────────┐
│                      SalesforceHeader                            │
│  (Logo, Recherche, Actions, Breadcrumb)                         │
└─────────────────────────────────────────────────────────────────┘
┌──────────────┬────────────────────────────┬─────────────────────┐
│              │                            │                     │
│  col-left    │       col-center           │    col-right        │
│              │                            │                     │
│ ┌──────────┐ │ ┌────────────────────────┐ │ ┌─────────────────┐ │
│ │ Account  │ │ │   Account Header       │ │ │   AI Panel      │ │
│ │  Card    │ │ │   (Nom, Rôle, etc.)    │ │ │                 │ │
│ └──────────┘ │ └────────────────────────┘ │ │ ┌─────────────┐ │ │
│              │ ┌────────────────────────┐ │ │ │  Synthèse   │ │ │
│ ┌──────────┐ │ │                        │ │ │ └─────────────┘ │ │
│ │Interac-  │ │ │   Tabs                 │ │ │ ┌─────────────┐ │ │
│ │tions     │ │ │   - Détails           │ │ │ │  Situation  │ │ │
│ │Panel     │ │ │   - Contrats          │ │ │ └─────────────┘ │ │
│ └──────────┘ │ │   - Opportunités      │ │ │ ┌─────────────┐ │ │
│              │ │   - Demandes          │ │ │ │   Profil    │ │ │
│              │ │   - Plus              │ │ │ └─────────────┘ │ │
│              │ │                        │ │ │ ┌─────────────┐ │ │
│              │ │   [Contenu onglet]    │ │ │ │     KYC     │ │ │
│              │ │                        │ │ │ └─────────────┘ │ │
│              │ └────────────────────────┘ │ │ ┌─────────────┐ │ │
│              │                            │ │ │   Pistes    │ │ │
│              │                            │ │ └─────────────┘ │ │
│              │                            │ │ ┌─────────────┐ │ │
│              │                            │ │ │ AI Console  │ │ │
│              │                            │ │ └─────────────┘ │ │
│              │                            │ │   (sticky)      │ │
└──────────────┴────────────────────────────┴─────────────────────┘
```

## Composants React

### SalesforceHeader
**Fichier** : `src/components/SalesforceHeader.tsx`

**Responsabilité** : Barre de navigation supérieure

**Éléments** :
- Logo et sélecteur d'app (Grid3x3)
- Champ de recherche global
- Actions : Notifications (Bell), Aide (HelpCircle), Profil (User)
- Breadcrumb : "Console Distributeurs › Compte"

**IDs** : `#app-header`

### AccountCard
**Fichier** : `src/components/AccountCard.tsx`

**Responsabilité** : Carte d'information du compte client

**Éléments** :
- En-tête teal avec icône
- Email, téléphone, adresse
- Date de naissance / âge
- Numéros foyer, abonné, portefeuille
- Boutons d'action : "Consigner un échange", "Créer un RDV"

**IDs** : `#card-account`

### InteractionsPanel
**Fichier** : `src/components/InteractionsPanel.tsx`

**Responsabilité** : Panneau des interactions client

**Éléments** :
- Onglets "Interactions Clients" / "Notes"
- Filtres avec checkboxes (Réseau, Compagnie, Échange, RDV)

**État local** : Filtres actifs

### AccountDetails
**Fichier** : `src/components/AccountDetails.tsx`

**Responsabilité** : Zone centrale avec détails du compte

**Éléments** :
- Header avec nom, propriétaire, rôle, indices, scoring
- Onglets : Détails, Contrats, Opportunités & Patrimoine, Demandes & Sinistres, Plus
- Sous-onglets dans "Détails" : Informations Générales, Coordonnées, Client Digital
- Formulaires avec champs état civil

**IDs** : 
- `#col-center` (conteneur)
- `#tabs-main` (onglets)
- `#tab-details`, `#tab-contrats`, etc.

### AIAssistantPanel
**Fichier** : `src/components/AIAssistantPanel.tsx`

**Responsabilité** : Panneau d'assistance IA (sticky)

**Éléments** :
- Header avec icône Sparkles + badge "connecté"
- 6 sections accordéon :
  1. **Synthèse fiche client** (`#ai-summary`, `data-slot="summary"`)
     - Résumé textuel
     - Bouton rafraîchir
     - Barre de confiance du modèle
  2. **Situation du foyer** (`#ai-household`, `data-slot="household"`)
     - Liste des contrats (Auto, Habitation, Banque-Crédit)
  3. **Profil client** (`#ai-profile`, `data-slot="profile"`)
     - Fidélité, incidents, scoring
  4. **Dernière interaction notable** (`#ai-last-interaction`, `data-slot="last-interaction"`)
     - Résumé du dernier sinistre/interaction
  5. **Complétude KYC** (`#ai-kyc`, `data-slot="kyc"`)
     - Progress bar
     - Callout rouge pour pièces manquantes
     - Bouton "Demander la pièce"
  6. **Pistes commerciales** (`#ai-next-best-actions`, `data-slot="next-best-actions"`)
     - Liste d'actions avec scores
     - Bouton "Générer d'autres pistes"
- **Console IA** (`#ai-console`)
  - Textarea pour prompts
  - Boutons : Générer, Expliquer, Copier
- **Historique** (`#ai-history`)
  - Liste des actions récentes avec timestamp

**IDs principaux** :
- `#col-right` (conteneur sticky)
- `#ai-panel`
- Voir détails des sections ci-dessus

**État local** :
- Ouverture/fermeture des accordéons
- Contenu du prompt

**Boutons d'action** :
- `#btn-summary-refresh`
- `#btn-kyc-request`
- `#btn-nba-generate`

## Design System

### Tokens CSS (`:root` dans `src/index.css`)

```css
/* Couleurs Salesforce */
--primary: 211 100% 42%;           /* Bleu SF */
--primary-hover: 211 100% 36%;
--accent: 265 85% 56%;             /* Violet IA */
--sf-teal: 174 72% 56%;

/* Neutrals */
--background: 210 20% 96%;
--card: 0 0% 100%;
--foreground: 220 13% 13%;
--muted: 210 17% 95%;
--muted-foreground: 220 9% 46%;

/* Semantic */
--success: 142 71% 45%;
--warning: 38 92% 50%;
--destructive: 0 84% 60%;

/* Borders & Shadows */
--border: 214 32% 91%;
--shadow: 0 6px 18px -2px rgba(0,0,0,0.06);

/* Spacing */
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;

/* Radius */
--radius: 12px;
```

### Extensions Tailwind (`tailwind.config.ts`)

Les tokens CSS sont mappés vers des classes Tailwind :
- `bg-primary`, `text-primary`, `border-primary`
- `bg-accent`, `text-accent-foreground`
- `bg-sf-teal`, `bg-sf-blue`, `bg-sf-purple`
- `shadow`, `shadow-lg`

## Responsive Breakpoints

- **lg** (≥1024px) : Grid 12 colonnes → 3-6-3
- **<1024px** : Stack vertical, panneau IA passe en bas
- **Sticky behavior** : `#col-right` reste visible sur desktop (sticky top-4)

## Interactions JavaScript/React

### État local
- Ouverture/fermeture des accordéons (AI panel)
- Sélection des onglets (Tabs)
- Filtres des interactions (checkboxes)
- Valeur du prompt IA

### Futures intégrations API
Voir `README.md` pour les fonctions d'intégration à implémenter :
- `fetchAISummary()`
- `fetchAIHousehold()`
- `fetchAIProfile()`
- `fetchAIKYCStatus()`
- `fetchNextBestActions()`

Chaque section du panneau IA possède un `data-slot` permettant l'injection de contenu JSON.

## Accessibilité

- **Keyboard navigation** : Tous les boutons, liens et contrôles sont focusables
- **ARIA roles** : Collapsible, Tabs, etc.
- **Focus visible** : Ring autour des éléments actifs
- **Labels** : Tous les inputs et checkboxes ont des labels explicites
- **Contraste** : Respecte WCAG AA

## Performance

- **Sticky positioning** : CSS natif (pas de JS scroll listener)
- **Lazy loading** : Les onglets non actifs ne sont pas rendus (React Tabs)
- **Tree-shaking** : Lucide icons importées individuellement
- **Tailwind JIT** : Classes générées à la demande

## Prochaines étapes d'intégration

1. ✅ Structure et maquette
2. ✅ Design system
3. ✅ Composants statiques
4. ⏳ Connexion API backend
5. ⏳ Authentification
6. ⏳ États de chargement (skeleton)
7. ⏳ Gestion d'erreurs
8. ⏳ Tests E2E

## Diagramme de flux données

```
┌──────────────┐
│   Backend    │
│   API        │
└──────┬───────┘
       │
       │ fetch()
       ▼
┌──────────────────────┐
│  React State         │
│  (hooks, context)    │
└──────┬───────────────┘
       │
       │ props
       ▼
┌──────────────────────┐
│  AIAssistantPanel    │
│  renderSummary()     │
│  renderHousehold()   │
│  etc.                │
└──────────────────────┘
```

---

**Version** : 1.0.0  
**Dernière mise à jour** : 2025-10-13
