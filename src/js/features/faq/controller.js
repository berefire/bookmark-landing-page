export function createFaqController({ faqItems, faqAnswers }) {
  function toggle(activeIndex) {
    const currentItem = faqItems[activeIndex];
    const currentAnswer = faqAnswers[activeIndex];

    if (currentItem.open) {
      animateClose(currentItem, currentAnswer);
      return;
    }

    closeOpenedItems(activeIndex);
    animateOpen(currentItem, currentAnswer);
  }

  function closeOpenedItems(activeIndex) {
    faqItems.forEach((item, index) => {
      if (index !== activeIndex && item.open) {
        animateClose(item, faqAnswers[index]);
      }
    });
  }

  function animateOpen(item, answer) {
    item.setAttribute("open", "");

    answer.style.height = "0px";
    answer.style.opacity = "0";

    requestAnimationFrame(() => {
      answer.style.height = `${answer.scrollHeight}px`;
      answer.style.opacity = "1";
    });

    answer.addEventListener(
      "transitionend",
      function handleOpen() {
        answer.style.height = "auto";
        answer.removeEventListener("transitionend", handleOpen);
      }
    );
  }

  function animateClose(item, answer) {
    answer.style.height = `${answer.scrollHeight}px`;

    requestAnimationFrame(() => {
      answer.style.height = "0px";
      answer.style.opacity = "0";
    });

    answer.addEventListener(
      "transitionend",
      function handleClose() {
        item.removeAttribute("open");
        answer.removeEventListener("transitionend", handleClose);
      }
    );
  }

  return {
    toggle,
  };
}
