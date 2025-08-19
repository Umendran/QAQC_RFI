"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

// Sample data: Projects completed each month
const data = [
  { month: "Jan", projects: 3 },
  { month: "Feb", projects: 5 },
  { month: "Mar", projects: 2 },
  { month: "Apr", projects: 6 },
  { month: "May", projects: 4 },
  { month: "Jun", projects: 7 },
  { month: "Jul", projects: 8 },
  { month: "Aug", projects: 5 },
  { month: "Sep", projects: 9 },
  { month: "Oct", projects: 4 },
  { month: "Nov", projects: 6 },
  { month: "Dec", projects: 10 },
];

export function DashboardBarChart() {
  return (
    <div className="w-full max-w-2xl bg-white dark:bg-gray-800 p-6 rounded-lg shadow mt-8">
      <h3 className="text-lg font-semibold mb-4">Projects Completed (2025)</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="projects" fill="#3b82f6" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
