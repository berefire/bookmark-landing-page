import { isDesktop, lockScroll, unlockScroll } from "@js/shared";
import { animateOpen, animateClose } from "./animation.js";

export function createMenuController({
  menu,
  menuContent,
  menuButton,
  firstLink,
}) {
  let isClosing = false;

  function setExpanded(expanded) {
    menuButton.setAttribute("aria-expanded", String(expanded));
  }

  function restoreFocus() {
    menuButton.focus();
  }

  function openMenu() {
    if (isDesktop() || menu.open || isClosing) {
      return;
    }

    menu.showModal();

    animateOpen({
      menu,
      firstLink,
    });

    setExpanded(true);

    lockScroll();
  }

  async function closeMenu() {
    if (!menu.open || isClosing) {
      return;
    }

    isClosing = true;
    setExpanded(false);

    try {
      await animateClose(menu, menuContent);

      menu.close();
      unlockScroll();
      restoreFocus();
    } finally {
      isClosing = false;
    }
  }

function toggleMenu() {
  menu.open ? closeMenu() : openMenu();
}

  return {
    toggleMenu,
    openMenu,
    closeMenu,
  };
}
