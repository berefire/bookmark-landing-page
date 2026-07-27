function waitTransition(element){
    return new Promise((resolve) => {
        element.addEventListener("transitionend", function handleTransition(event) {
            if (event.propertyName !== "opacity" ) {
                return;
            }

            element.removeEventListener("transitionend", handleTransition);
            resolve();
        }, { once: true });
    });
}

export async function animateOut(elements) {
  elements.forEach((element) => {
    element.classList.add("feature-hidden");
  });

  await waitTransition(elements[0]);
}

export function animateIn(elements) {
  requestAnimationFrame(() => {
    elements.forEach((element) => {
      element.classList.remove("feature-hidden");
    });
  });
}