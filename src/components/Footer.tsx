
import React from 'react';
import { Link } from 'react-router-dom';
import { ChartLine } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/30 border-t mt-10">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col">
            <div className="flex items-center space-x-2 mb-4">
              <ChartLine className="w-6 h-6 text-statpurple-500" />
              <span className="text-xl font-display font-bold">STAT<span className="text-statpurple-500">NOVO</span></span>
            </div>
            <p className="text-muted-foreground">
              The next-generation statistical analysis platform powered by AI.
            </p>
          </div>
          
          <div className="flex flex-col">
            <h3 className="font-display font-semibold mb-4">Product</h3>
            <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors py-1">Features</Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors py-1">Pricing</Link>
            <Link to="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors py-1">Dashboard</Link>
          </div>

          <div className="flex flex-col">
            <h3 className="font-display font-semibold mb-4">Company</h3>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors py-1">About</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors py-1">Contact</Link>
            <Link to="/careers" className="text-muted-foreground hover:text-foreground transition-colors py-1">Careers</Link>
          </div>

          <div className="flex flex-col">
            <h3 className="font-display font-semibold mb-4">Legal</h3>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors py-1">Terms</Link>
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors py-1">Privacy</Link>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} StatNovo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
