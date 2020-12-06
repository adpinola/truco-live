import { css, unsafeCSS } from 'lit-element';
import { COLOR_PALLETE } from '../utils/constants';

export const ButtonTlStyles = css`
  * {
    box-sizing: border-box;
  }

  fa-icon {
    color: var(--tl-border, ${unsafeCSS(COLOR_PALLETE.SCALE.DARKEST)});
    margin-bottom: -3px;
  }

  button {
    border-radius: 8px;
    padding: 5px 15px;
    transform: unset;
    border-style: solid;
    display: flex;
    align-items: center;
  }

  button[outlined='true'] {
    background-color: var(
      --tl-backgorund,
      ${unsafeCSS(COLOR_PALLETE.SCALE.LIGHT)}
    );
    border-color: var(--tl-border, ${unsafeCSS(COLOR_PALLETE.SCALE.DARKEST)});
  }

  button[outlined='false'] {
    background-color: var(
      --tl-backgorund,
      ${unsafeCSS(COLOR_PALLETE.HIGHLIGHT)}
    );
    border-color: var(--tl-backgorund, ${unsafeCSS(COLOR_PALLETE.HIGHLIGHT)});
  }

  .raise-button {
    transform: translateY(0.5px);
  }

  button:hover:enabled {
    background-color: var(
      --tl-highlight,
      ${unsafeCSS(COLOR_PALLETE.HIGHLIGHT)}
    );
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  button:disabled {
    opacity: 0.4;
    cursor: unset;
  }

  p#title {
    color: var(--tl-border, ${unsafeCSS(COLOR_PALLETE.SCALE.DARKEST)});
    margin: 0 5px;
    font-family: Tahoma, sans-serif;
    font-weight: bold;
    font-size: 1.2em;
  }
`;
