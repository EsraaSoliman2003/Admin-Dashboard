import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";
import React from "react";

export default function Card(props) {
  const theme = useTheme()

  return (
    <Paper
      sx={{
        flexGrow: 1,
        minWidth: "333px",
        padding: 1.5,
        display: "flex",
        justifyContent: "space-between",
        marginX: "auto",
      }}
    >
      <Stack gap={1}>
        {props.icon}
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {props.title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "13px" }}>
          {props.subtitle}
        </Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <Box  height={"70px"} width={"100px"}>
          <ResponsivePie
            data={props.data}
            margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
            innerRadius={0.7}
            theme={{
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
              axis: {
                domain: {
                  line: {
                    stroke: "#777777",
                    strokeWidth: 1,
                  },
                },
                legend: {
                  text: {
                    fontSize: 12,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                },
                ticks: {
                  line: {
                    stroke: "#777777",
                    strokeWidth: 1,
                  },
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                },
              },
              grid: {
                line: {
                  stroke: "#dddddd",
                  strokeWidth: 1,
                },
              },
              legends: {
                title: {
                  text: {
                    fontSize: 11,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                },
                text: {
                  fontSize: 11,
                  fill: theme.palette.text.primary,
                  outlineWidth: 0,
                  outlineColor: "transparent",
                },
                ticks: {
                  line: {},
                  text: {
                    fontSize: 10,
                    fill: theme.palette.text.primary,
                    outlineWidth: 0,
                    outlineColor: "transparent",
                  },
                },
              },
              annotations: {
                text: {
                  fontSize: 13,
                  fill: theme.palette.text.primary,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                link: {
                  stroke: "#000000",
                  strokeWidth: 1,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                outline: {
                  stroke: "#000000",
                  strokeWidth: 2,
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
                symbol: {
                  fill: "#000000",
                  outlineWidth: 2,
                  outlineColor: "#ffffff",
                  outlineOpacity: 1,
                },
              },
              tooltip: {
                wrapper: {},
                container: {
                  background: theme.palette.background.default,
                  color: theme.palette.text.primary,
                  fontSize: 12,
                },
                basic: {},
                chip: {},
                table: {},
                tableCell: {},
                tableCellValue: {},
              },
            }}
            colors={{scheme: props.scheme}}
            padAngle={0.7}
            cornerRadius={3}
            activeOuterRadiusOffset={8}
            borderWidth={1}
            borderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            enableArcLinkLabels={false}
            enableArcLabels={false}
            defs={[
              {
                id: "dots",
                type: "patternDots",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                size: 4,
                padding: 1,
                stagger: true,
              },
              {
                id: "lines",
                type: "patternLines",
                background: "inherit",
                color: "rgba(255, 255, 255, 0.3)",
                rotation: -45,
                lineWidth: 6,
                spacing: 10,
              },
            ]}
            fill={[
              {
                match: {
                  id: "ruby",
                },
                id: "dots",
              },
              {
                match: {
                  id: "c",
                },
                id: "dots",
              },
              {
                match: {
                  id: "go",
                },
                id: "dots",
              },
              {
                match: {
                  id: "python",
                },
                id: "dots",
              },
              {
                match: {
                  id: "scala",
                },
                id: "lines",
              },
              {
                match: {
                  id: "lisp",
                },
                id: "lines",
              },
              {
                match: {
                  id: "elixir",
                },
                id: "lines",
              },
              {
                match: {
                  id: "javascript",
                },
                id: "lines",
              },
            ]}
          />
        </Box>
        <Typography variant="body2">{props.increase}</Typography>
      </Stack>
    </Paper>
  );
}
