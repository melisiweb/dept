import React from "react";
import { Global } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material";
import { GlobalStyles } from "./styles";

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
      {children}
      <Global styles={GlobalStyles} />
    </ThemeProvider>
  );
};
