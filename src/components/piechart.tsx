"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

// Sample data
const data = [
  { name: "Users", value: 254 },
  { name: "Projects", value: 12 },
  { name: "Work Packages", value: 47 },
  { name: "Contractors", value: 18 },
];

const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#ec4899"];

export function DashboardPieChart() {
  return (
    <div className=" w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
      <h3 className="text-lg font-semibold ">Overview</h3>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          label
          
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend wrapperStyle={{marginTop:"100px"}}/>
      </PieChart>
    </div>
  );
}
