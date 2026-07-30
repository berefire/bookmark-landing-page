import { DOM_REQUIREMENTS } from "./constants.js";
import { SELECTORS } from "./selectors.js";
import { isValidElement } from "./utils.js";

const QUERY_TYPES = {
  // Mobile menu
  mobileNavButton: "one",
  mobileCloseButton: "one",
  mobileNav: "one",
  mobileNavContent: "one",
  mobileNavLinks: "all",

  // Features
  featuresTabButtons: "all",
  featureTitle: "one",
  featureDescription: "one",
  featureImage: "one",
  featureButton: "one",

  // FAQ
  faqItems: "all",
  faqQuestions: "all",
  faqAnswers: "all",

  // Contact Form
  contactForm: "one",
  contactField: "one",
  contactInput: "one",
  contactError: "one",
  contactErrorIcon: "one",
};

function initDOMElements() {
  const DOM = Object.fromEntries(
    Object.entries(SELECTORS).map(([key, selector]) => [
      key,
      QUERY_TYPES[key] === "all"
        ? document.querySelectorAll(selector)
        : document.querySelector(selector),
    ]),
  );

  Object.entries(DOM).forEach(([key, element]) => {
    const isRequired = Object.values(DOM_REQUIREMENTS).flat().includes(key);

    if (isRequired && !isValidElement(element)) {
      throw new Error(
        `Required DOM element "${key}" (${SELECTORS[key]}) was not found`,
      );
    }
  });

  return Object.freeze(DOM);
}

export const DOM = initDOMElements();
