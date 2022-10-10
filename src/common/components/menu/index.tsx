import { IconButton, Modal, Stack } from "@mui/material";
import * as S from "./styles";
import { ReactComponent as MenuDots } from "assets/images/menu-dots.svg";
import { useUI } from "common/hooks/use-ui";
import { useRecoilState } from "recoil";
import { menuDrawerState } from "common/atoms";
import { MenuDrawer } from "./menu-drawer";
import { mainMenuShort } from "routes";
import { useEffect } from "react";

export const Menu: React.FC = () => {
  const { mdDown } = useUI();
  const [showDrawer, setShowDrawer] = useRecoilState(menuDrawerState);
  const onMenuClick = () => setShowDrawer(!showDrawer);

  useEffect(() => {
    document.body.style.overflow = showDrawer ? "hidden" : "visible";
  }, [showDrawer]);

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
          {mainMenuShort.map((menuItem) => (
            <S.MenuListItem key={menuItem.path} component="li">
              <S.StyledLink end={menuItem.end} to={menuItem.path}>
                {menuItem.label}
              </S.StyledLink>
            </S.MenuListItem>
          ))}
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
      <Modal
        open={showDrawer}
        onClose={onMenuClick}
        aria-labelledby="Main menu modal"
        container={document.querySelector("main")}
      >
        <div>
          <MenuDrawer />
        </div>
      </Modal>
    </>
  );
};
