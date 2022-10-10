import * as S from "./styles";
import { Text16 } from "design-system/typography";
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
    <S.Wrapper
      to={`/project/${props.uuid}`}
      style={{ backgroundImage: `url(${props.imagePath})` }}
    >
      <S.TextContainer className="text-container">
        <Stack spacing={4}>
          <Text16 component="h6">{props.companyName}</Text16>
          <S.Title component="h3">{props.title}</S.Title>
          <Stack direction="row" spacing={3}>
            <LinkIcon />
            <span>Read more</span>
          </Stack>
        </Stack>
      </S.TextContainer>
      <S.TextReadibility />
    </S.Wrapper>
  );
};
