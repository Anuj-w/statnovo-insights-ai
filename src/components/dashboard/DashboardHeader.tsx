
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Upload, Bell, Settings } from 'lucide-react';

const DashboardHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="font-display text-xl font-bold gradient-text">
              STATNOVO
            </Link>
            <span className="text-sm bg-gray-100 px-2 py-0.5 rounded text-muted-foreground">Dashboard</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Upload className="w-4 h-4" />
              <span className="hidden sm:inline">Upload Data</span>
            </Button>
            
            <div className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-statblue-500 rounded-full"></span>
              </Button>
            </div>
            
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            
            <div className="h-8 w-8 rounded-full bg-statblue-500 text-white flex items-center justify-center ml-2">
              <span className="text-sm font-medium">US</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
