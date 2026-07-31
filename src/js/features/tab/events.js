import { addSafeEventListener } from "@js/shared";

export function bindTabEvents({
  tabController,
  tabButtons,
}) {
  const activateTab = (tabId) => {
    tabController.showTab(tabId);
  };

const handleKeydown = (event, currentIndex) => {
  let nextIndex = currentIndex;

  switch (event.key) {
    case "ArrowRight":
      event.preventDefault();
      nextIndex = (currentIndex + 1) % tabButtons.length;
      break;

    case "ArrowLeft":
      event.preventDefault();
      nextIndex =
        (currentIndex - 1 + tabButtons.length) % tabButtons.length;
      break;

    case "Home":
      event.preventDefault();
      nextIndex = 0;
      break;

    case "End":
      event.preventDefault();
      nextIndex = tabButtons.length - 1;
      break;

    default:
      return;
  }

  const nextTab = tabButtons[nextIndex];

  nextTab.focus();
  activateTab(nextTab.dataset.tab);
};

  tabButtons.forEach((tabButton, index) => {
    addSafeEventListener(
      tabButton,
      "click",
      () => activateTab(tabButton.dataset.tab),
      "Tab Button"
    );

    addSafeEventListener(
      tabButton,
      "keydown",
      (event) => handleKeydown(event, index),
      "Tab Button"
    );
  });
}