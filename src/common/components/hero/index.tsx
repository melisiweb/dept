import { contentHeightState } from "common/atoms";
import { useUI } from "common/hooks/use-ui";
import { DeptContainer } from "design-system/layout";
import { Heading34 } from "design-system/typography";
import { HEADER_HEIGHT, HEADER_MOBILE_HEIGHT } from "design-system/utils";
import { useRecoilValue } from "recoil";
import heroImage from "./hero.jpg";
import * as S from "./styles";

export const Hero: React.FC = () => {
  const { mdDown } = useUI();
  const contentHeight = useRecoilValue(contentHeightState);
  const height =
    contentHeight - (mdDown ? HEADER_MOBILE_HEIGHT : HEADER_HEIGHT);

  return (
    <S.Wrapper style={{ backgroundImage: `url(${heroImage})`, height }}>
      <S.HeroContent>
        <DeptContainer>
          <S.TextContainer spacing="32px">
            <div>WORK</div>
            <Heading34 component="h1">
              A selection of projects that <strong>pioneer tech</strong> and{" "}
              <strong>marketing</strong> to help brands stay ahead.
            </Heading34>
          </S.TextContainer>
        </DeptContainer>
      </S.HeroContent>
    </S.Wrapper>
  );
};
