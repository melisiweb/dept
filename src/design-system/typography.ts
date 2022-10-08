import { Box, styled } from "@mui/material";
import { pxToRem } from "./utils";

const HeadingBase = styled(Box)`
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
