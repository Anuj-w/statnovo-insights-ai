
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { ChartBar, ChartLine, FileText, BarChart3 } from 'lucide-react';

const RecentAnalyses: React.FC = () => {
  const analyses = [
    {
      id: "A-1234",
      name: "Patient Outcome Analysis",
      type: "T-Test",
      date: "May 10, 2025",
      pValue: 0.023,
      status: "Significant",
      icon: ChartBar
    },
    {
      id: "A-1233",
      name: "Clinical Trial Comparison",
      type: "ANOVA",
      date: "May 08, 2025",
      pValue: 0.048,
      status: "Significant",
      icon: BarChart3
    },
    {
      id: "A-1232",
      name: "Market Trend Analysis",
      type: "Regression",
      date: "May 05, 2025",
      pValue: 0.072,
      status: "Not Significant",
      icon: ChartLine
    },
    {
      id: "A-1231",
      name: "Survey Response Correlation",
      type: "Correlation",
      date: "May 03, 2025",
      pValue: 0.008,
      status: "Significant",
      icon: FileText
    }
  ];

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-4">Recent Analyses</h3>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Analysis</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>p-value</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {analyses.map((analysis) => (
              <TableRow key={analysis.id}>
                <TableCell className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-md ${analysis.status === "Significant" ? "bg-statblue-100" : "bg-gray-100"}`}>
                    <analysis.icon className={`w-3.5 h-3.5 ${analysis.status === "Significant" ? "text-statblue-500" : "text-muted-foreground"}`} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{analysis.name}</p>
                    <p className="text-xs text-muted-foreground">{analysis.id}</p>
                  </div>
                </TableCell>
                <TableCell>{analysis.type}</TableCell>
                <TableCell>{analysis.date}</TableCell>
                <TableCell>{analysis.pValue}</TableCell>
                <TableCell>
                  <span className={`px-2 py-1 rounded text-xs ${
                    analysis.status === "Significant" 
                      ? "bg-green-50 text-green-600" 
                      : "bg-gray-50 text-gray-600"
                  }`}>
                    {analysis.status}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RecentAnalyses;
