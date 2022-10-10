import { IconButton, Stack } from "@mui/material";
import { DeptContainer } from "design-system/layout";
import { ReactComponent as ArrowIcon } from "assets/images/arrow.svg";
import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as CloseIcon } from "assets/images/close.svg";
import * as S from "./styles";
import { useRecoilState } from "recoil";
import { menuDrawerState } from "common/atoms";
import { mainMenuLong } from "routes";
import { useLocation } from "react-router-dom";

export const MenuDrawer: React.FC = () => {
  const [showDrawer, setShowDrawer] = useRecoilState(menuDrawerState);
  const location = useLocation();

  return (
    <S.MenuDrawer style={{ display: showDrawer ? "block" : "none" }}>
      <DeptContainer>
        <S.MenuDrawerHeader>
          <Logo />
          <IconButton onClick={() => setShowDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </S.MenuDrawerHeader>
        <Stack component="ul">
          {mainMenuLong.map((menuItem) => (
            <S.MenuDrawerItem key={menuItem.path} component="li">
              <S.MenuDrawerLink end={menuItem.end} to={menuItem.path}>
                {location.pathname === menuItem.path && <ArrowIcon />}{" "}
                {menuItem.label}
              </S.MenuDrawerLink>
            </S.MenuDrawerItem>
          ))}
        </Stack>
      </DeptContainer>
      <S.MenuDrawerGradient />
    </S.MenuDrawer>
  );
};
