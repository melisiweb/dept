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
}

interface Props {
  items: {
    uuid: string;
    title: string;
    companyName: string;
    imagePath?: string;
  }[];
}

export const Projects: React.FC<Props> = ({ items }) => {
  return (
    <ContentGrid>
      {items.map((item) => (
        <ClientCard key={item.uuid} {...item} />
      ))}
    </ContentGrid>
  );
};
