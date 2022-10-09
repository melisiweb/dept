import { styled } from "@mui/material";
import { HeadingBase, StyledLink } from "design-system/typography";
import { pxToRem } from "design-system/utils";

export const Wrapper = styled(StyledLink)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 40vw;
  background-color: blue;
  background-size: cover;
  background-position: center center;
  padding: 32px;

  ${(props) => props.theme.breakpoints.down("md")} {
    height: 100vw;
    padding: 16px;
  }
`;

export const TextContainer = styled("div")``;

export const Title = styled(HeadingBase)`
  font-size: ${pxToRem(48)};
  line-height: ${pxToRem(48)};

  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: ${pxToRem(26)};
    line-height: ${pxToRem(26)};
  }
`;
