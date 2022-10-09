import { Stack, styled } from "@mui/material";
import { Black, White } from "design-system/colors";
import { pxToRem } from "design-system/utils";
import { NavLink } from "react-router-dom";

export const UnstyledBtn = styled("button")`
  text-align: center;
  line-height: inherit;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  appearance: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;

  &:disabled {
    pointer-events: none;
  }
`;

export const MenuButton = styled(UnstyledBtn)`
  color: ${Black};
`;

export const StyledLink = styled(NavLink)`
  color: ${(props) => props.color || "inherit"};
  text-decoration: none;
  font-size: ${pxToRem(18)};

  &.active {
    text-decoration: underline;
  }
`;

export const MenuList = styled(Stack)`
  ${(props) => ({ ...props.sx })}
  align-items: center;
` as typeof Stack;

export const MenuListItem = styled(Stack)`
  ${(props) => ({ ...props.sx })}
` as typeof Stack;

export const MenuDrawer = styled("div")`
  background-color: ${Black};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  padding-top: var(--header-height);
  overflow: auto;
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

  &:first-of-type {
    margin-top: 0;
  }
`;

export const MenuDrawerItem = styled(Stack)`
  ${(props) => ({ ...props.sx })}
  flex-direction: row;
  justify-content: flex-end;
  border-top: 1px solid ${White};
  padding-top: 8px;

  &:first-of-type {
    border-top: 0;
  }
` as typeof Stack;
