
import React from 'react';
import FeatureCard from './FeatureCard';
import { ChartBar, Upload, BarChart3, FileText, Share2, ArrowRightLeft } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Upload,
      title: "Data Upload & Cleaning",
      description: "Import CSV, Excel, SPSS files or connect to APIs. Auto-detect data types and clean missing values."
    },
    {
      icon: ChartBar,
      title: "Statistical Analysis",
      description: "From basic descriptive stats to complex inferential analysis, all with just a few clicks."
    },
    {
      icon: BarChart3,
      title: "Visualization Studio",
      description: "Create beautiful, interactive charts and dashboards for presentations."
    },
    {
      icon: FileText,
      title: "Auto-Reporting",
      description: "Generate professional reports with interpreted results in multiple formats."
    },
    {
      icon: Share2,
      title: "Collaboration",
      description: "Share analysis and collaborate in real-time with team members."
    },
    {
      icon: ArrowRightLeft,
      title: "AI Assistant",
      description: "Get recommendations for tests and natural language explanations of results."
    }
  ];

  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Powerful Features</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Everything you need for comprehensive statistical analysis
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
