import { ClientNote } from "../client-note";
import { Projects } from "../projects";
import { Quote } from "../quote";

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

    default:
      return <>{item.type}</>;
  }
};

export const Switcher: React.FC<Props> = ({ content }) => {
  return (
    <>
      {content.map((item, index) => {
        return <div key={`template-${index}`}>{getTemplate(item)}</div>;
      })}
    </>
  );
};
