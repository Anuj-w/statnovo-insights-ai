
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ChartLine } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-2">
            <ChartLine className="w-7 h-7 text-statpurple-500" />
            <span className="text-2xl font-display font-bold text-foreground">STAT<span className="text-statpurple-500">NOVO</span></span>
          </Link>
          
          <div className="hidden md:flex items-center ml-10 space-x-6">
            <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">Features</Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Link to="/dashboard">
            <Button variant="ghost" className="hidden sm:inline-flex">Dashboard</Button>
          </Link>
          <Link to="/register">
            <Button className="bg-gradient-to-r from-statblue-500 to-statpurple-500 hover:from-statblue-600 hover:to-statpurple-600">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
