import { IconButton } from "@mui/material";
import { DeptContainer } from "design-system/layout";
import { ReactComponent as ArrowIcon } from "assets/images/arrow.svg";
import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as CloseIcon } from "assets/images/close.svg";
import * as S from "./styles";
import { menuDrawerState } from "common/atoms";
import { mainMenuLong } from "routes";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useSetRecoilState } from "recoil";

const boxVariant = {
  visible: {
    opacity: 1,
    y: 0,
    width: "100%",
    height: "100%",
    borderRadius: 0,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: 100,
    right: 0,
    top: 0,
    width: 0,
    borderRadius: "50%",
  },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const item = {
  hidden: { opacity: 0, x: -100 },
  show: { opacity: 1, x: 0 },
};

export const MenuDrawer: React.FC = () => {
  const setShowDrawer = useSetRecoilState(menuDrawerState);
  const location = useLocation();
  const handleClose = () => setShowDrawer(false);

  return (
    <>
      <S.Wrapper variants={boxVariant} animate="visible" initial="hidden">
        <S.MenuDrawer>
          <DeptContainer>
            <S.MenuDrawerHeader>
              <Logo />
              <IconButton onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </S.MenuDrawerHeader>
            <motion.ul variants={container} initial="hidden" animate="show">
              {mainMenuLong.map((menuItem, index) => (
                <S.MenuDrawerItem
                  key={menuItem.path}
                  variants={item}
                  transition={{ delay: index / 10 }}
                  initial="hidden"
                  animate="show"
                >
                  <S.MenuDrawerLink
                    end={menuItem.end}
                    to={menuItem.path}
                    onClick={handleClose}
                  >
                    {location.pathname === menuItem.path && <ArrowIcon />}{" "}
                    {menuItem.label}
                  </S.MenuDrawerLink>
                </S.MenuDrawerItem>
              ))}
            </motion.ul>
          </DeptContainer>
          <S.MenuDrawerGradient />
        </S.MenuDrawer>
      </S.Wrapper>
    </>
  );
};
