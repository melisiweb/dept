import { IconButton, Stack } from "@mui/material";
import * as S from "./styles";
import { ReactComponent as MenuDots } from "assets/images/menu-dots.svg";
import { useUI } from "common/hooks/use-ui";

export const Menu: React.FC = () => {
  const { mdDown } = useUI();

  return (
    <Stack
      component="nav"
      direction="row"
      spacing="48px"
      role="navigation"
      aria-label="Main"
    >
      <S.MenuList
        component="ul"
        direction="row"
        spacing="48px"
        display={{ xs: "none", md: "flex" }}
      >
        <S.MenuListItem component="li">
          <S.StyledLink end to="/">
            Work
          </S.StyledLink>
        </S.MenuListItem>

        <S.MenuListItem component="li">
          <S.StyledLink to="/culture">Culture</S.StyledLink>
        </S.MenuListItem>

        <S.MenuListItem component="li">
          <S.StyledLink to="/services">Services</S.StyledLink>
        </S.MenuListItem>

        <S.MenuListItem component="li">
          <S.StyledLink to="/insights">Insights</S.StyledLink>
        </S.MenuListItem>

        <S.MenuListItem component="li" display={{ xs: "none", slg: "flex" }}>
          <S.StyledLink to="/careers">Careers</S.StyledLink>
        </S.MenuListItem>

        <S.MenuListItem component="li" display={{ xs: "none", slg: "flex" }}>
          <S.StyledLink to="/contact">Contact</S.StyledLink>
        </S.MenuListItem>
      </S.MenuList>
      {mdDown ? (
        <S.MenuButton>Menu</S.MenuButton>
      ) : (
        <IconButton>
          <MenuDots />
        </IconButton>
      )}
    </Stack>
  );
};
