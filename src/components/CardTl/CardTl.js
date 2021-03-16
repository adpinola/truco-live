import { LitElement, html } from 'lit-element';
import { CardTlStyles } from '../../styles/CardTlStyles';
import 'fa-icons';

const suitIconTranslation = {
  coins: 'fab fa-bitcoin',
  coarse: 'fas fa-candy-cane',
  cup: 'fas fa-trophy',
  swords: 'fas fa-angle-up',
};

const figureIcon = {
  10: 'fas fa-people-carry',
  11: 'fas fa-horse-head',
  12: 'fas fa-crown',
};

export class CardTl extends LitElement {
  static get styles() {
    return [CardTlStyles];
  }

  static get properties() {
    return {
      id: { type: String, reflect: true },
      value: { type: Number, reflect: true },
      suit: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this.id = '';
    this.value = undefined;
    this.suit = undefined;
  }

  render() {
    return html`
      <div id="main" class="card-border">
        <div class="card-inside">
          <p>${this.value}</p>
          <div class="image-container">${this.renderSuitIcon()}</div>
          <p class="number-bottom">${this.value}</p>
        </div>
      </div>
    `;
  }

  renderSuitIcon() {
    const icons = [];
    if (this.value > 7) {
      icons.push(
        html`<fa-icon
          class="${suitIconTranslation[this.suit]}"
          size="60px"
        ></fa-icon>`,
        html`<fa-icon
          class="${figureIcon[this.value]} ${this.suit}"
          size="60px"
        ></fa-icon>`,
      );
    } else {
      let size = this.iconSizeSelector();
      let index=0;
      for (let index = 0; index < this.value; index++) {
        console.log(index);
        icons.push(
          html`<fa-icon
            class="${suitIconTranslation[this.suit]}"
            size=${size}
          ></fa-icon>`,
        );
      }
    }

    return html`${icons}`;
  }

  iconSizeSelector() {
    switch (this.value) {
      case 1:
        return '160px';
        break;
      case 2:
        return '120px';
        break;
      default:
        return '80px';
        break;
    }
  }
}

customElements.define('card-tl', CardTl);
