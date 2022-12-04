import React from "react";
import { TextField } from "@mui/material";
import { useFormikContext } from "formik";

function PasswordField({ name, label, type, ...props }) {
  const { errors, setFieldValue, setFieldTouched, touched, values } =
    useFormikContext();

  return (
    <TextField
      fullWidth
      type="password"
      variant="standard"
      margin="normal"
      id={name}
      label="Password"
      name={name}
      autoComplete="current-password"
      onBlur={() => setFieldTouched(name)}
      onChange={(e) => setFieldValue(name, e.target.value)}
      value={values[name]}
      error={touched[name] && errors[name]}
      helperText={touched[name] && errors[name]}
      {...props}
    />
  );
}

export default PasswordField;
