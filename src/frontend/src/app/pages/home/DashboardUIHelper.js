import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import config from "../../../config";
import { decodeDate } from "../../utils/helper";

export const nodeDetailsColumns = [
  { id: "battery_voltage", label: "Battery Voltage" },
  { id: "battery_current", label: "Battery Current" },
  { id: "battery_wattage", label: "Battery Wattage" },
  { id: "solar_voltage", label: "Solar Voltage" },
  { id: "solar_current", label: "Solar Current" },
  { id: "solar_wattage", label: "Solar Wattage" },
  { id: "load_voltage", label: "Load Voltage" },
  { id: "load_current", label: "Load Current" },
  { id: "load_wattage", label: "Load Wattage" },
  { id: "battery_status", label: "Battery Status" },
  { id: "latitude", label: "Latitude" },
  { id: "longitude", label: "Longitude" },
  { id: "charging_status", label: "Charging Status" },
  { id: "day_night", label: "Day/Night" },
  {
    id: "timestamp",
    label: "Timestamp",
    minWidth: 100,
    format: (value) => decodeDate(value),
  },
];

export const nodesColumns = [
  {
    id: "ID",
    label: "ID",
    format: (value) => (
      <Typography variant="p" noWrap component="p">
        <Link to={`${config.homepage}/dashboard/details/${value}`}>
          {value}
        </Link>
      </Typography>
    ),
  },
  { id: "battery_voltage", label: "Battery Voltage" },
  { id: "battery_current", label: "Battery Current" },
  { id: "battery_wattage", label: "Battery Wattage" },
  { id: "solar_voltage", label: "Solar Voltage" },
  { id: "solar_current", label: "Solar Current" },
  { id: "solar_wattage", label: "Solar Wattage" },
  { id: "load_voltage", label: "Load Voltage" },
  { id: "load_current", label: "Load Current" },
  { id: "load_wattage", label: "Load Wattage" },
  { id: "battery_status", label: "Battery Status" },
  { id: "latitude", label: "Latitude" },
  { id: "longitude", label: "Longitude" },
  { id: "charging_status", label: "Charging Status" },
  { id: "day_night", label: "Day/Night" },
  {
    id: "timestamp",
    label: "Timestamp",
    minWidth: 100,
    format: (value) => decodeDate(value),
  },
];

export const paths = {
  solar: "SOLARLIGHT DATA",
  nodes: {
    name: "nodes",
    path: `${config.homepage}/dashboard/nodes`,
    title: "SOLARLIGHT DATA LIST",
  },
  details: {
    name: "details",
    path: `${config.homepage}/dashboard/details`,
    title: "DETAILED SOLARLIGHT DATA",
  },
  map: {
    name: "map",
    path: `${config.homepage}/dashboard/map`,
    title: "SOLARLIGHT MAP VIEW",
  },
  statistics: {
    name: "statistics",
    path: `${config.homepage}/dashboard/statistics`,
    title: "SOLARLIGHT STATISTICS",
  },
};
