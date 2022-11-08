import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputFieldTypes } from "./Types";

export const InputField = ({
  id = "",
  name = "",
  handleChange = () => {},
  label = "",
  variant = "",
  value = "",
}: InputFieldTypes) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id={id}
        name={name}
        label={label}
        variant={variant}
        onChange={handleChange}
        value={value}
      />
    </Box>
  );
};
