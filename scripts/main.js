import './state.js';
import { initializeTabs, initializeSubTabs, initializeCollapsibles, initializeCheckboxes, initializeViewToggle, initializeQueuePanel } from './components.js';
import { renderInteractions, initializeDialog, openCallReportDialog, initializeNotifications } from './interactions.js';

function init() {
  initializeTabs();
  initializeSubTabs();
  initializeCollapsibles();
  initializeCheckboxes();
  initializeViewToggle();
  initializeQueuePanel();
  initializeDialog();
  initializeNotifications();
  renderInteractions();

  const openDialogButton = document.querySelector('[data-open-dialog]');
  if (openDialogButton) {
    openDialogButton.addEventListener('click', () => {
      const badge = document.querySelector('[data-notification]');
      if (badge) {
        badge.classList.add('hidden');
      }
      openCallReportDialog();
    });
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
