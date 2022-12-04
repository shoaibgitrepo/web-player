import React from "react";
import { Box, Card } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

function Item({ name, type, onItemClick }) {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        mb: 2,
        fontSize: 16,
        minHeight: 40,
        p: 1,
      }}
      onClick={onItemClick}
    >
      {type === "dir" ? (
        <FolderIcon color="warning" />
      ) : (
        <OndemandVideoIcon color="primary" />
      )}
      <Box sx={{ ml: 1 }}>{name}</Box>
    </Card>
  );
}

export default Item;
