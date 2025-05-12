
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import AnalysisTypes from '@/components/AnalysisTypes';
import DashboardPreview from '@/components/DashboardPreview';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturesSection />
        <AnalysisTypes />
        <DashboardPreview />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
