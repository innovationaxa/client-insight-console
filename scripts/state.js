export const state = {
  interactions: loadInteractions(),
  filters: {
    network: false,
    company: false,
    exchange: false,
    rdv: false,
  },
  emailOptions: {
    documents: true,
    recommendations: true,
    recap: true,
  },
  viewMode: 'preparation',
  queueOpen: false,
  dialogOpen: false,
};

function loadInteractions() {
  try {
    const stored = localStorage.getItem('sf-interactions');
    if (stored) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    }
  } catch (error) {
    console.warn('Unable to parse stored interactions', error);
  }
  return [];
}

export function persistInteractions() {
  try {
    localStorage.setItem('sf-interactions', JSON.stringify(state.interactions));
  } catch (error) {
    console.warn('Unable to persist interactions', error);
  }
}

export function addInteraction(interaction) {
  state.interactions = [interaction, ...state.interactions];
  persistInteractions();
}

export function setFilters(update) {
  state.filters = { ...state.filters, ...update };
}

export function setEmailOption(key, value) {
  state.emailOptions = { ...state.emailOptions, [key]: value };
}

export function setViewMode(mode) {
  state.viewMode = mode;
}

export function setQueueOpen(open) {
  state.queueOpen = open;
}

export function setDialogOpen(open) {
  state.dialogOpen = open;
}
