import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ViewListIcon from "@mui/icons-material/ViewList";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Typography from "@mui/material/Typography";

import colors from "../../utils/colors";
import config from "../../../config";
import { paths } from "./DashboardUIHelper";
import styles from "../../utils/styles";

export default function DashboardToggle() {
  const [view, setView] = useState(paths.nodes.name);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleChange = (event, nextView) => {
    navigate(`${config.homepage}/dashboard/${nextView}`);
    setView(nextView);
  };

  useEffect(() => {
    const view = Object.keys(paths).filter((path) =>
      pathname.includes(paths[path].path)
    );
    if (view.length > 0)
      setView(view[0] === paths.details.name ? paths.nodes.name : view[0]);
  }, [pathname]);

  return (
    <ToggleButtonGroup
      size="small"
      value={view}
      exclusive
      onChange={handleChange}
    >
      <ToggleButton value={paths.nodes.name} aria-label="list">
        <ViewListIcon color="primary" />
        <Typography variant="p" sx={styles.dashboardToggle}>
          List
        </Typography>
      </ToggleButton>
      <ToggleButton value={paths.map.name} aria-label="module">
        <Typography variant="p" sx={styles.dashboardToggle}>
          Map
        </Typography>
      </ToggleButton>
      <ToggleButton value={paths.statistics.name} aria-label="quilt">
        <Typography variant="p" sx={styles.dashboardToggle}>
          Statistics
        </Typography>
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
