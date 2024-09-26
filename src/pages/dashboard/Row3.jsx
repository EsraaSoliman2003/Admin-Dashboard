import { Box, Paper } from "@mui/material";
import React from "react";
import Pie from "../pie/Pie";
import Bar from "../bar/Bar";
import Geography from "../geography/Geography";

export default function Row3() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100%",
        marginTop: "25px"
      }}
    >
      <Paper sx={{ width: "33%" }}>
        <Pie isDashboard={true} />
      </Paper>
      <Paper sx={{ width: "33%" }}>
        <Bar isDashboard={true} />
      </Paper>
      <Paper sx={{ width: "33%" }}>
        <Geography isDashboard={true} />
      </Paper>
    </Box>
  );
}
