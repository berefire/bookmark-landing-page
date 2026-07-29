import { validateEmail } from "./validation.js";

import {
  showErrorAnimation,
  hideErrorAnimation,
} from "./animation.js";

export function createContactController({
  field,
  input,
  error,
  icon,
}) {

  function submit(event) {

    event.preventDefault();
    const result = validateEmail(input.value);

    if (!result.isValid) {
      error.textContent = result.message;
      input.setAttribute(
        "aria-invalid",
        "true"
      );
      showErrorAnimation({
        field,
        error,
        icon,
      });

      return;
    }

    input.removeAttribute("aria-invalid");
    hideErrorAnimation({
      field,
      error,
      icon,
    });
    input.value = "";
  }

  function validateOnInput() {

    const result = validateEmail(input.value);

    if (result.isValid) {
      input.removeAttribute("aria-invalid");
      hideErrorAnimation({
        field,
        error,
        icon,
      });

    }

  }

  return {
    submit,
    validateOnInput,
  };

}