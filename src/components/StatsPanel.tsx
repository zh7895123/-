import { cn } from "@/lib/utils";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '行驶时间', value: 120 },
  { name: '停留时间', value: 30 },
  { name: '装卸时间', value: 45 }
];

export default function StatsPanel() {
  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden")}>
      <div className="p-4 border-b border-gray-200">
        <h3 className="font-medium text-[#2E3A59]">运输统计</h3>
      </div>
      <div className="p-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#2E3A59" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
