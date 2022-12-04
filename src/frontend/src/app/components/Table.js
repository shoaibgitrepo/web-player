import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "../utils/styles";

function AppTable({ columns, data, maxHeight = "none", showHeader = true }) {
  return (
    <Paper sx={{ width: "100%", overflowY: "hidden" }}>
      <TableContainer sx={{ maxHeight, fontSize: 4 }}>
        <Table stickyHeader size="small" aria-label="sticky table">
          {showHeader && (
            <TableHead>
              <TableRow>
                {columns.map((column, index) => (
                  <TableCell
                    sx={styles.table.header}
                    key={index}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {data.map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column, index) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={index}
                        align={column.align}
                        sx={styles.table.body}
                      >
                        {column.format ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default AppTable;
