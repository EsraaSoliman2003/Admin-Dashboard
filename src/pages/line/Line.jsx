import React from "react";
import { ResponsiveLine } from "@nivo/line";
import { Box, useTheme } from "@mui/material";

const data = [
  {
    id: "japan",
    color: "hsl(245, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 147,
      },
      {
        x: "helicopter",
        y: 270,
      },
      {
        x: "boat",
        y: 250,
      },
      {
        x: "train",
        y: 300,
      },
      {
        x: "subway",
        y: 145,
      },
      {
        x: "bus",
        y: 60,
      },
      {
        x: "car",
        y: 88,
      },
      {
        x: "moto",
        y: 60,
      },
      {
        x: "bicycle",
        y: 5,
      },
      {
        x: "horse",
        y: 59,
      },
      {
        x: "skateboard",
        y: 168,
      },
      {
        x: "others",
        y: 93,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(152, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 261,
      },
      {
        x: "helicopter",
        y: 190,
      },
      {
        x: "boat",
        y: 234,
      },
      {
        x: "train",
        y: 131,
      },
      {
        x: "subway",
        y: 90,
      },
      {
        x: "bus",
        y: 180,
      },
      {
        x: "car",
        y: 236,
      },
      {
        x: "moto",
        y: 211,
      },
      {
        x: "bicycle",
        y: 268,
      },
      {
        x: "horse",
        y: 147,
      },
      {
        x: "skateboard",
        y: 91,
      },
      {
        x: "others",
        y: 221,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(120, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 203,
      },
      {
        x: "helicopter",
        y: 144,
      },
      {
        x: "boat",
        y: 195,
      },
      {
        x: "train",
        y: 143,
      },
      {
        x: "subway",
        y: 277,
      },
      {
        x: "bus",
        y: 19,
      },
      {
        x: "car",
        y: 66,
      },
      {
        x: "moto",
        y: 28,
      },
      {
        x: "bicycle",
        y: 251,
      },
      {
        x: "horse",
        y: 220,
      },
      {
        x: "skateboard",
        y: 284,
      },
      {
        x: "others",
        y: 151,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(274, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 54,
      },
      {
        x: "helicopter",
        y: 269,
      },
      {
        x: "boat",
        y: 211,
      },
      {
        x: "train",
        y: 289,
      },
      {
        x: "subway",
        y: 73,
      },
      {
        x: "bus",
        y: 36,
      },
      {
        x: "car",
        y: 207,
      },
      {
        x: "moto",
        y: 111,
      },
      {
        x: "bicycle",
        y: 125,
      },
      {
        x: "horse",
        y: 132,
      },
      {
        x: "skateboard",
        y: 267,
      },
      {
        x: "others",
        y: 224,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(325, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 266,
      },
      {
        x: "helicopter",
        y: 259,
      },
      {
        x: "boat",
        y: 20,
      },
      {
        x: "train",
        y: 242,
      },
      {
        x: "subway",
        y: 195,
      },
      {
        x: "bus",
        y: 106,
      },
      {
        x: "car",
        y: 300,
      },
      {
        x: "moto",
        y: 247,
      },
      {
        x: "bicycle",
        y: 257,
      },
      {
        x: "horse",
        y: 64,
      },
      {
        x: "skateboard",
        y: 4,
      },
      {
        x: "others",
        y: 235,
      },
    ],
  },
];

export default function Line(props) {
  const theme = useTheme();
  return (
    <Box sx={{ height: props.isDashboard ? "280px" : "75vh" }}>
      <ResponsiveLine
        data={data}
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
              strokeWidth: 0,
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
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: props.isDashboard ? null : "transportation",
          legendOffset: 36,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: props.isDashboard ? null : "count",
          legendOffset: -40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
}
