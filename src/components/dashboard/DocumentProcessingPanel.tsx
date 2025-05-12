
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Upload, RefreshCw, AlertTriangle } from 'lucide-react';

const DocumentProcessingPanel: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Upload Document</h3>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Upload className="w-4 h-4" />
              <span>New Upload</span>
            </Button>
          </div>
          
          <div className="border-2 border-dashed border-gray-200 rounded-lg p-8 text-center">
            <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h4 className="font-medium mb-2">Drag and drop files here</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Support for CSV, Excel, SPSS, or connect to APIs
            </p>
            <Button size="sm">
              Select Files
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-4">Processing Queue</h3>
          
          <div className="space-y-4">
            {[
              { 
                name: "Clinical_Trial_Data.csv", 
                progress: 75, 
                status: "Processing", 
                message: "Cleaning and normalizing data", 
                icon: RefreshCw 
              },
              { 
                name: "Survey_Results_2025.csv", 
                progress: 45, 
                status: "Processing", 
                message: "Detecting data types", 
                icon: RefreshCw 
              },
              { 
                name: "Market_Analysis.spss", 
                progress: 15, 
                status: "Validating", 
                message: "Checking for missing values", 
                icon: AlertTriangle 
              }
            ].map((doc, i) => (
              <div key={i} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    <span className="font-medium">{doc.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <doc.icon className={`w-4 h-4 ${
                      doc.icon === AlertTriangle ? "text-amber-500" : "text-statblue-500"
                    } ${
                      doc.icon === RefreshCw ? "animate-spin" : ""
                    }`} />
                    <span className="text-sm text-muted-foreground">{doc.status}</span>
                  </div>
                </div>
                
                <div className="mt-2 mb-1">
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${
                        doc.progress === 100 ? "bg-green-500" : 
                        doc.progress > 50 ? "bg-statblue-500" : "bg-amber-500"
                      }`} 
                      style={{ width: `${doc.progress}%` }}
                    ></div>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{doc.message}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <Button variant="outline" size="sm">View All Documents</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-lg mb-4">Recently Processed</h3>
          
          <div className="divide-y">
            {[
              { 
                name: "Patient_Outcomes_Q2.xlsx", 
                date: "May 10, 2025", 
                rows: 1320, 
                columns: 24,
                status: "Complete" 
              },
              { 
                name: "Healthcare_Survey_Data.csv", 
                date: "May 07, 2025", 
                rows: 785, 
                columns: 16,
                status: "Complete" 
              },
              { 
                name: "Treatment_Comparison.xlsx", 
                date: "May 05, 2025", 
                rows: 452, 
                columns: 12,
                status: "Complete" 
              }
            ].map((doc, i) => (
              <div key={i} className="py-3 first:pt-0 last:pb-0">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-green-500" />
                    <div>
                      <p className="font-medium">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">{doc.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium">{doc.rows} rows</p>
                    <p className="text-xs text-muted-foreground">{doc.columns} columns</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentProcessingPanel;
