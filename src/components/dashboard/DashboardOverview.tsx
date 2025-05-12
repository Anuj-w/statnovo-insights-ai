
import React from 'react';
import { ChartBar, Activity, Database, FileText } from 'lucide-react';

const DashboardOverview: React.FC = () => {
  const stats = [
    {
      title: "Analyses Run",
      value: "23",
      change: "+5 this week",
      icon: ChartBar,
      color: "bg-statblue-500"
    },
    {
      title: "Documents Processed",
      value: "17",
      change: "+3 today",
      icon: FileText,
      color: "bg-statpurple-500"
    },
    {
      title: "Datasets Available",
      value: "8",
      change: "2.1 GB total",
      icon: Database,
      color: "bg-green-500"
    },
    {
      title: "Analysis Accuracy",
      value: "97%",
      change: "+2% improvement",
      icon: Activity,
      color: "bg-amber-500"
    }
  ];

  return (
    <div>
      <h1 className="text-3xl font-display font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
                <h3 className="text-3xl font-semibold mt-1">{stat.value}</h3>
                <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
              </div>
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="text-white w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardOverview;
