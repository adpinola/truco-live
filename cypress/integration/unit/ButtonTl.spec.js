import '../../../src/components/ButtonTl/ButtonTl';
import { COLOR_PALLETE } from '../../../src/utils/constants';
import { expect, fixture, html } from '@open-wc/testing';
import { eventListenerSetUp, checkEvent } from '../mock/eventCapture';

describe('button-tl component', () => {
  it('button-tl matches given id', () => {
    const id = 'test-id';
    fixture(html`<button-tl id="${id}"></button-tl>`);
    cy.get('button-tl').should(query => {
      const [sut] = query.get();
      expect(sut.id).to.equal(id);
    });
  });

  it('button-tl matches given label', () => {
    const label = 'Inner Text';
    fixture(html`<button-tl label="${label}"></button-tl>`);
    cy.get('button-tl').should(query => {
      const [sut] = query.get();
      expect(sut.label).to.equal(label);
    });
  });

  it('button-tl is enabled by default', () => {
    fixture(html`<button-tl></button-tl>`);
    cy.get('button-tl').should(query => {
      const [sut] = query.get();
      expect(sut.disabled).to.be.false;
    });
  });

  it('button-tl is NOT outlined by default', () => {
    fixture(html`<button-tl></button-tl>`);
    cy.get('button-tl').should(query => {
      const [sut] = query.get();
      expect(sut.outlined).to.be.false;
    });
  });

  it('button-tl is outlined', () => {
    fixture(html`<button-tl outlined></button-tl>`);
    cy.get('button-tl').should(query => {
      const [sut] = query.get();
      expect(sut.outlined).to.be.true;
    });
  });

  it('button-tl outlined match styles', () => {
    fixture(html`<button-tl outlined></button-tl>`);
    cy.get('button-tl')
      .shadow()
      .find('button')
      .should('have.css', 'background-color', `${COLOR_PALLETE.SCALE.LIGHT}`);
    cy.get('button-tl')
      .shadow()
      .find('button')
      .should('have.css', 'border-color', `${COLOR_PALLETE.SCALE.DARKEST}`);
  });

  it('button-tl NOT outlined match styles', () => {
    fixture(html`<button-tl></button-tl>`);
    cy.get('button-tl')
      .shadow()
      .find('button')
      .should('have.css', 'background-color', `${COLOR_PALLETE.HIGHLIGHT}`);
    cy.get('button-tl')
      .shadow()
      .find('button')
      .should('have.css', 'border-color', `${COLOR_PALLETE.HIGHLIGHT}`);
  });

  it('button-tl disabled has opacity and normal cursor', () => {
    fixture(html`<button-tl disabled></button-tl>`);
    cy.get('button-tl')
      .shadow()
      .find('button')
      .should('have.css', 'opacity', '0.4');
    cy.get('button-tl')
      .shadow()
      .find('button')
      .should('have.css', 'cursor', 'auto');
  });

  it('button-tl on click should dispatch ButtonTl:Click Event', () => {
    const eventContainer = {};
    eventListenerSetUp('ButtonTl:Click', eventContainer);
    fixture(html`<button-tl></button-tl>`);
    cy.get('button-tl').shadow().find('button').click();
    checkEvent('ButtonTl:Click', eventContainer);
  });

  it('button-tl with icon set should have an icon visible', () => {
    fixture(html`<button-tl icon="thumbs-up"></button-tl>`);
    cy.get('button-tl').shadow().get('button > fa-icon');
  });

  it('button-tl with no icon configure shows a span', () => {
    fixture(html`<button-tl></button-tl>`);
    cy.get('button-tl').shadow().get('button > span');
  });
});
