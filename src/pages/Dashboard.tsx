
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ChartBar, 
  FileText, 
  History, 
  ChartLine, 
  Activity, 
  Database
} from 'lucide-react';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import DashboardOverview from '@/components/dashboard/DashboardOverview';
import RecentAnalyses from '@/components/dashboard/RecentAnalyses';
import DocumentProcessingPanel from '@/components/dashboard/DocumentProcessingPanel';
import AnalyticsOverview from '@/components/dashboard/AnalyticsOverview';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      
      <main className="container py-6">
        <DashboardOverview />
        
        <Tabs defaultValue="analytics" className="mt-6">
          <TabsList className="grid w-full md:w-auto grid-cols-3 md:grid-cols-4 mb-4">
            <TabsTrigger value="analytics" className="flex items-center gap-2">
              <ChartBar className="h-4 w-4" />
              <span className="hidden md:inline">Analytics</span>
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden md:inline">Documents</span>
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <History className="h-4 w-4" />
              <span className="hidden md:inline">History</span>
            </TabsTrigger>
            <TabsTrigger value="datasets" className="flex items-center gap-2">
              <Database className="h-4 w-4" />
              <span className="hidden md:inline">Datasets</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="analytics" className="space-y-6">
            <AnalyticsOverview />
            <RecentAnalyses />
          </TabsContent>
          
          <TabsContent value="documents" className="space-y-4">
            <DocumentProcessingPanel />
          </TabsContent>
          
          <TabsContent value="history">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Analysis History</h3>
              <div className="text-muted-foreground text-center py-8">
                No analysis history available yet. Start analyzing data to see your history here.
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="datasets">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-4">Available Datasets</h3>
              <div className="text-muted-foreground text-center py-8">
                No datasets available. Upload your first dataset to get started.
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Dashboard;
