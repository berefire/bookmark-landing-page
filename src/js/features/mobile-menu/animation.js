import { waitTransition, prefersReducedMotion } from "@js/shared";

export async function animateClose(menu, menuContent) {
  menu.classList.remove("animate");
  if (!prefersReducedMotion()) {
    await waitTransition(menuContent, "translate");
  }
}

export function animateOpen({
  menu,
  firstLink,
}) {
  requestAnimationFrame(() => {
    menu.getBoundingClientRect();
    menu.classList.add("animate");
    firstLink.focus();
  });
}