import { ClientNote } from "../client-note";
import { Clients } from "../clients";
import { Projects } from "../projects";
import { QuestionForm } from "../question-form";
import { Quote } from "../quote";
import { SlidingSection } from "../sliding-section";

interface Props {
  content: any[];
}

const getTemplate = (item: any) => {
  switch (item.type) {
    case "projects":
      if (item.layout === "grid") {
        return <Projects items={item.projects} />;
      }
      return <ClientNote items={item.projects} reverse={item.reverse} />;

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
  return (
    <>
      {content.map((item, index) => {
        return (
          <SlidingSection key={`template-${index}`}>
            {getTemplate(item)}
          </SlidingSection>
        );
      })}
    </>
  );
};
