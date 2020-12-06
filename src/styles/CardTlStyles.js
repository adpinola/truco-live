import { css, unsafeCSS } from 'lit-element';
import { COLOR_PALLETE } from '../utils/constants';

export const CardTlStyles = css`
  * {
    box-sizing: border-box;
  }

  .card-border {
    width: 248px;
    height: 380px;
    background-color: white;
    border: 2px solid;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-border:hover {
    transform: translateY(-50px);
    transition: transform 0.2s;
    border: 4px solid;
    border-color: ${unsafeCSS(COLOR_PALLETE.CONTRAST)};
  }

  .card-inside {
    width: calc(100% - 5px);
    height: calc(100% - 5px);
    display: flex;
    justify-content: space-between;
  }

  p {
    margin: 4px;
    font-family: 'Times New Roman', Times, serif;
    font-size: x-large;
  }

  p.number-bottom {
    transform: rotate(180deg);
  }

  .image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
  }

  fa-icon {
    margin-bottom: -3px;
  }
  fa-icon.fa-bitcoin,
  fa-icon.coins {
    color: gold;
  }

  fa-icon.fa-candy-cane,
  fa-icon.coarse {
    color: mediumseagreen;
  }

  fa-icon.fa-trophy,
  fa-icon.cup {
    color: indianred;
  }

  fa-icon.fa-angle-up,
  fa-icon.swords {
    color: royalblue;
  }
`;
