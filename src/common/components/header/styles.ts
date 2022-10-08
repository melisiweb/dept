import { styled } from "@mui/material";
import { Black, White } from "design-system/colors";
import { ReactComponent as Logo } from "assets/images/logo.svg";

export const Wrapper = styled("header")`
  padding: 45px 0;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${Black};

  ${(props) => props.theme.breakpoints.down("md")} {
    background-color: ${White};
    padding: 24px 0;
  }
`;

export const StyledLogo = styled(Logo)`
  min-width: 90px;

  ${(props) => props.theme.breakpoints.down("md")} {
    min-width: 52px;
    path {
      fill: ${Black};
    }
  }
`;
