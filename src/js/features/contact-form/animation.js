export function showErrorAnimation({
  field,
  error,
  icon,
}) {

  field.classList.add("form-field--error");
  field.classList.add("form-field--shake");

  error.classList.remove("form-error--hidden");

  icon.classList.remove("form-icon--hidden");

  field.addEventListener(
    "animationend",
    () => {
      field.classList.remove("form-field--shake");
    },
    { once: true }
  );

}

export function hideErrorAnimation({
  field,
  error,
  icon,
}) {

  field.classList.remove("form-field--error");

  error.classList.add("form-error--hidden");

  icon.classList.add("form-icon--hidden");

}