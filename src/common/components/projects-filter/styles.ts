import { Select, styled } from "@mui/material";

export const StyledSelect = styled(Select)`
  .MuiInputBase-input {
    padding: 0 !important;
  }

  .MuiOutlinedInput-notchedOutline {
    border: none;
  }

  .MuiSelect-icon {
    display: none;
  }
`;
