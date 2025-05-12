
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChartBar, ChartLine, ChartPie, BarChart3 } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="container py-20 relative">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <ChartLine className="absolute text-statblue-100 w-32 h-32 -top-4 right-1/4 opacity-30" />
        <ChartPie className="absolute text-statpurple-100 w-40 h-40 top-40 -left-10 opacity-20" />
        <BarChart3 className="absolute text-statblue-100 w-28 h-28 bottom-20 right-10 opacity-25" />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
        <div className="flex flex-col space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold">
            Data Analysis <span className="gradient-text">Simplified</span>
          </h1>
          
          <p className="text-xl text-muted-foreground">
            Powerful statistical analysis with an intuitive interface. 
            No coding required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-to-r from-statblue-500 to-statpurple-500 hover:from-statblue-600 hover:to-statpurple-600">
                Get Started Free
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button size="lg" variant="outline">
                Explore Demo
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center pt-4">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-statblue-${200 + i*100}`}></div>
              ))}
            </div>
            <span className="ml-4 text-sm text-muted-foreground">
              Trusted by 2,000+ researchers and analysts
            </span>
          </div>
        </div>
        
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative bg-white rounded-xl shadow-xl border border-gray-200 p-4 w-full max-w-lg animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-lg">Data Analysis</h3>
                <p className="text-sm text-muted-foreground">Statistical Results</p>
              </div>
              <ChartBar className="text-statblue-500 w-6 h-6" />
            </div>
            
            <div className="space-y-4">
              <div className="bg-statblue-50 p-4 rounded-md">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">T-Test Results</span>
                  <span className="text-statpurple-600 font-semibold">p = 0.023</span>
                </div>
                <div className="h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-statblue-400 to-statpurple-400 w-3/4 animate-pulse-light"></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Significant difference between groups (p &lt; 0.05)</p>
              </div>
              
              <div className="highlight-box">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Sample Size</span>
                  <span className="text-statblue-500">n = 156</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="block text-muted-foreground">Group A</span>
                    <span>78 participants</span>
                  </div>
                  <div>
                    <span className="block text-muted-foreground">Group B</span>
                    <span>78 participants</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-sm text-muted-foreground">Mean (A)</div>
                  <div className="font-semibold">42.3 ± 5.2</div>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="text-sm text-muted-foreground">Mean (B)</div>
                  <div className="font-semibold">38.7 ± 4.8</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
