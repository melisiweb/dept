import { css } from "@emotion/react";
import { Black } from "../../colors";
import { BASE_FONT_SIZE } from "../../utils";
import LightFont from "assets/fonts/maison/light.woff2";
import BookFont from "assets/fonts/maison/book.woff2";

export const GlobalStyles = css`
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  @font-face {
    font-family: MaisonNeueMG;
    font-weight: 300;
    font-style: normal;
    src: url(${LightFont}) format("woff2");
    font-display: swap;
  }
  @font-face {
    font-family: MaisonNeueMG;
    font-weight: 400;
    font-style: normal;
    src: url(${BookFont}) format("woff2");
    font-display: swap;
  }

  b,
  strong {
    font-weight: 700;
  }

  body {
    color: white;
    background-color: ${Black};
    font-size: ${BASE_FONT_SIZE}px;
    margin: 0;
    padding: 0;
    text-rendering: optimizeLegibility;
    font-family: MaisonNeueMG, Helvetica, Arial;
    -webkit-font-smoothing: antialiased;
  }
`;
