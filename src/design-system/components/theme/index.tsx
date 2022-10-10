import React from "react";
import { Global } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material";
import { CSSVarProvider, GlobalStyles } from "./styles";
import { White } from "design-system/colors";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    slg: true;
    lg: true;
    xl: true;
  }
}

const theme = createTheme({
  spacing: 4,
  palette: {
    secondary: {
      main: White,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      slg: 1000,
      lg: 1200,
      xl: 1536,
    },
  },
});

export const Theme: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CSSVarProvider>{children}</CSSVarProvider>
      <Global styles={GlobalStyles} />
    </ThemeProvider>
  );
};
