import { Grid, Stack } from "@mui/material";
import { useScrollDirection } from "common/hooks/use-scroll-direction";
import { NavLink } from "react-router-dom";
import { Menu } from "../menu";
import * as S from "./styles";

export const Header: React.FC = () => {
  const direction = useScrollDirection();
  console.log(direction);
  return (
    <S.Wrapper>
      <Grid container>
        <Grid item xs />
        <Grid item xs={10}>
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
        </Grid>
        <Grid item xs />
      </Grid>
    </S.Wrapper>
  );
};
