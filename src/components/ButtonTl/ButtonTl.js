import { LitElement, html } from 'lit-element';
import { ButtonTlStyles } from '../../styles/ButtonTlStyles';
import 'fa-icons';

export class ButtonTl extends LitElement {
  static get styles() {
    return [ButtonTlStyles];
  }

  static get properties() {
    return {
      id: { type: String, reflect: true },
      label: { type: String, reflect: true },
      outlined: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
      icon: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this.id = '';
    this.label = '';
    this.outlined = false;
    this.disabled = false;
    this.icon = '';
  }

  render() {
    return html`
      <div id="main">
        <button
          outlined="${this.outlined}"
          ?disabled="${this.disabled}"
          @click="${this.clickHandler}"
        >
          ${this.icon === ''
            ? html`<span></span>`
            : html`<fa-icon class="fas fa-${this.icon}"></fa-icon>`}
          <p id="title">${this.label}</p>
        </button>
      </div>
    `;
  }

  clickHandler() {
    const buttonElement = this.shadowRoot.querySelector('button');
    buttonElement.classList.add('raise-button');
    setTimeout(() => {
      buttonElement.classList.remove('raise-button');
    }, 200);
    const clickEvent = new CustomEvent('ButtonTl:Click', {
      detail: {
        log: `[button-tl id=${this.id}] Clicked`,
        id: this.id,
        clicked: true,
      },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(clickEvent);
  }
}

customElements.define('button-tl', ButtonTl);
