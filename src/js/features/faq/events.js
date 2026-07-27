import { addSafeEventListener } from "@js/shared";

export function bindFaqEvents({
  faqQuestions,
  faqController,
}) {
  faqQuestions.forEach((question, index) => {
    addSafeEventListener(
      question,
      "click",
      (event) => {
        event.preventDefault();
        faqController.toggle(index);
      },
      "FAQ Question"
    );
  });
}