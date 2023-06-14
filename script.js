// @ts-check

(() => {
  if (typeof window.cleanupObserver === "function") {
    window.cleanupObserver();
  }

  const messagesContainer = document.querySelector(
    '[aria-label^="Wiadomości "]'
  );
  if (!messagesContainer) {
    console.log("Cannot find the messages container");
    return;
  }

  const mutationObserver = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === "childList") {
        const addedNodes = Array.from(mutation.addedNodes);

        for (const addedNode of addedNodes) {
          const addedElement = /** @type {HTMLElement} */ (addedNode);
          if (addedElement.matches("[role=row]")) {
            /** @type {HTMLAnchorElement[]} */
            const links = Array.from(
              addedElement.querySelectorAll("a[target='_blank']")
            );

            for (const link of links) {
              link.click();
            }
          }
        }
      }
    }
  });

  mutationObserver.observe(messagesContainer, {
    subtree: true,
    childList: true,
  });

  console.log("Listening to changes in", messagesContainer);

  window.cleanupObserver = () => {
    mutationObserver.disconnect();
  };
})();
