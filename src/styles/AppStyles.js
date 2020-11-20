import { css, unsafeCSS } from 'lit-element';
import { COLOR_PALLETE } from '../utils/constants';

export const AppStyles = css`
  * {
    box-sizing: border-box;
  }

  .app-container {
    height: 100vh;
    width: 100vw;
    background-color: ${unsafeCSS(COLOR_PALLETE.WHITE)};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
`;
