import { FEATURES } from "@js/data";

export function createTabController({
  tabs,
  featureTitle,
  featureDescription,
  featureImage,
}) {
  function showTab(tabId) {
    const feature = FEATURES.find((item) => item.id === tabId);

    if (!feature) {
      return;
    }

    featureTitle.textContent = feature.title;
    featureDescription.textContent = feature.description;
    featureImage.src = feature.image;
    featureImage.alt = feature.imageAlt;

    updateTabs(tabId);
  }

  function updateTabs(activeTabId) {
    tabs.forEach( tab => {
        const isActive = tab.dataset.tab === activeTabId;
        tab.setAttribute("aria-selected", isActive);
    });
  }

  return {
    showTab,
  }
}
