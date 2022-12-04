import React from "react";
import { TextField } from "@mui/material";
import { useFormikContext } from "formik";

function FormField({ name, label, type, ...props }) {
  const { errors, setFieldValue, setFieldTouched, touched, values } =
    useFormikContext();

  return (
    <TextField
      variant="standard"
      margin="normal"
      fullWidth
      id={name}
      label={label}
      name={name}
      autoComplete={name}
      onBlur={() => setFieldTouched(name)}
      onChange={(e) => setFieldValue(name, e.target.value)}
      value={values[name]}
      error={touched[name] && errors[name]}
      helperText={touched[name] && errors[name]}
      {...props}
    />
  );
}

export default FormField;
