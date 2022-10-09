import { styled } from "@mui/material";

export const ClientLogoContainer = styled("div")`
  background-position: center center;
  background-size: 170px;
  background-repeat: no-repeat;
  height: 90px;

  ${(props) => props.theme.breakpoints.down("md")} {
    background-size: 114px;
    height: 60px;
  }
`;
