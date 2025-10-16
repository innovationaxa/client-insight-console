import { state, setFilters, setEmailOption, setViewMode, setQueueOpen } from './state.js';
import { renderInteractions } from './interactions.js';

export function initializeTabs(root = document) {
  const tabContainers = root.querySelectorAll('[data-tabs]');
  tabContainers.forEach(container => {
    const triggers = container.querySelectorAll('.tab-trigger');
    const panels = container.querySelectorAll('.tab-panel');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const targetId = trigger.dataset.tabTarget;
        if (!targetId) return;

        triggers.forEach(btn => {
          btn.setAttribute('aria-selected', btn === trigger ? 'true' : 'false');
        });

        panels.forEach(panel => {
          if (panel.id === targetId) {
            panel.classList.add('is-active');
            panel.removeAttribute('aria-hidden');
          } else {
            panel.classList.remove('is-active');
            panel.setAttribute('aria-hidden', 'true');
          }
        });

        if (container.dataset.tabs === 'ai') {
          renderInteractions();
        }
      });
    });
  });
}

export function initializeSubTabs() {
  const groups = document.querySelectorAll('.sub-tabs');
  groups.forEach(group => {
    const buttons = group.querySelectorAll('.sub-tab');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.toggle('is-active', btn === button));
        const target = button.dataset.subtab;
        const section = group.parentElement;
        if (!section) return;
        const panels = section.querySelectorAll('[data-subtab-panel]');
        panels.forEach(panel => {
          if (panel.dataset.subtabPanel === target) {
            panel.classList.remove('hidden');
          } else {
            panel.classList.add('hidden');
          }
        });
      });
    });
  });
}

export function initializeCollapsibles(root = document) {
  const collapsibles = root.querySelectorAll('[data-collapsible]');
  collapsibles.forEach(wrapper => {
    const trigger = wrapper.querySelector('[data-collapsible-trigger]');
    const chevron = trigger?.querySelector('.chevron');
    if (!trigger) return;

    const open = wrapper.classList.contains('is-open');
    trigger.setAttribute('aria-expanded', String(open));
    if (!open && chevron) {
      chevron.style.transform = 'rotate(180deg)';
    }

    trigger.addEventListener('click', () => {
      const isOpen = wrapper.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', String(isOpen));
      if (chevron) {
        chevron.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
      }
    });
  });
}

export function initializeCheckboxes() {
  const toggleValue = checkbox => {
    const key = checkbox.dataset.key;
    const newValue = checkbox.getAttribute('aria-checked') !== 'true';
    checkbox.setAttribute('aria-checked', String(newValue));
    checkbox.dataset.checked = String(newValue);

    if (key && key in state.filters) {
      setFilters({ [key]: newValue });
    } else if (key && key in state.emailOptions) {
      setEmailOption(key, newValue);
    }
  };

  document.querySelectorAll('[data-checkbox]').forEach(checkbox => {
    if (checkbox.getAttribute('aria-checked') === 'true') {
      checkbox.dataset.checked = 'true';
    }
  });

  document.addEventListener('click', event => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const checkbox = target.closest('[data-checkbox]');
    if (!checkbox) return;
    toggleValue(checkbox);
  });

  document.addEventListener('keydown', event => {
    if (!(event.target instanceof HTMLElement)) return;
    const checkbox = event.target.closest('[data-checkbox]');
    if (!checkbox) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleValue(checkbox);
    }
  });
}

export function initializeViewToggle() {
  const container = document.querySelector('.view-toggle');
  if (!container) return;
  container.addEventListener('click', event => {
    const button = event.target.closest('button[data-view]');
    if (!button) return;
    const buttons = container.querySelectorAll('button[data-view]');
    buttons.forEach(btn => btn.dataset.active = btn === button ? 'true' : 'false');
    setViewMode(button.dataset.view);
  });
}

export function initializeQueuePanel() {
  const toggle = document.querySelector('[data-queue-toggle]');
  const panel = document.querySelector('[data-queue-panel]');
  const chevron = document.querySelector('[data-queue-chevron]');
  if (!toggle || !panel) return;

  const closePanel = () => {
    panel.classList.add('hidden');
    toggle.setAttribute('aria-expanded', 'false');
    if (chevron) chevron.style.transform = 'rotate(0deg)';
    setQueueOpen(false);
  };

  const openPanel = () => {
    panel.classList.remove('hidden');
    toggle.setAttribute('aria-expanded', 'true');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
    setQueueOpen(true);
  };

  toggle.addEventListener('click', () => {
    if (panel.classList.contains('hidden')) {
      openPanel();
    } else {
      closePanel();
    }
  });

  document.addEventListener('mousedown', event => {
    if (!state.queueOpen) return;
    if (panel.contains(event.target) || toggle.contains(event.target)) return;
    closePanel();
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closePanel();
    }
  });
}
