import React from "react";
import { Button, Typography } from "@mui/material";
import { useFormikContext } from "formik";

import styles from "../../utils/styles";

function SubmitButton({ title, sx }) {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      sx={sx}
      onClick={handleSubmit}
    >
      <Typography variant="p" noWrap component="p" sx={styles.submitButton}>
        {title}
      </Typography>
    </Button>
  );
}

export default SubmitButton;
