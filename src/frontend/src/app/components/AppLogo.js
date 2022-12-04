import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import styles from "../utils/styles";
import colors from "../utils/colors";

function AppLogo({ website = false, inherit = false }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: website ? "flex-end" : "center",
      }}
    >
      <Box
        component="img"
        sx={{ height: 48, mr: 2 }}
        alt="App logo"
        src={`${process.env.PUBLIC_URL}/logo.png`}
      />
      <Box>
        <Typography
          variant="h6"
          noWrap
          component="h6"
          sx={{
            ...styles.appLogo,
            color: inherit ? "inherit" : colors.primary,
          }}
        >
          Player
        </Typography>
        {website && (
          <Typography
            variant="p"
            noWrap
            component="p"
            sx={{
              ...styles.appLogo,
              color: inherit ? "inherit" : colors.primary,
              fontSize: 14,
            }}
          >
            www.player.in
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default AppLogo;
