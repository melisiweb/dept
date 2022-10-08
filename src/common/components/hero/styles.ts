import { Stack, styled } from "@mui/material";

export const Wrapper = styled("section")`
  position: relative;
  background-size: cover;
  background-position: center center;
`;

export const HeroContent = styled("div")`
  position: absolute;
  bottom: 82px;
  width: 100%;

  ${(props) => props.theme.breakpoints.down("md")} {
    bottom: 22px;
  }
`;

export const TextContainer = styled(Stack)`
  max-width: 580px;
`;
