import { waitTransition } from "@js/shared";
 
 export async function animateOpen(item, answer) {
    item.setAttribute("open", "");

    answer.style.height = "0px";
    answer.style.opacity = "0";

    requestAnimationFrame(() => {
      answer.style.height = `${answer.scrollHeight}px`;
      answer.style.opacity = "1";
    });

    await waitTransition(answer);
    answer.style.height = "auto";
  }

  export async function animateClose(item, answer) {
    answer.style.height = `${answer.scrollHeight}px`;

    requestAnimationFrame(() => {
      answer.style.height = "0px";
      answer.style.opacity = "0";
    });

    await waitTransition(answer);
    item.open = false;
  }
