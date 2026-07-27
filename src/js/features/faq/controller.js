import { animateOpen, animateClose } from "./animation.js";

export function createFaqController({ faqItems, faqAnswers }) {
  async function toggle(activeIndex) {
    const currentItem = faqItems[activeIndex];
    const currentAnswer = faqAnswers[activeIndex];

    if (currentItem.open) {
      await animateClose(currentItem, currentAnswer);
      return;
    }

    await closeOpenedItems(activeIndex);
    await animateOpen(currentItem, currentAnswer);
  }

  async function closeOpenedItems(activeIndex) {
    for (const [index, item] of faqItems.entries()) {
      if (index !== activeIndex && item.open) {
        await animateClose(item, faqAnswers[index]);
      }
    }
  }

  return {
    toggle,
  };
}
