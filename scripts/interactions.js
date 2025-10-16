import { state, addInteraction, setDialogOpen, setQueueOpen } from './state.js';

const interactionsContainer = () => document.querySelector('[data-interactions-list]');
const dialog = () => document.querySelector('[data-dialog]');
const backdrop = () => document.querySelector('[data-dialog-backdrop]');
const notificationBadge = () => document.querySelector('[data-notification]');

const defaultSummary = `Durée de l'appel : 00:05:36\nRésumé de l'échange :\n- Demande de justificatif : copie de la carte d'identité de Mme Dupond\n- Mme Dupond demande à souscrire un nouveau contrat Auto, contrat en attente de signature\n- Échange concernant la préparation de la retraite : Mme Dupond réfléchit concernant la proposition d'ouverture d'un plan d'épargne retraite\n- Réponses à deux interrogations du client concernant son contrat d'habitation`;

export function renderInteractions() {
  const container = interactionsContainer();
  if (!container) return;
  container.innerHTML = '';

  if (!state.interactions.length) {
    const empty = document.createElement('p');
    empty.className = 'empty-state';
    empty.textContent = 'Aucune interaction disponible';
    container.append(empty);
    return;
  }

  state.interactions.forEach(interaction => {
    const card = document.createElement('article');
    card.className = 'interaction-card';

    const icon = document.createElement('i');
    icon.dataset.lucide = interaction.type === 'phone' ? 'phone' : interaction.type === 'email' ? 'mail' : 'calendar';
    icon.className = 'icon-16 text-primary';
    card.append(icon);

    const content = document.createElement('div');
    content.className = 'interaction-body';

    const meta = document.createElement('div');
    meta.className = 'interaction-meta';

    const dateSpan = document.createElement('span');
    dateSpan.textContent = new Date(interaction.timestamp).toLocaleString('fr-FR');
    meta.append(dateSpan);

    const bullet = document.createElement('span');
    bullet.className = 'bullet';
    bullet.textContent = '•';
    meta.append(bullet);

    const typeLabel = document.createElement('span');
    typeLabel.textContent = interaction.type === 'phone' ? 'Téléphone' : interaction.type === 'email' ? 'Email' : 'Rendez-vous';
    meta.append(typeLabel);

    const summary = document.createElement('p');
    summary.className = 'interaction-summary';
    summary.textContent = interaction.summary;

    content.append(meta, summary);
    card.append(content);
    container.append(card);
  });

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

export function openCallReportDialog() {
  const panel = dialog();
  const overlay = backdrop();
  const form = panel?.querySelector('[data-call-report-form]');
  if (!panel || !overlay || !form) return;

  form.reset();
  const summaryField = form.querySelector('textarea[name="summary"]');
  const typeField = form.querySelector('select[name="type"]');
  const dateField = form.querySelector('input[name="date"]');
  if (summaryField) summaryField.value = defaultSummary;
  if (typeField) typeField.value = 'phone';
  if (dateField && !dateField.value) {
    dateField.valueAsDate = new Date();
  }

  panel.classList.remove('hidden');
  overlay.classList.remove('hidden');
  panel.focus();
  setDialogOpen(true);
  document.body.style.overflow = 'hidden';
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

export function closeCallReportDialog() {
  const panel = dialog();
  const overlay = backdrop();
  if (!panel || !overlay) return;
  panel.classList.add('hidden');
  overlay.classList.add('hidden');
  setDialogOpen(false);
  document.body.style.overflow = '';
}

function collectFormData(form) {
  const summary = form.querySelector('textarea[name="summary"]').value.trim();
  const type = form.querySelector('select[name="type"]').value;
  const date = form.querySelector('input[name="date"]').value;
  return { summary, type, date };
}

export function initializeDialog() {
  const panel = dialog();
  const overlay = backdrop();
  const form = panel?.querySelector('[data-call-report-form]');
  const closeBtn = panel?.querySelector('[data-dialog-close]');
  const saveBtn = panel?.querySelector('[data-dialog-save]');
  const sendBtn = panel?.querySelector('[data-dialog-send]');

  if (!panel || !overlay || !form || !closeBtn || !saveBtn || !sendBtn) return;

  const submitForm = () => {
    const data = collectFormData(form);
    if (!data.summary) {
      form.querySelector('textarea[name="summary"]').focus();
      return;
    }
    const interaction = {
      id: String(Date.now()),
      summary: data.summary,
      type: data.type,
      date: data.date,
      timestamp: new Date().toISOString(),
    };
    addInteraction(interaction);
    renderInteractions();
    closeCallReportDialog();
    if (window.lucide) {
      window.lucide.createIcons();
    }
  };

  closeBtn.addEventListener('click', closeCallReportDialog);
  overlay.addEventListener('click', closeCallReportDialog);

  saveBtn.addEventListener('click', submitForm);
  sendBtn.addEventListener('click', submitForm);

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && state.dialogOpen) {
      closeCallReportDialog();
    }
  });
}

export function initializeNotifications() {
  const trigger = document.querySelector('[data-trigger-notification]');
  if (!trigger) return;
  trigger.addEventListener('click', () => {
    const badge = notificationBadge();
    if (badge) {
      badge.classList.remove('hidden');
    }
    const panel = document.querySelector('[data-queue-panel]');
    if (panel) {
      panel.classList.add('hidden');
    }
    const toggle = document.querySelector('[data-queue-toggle]');
    if (toggle) {
      toggle.setAttribute('aria-expanded', 'false');
    }
    setQueueOpen(false);
  });
}
