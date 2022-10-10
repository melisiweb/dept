import { styled } from "@mui/material";
import { HeadingBase, StyledLink } from "design-system/typography";
import { pxToRem } from "design-system/utils";

export const TextReadibility = styled("div")`
  position: absolute;
  height: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, #000000 100%);
`;

export const TextContainer = styled("div")`
  transition: transform 0.2s linear;
  position: relative;
  z-index: 2;
`;

export const Wrapper = styled(StyledLink)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 40vw;
  background-size: cover;
  background-position: center center;
  padding: 32px;
  position: relative;

  ${(props) => props.theme.breakpoints.down("md")} {
    height: 100vw;
    padding: 16px;
  }

  &:hover {
    .text-container {
      transform: translate3d(0, -20px, 0);
    }
  }
`;

export const Title = styled(HeadingBase)`
  font-size: ${pxToRem(48)};
  line-height: ${pxToRem(48)};

  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: ${pxToRem(26)};
    line-height: ${pxToRem(26)};
  }
`;
