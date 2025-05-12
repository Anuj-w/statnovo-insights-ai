
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AnalysisTypes: React.FC = () => {
  const analysisByCategory = {
    descriptive: [
      { name: "Mean, Median, Mode", difficulty: "Basic" },
      { name: "Standard Deviation", difficulty: "Basic" },
      { name: "Percentiles", difficulty: "Basic" },
      { name: "Frequency Distribution", difficulty: "Basic" },
      { name: "Box Plot Analysis", difficulty: "Intermediate" }
    ],
    inferential: [
      { name: "T-tests (One/Two Sample)", difficulty: "Intermediate" },
      { name: "ANOVA", difficulty: "Advanced" },
      { name: "Chi-Square", difficulty: "Intermediate" },
      { name: "Mann-Whitney U", difficulty: "Advanced" },
      { name: "Kruskal-Wallis", difficulty: "Advanced" }
    ],
    regression: [
      { name: "Correlation Analysis", difficulty: "Intermediate" },
      { name: "Simple Linear Regression", difficulty: "Intermediate" },
      { name: "Multiple Regression", difficulty: "Advanced" },
      { name: "Logistic Regression", difficulty: "Advanced" },
      { name: "Polynomial Regression", difficulty: "Advanced" }
    ],
    multivariate: [
      { name: "Principal Component Analysis", difficulty: "Advanced" },
      { name: "Factor Analysis", difficulty: "Advanced" },
      { name: "Cluster Analysis", difficulty: "Advanced" },
      { name: "Discriminant Analysis", difficulty: "Advanced" },
      { name: "MANOVA", difficulty: "Advanced" }
    ]
  };
  
  const difficultyColors = {
    "Basic": "bg-green-100 text-green-800",
    "Intermediate": "bg-blue-100 text-blue-800",
    "Advanced": "bg-purple-100 text-purple-800"
  };

  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Analysis Types</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Comprehensive statistical tools for every analysis need
        </p>
      </div>

      <Card className="border-none shadow-md">
        <CardContent className="p-0">
          <Tabs defaultValue="descriptive">
            <div className="border-b px-4">
              <TabsList className="h-14">
                <TabsTrigger value="descriptive" className="text-sm md:text-base">Descriptive</TabsTrigger>
                <TabsTrigger value="inferential" className="text-sm md:text-base">Inferential</TabsTrigger>
                <TabsTrigger value="regression" className="text-sm md:text-base">Regression</TabsTrigger>
                <TabsTrigger value="multivariate" className="text-sm md:text-base">Multivariate</TabsTrigger>
              </TabsList>
            </div>
            
            {Object.entries(analysisByCategory).map(([category, analyses]) => (
              <TabsContent key={category} value={category} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {analyses.map((analysis, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-md hover:bg-muted/20 transition-colors">
                      <span>{analysis.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${difficultyColors[analysis.difficulty as keyof typeof difficultyColors]}`}>
                        {analysis.difficulty}
                      </span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>
    </section>
  );
};

export default AnalysisTypes;
