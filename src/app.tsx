import { contentHeightState } from "common/atoms";
import { Header } from "common/components/header";
import { Hero } from "common/components/hero";
import { Main } from "design-system/layout";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Heading48 } from "./design-system/typography";
import { Switcher } from "common/components/switcher";
import { pageContent } from "common/endpoints";

const App: React.FC = () => {
  const setContentHeight = useSetRecoilState(contentHeightState);

  useEffect(() => {
    let timeout = 0;

    window.addEventListener("resize", () => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        setContentHeight(window.innerHeight);
      }, 500);
    });
  }, [setContentHeight]);

  return (
    <>
      <Header />
      <Main>
        <Hero />
        <Switcher content={pageContent} />
      </Main>
      <Heading48 component="h1">Dept</Heading48>
      <Heading48 component="h1">Dept</Heading48>
      <Heading48 component="h1">Dept</Heading48>
      <Heading48 component="h1">Dept</Heading48>
    </>
  );
};

export default App;
