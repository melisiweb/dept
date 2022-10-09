import { styled } from "@mui/material";
import { Black, White } from "design-system/colors";
import { ReactComponent as Logo } from "assets/images/logo.svg";

export const Wrapper = styled("header")`
  transition: all 0.2s linear;
  z-index: 5;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${Black};
  height: var(--header-height);
  display: flex;
  align-items: center;

  ${(props) => props.theme.breakpoints.down("md")} {
    background-color: ${White};
  }
`;

export const StyledLogo = styled(Logo)`
  min-width: 90px;
  position: relative;
  z-index: 100;

  ${(props) => props.theme.breakpoints.down("md")} {
    min-width: 52px;
    path {
      fill: ${Black};
    }
  }
`;
