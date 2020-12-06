import { LitElement, html } from 'lit-element';
import { AppStyles } from './styles/AppStyles';
import './components/LandingPage/LandingPage';

export class TrucoLive extends LitElement {
  static get properties() {
    return {
      id: { type: String },
    };
  }

  static get styles() {
    return [AppStyles];
  }

  constructor() {
    super();
    this.id = '';
  }

  render() {
    return html`
      <div class="app-container">
        <landing-page></landing-page>
      </div>
    `;
  }

  handleClick(e) {
    console.log(`${e.detail.log}`);
  }
}
