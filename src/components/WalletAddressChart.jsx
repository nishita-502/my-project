// src/components/WalletAddressChart.jsx
import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import "./WalletAddressChart.css"; // Import corresponding CSS

const generateData = () => {
  const walletAddresses = [
    "0x1234...5678",
    "0x2345...6789",
    "0x3456...7890",
    "0x4567...8901",
    "0x5678...9012",
    "0x6789...0123",
    "0x7890...1234",
    "0x8901...2345",
    "0x9012...3456",
    "0x0123...4567",
  ];

  return walletAddresses.map((address) => ({
    address,
    amount: Math.floor(Math.random() * 1000),
    status: Math.random() > 0.2 ? "normal" : "suspicious",
  }));
};

const WalletAddressChart = () => {
  const [data, setData] = useState(generateData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateData());
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="chart-container">
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 40, bottom: 60 }}
        >
          <XAxis
            dataKey="address"
            angle={-45}
            textAnchor="end"
            height={80}
            interval={0}
            tick={{ fill: "#fff", fontSize: 12 }}
          />
          <YAxis
            tick={{ fill: "#fff" }}
            label={{
              value: "Amount",
              angle: -90,
              position: "insideLeft",
              fill: "#fff",
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "#2a2a2a",
              border: "none",
              borderRadius: "5px",
            }}
            labelStyle={{ color: "#fff" }}
            itemStyle={{ color: "#fff" }}
          />
          <Legend wrapperStyle={{ color: "#fff" }} />
          <ReferenceLine
            y={1000}
            stroke="#666"
            label={{ value: "Threshold", fill: "#fff" }}
          />
          <Bar
            dataKey="amount"
            fill="#8884d8"
            barSize={40}
            shape={(props) => {
              const { x, y, width, height } = props;
              const color =
                data[props.index].status === "normal" ? "#4ade80" : "#f87171";
              return (
                <rect x={x} y={y} width={width} height={height} fill={color} />
              );
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WalletAddressChart;
