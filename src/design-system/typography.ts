import { Box, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
import { White } from "./colors";
import { pxToRem } from "./utils";

const HeadingBase = styled(Box)`
  margin: 0;
  font-weight: 400;
`;

const TextBase = styled(Box)`
  margin: 0;
  font-weight: 400;
`;

export const Heading48 = styled(HeadingBase)`
  font-size: ${pxToRem(48)};
  line-height: ${pxToRem(48)};
`;

export const Heading34 = styled(HeadingBase)`
  font-size: ${pxToRem(34)};
  line-height: ${pxToRem(39)};
`;

export const Text16 = styled(TextBase)`
  font-size: ${pxToRem(16)};
  line-height: ${pxToRem(16)};
`;

export const Text18 = styled(TextBase)`
  font-size: ${pxToRem(18)};
  line-height: ${pxToRem(18)};
`;

export const Text24 = styled(TextBase)`
  font-size: ${pxToRem(24)};
  line-height: ${pxToRem(24)};
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${White};
`;
