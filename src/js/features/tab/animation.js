import { waitTransition } from "@js/shared";

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