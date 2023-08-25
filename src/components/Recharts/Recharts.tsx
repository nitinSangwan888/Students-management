import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ComposedChart,
  Line,
  Area,
  AreaChart,
  ResponsiveContainer,
} from "recharts";
import styles from "./Rechart.module.css";
const grafCHartdata = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const barchartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const barchart = [
  <div className="chart-container">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={barchartData}>
        <CartesianGrid stroke="black" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="rgba(255, 0, 0, 0.432)" />
        <Bar dataKey="uv" fill="#dc3545" />
      </BarChart>
    </ResponsiveContainer>
  </div>,
];

const grafCHart = [
  <div className="chart-container">
  <ResponsiveContainer width="100%" height="100%">
    <AreaChart data={grafCHartdata}>
      <CartesianGrid stroke="black" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Area
        type="monotone"
        dataKey="uv"
        stackId="1"
        stroke="#8884d8"
        fill="rgba(255, 0, 0, 0.432)"
      />
      <Area
        type="monotone"
        dataKey="pv"
        stackId="1"
        stroke="#82ca9d"
        fill="#dc3545"
        strokeDasharray="3 3"
      />
      <Area
        type="monotone"
        dataKey="amt"
        stackId="1"
        stroke="#ffc658"
        fill="red"
      />
    </AreaChart>
  </ResponsiveContainer>
</div>

];

export const chart = [
  {
    title: "Worldwide Sales",
    recharts: barchart,
    button: "Show All",
  },
  {
    title: "Salse & Revenue",
    recharts: grafCHart,
    button: "Show All",
  },
];
