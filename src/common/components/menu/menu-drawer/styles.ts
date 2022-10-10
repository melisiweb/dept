import { styled } from "@mui/material";
import { Black, White } from "design-system/colors";
import { pxToRem } from "design-system/utils";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const drawerPadding = 156;

export const Wrapper = styled(motion.div)`
  position: absolute;
  overflow: hidden;
  height: 100vh;
  will-change: contents;
`;

export const MenuDrawer = styled("div")`
  background-color: ${Black};
  overflow: auto;
  padding-bottom: ${drawerPadding / 2}px;
  height: 100%;
`;

export const MenuDrawerGradient = styled("div")`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${drawerPadding}px;
  background: linear-gradient(rgba(0, 0, 0, 0) 0%, #000000 100%);
  z-index: 101;
  user-select: none;
  pointer-events: none;
`;

export const MenuDrawerLink = styled(NavLink)`
  color: ${(props) => props.color || "inherit"};
  text-decoration: none;
  margin-top: 16px;
  text-transform: uppercase;
  font-size: ${pxToRem(60)};
  line-height: ${pxToRem(60)};
  width: 100%;
  text-align: right;
  will-change: transform;

  &:first-of-type {
    margin-top: 0;
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    font-size: ${pxToRem(34)};
    line-height: ${pxToRem(34)};

    svg {
      width: 16px;
    }
  }
`;

export const MenuDrawerHeader = styled("div")`
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MenuDrawerItem = styled(motion.li)`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-top: 1px solid ${White};
  padding-top: 8px;
  will-change: transform;

  &:first-of-type {
    border-top: 0;
  }
`;
