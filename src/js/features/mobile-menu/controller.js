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

  async function openMenu() {
    if (isDesktop() || menu.open || isClosing) {
      return;
    }

    menu.showModal();

    await animateOpen({
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

  async function toggleMenu() {
    menu.open ? await closeMenu() : await openMenu();
  }

  return {
    toggleMenu,
    openMenu,
    closeMenu,
  };
}
