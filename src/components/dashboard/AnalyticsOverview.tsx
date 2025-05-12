
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  ChartContainer, 
  ChartTooltip, 
  ChartTooltipContent 
} from '@/components/ui/chart';
import { 
  Area, 
  AreaChart, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  BarChart, 
  Bar, 
  Legend, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { TrendingUp, TrendingDown } from 'lucide-react';

const AnalyticsOverview: React.FC = () => {
  const areaData = [
    { name: 'Jan', analyses: 4 },
    { name: 'Feb', analyses: 7 },
    { name: 'Mar', analyses: 5 },
    { name: 'Apr', analyses: 10 },
    { name: 'May', analyses: 8 },
    { name: 'Jun', analyses: 12 },
    { name: 'Jul', analyses: 15 },
  ];

  const barData = [
    { name: 't-test', count: 7 },
    { name: 'ANOVA', count: 5 },
    { name: 'Regression', count: 4 },
    { name: 'Chi-square', count: 3 },
    { name: 'Correlation', count: 6 },
  ];

  const pieData = [
    { name: 'CSV Files', value: 45 },
    { name: 'Excel Files', value: 30 },
    { name: 'SPSS Files', value: 15 },
    { name: 'API Data', value: 10 },
  ];

  const COLORS = ['#4381FF', '#9C50EE', '#34D399', '#FBBF24'];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-2">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Analysis Activity</h3>
            <div className="flex items-center text-green-600 bg-green-50 px-2 py-1 rounded text-sm">
              <TrendingUp className="w-4 h-4 mr-1" /> 
              <span>+24% this month</span>
            </div>
          </div>
          
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={areaData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorAnalyses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4381FF" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#4381FF" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="bg-white p-2 border border-gray-200 shadow-sm rounded-md">
                        <p className="font-medium">{payload[0].payload.name}</p>
                        <p className="text-statblue-500">{`${payload[0].value} analyses`}</p>
                      </div>
                    );
                  }
                  return null;
                }} />
                <Area type="monotone" dataKey="analyses" stroke="#4381FF" fillOpacity={1} fill="url(#colorAnalyses)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-4">Analysis Types</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} layout="vertical" margin={{ top: 5, right: 30, left: 50, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f0f0f0" />
                <XAxis type="number" axisLine={false} tickLine={false} />
                <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#9C50EE" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-4">Data Sources</h3>
          <div className="h-72 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={2}
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Document Processing</h3>
            <div className="flex items-center text-amber-600 bg-amber-50 px-2 py-1 rounded text-sm">
              <TrendingDown className="w-4 h-4 mr-1" /> 
              <span>3 pending</span>
            </div>
          </div>
          <div className="space-y-2">
            {[
              { name: "Patient_Outcomes_Q2.xlsx", progress: 100, status: "Complete" },
              { name: "Clinical_Trial_Data.csv", progress: 75, status: "Processing" },
              { name: "Survey_Results_2025.csv", progress: 45, status: "Processing" },
              { name: "Market_Analysis.spss", progress: 15, status: "Started" }
            ].map((doc, i) => (
              <div key={i} className="flex items-center justify-between p-2 border-b last:border-0">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span>{doc.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-20 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        doc.progress === 100 ? "bg-green-500" : 
                        doc.progress > 50 ? "bg-statblue-500" : "bg-amber-500"
                      }`} 
                      style={{ width: `${doc.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-muted-foreground">{doc.status}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AnalyticsOverview;
