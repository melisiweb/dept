import { MenuItem } from "@mui/material";
import { Stack } from "@mui/system";
import { projectsFilterState } from "common/atoms";
import { Gray, White } from "design-system/colors";
import { DeptContainer } from "design-system/layout";
import { Text16 } from "design-system/typography";
import { useRecoilState } from "recoil";
import * as S from "./styles";

export const ProjectsFilters: React.FC = () => {
  const [filter, setFilter] = useRecoilState(projectsFilterState);

  return (
    <Stack alignItems="center" bgcolor={White} paddingY={4}>
      <DeptContainer>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Text16 color={Gray}>Show me</Text16>
          <S.StyledSelect
            size="small"
            value={filter}
            onChange={(ev) => setFilter(ev.target.value as string)}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="lighting">Lighting</MenuItem>
            <MenuItem value="social">Social</MenuItem>
            <MenuItem value="commercial">Commercial</MenuItem>
          </S.StyledSelect>
          <Text16 color={Gray}>work</Text16>
        </Stack>
      </DeptContainer>
    </Stack>
  );
};
