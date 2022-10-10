import { projectsFilterState } from "common/atoms";
import { useRecoilValue } from "recoil";
import { ClientNote } from "../client-note";
import { Clients } from "../clients";
import { Project, Projects } from "../projects";
import { QuestionForm } from "../question-form";
import { Quote } from "../quote";
import { SlidingSection } from "../sliding-section";

interface Props {
  content: any[] | null;
}

const getTemplate = (item: any, filter: string) => {
  switch (item.type) {
    case "projects":
      const showAll = filter === "all";
      const projects = showAll
        ? item.projects
        : item.projects.filter((project: Project) =>
            project.categories.includes(filter)
          );
      if (item.layout === "grid") {
        return <Projects items={projects} />;
      }
      return <ClientNote items={projects} reverse={item.reverse} />;

    case "quote":
      return <Quote text={item.text} author={item.author} />;

    case "clients":
      return <Clients />;

    case "question-form":
      return <QuestionForm />;

    default:
      return <>{item.type}</>;
  }
};

export const Switcher: React.FC<Props> = ({ content }) => {
  const filter = useRecoilValue(projectsFilterState);
  return (
    <>
      {content?.map((item, index) => {
        return (
          <SlidingSection key={`template-${index}`}>
            {getTemplate(item, filter)}
          </SlidingSection>
        );
      })}
    </>
  );
};
