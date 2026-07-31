function isCollection(value) {
  return value instanceof NodeList || value instanceof HTMLCollection;
}

export function isValidElement(value) {
  if (value instanceof Element) {
    return true;
  }

  if (isCollection(value)) {
    return value.length > 0;
  }

  return false;
}

/**
 * Returns the first element of a NodeList or HTMLCollection.
 *
 * Throws if the provided value is not a collection.
 * Returns null when the collection is empty.
 *
 * @param {NodeList|HTMLCollection} collection
 * @returns {Element|null}
 * @throws {Error}
 */

export function getFirstElement(collection) {
  if (!isCollection(collection)) {
    throw new Error(
      `[DOM] getFirstElement expects a NodeList or HTMLCollection`,
    );
  }

  return collection[0] ?? null;
}

export function addSafeEventListener(
  element,
  event,
  handler,
  context = "unknown",
) {
  if (!isValidElement(element)) {
    throw new Error(
      `[${context}] Invalid element passed to addSafeEventListener: ${element}`,
    );
  }

  if (isCollection(element)) {
    Array.from(element).forEach((el) => el.addEventListener(event, handler));
    return;
  }

  element.addEventListener(event, handler);
}