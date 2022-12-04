import { Container, Typography } from "@mui/material";
import React from "react";

function DashboardStatistics() {
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h6"
        noWrap
        component="h6"
        sx={{
          height: "70vh",
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "inherit",
        }}
      >
        Coming soon!
      </Typography>
    </Container>
  );
}

export default DashboardStatistics;
