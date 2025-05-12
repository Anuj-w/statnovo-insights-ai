
import React from 'react';
import { ChartPie, ChartBar, History, ArrowRightLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const DashboardPreview: React.FC = () => {
  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
          Intuitive Analysis Dashboard
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Powerful data analysis with a beautiful interface
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden max-w-5xl mx-auto">
        {/* Dashboard Header */}
        <div className="bg-gray-50 border-b p-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="bg-statblue-100 p-2 rounded-md">
              <ChartBar className="h-5 w-5 text-statblue-500" />
            </div>
            <div>
              <h3 className="font-medium">Patient Outcomes Analysis</h3>
              <p className="text-sm text-muted-foreground">Last modified: May 10, 2025</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200">
              <History className="h-4 w-4" />
            </button>
            <button className="bg-gray-100 p-2 rounded-md hover:bg-gray-200">
              <ArrowRightLeft className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="stat-card">
              <p className="text-muted-foreground text-sm">Total Sample Size</p>
              <p className="text-2xl font-semibold">235</p>
              <div className="h-1 w-full bg-gray-100 mt-2">
                <div className="h-full bg-statblue-500 w-[80%]"></div>
              </div>
            </div>
            <div className="stat-card">
              <p className="text-muted-foreground text-sm">Variables</p>
              <p className="text-2xl font-semibold">28</p>
              <div className="h-1 w-full bg-gray-100 mt-2">
                <div className="h-full bg-statpurple-500 w-[65%]"></div>
              </div>
            </div>
            <div className="stat-card">
              <p className="text-muted-foreground text-sm">Missing Values</p>
              <p className="text-2xl font-semibold">2.4%</p>
              <div className="h-1 w-full bg-gray-100 mt-2">
                <div className="h-full bg-green-500 w-[24%]"></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium">Treatment Effectiveness</h4>
                  <ChartBar className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-statblue-50 to-statpurple-50 rounded-md flex items-center justify-center p-4">
                  <div className="w-full">
                    <div className="mb-4 flex justify-between items-end">
                      <div className="flex flex-col items-start">
                        <div className="flex items-center mb-1">
                          <div className="h-3 w-3 bg-statblue-500 rounded-sm mr-1"></div>
                          <span className="text-xs">Treatment A</span>
                        </div>
                        <div className="flex items-center">
                          <div className="h-3 w-3 bg-statpurple-500 rounded-sm mr-1"></div>
                          <span className="text-xs">Treatment B</span>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">p &lt; 0.01</div>
                    </div>

                    <div className="space-y-2">
                      {["Week 1", "Week 2", "Week 3", "Week 4"].map((week, i) => (
                        <div key={i} className="flex items-center">
                          <span className="text-xs w-12">{week}</span>
                          <div className="flex-grow h-8 flex items-center space-x-1">
                            <div 
                              className="h-6 bg-statblue-500 rounded-sm"
                              style={{ width: `${20 + i * 10}%` }}
                            ></div>
                            <div 
                              className="h-6 bg-statpurple-500 rounded-sm"
                              style={{ width: `${15 + i * 15}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-medium">Outcome Distribution</h4>
                  <ChartPie className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-statblue-50 to-statpurple-50 rounded-md flex items-center justify-center p-4">
                  <div className="flex items-center w-full justify-center">
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 rounded-full border-8 border-statblue-500" style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}></div>
                      <div className="absolute inset-0 rounded-full border-8 border-statpurple-500" style={{ clipPath: "polygon(50% 50%, 100% 0, 100% 100%)" }}></div>
                      <div className="absolute inset-0 rounded-full border-8 border-green-400" style={{ clipPath: "polygon(50% 50%, 0 100%, 100% 100%)" }}></div>
                      <div className="absolute inset-0 rounded-full border-8 border-yellow-400" style={{ clipPath: "polygon(50% 50%, 0 0, 0 100%)" }}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white w-24 h-24 rounded-full"></div>
                      </div>
                    </div>
                    <div className="ml-4 space-y-2">
                      <div className="flex items-center">
                        <div className="h-3 w-3 bg-statblue-500 rounded-sm mr-2"></div>
                        <span className="text-xs">Improved (42%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-3 w-3 bg-statpurple-500 rounded-sm mr-2"></div>
                        <span className="text-xs">Stable (28%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-3 w-3 bg-green-400 rounded-sm mr-2"></div>
                        <span className="text-xs">Partial (18%)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-3 w-3 bg-yellow-400 rounded-sm mr-2"></div>
                        <span className="text-xs">Non-resp (12%)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;
