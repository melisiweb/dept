import { contentHeightState } from "common/atoms";
import { Header } from "common/components/header";
import { Hero } from "common/components/hero";
import { Main } from "design-system/layout";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Switcher } from "common/components/switcher";
import { pageContent } from "common/endpoints";
import { Footer } from "common/components/footer";
import { ProjectsFilters } from "common/components/projects-filter";

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
        <ProjectsFilters />
        <Switcher content={pageContent} />
      </Main>
      <Footer />
    </>
  );
};

export default App;
