import { useMediaQuery, useTheme } from "@mui/material";

export const useUI = () => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up("md"));
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  return { mdUp, mdDown };
};
