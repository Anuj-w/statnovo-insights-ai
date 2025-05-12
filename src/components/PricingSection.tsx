
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PlanFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
  buttonText: string;
}

const PricingSection: React.FC = () => {
  const plans: PricingPlan[] = [
    {
      name: "Free",
      price: "$0",
      description: "For students and individuals starting with data analysis",
      features: [
        { text: "Basic descriptive statistics", included: true },
        { text: "Up to 10 datasets", included: true },
        { text: "Standard visualizations", included: true },
        { text: "CSV and Excel import", included: true },
        { text: "Export reports as PDF", included: true },
        { text: "Community support", included: true },
        { text: "Advanced statistics", included: false },
        { text: "AI-powered insights", included: false },
        { text: "Collaboration features", included: false },
      ],
      buttonText: "Start Free"
    },
    {
      name: "Pro",
      price: "$19",
      description: "For professionals and researchers seeking advanced tools",
      features: [
        { text: "All Free features", included: true },
        { text: "Unlimited datasets", included: true },
        { text: "Advanced statistics & regression", included: true },
        { text: "Interactive dashboards", included: true },
        { text: "SPSS & Stata import/export", included: true },
        { text: "AI test recommendations", included: true },
        { text: "Priority email support", included: true },
        { text: "Team collaboration", included: false },
        { text: "API access", included: false },
      ],
      popular: true,
      buttonText: "Start Pro Trial"
    },
    {
      name: "Enterprise",
      price: "$49",
      description: "For teams and organizations with complex analysis needs",
      features: [
        { text: "All Pro features", included: true },
        { text: "Team collaboration", included: true },
        { text: "Admin controls & permissions", included: true },
        { text: "Custom integrations", included: true },
        { text: "API access", included: true },
        { text: "Advanced ML models", included: true },
        { text: "Dedicated support", included: true },
        { text: "Training sessions", included: true },
        { text: "Custom deployment", included: true },
      ],
      buttonText: "Contact Sales"
    }
  ];

  return (
    <section className="container py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Choose the plan that fits your analysis needs
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div 
            key={index}
            className={`rounded-xl border bg-card text-card-foreground shadow p-6 flex flex-col ${
              plan.popular ? "ring-2 ring-statpurple-500 relative" : ""
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-statblue-500 to-statpurple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
            )}
            
            <div className="mb-5">
              <h3 className="font-display font-semibold text-xl">{plan.name}</h3>
              <div className="mt-2 flex items-baseline">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="ml-1 text-muted-foreground">/month</span>
              </div>
              <p className="mt-3 text-muted-foreground text-sm">
                {plan.description}
              </p>
            </div>
            
            <div className="space-y-3 flex-grow">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center">
                  {feature.included ? (
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                  ) : (
                    <div className="h-4 w-4 border rounded-full mr-2" />
                  )}
                  <span className={feature.included ? "" : "text-muted-foreground"}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
            
            <Button 
              className={`mt-8 w-full ${
                plan.popular
                  ? "bg-gradient-to-r from-statblue-500 to-statpurple-500 hover:from-statblue-600 hover:to-statpurple-600"
                  : ""
              }`}
              variant={plan.popular ? "default" : "outline"}
            >
              {plan.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
