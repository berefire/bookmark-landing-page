function getTransitionTimeout(element) {
  const styles = getComputedStyle(element);

  const durations = styles.transitionDuration
    .split(",")
    .map((value) => parseTime(value.trim()));

  const delays = styles.transitionDelay
    .split(",")
    .map((value) => parseTime(value.trim()));

  const times = durations.map(
    (duration, index) => duration + (delays[index] ?? delays[0] ?? 0),
  );

  return Math.max(...times, 0) + 50;
}

function parseTime(value) {
  if (value.endsWith("ms")) {
    return Number.parseFloat(value);
  }

  if (value.endsWith("s")) {
    return Number.parseFloat(value) * 1000;
  }

  return 0;
}

export function waitTransition(
  element,
  property = "opacity",
) {
  return new Promise((resolve) => {
    let finished = false;

    function cleanup() {
      clearTimeout(timeoutId);

      element.removeEventListener(
        "transitionend",
        handleTransition,
      );
    }

    function finish() {
      if (finished) return;

      finished = true;

      cleanup();
      resolve();
    }

    function handleTransition(event) {
      if (event.target !== element) return;
      if (event.propertyName !== property) return;

      finish();
    }

    const timeoutId = setTimeout(
      finish,
      getTransitionTimeout(element),
    );

    element.addEventListener(
      "transitionend",
      handleTransition,
    );
  });
}