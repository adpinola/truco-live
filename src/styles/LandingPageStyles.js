import { css, unsafeCSS } from 'lit-element';
import { COLOR_PALLETE } from '../utils/constants';

export const LandingPageStyles = css`
  * {
    box-sizing: border-box;
  }

  h1 {
    text-align: center;
    margin: 100px 0px;
    color: ${unsafeCSS(COLOR_PALLETE.SCALE.DARKEST)};
  }

  .main-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .options-container {
    display: flex;
    justify-content: center;
  }

  card-tl.card-left {
    transform: rotate(-10deg) translateX(60px);
  }
  card-tl.card-center {
    transform: translateY(-30px);
  }
  card-tl.card-right {
    transform: rotate(10deg) translateX(-60px);
  }

  button-tl {
    margin: 10px;
  }
`;
