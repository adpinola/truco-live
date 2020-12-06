export const eventListenerSetUp = (eventType, eventContainer) => {
  cy.window().then(win => {
    const listener = e => {
      win.removeEventListener(eventType, listener);
      eventContainer.e = e;
    };
    win.addEventListener(eventType, listener);
  });
};

export const checkEvent = (eventType, eventContainer) => {
  cy.wrap(eventContainer).should(
    container => expect(container.e).not.to.be.undefined,
  );
  cy.wrap(eventContainer).then(container =>
    expect(container.e.type).equal(eventType),
  );
};
