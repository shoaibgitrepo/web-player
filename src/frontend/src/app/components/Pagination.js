import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import colors from "../utils/colors";
import { Box } from "@mui/material";

function Pagination({ pageNumber, pageSize, count, onPageChange }) {
  const lastPage = Math.ceil(count / pageSize);
  const disabledBack = pageNumber === 1;
  const disabledNext = pageNumber === lastPage;
  const barColor =
    disabledBack && disabledNext ? colors.disabled : colors.primary;

  return (
    <Box sx={{ display: "inline" }}>
      <Button
        size="small"
        variant="text"
        sx={{ fontWeight: "bold", minWidth: 0 }}
        disabled={disabledBack}
        onClick={() => onPageChange(1)}
      >
        &lt;&lt;
      </Button>
      <Button
        size="small"
        variant="text"
        sx={{ fontWeight: "bold", minWidth: 0 }}
        disabled={disabledBack}
        onClick={() => onPageChange(pageNumber - 1)}
      >
        Prev
      </Button>
      <Typography
        variant="p"
        noWrap
        component="p"
        sx={{
          display: "inline",
          color: barColor,
          fontWeight: "bold",
        }}
      >
        |
      </Typography>
      <Button
        size="small"
        variant="text"
        sx={{ fontWeight: "bold", minWidth: 0 }}
        disabled={disabledNext}
        onClick={() => onPageChange(pageNumber + 1)}
      >
        Next
      </Button>
      <Button
        size="small"
        variant="text"
        sx={{ fontWeight: "bold", minWidth: 0 }}
        disabled={disabledNext}
        onClick={() => onPageChange(lastPage)}
      >
        &gt;&gt;
      </Button>
    </Box>
  );
}

export default Pagination;
