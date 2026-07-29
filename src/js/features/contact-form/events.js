import { addSafeEventListener } from "@js/shared";

export function bindContactEvents({
  form,
  input,
  controller,
}) {

  addSafeEventListener(
    form,
    "submit",
    controller.submit,
    "Contact Form"
  );

  addSafeEventListener(
    input,
    "input",
    controller.validateOnInput,
    "Email Input"
  );

}