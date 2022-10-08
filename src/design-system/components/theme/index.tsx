import React from "react";
import { Global } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material";
import { GlobalStyles } from "./styles";

const theme = createTheme();

export const Theme: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <Global styles={GlobalStyles} />
    </ThemeProvider>
  );
};
