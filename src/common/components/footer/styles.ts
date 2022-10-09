import { styled } from "@mui/material";
import { ReactComponent as Logo } from "assets/images/logo.svg";
import { LighterGray } from "design-system/colors";
import { TextBase } from "design-system/typography";
import { pxToRem } from "design-system/utils";

export const Wrapper = styled("footer")`
  padding: 62px 0 90px;

  ${(props) => props.theme.breakpoints.down("md")} {
    padding: 62px 0;
  }
`;

export const StyledLogo = styled(Logo)`
  min-width: 90px;

  ${(props) => props.theme.breakpoints.down("md")} {
    display: none;
  }
`;

export const Separator = styled("div")`
  border-bottom: 1px solid ${LighterGray};
  margin: 62px 0 45px;
`;

export const BottomText = styled(TextBase)`
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(16)};

  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: ${pxToRem(14)};
    line-height: ${pxToRem(14)};
  }
`;
