import { css } from "@emotion/react";
import { styled } from "@mui/material";

export const FlexVCenter = css`
  display: flex;
  align-items: center;
`;

export const FlexHCenter = css`
  display: flex;
  justify-content: center;
`;

export const Main = styled("main")`
  margin-top: var(--header-height);
`;

export const ContentGrid = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ${(props) => props.theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
  }
`;

export const ClientsGrid = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 80px;

  ${(props) => props.theme.breakpoints.down("md")} {
    grid-template-columns: 1fr;
  }
`;
