import { css } from "@emotion/react";
import { Stack, styled } from "@mui/material";
import { Black } from "design-system/colors";
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
  color: inherit;
  text-decoration: none;
  font-size: ${pxToRem(18)};

  &.active {
    text-decoration: underline;
  }
`;

const ListStyle = css`
  padding: 0;
  margin: 0;
`;

export const MenuList = styled(Stack)`
  ${ListStyle}
  ${(props) => ({ ...props.sx })}
  align-items: center;
` as typeof Stack;

export const MenuListItem = styled(Stack)`
  ${ListStyle}
  ${(props) => ({ ...props.sx })}
` as typeof Stack;
