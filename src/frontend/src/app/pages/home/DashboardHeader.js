import React from "react";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useLocation } from "react-router-dom";

import DashboardToggle from "./DashboardToggle";
import { paths } from "./DashboardUIHelper";
import styles from "../../utils/styles";

function DashboardHeader() {
  const { pathname } = useLocation();

  let title = paths.solar;
  if (pathname.includes(paths.nodes.path)) title = paths.nodes.title;
  if (pathname.includes(paths.details.path)) title = paths.details.title;
  if (pathname.includes(paths.map.path)) title = paths.map.title;
  if (pathname.includes(paths.statistics.path)) title = paths.statistics.title;

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "space-between",
          mt: 3,
        }}
      >
        <Typography variant="h4" noWrap sx={styles.pageTitle}>
          {title}
        </Typography>
        <DashboardToggle />
      </Box>
    </Container>
  );
}

export default DashboardHeader;
