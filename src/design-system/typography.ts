import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { pxToRem } from "./utils";

const HeadingBase = styled(Box)`
  margin: 0;
  font-weight: 400;
`;

export const Heading48 = styled(HeadingBase)`
  font-size: ${pxToRem(48)};
  line-height: ${pxToRem(48)};
`;
