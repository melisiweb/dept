import { Stack } from "@mui/material";
import { Text18, Text24 } from "design-system/typography";
import * as S from "./styles";

interface Props {
  text: string;
  author: string;
}

export const Quote: React.FC<Props> = ({ text, author }) => {
  return (
    <S.Wrapper>
      <Stack spacing={8}>
        <Text24>{text}</Text24>
        <Text18>{author}</Text18>
      </Stack>
    </S.Wrapper>
  );
};
