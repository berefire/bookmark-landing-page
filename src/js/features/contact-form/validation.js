const EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateEmail(value) {

  const email = value.trim();

  if (!email) {
    return {
      isValid: false,
      message: "Email address is required.",
    };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return {
      isValid: false,
      message: "Whoops, make sure it's an email",
    };
  }

  return {
    isValid: true,
    message: "",
  };
}