import React from "react";
import { rows, columns } from "./data";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

export default function Invoices() {
  return (
    <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
      <DataGrid checkboxSelection rows={rows} columns={columns} />
    </Box>
  );
}
