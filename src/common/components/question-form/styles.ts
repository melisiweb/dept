import { Stack, styled } from "@mui/material";
import { Black, LightGray, Red, White } from "design-system/colors";
import { Text16 } from "design-system/typography";
import { pxToRem } from "design-system/utils";

export const Wrapper = styled("div")`
  padding: 92px 0;
  background-color: ${White};
  color: ${Black};

  ${(props) => props.theme.breakpoints.down("md")} {
    padding: 48px 0;
  }
`;

export const Label = styled(Text16)`
  text-transform: uppercase;
`.withComponent("label");

export const Form = styled("form")`
  ${(props) => props.theme.breakpoints.down("md")} {
    margin-top: 38px;
  }
`;

export const FormGroup = styled(Stack)`
  width: 295px;

  ${(props) => props.theme.breakpoints.down("md")} {
    width: 100%;
  }
`;

export const Input = styled("input")`
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: ${LightGray};
  padding: 4px;
`;

export const TextArea = styled(Input)``.withComponent("textarea");

export const Button = styled("button")`
  border-radius: 50px;
  border: 1px solid ${Black};
  cursor: pointer;
  padding: 14px 64px;
  margin: 0;
  font-size: ${pxToRem(18)};
  background-color: white;
  text-transform: uppercase;
  align-self: flex-start;

  &:hover {
    background-color: ${LightGray};
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;

    &:hover {
      background-color: white;
    }
  }

  ${(props) => props.theme.breakpoints.down("md")} {
    width: 100%;
  }
`;

export const ErrorText = styled(Text16)`
  color: ${Red};
`;
