import { LitElement, html } from 'lit-element';
import { LandingPageStyles } from '../../styles/LandingPageStyles';
import '../ButtonTl/ButtonTl';
import '../CardTl/CardTl';

export class LandingPage extends LitElement {
  static get styles() {
    return [LandingPageStyles];
  }

  static get properties() {
    return {
      id: { type: String, reflect: true },
    };
  }

  constructor() {
    super();
    this.id = '';
  }

  render() {
    return html`
      <h1>Truco Live!</h1>
      <div class="main-container">
        <card-tl class="card-left" value="1" suit="swords"></card-tl>
        <card-tl class="card-center" value="1" suit="coarse"></card-tl>
        <card-tl class="card-right" value="7" suit="swords"></card-tl>
      </div>
      <div class="options-container">
        <button-tl outlined label="Start Playing"></button-tl>
      </div>
    `;
  }
}

customElements.define('landing-page', LandingPage);
