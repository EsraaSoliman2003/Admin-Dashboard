import {
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import Line from "../line/Line";
import { DownloadOutlined } from "@mui/icons-material";

export default function Row2() {
  const theme = useTheme();
  return (
    <Stack direction={"row"} flexWrap={"wrap"} gap={1} mt={3}>
      <Paper
        sx={{
          maxWidth: 900,
          flexGrow: 1,
        }}
      >
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <Typography
              color={theme.palette.secondary.main}
              mb={1}
              mt={2}
              ml={4}
              variant="h6"
            >
              Revenue Generated
            </Typography>
            <Typography variant="body2" ml={4}>
              $59,342.32
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ mr: 3 }}>
              <DownloadOutlined />
            </IconButton>
          </Box>
        </Stack>

        <Line isDashboard={true} />
      </Paper>

      <Box sx={{ flexGrow: 1 }}>
        <Paper>
          <Typography
            color={theme.palette.secondary.main}
            fontWeight={"bold"}
            p={1.2}
            variant="h6"
          >
            Recent Transactions
          </Typography>
        </Paper>

        <Paper
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            mt: 1,
            alignItems: "center",
            padding: "15px 10px",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>01e4dseaf</Typography>
            <Typography>johndoe</Typography>
          </Box>

          <Typography>2024-07-04</Typography>

          <Typography
            sx={{
              backgroundColor: "#ef5350",
              padding: "5px",
              borderRadius: "5px",
              color: "white",
            }}
          >
            $43.91
          </Typography>
        </Paper>

        <Paper
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            mt: 1,
            alignItems: "center",
            padding: "15px 10px",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>01e4dseaf</Typography>
            <Typography>johndoe</Typography>
          </Box>

          <Typography>2024-07-04</Typography>

          <Typography
            sx={{
              backgroundColor: "#ef5350",
              padding: "5px",
              borderRadius: "5px",
              color: "white",
            }}
          >
            $43.91
          </Typography>
        </Paper>
        <Paper
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            mt: 1,
            alignItems: "center",
            padding: "15px 10px",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>01e4dseaf</Typography>
            <Typography>johndoe</Typography>
          </Box>

          <Typography>2024-07-04</Typography>

          <Typography
            sx={{
              backgroundColor: "#ef5350",
              padding: "5px",
              borderRadius: "5px",
              color: "white",
            }}
          >
            $43.91
          </Typography>
        </Paper>
        <Paper
          sx={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
            mt: 1,
            alignItems: "center",
            padding: "15px 10px",
          }}
        >
          <Box>
            <Typography sx={{ fontWeight: "bold" }}>01e4dseaf</Typography>
            <Typography>johndoe</Typography>
          </Box>

          <Typography>2024-07-04</Typography>

          <Typography
            sx={{
              backgroundColor: "#ef5350",
              padding: "5px",
              borderRadius: "5px",
              color: "white",
            }}
          >
            $43.91
          </Typography>
        </Paper>
      </Box>
    </Stack>
  );
}
