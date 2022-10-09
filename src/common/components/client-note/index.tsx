import * as S from "./styles";
import { StyledLink, Text16 } from "design-system/typography";
import { ReactComponent as LinkIcon } from "assets/images/link-icon.svg";
import { Grid, Stack } from "@mui/material";
import { Project } from "../projects";
import { ClientCard } from "../client-card";

interface Props {
  items: Project[];
  reverse?: boolean;
}

export const ClientNote: React.FC<Props> = (props) => {
  return (
    <>
      {props.items.map((project) => {
        return (
          <Grid
            container
            key={project.uuid}
            flexDirection={props.reverse ? "row-reverse" : "row"}
          >
            <Grid item xs={12} md={8}>
              <ClientCard
                companyName={project.companyName}
                title={project.title}
                imagePath={project.imagePath}
                uuid={project.uuid}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <S.Wrapper>
                <Stack justifyContent="center" height="100%">
                  <Stack>
                    {project.notes?.map((note) => (
                      <S.Note key={note.uuid} spacing={3}>
                        <Text16>{note.companyName}</Text16>
                        <Text16>{note.text}</Text16>
                        <StyledLink to={`/project/${note.uuid}`}>
                          <Stack direction="row" spacing={3}>
                            <LinkIcon />
                            <span>Read more</span>
                          </Stack>
                        </StyledLink>
                      </S.Note>
                    ))}
                  </Stack>
                </Stack>
              </S.Wrapper>
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};
