import { ContentGrid } from "design-system/layout";
import { ClientCard } from "../client-card";

export interface Note {
  text: string;
  companyName: string;
  uuid: string;
}

export interface Project {
  uuid: string;
  title: string;
  companyName: string;
  imagePath?: string;
  notes?: Note[];
  categories: string[];
}

interface Props {
  items: Project[];
}

export const Projects: React.FC<Props> = ({ items }) => {
  return (
    <ContentGrid>
      {items.map((item) => {
        return <ClientCard key={item.uuid} {...item} />;
      })}
    </ContentGrid>
  );
};
