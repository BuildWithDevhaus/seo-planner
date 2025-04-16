import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { MonthlyData } from "../types";

interface ChartsSectionProps {
  monthlyData: MonthlyData[];
}

export default function ChartsSection({ monthlyData }: ChartsSectionProps) {
  // Transform the data for the charts
  const chartData = monthlyData.map((data) => ({
    month: data.month,
    revenue: data.revenue,
    expense: data.cumExpense / 12, // Monthly expense (assuming equal distribution)
    profit: data.profit,
    cumRevenue: data.cumRevenue,
    cumProfit: data.cumProfit,
  }));

  return (
    <div className="w-11/12 mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Revenue Growth Over Time Chart */}
      <div className="bg-slate-50 p-6 rounded-2xl">
        <h2 className="text-xl font-semibold mb-4">Revenue Growth Over Time</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="revenue"
                name="Monthly Revenue ($)"
                fill="#93c5fd"
                barSize={20}
              />
              <Line
                type="monotone"
                dataKey="cumRevenue"
                name="Cumulative Revenue ($)"
                stroke="#22c55e"
                activeDot={{ r: 8 }}
                strokeWidth={2}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Profitability Analysis Chart */}
      <div className="bg-slate-50 p-6 rounded-2xl">
        <h2 className="text-xl font-semibold mb-4">Profitability Analysis</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis yAxisId="left" orientation="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="revenue"
                name="Monthly Revenue ($)"
                fill="#93c5fd"
                barSize={20}
              />
              <Bar
                yAxisId="left"
                dataKey="expense"
                name="Monthly Expense ($)"
                fill="#f87171"
                barSize={20}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="profit"
                name="Monthly Profit ($)"
                stroke="#22c55e"
                strokeWidth={2}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="cumProfit"
                name="Cumulative Profit ($)"
                stroke="#3b82f6"
                strokeWidth={2}
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
