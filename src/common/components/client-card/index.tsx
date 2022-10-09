import * as S from "./styles";
import { Heading48, StyledLink, Text16 } from "design-system/typography";
import { ReactComponent as LinkIcon } from "assets/images/link-icon.svg";
import { Stack } from "@mui/material";

interface Props {
  imagePath?: string;
  title: string;
  companyName: string;
  uuid: string;
}

export const ClientCard: React.FC<Props> = (props) => {
  return (
    <S.Wrapper style={{ backgroundImage: `url(${props.imagePath})` }}>
      <S.TextContainer>
        <Stack spacing={4}>
          <Text16 component="h6">{props.companyName}</Text16>
          <Heading48 component="h3">{props.title}</Heading48>
          <StyledLink to={`/project/${props.uuid}`}>
            <Stack direction="row" spacing={3}>
              <LinkIcon />
              <span>Read more</span>
            </Stack>
          </StyledLink>
        </Stack>
      </S.TextContainer>
    </S.Wrapper>
  );
};
