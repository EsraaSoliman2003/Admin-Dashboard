import { Stack, useTheme } from "@mui/material";
import React from "react";
import Card from "./Card";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { data1, data2, data3, data4 } from "./data";

export default function Row1() {
  const theme = useTheme();
  return (
    <Stack
      direction={"row"}
      justifyContent={"space-between"}
      flexWrap={"wrap"}
      gap={1}
      marginTop={"10px"}
    >
      <Card
        icon={
          <EmailIcon
            sx={{ xs: "center", color: theme.palette.secondary.main }}
          />
        }
        title={"12,361"}
        subtitle={"Emails Sent"}
        data={data1}
        scheme={"nivo"}
        increase={"+14%"}
      />
      <Card
        icon={
          <PointOfSaleIcon
            sx={{ xs: "center", color: theme.palette.secondary.main }}
          />
        }
        title={"431,225"}
        subtitle={"Sales obtained"}
        data={data2}
        scheme={"category10"}
        increase={"+21%"}
      />
      <Card
        icon={
          <PersonAddIcon
            sx={{ xs: "center", color: theme.palette.secondary.main }}
          />
        }
        title={"32,441"}
        subtitle={"New Clients"}
        data={data3}
        scheme={"accent"}
        increase={"+5%"}
      />
      <Card
        icon={
          <TrafficIcon
            sx={{ xs: "center", color: theme.palette.secondary.main }}
          />
        }
        title={"1,325,134"}
        subtitle={"Traffic Received"}
        data={data4}
        scheme={"dark2"}
        increase={"+43%"}
      />
    </Stack>
  );
}
