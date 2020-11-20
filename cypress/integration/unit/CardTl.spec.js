import '../../../src/components/CardTl/CardTl';
import { expect, fixture, html } from '@open-wc/testing';

describe('card-tl component', () => {
  it('card-tl matches given id', () => {
    const id = 'test-id';
    fixture(html`<card-tl id="${id}"></card-tl>`);
    cy.get('card-tl').should(query => {
      const [sut] = query.get();
      expect(sut.id).to.equal(id);
    });
  });

  it('card-tl shows correct value', () => {
    const value = 1;
    fixture(html`<card-tl value="${value}" suit="coins"></card-tl>`);
    cy.get('card-tl').shadow().contains(value);
  });

  const checkWithGivenValue = value => {
    fixture(html`<card-tl value="${value}" suit="coins"></card-tl>`);
    cy.get('card-tl').should(query => {
      const [cardTl] = query.get();
      const sut = cardTl.shadowRoot.querySelector('.image-container');
      expect(sut.children.length).to.equal(value);
    });
  };

  it('card-tl shows correct number of symbols (1)', () => {
    const value = 1;
    checkWithGivenValue(value);
  });

  it('card-tl shows correct number of symbols (2)', () => {
    const value = 2;
    checkWithGivenValue(value);
  });

  it('card-tl shows correct number of symbols (3)', () => {
    const value = 3;
    checkWithGivenValue(value);
  });

  it('card-tl shows correct number of symbols (4)', () => {
    const value = 4;
    checkWithGivenValue(value);
  });

  it('card-tl shows correct number of symbols (5)', () => {
    const value = 4;
    checkWithGivenValue(value);
  });

  it('card-tl shows correct number of symbols (6)', () => {
    const value = 6;
    checkWithGivenValue(value);
  });

  it('card-tl shows correct number of symbols (7)', () => {
    const value = 7;
    checkWithGivenValue(value);
  });

  const checkCorrectSymbol = (symbol, mappedClass) => {
    fixture(html`<card-tl value="1" suit="${symbol}"></card-tl>`);
    cy.get('card-tl')
      .shadow()
      .get('fa-icon')
      .then(query => {
        const [sut] = query.get();
        expect(sut.classList.contains(mappedClass)).to.be.true;
      });
  };

  it('card-tl shows correct COIN symbol', () => {
    const symbol = 'coins';
    const expectedClass = 'fa-bitcoin';
    checkCorrectSymbol(symbol, expectedClass);
  });

  it('card-tl shows correct CUP symbol', () => {
    const symbol = 'cup';
    const expectedClass = 'fa-trophy';
    checkCorrectSymbol(symbol, expectedClass);
  });

  it('card-tl shows correct COARSE symbol', () => {
    const symbol = 'coarse';
    const expectedClass = 'fa-candy-cane';
    checkCorrectSymbol(symbol, expectedClass);
  });

  it('card-tl shows correct SWORD symbol', () => {
    const symbol = 'swords';
    const expectedClass = 'fa-angle-up';
    checkCorrectSymbol(symbol, expectedClass);
  });

  const checkSpecialSymbols = (value, specialClassToCheck) => {
    fixture(html`<card-tl value="${value}" suit="coins"></card-tl>`);
    cy.get('card-tl')
      .shadow()
      .get('fa-icon.coins')
      .then(query => {
        const [sut] = query.get();
        expect(sut.classList.contains(specialClassToCheck)).to.be.true;
      });
  };

  it('card-tl shows correct special symbol for value 10', () => {
    checkSpecialSymbols(10, 'fa-people-carry');
  });

  it('card-tl shows correct special symbol for value 11', () => {
    checkSpecialSymbols(11, 'fa-horse-head');
  });

  it('card-tl shows correct special symbol for value 12', () => {
    checkSpecialSymbols(12, 'fa-crown');
  });
});
