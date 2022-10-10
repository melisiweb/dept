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
    width: "100%",
    y: 0,
    borderRadius: 0,
  },
  hidden: {
    opacity: 0,
    y: -400,
    borderRadius: "50%",
  },
};

const item = {
  hidden: { opacity: 0, x: -100 },
  show: {
    opacity: 1,
    x: 0,
    transation: {
      duration: 0.5,
    },
  },
};

const container = {
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
  hide: { opacity: 0 },
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
            <motion.ul variants={container} initial="hide" animate="show">
              {mainMenuLong.map((menuItem, index) => (
                <S.MenuDrawerItem
                  key={menuItem.path}
                  variants={item}
                  transition={{ delay: index * 0.1 }}
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
