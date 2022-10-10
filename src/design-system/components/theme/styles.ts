import { css } from "@emotion/react";
import { Black } from "../../colors";
import {
  BASE_FONT_SIZE,
  HEADER_HEIGHT,
  HEADER_MOBILE_HEIGHT,
} from "../../utils";
import LightFont from "assets/fonts/maison/light.woff2";
import BookFont from "assets/fonts/maison/book.woff2";
import { styled } from "@mui/material";

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

  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none;
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

export const CSSVarProvider = styled("div")`
  --header-height: ${HEADER_HEIGHT}px;

  ${(props) => props.theme.breakpoints.down("md")} {
    --header-height: ${HEADER_MOBILE_HEIGHT}px;
  }
`;
