import { Container, Stack, useScrollTrigger } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Menu } from "../menu";
import * as S from "./styles";

export const Header: React.FC = () => {
  const trigger = useScrollTrigger();
  return (
    <S.Wrapper
      style={{ top: !trigger ? 0 : "calc(var(--header-height) * -1)" }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <NavLink to="/">
            <S.StyledLogo />
          </NavLink>
          <Menu />
        </Stack>
      </Container>
    </S.Wrapper>
  );
};
