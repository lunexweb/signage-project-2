import { Link } from "react-router-dom";
import { Sun, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground overflow-x-hidden">
      <div className="container mx-auto px-4 py-12 max-w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="flex flex-col items-start">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xl font-bold" style={{ color: '#431FD5' }}>
                      Great
                    </span>
                    <span className="text-xl font-bold" style={{ color: '#431FD5' }}>
                      Signs
                    </span>
                  </div>
                  <span className="text-[10px] text-secondary-foreground/70 font-medium tracking-wide uppercase">
                    PROFESSIONAL SIGNAGE SOLUTIONS
                  </span>
                </div>
              </div>
              <p className="text-sm text-secondary-foreground/80">
                Professional signage company with 17 years experience. Qualified team, council applications, and nationwide installation services.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-red-500 transition-colors font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-red-500 transition-colors font-medium">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-red-500 transition-colors font-medium">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-red-500 transition-colors font-medium">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Custom Signage Design</li>
              <li>Council Applications</li>
              <li>Professional Installation</li>
              <li>Nationwide Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>031-3056730</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>082-559 7067</span>
                    </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>63 Umbilo Rd, Durban</span>
              </li>
            </ul>

            {/* Social Media - Coming Soon */}
            <div className="flex gap-3 mt-4">
              <div className="p-2 bg-secondary-foreground/10 rounded-lg opacity-50">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="p-2 bg-secondary-foreground/10 rounded-lg opacity-50">
                <Instagram className="h-5 w-5" />
              </div>
              <div className="p-2 bg-secondary-foreground/10 rounded-lg opacity-50">
                <Linkedin className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-sm text-secondary-foreground/60">
          <p>© {new Date().getFullYear()} Great Signs. All rights reserved.</p>
          <p className="mt-2">
            Professional signage solutions for South Africa
          </p>
          <p className="mt-2">
            Built by{" "}
            <a 
              href="https://www.lunexweb.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-blue-500 hover:text-blue-600 transition-colors"
            >
              Lunexweb
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
