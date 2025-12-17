import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="RootKnow" className="h-14 w-14 transition-transform group-hover:scale-110 rounded-xl shadow-lg" />
          <span className="text-2xl font-bold gradient-text">RootKnow</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/platform" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">
            Platform
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">
            Pricing
          </Link>
          <Link to="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">
            About
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" asChild className="hover:bg-primary/10">
            <Link to="/app">Login</Link>
          </Button>
          <Button asChild className="glow-primary">
            <Link to="/app">Start Building</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <nav className="container py-4 flex flex-col gap-4">
            <Link 
              to="/platform" 
              className="text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Platform
            </Link>
            <Link 
              to="/pricing" 
              className="text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/about" 
              className="text-sm font-medium text-muted-foreground hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              <Button variant="ghost" asChild className="justify-start">
                <Link to="/app" onClick={() => setMobileMenuOpen(false)}>Login</Link>
              </Button>
              <Button asChild>
                <Link to="/app" onClick={() => setMobileMenuOpen(false)}>Start Building</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;