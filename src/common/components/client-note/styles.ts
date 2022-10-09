import { Stack, styled } from "@mui/material";
import { Black, White } from "design-system/colors";

export const Wrapper = styled("div")`
  width: 100%;
  height: 40vw;
  background-color: ${Black};
  padding: 0 32px;

  ${(props) => props.theme.breakpoints.down("md")} {
    height: auto;
    padding: 24px;
  }
`;

export const TextContainer = styled("div")`
  position: absolute;
  bottom: 32px;
  left: 32px;
`;

export const Note = styled(Stack)`
  margin-top: 36px;
  padding-top: 32px;
  border-top: 1px solid ${White};

  &:first-of-type {
    margin-top: 0;
    padding-top: 0;
    border-top: none;
  }
`;
