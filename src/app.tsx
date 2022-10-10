import { contentHeightState } from "common/atoms";
import { Header } from "common/components/header";
import { Hero } from "common/components/hero";
import { Main } from "design-system/layout";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { Switcher } from "common/components/switcher";
import { fakeGetPageData } from "common/endpoints";
import { Footer } from "common/components/footer";
import { ProjectsFilters } from "common/components/projects-filter";
import { CircularProgress, Stack } from "@mui/material";

const App: React.FC = () => {
  const setContentHeight = useSetRecoilState(contentHeightState);
  const [isLoading, setLoading] = useState(false);
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    let timeout = 0;

    window.addEventListener("resize", () => {
      window.clearTimeout(timeout);
      timeout = window.setTimeout(() => {
        setContentHeight(window.innerHeight);
      }, 500);
    });
  }, [setContentHeight]);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const pageContent = await fakeGetPageData();

        setContent(pageContent);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Hero />
        <ProjectsFilters />
        {isLoading ? (
          <Stack justifyContent="center" alignItems="center" minHeight={200}>
            <CircularProgress color="secondary" />
          </Stack>
        ) : (
          <Switcher content={content} />
        )}
      </Main>
      <Footer />
    </>
  );
};

export default App;
