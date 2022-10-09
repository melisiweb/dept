import { IconButton, Stack } from "@mui/material";
import * as S from "./styles";
import { ReactComponent as MenuDots } from "assets/images/menu-dots.svg";
import { useUI } from "common/hooks/use-ui";
import { DeptContainer } from "design-system/layout";
import { useRecoilState } from "recoil";
import { menuDrawerState } from "common/atoms";

export const Menu: React.FC = () => {
  const { mdDown } = useUI();
  const [showDrawer, setShowDrawer] = useRecoilState(menuDrawerState);
  const onMenuClick = () => setShowDrawer(!showDrawer);

  return (
    <>
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
        <Stack position="relative" zIndex={100}>
          {mdDown ? (
            <S.MenuButton onClick={onMenuClick}>Menu</S.MenuButton>
          ) : (
            <IconButton onClick={onMenuClick}>
              <MenuDots />
            </IconButton>
          )}
        </Stack>
      </Stack>
      <S.MenuDrawer style={{ display: showDrawer ? "block" : "none" }}>
        <DeptContainer>
          <Stack component="ul">
            <S.MenuDrawerItem component="li">
              <S.MenuDrawerLink to="/">Home</S.MenuDrawerLink>
            </S.MenuDrawerItem>
            <S.MenuDrawerItem component="li">
              <S.MenuDrawerLink to="/">Work</S.MenuDrawerLink>
            </S.MenuDrawerItem>
            <S.MenuDrawerItem component="li">
              <S.MenuDrawerLink to="/">Culture</S.MenuDrawerLink>
            </S.MenuDrawerItem>
            <S.MenuDrawerItem component="li">
              <S.MenuDrawerLink to="/">Services</S.MenuDrawerLink>
            </S.MenuDrawerItem>
            <S.MenuDrawerItem component="li">
              <S.MenuDrawerLink to="/">Partners</S.MenuDrawerLink>
            </S.MenuDrawerItem>
            <S.MenuDrawerItem component="li">
              <S.MenuDrawerLink to="/">Stories</S.MenuDrawerLink>
            </S.MenuDrawerItem>
            <S.MenuDrawerItem component="li">
              <S.MenuDrawerLink to="/">Careers</S.MenuDrawerLink>
            </S.MenuDrawerItem>
            <S.MenuDrawerItem component="li">
              <S.MenuDrawerLink to="/">Events</S.MenuDrawerLink>
            </S.MenuDrawerItem>
            <S.MenuDrawerItem component="li">
              <S.MenuDrawerLink to="/">Contact</S.MenuDrawerLink>
            </S.MenuDrawerItem>
          </Stack>
        </DeptContainer>
      </S.MenuDrawer>
    </>
  );
};
