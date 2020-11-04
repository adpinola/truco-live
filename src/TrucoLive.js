import { LitElement, html, css } from 'lit-element';

export class TrucoLive extends LitElement {
  static get properties() {
    return {
      id: { type: String },
    };
  }

  static get styles() {
    return css`
      #main {
        min-height: 100vh;
        position: relative;
        flex: auto;
        background-color: #e08181;
      }

      h1 {
        margin: 0;
        padding: 0;
      }
    `;
  }

  constructor() {
    super();
    this.id = '';
  }

  render() {
    return html`
      <div id="main">
        <h1>Truco Live</h1>
      </div>
    `;
  }
}
