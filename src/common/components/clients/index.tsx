import { Stack } from "@mui/material";
import { ClientsGrid, DeptContainer } from "design-system/layout";
import { Heading34, Text18 } from "design-system/typography";
import * as S from "./styles";
import clientLogo1 from "assets/images/client-logos/client-logo1.png";
import clientLogo2 from "assets/images/client-logos/client-logo2.png";
import clientLogo3 from "assets/images/client-logos/client-logo3.png";
import clientLogo4 from "assets/images/client-logos/client-logo4.png";
import clientLogo5 from "assets/images/client-logos/client-logo5.png";
import clientLogo6 from "assets/images/client-logos/client-logo6.png";
import clientLogo7 from "assets/images/client-logos/client-logo7.png";
import clientLogo8 from "assets/images/client-logos/client-logo8.png";
import clientLogo9 from "assets/images/client-logos/client-logo9.png";
import clientLogo10 from "assets/images/client-logos/client-logo10.png";
import clientLogo11 from "assets/images/client-logos/client-logo11.png";
import clientLogo12 from "assets/images/client-logos/client-logo12.png";

export const Clients: React.FC = () => {
  return (
    <DeptContainer>
      <Stack spacing={16} padding="92px 0">
        <Stack spacing={8}>
          <Heading34>Clients</Heading34>
          <Text18>
            We value a great working relationship with our clients above all
            else. It’s why they often come to our parties. It’s also why we’re
            able to challenge and inspire them to reach for the stars.
          </Text18>
        </Stack>
        <ClientsGrid>
          <S.ClientLogoContainer
            style={{ backgroundImage: `url(${clientLogo1})` }}
          />
          <S.ClientLogoContainer
            style={{ backgroundImage: `url(${clientLogo2})` }}
          />
          <S.ClientLogoContainer
            style={{ backgroundImage: `url(${clientLogo3})` }}
          />
          <S.ClientLogoContainer
            style={{ backgroundImage: `url(${clientLogo4})` }}
          />
          <S.ClientLogoContainer
            style={{ backgroundImage: `url(${clientLogo5})` }}
          />
          <S.ClientLogoContainer
            style={{ backgroundImage: `url(${clientLogo6})` }}
          />
          <S.ClientLogoContainer
            style={{ backgroundImage: `url(${clientLogo7})` }}
          />
          <S.ClientLogoContainer
            style={{ backgroundImage: `url(${clientLogo8})` }}
          />
          <S.ClientLogoContainer
            style={{ backgroundImage: `url(${clientLogo9})` }}
          />
          <S.ClientLogoContainer
            style={{ backgroundImage: `url(${clientLogo10})` }}
          />
          <S.ClientLogoContainer
            style={{ backgroundImage: `url(${clientLogo11})` }}
          />
          <S.ClientLogoContainer
            style={{ backgroundImage: `url(${clientLogo12})` }}
          />
        </ClientsGrid>
      </Stack>
    </DeptContainer>
  );
};
