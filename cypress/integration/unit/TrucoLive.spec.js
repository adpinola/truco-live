import { TrucoLive } from '../../../src/TrucoLive';
import { expect, fixture, html } from '@open-wc/testing';

window.customElements.define('truco-live', TrucoLive);

describe('truco-live main component', () => {
  it('Component truco-live matchs input id', async () => {
    const id = 'test-id';
    const componentUnderTest = await fixture(
      html`<truco-live id="${id}"></truco-live>`
    );
    expect(componentUnderTest.id).equal(id);
  });

  it('Component truco-live contains Header with title', () => {
    fixture(html`<truco-live></truco-live>`);
    cy.get('truco-live').shadow().contains('Truco Live');
  });
});
