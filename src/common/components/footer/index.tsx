import { Stack } from "@mui/material";
import { LighterGray } from "design-system/colors";
import { DeptContainer } from "design-system/layout";
import { MenuListItem, StyledLink } from "../menu/styles";
import { ReactComponent as InstagramIcon } from "assets/images/social/instagram.svg";
import { ReactComponent as TwitterIcon } from "assets/images/social/twitter.svg";
import { ReactComponent as FacebookIcon } from "assets/images/social/facebook.svg";
import * as S from "./styles";

export const Footer: React.FC = () => {
  return (
    <S.Wrapper>
      <DeptContainer>
        <Stack
          direction="row"
          spacing={{ xs: 0, md: 30 }}
          alignItems="flex-end"
        >
          <S.StyledLogo />
          <Stack direction="row" flex={1} justifyContent="space-between">
            <Stack
              component="ul"
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 10, md: 5 }}
            >
              <MenuListItem component="li">
                <StyledLink end to="/">
                  Work
                </StyledLink>
              </MenuListItem>
              <MenuListItem component="li">
                <StyledLink to="/services">Services</StyledLink>
              </MenuListItem>
              <MenuListItem component="li">
                <StyledLink to="/stories">Stories</StyledLink>
              </MenuListItem>
              <MenuListItem component="li">
                <StyledLink to="/about">About</StyledLink>
              </MenuListItem>
              <MenuListItem component="li">
                <StyledLink to="/careers">Careers</StyledLink>
              </MenuListItem>
              <MenuListItem component="li">
                <StyledLink to="/contact">Contact</StyledLink>
              </MenuListItem>
            </Stack>
            <Stack
              alignItems="center"
              spacing={10}
              display={{ xs: "flex", md: "none" }}
            >
              <a href="https://facebook.com">
                <FacebookIcon />
              </a>
              <a href="https://twitter.com">
                <TwitterIcon />
              </a>
              <a href="https://instagram.com">
                <InstagramIcon />
              </a>
            </Stack>
          </Stack>
        </Stack>
        <S.Separator />
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
          spacing={{ xs: 6, md: 0 }}
        >
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 0, md: 9 }}
          >
            <S.BottomText color={LighterGray}>
              Chamber of Commerce: 63464101
            </S.BottomText>
            <S.BottomText color={LighterGray}>
              VAT: NL 8552.47.502.B01
            </S.BottomText>
            <StyledLink color={LighterGray} to="/terms">
              <S.BottomText>Terms and conditions</S.BottomText>
            </StyledLink>
          </Stack>
          <S.BottomText color={LighterGray}>© 2022 Dept Agency</S.BottomText>
        </Stack>
      </DeptContainer>
    </S.Wrapper>
  );
};
