export function waitTransition(
  element,
  property = "opacity"
) {
  return new Promise((resolve) => {
    element.addEventListener(
      "transitionend",
      function handleTransition(event) {
        if (event.target !== element) {
          return;
        }

        if (event.propertyName !== property) {
          return;
        }

        resolve();
      },
      { once: true }
    );
  });
}