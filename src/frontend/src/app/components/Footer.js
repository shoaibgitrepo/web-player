import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";

function Footer() {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar variant="dense" sx={{ minHeight: 32 }}>
        <Typography
          variant="p"
          noWrap
          component="p"
          sx={{
            display: "flex",
            flexGrow: 1,
            justifyContent: "center",
            color: "inherit",
          }}
        >
          Copyright 2022 - All Rights Reserved
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
