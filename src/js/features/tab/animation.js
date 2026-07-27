import { waitTransition, prefersReducedMotion } from "@js/shared";

export async function animateOut(elements) {
  elements.forEach((element) => {
    element.classList.add("feature-hidden");
  });

  if (prefersReducedMotion()) {
    return;
  }

  await waitTransition(elements[0], "opacity");
}

export function animateIn(elements) {
  requestAnimationFrame(() => {
    elements.forEach((element) => {
      element.classList.remove("feature-hidden");
    });
  });
}