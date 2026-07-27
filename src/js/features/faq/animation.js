import { prefersReducedMotion, waitTransition } from "@js/shared";

export async function animateOpen(item, answer) {
  item.open = true;

  if (prefersReducedMotion()) {
    answer.style.height = "auto";
    answer.style.opacity = "1";
    return;
  }

  answer.style.height = "0px";
  answer.style.opacity = "0";

  requestAnimationFrame(() => {
    answer.style.height = `${answer.scrollHeight}px`;
    answer.style.opacity = "1";
  });

  await waitTransition(answer, "height");
  answer.style.height = "auto";
}

export async function animateClose(item, answer) {
  if (prefersReducedMotion()) {
    answer.style.height = "";
    answer.style.opacity = "";
    item.open = false;
    return;
  }

  answer.style.height = `${answer.scrollHeight}px`;

  requestAnimationFrame(() => {
    answer.style.height = "0px";
    answer.style.opacity = "0";
  });

  await waitTransition(answer, "height");
  item.open = false;

  answer.style.height = "";
  answer.style.opacity = "";
}
