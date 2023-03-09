import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ResponsiveDrawer from "./ResponsiveDrawer";
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ["Online Buyers", "Offline Buyers", "Both Users", "Others"],
    datasets: [
      {
        data: [30, 60, 90, 20],
        backgroundColor: ["aqua", "red", "lightblue", "violet", "green"],
      },
    ],
  };
  const options = {};
  return (
    <div align="center">
      <h1 align="center">Socail Media Users</h1>
      <ResponsiveDrawer />
      <div
        style={{
          padding: "20px",
          width: "50%",
          alignItems: "right",
        }}
      >
        <h3 align="center">BarChart Analysis</h3>
        <BarChart />
        <h3 align="center">PieChart Analysis</h3>
        <Pie data={data} options={options}></Pie>
      </div>
    </div>
  );
};

export default Dashboard;
