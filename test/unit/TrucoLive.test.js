import '../../src/TrucoLive';
import { fixture, html } from '@open-wc/testing';
import '@testing-library/jest-dom';

describe('truco-live main component', () => {
  it('Component truco-live contains Header with title', async () => {
    const componentUnderTest = fixture(html`<truco-live></truco-live>`);
    expect(componentUnderTest.shadowRoot.querySelector('h1')).toHaveTextContent('Truco Live');
  });
});
