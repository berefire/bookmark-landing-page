import { DOM } from "@js/shared";
import { createFaqController } from "./controller.js";
import { bindFaqEvents } from "./events.js";

export function initializeFaq() {

  const faqController = createFaqController({
    faqItems: DOM.faqItems,
    faqAnswers: DOM.faqAnswers,
  });

  bindFaqEvents({
    faqQuestions: DOM.faqQuestions,
    faqController,
  });
}