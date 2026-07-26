import { addSafeEventListener } from "@js/shared";

export function bindTabEvents({
  tabController,
  tabButtons,
}) {
const handleClick = (tabId) => { tabController.showTab(tabId); };

  tabButtons.forEach((tabButton) => {
    addSafeEventListener(
      tabButton,
      "click",
      () => handleClick(tabButton.dataset.tab),
      "Tab Button"
    );
  });
}