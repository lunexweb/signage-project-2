import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/products", label: "Products" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border overflow-x-hidden">
      <div className="container mx-auto px-4 py-4 max-w-full">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex flex-col items-start">
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-bold" style={{ color: '#431FD5' }}>
                  Great
                </span>
                <span className="text-lg font-bold" style={{ color: '#431FD5' }}>
                  Signs
                </span>
              </div>
              <span className="text-[10px] text-muted-foreground font-medium tracking-wide uppercase">
                PROFESSIONAL SIGNAGE SOLUTIONS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  isActive(link.to) ? "text-primary" : "text-foreground/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="lg" className="bg-gradient-to-r from-red-600 to-primary hover:from-red-700 hover:to-primary/90 transition-all duration-300 shadow-lg hover:shadow-red-600/25">
              <Link to="/quote">Get a Quote</Link>
            </Button>
          </div>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="md:hidden p-2 rounded-lg hover:bg-muted transition-all duration-200 ease-in-out"
                  aria-label="Toggle menu"
                >
                  <div className="transition-transform duration-200 ease-in-out">
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                  </div>
                </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 transition-all duration-300 ease-in-out overflow-x-hidden">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive(link.to)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="lg" className="w-full bg-gradient-to-r from-red-600 to-primary hover:from-red-700 hover:to-primary/90 transition-all duration-300 shadow-lg hover:shadow-red-600/25">
              <Link to="/quote" onClick={() => setIsOpen(false)}>
                Get a Quote
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
