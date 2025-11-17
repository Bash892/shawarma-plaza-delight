import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">SP</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Shawarma Plaza
          </h1>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Menu
          </Link>
          <Link to="/about" className="text-foreground hover:text-primary transition-colors">
            About
          </Link>
          <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link to="/signin">
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </Link>
          <Link to="/signup">
            <Button size="sm" className="bg-gradient-primary hover:opacity-90 transition-opacity">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;