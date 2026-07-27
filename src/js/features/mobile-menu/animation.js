import {
  prefersReducedMotion,
  waitTransition,
} from "@js/shared";

export function animateOpen({
  menu,
  firstLink,
}) {
  firstLink.focus();

  if (prefersReducedMotion()) {
    menu.classList.add("animate");
    return;
  }

  requestAnimationFrame(() => {
    menu.getBoundingClientRect();
    menu.classList.add("animate");
  });
}

export async function animateClose(menu, menuContent) {
  menu.classList.remove("animate");

  if (prefersReducedMotion()) {
    return;
  }

  await waitTransition(menuContent, "translate");
}