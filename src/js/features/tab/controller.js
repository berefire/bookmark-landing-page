import { FEATURES } from "@js/data";
import { animateOut, animateIn } from "./animation.js";

export function createTabController({
  tabs,
  featureTitle,
  featureDescription,
  featureImage,
  featureButton
}) {

  const featureElements = [featureTitle, featureDescription, featureImage, featureButton];

  async function showTab(tabId) {
    const feature = FEATURES.find((item) => item.id === tabId);

    if (!feature) {
      return;
    }

    await animateOut(featureElements);

    updateFeature(feature);
    updateTabs(tabId);

    animateIn(featureElements);
  }

  function updateFeature(feature) {
    featureTitle.textContent = feature.title;
    featureDescription.textContent = feature.description;
    featureImage.src = feature.image;
    featureImage.alt = feature.imageAlt;
  }

  function updateTabs(activeTabId) {
    tabs.forEach( tab => {
        const isActive = tab.dataset.tab === activeTabId;
        tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  return {
    showTab,
  }
}
