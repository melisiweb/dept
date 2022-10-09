import { styled } from "@mui/material";

export const Wrapper = styled("blockquote")`
  padding: 90px 64px;
  text-align: center;
  margin: 0;

  ${(props) => props.theme.breakpoints.down("md")} {
    padding: 90px 32px;
  }
`;
