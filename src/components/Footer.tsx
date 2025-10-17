import { Link } from "react-router-dom";
import { Sun, Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <img 
                  src="/logo.jpg" 
                  alt="SOLARQUENCH Logo" 
                  className="h-8 w-8 rounded-lg"
                />
                <span className="text-2xl font-bold">SOLARQUENCH</span>
              </div>
              <p className="text-sm text-secondary-foreground/80 font-medium">
                POWERING TOMORROW, TODAY
              </p>
              <p className="text-sm text-secondary-foreground/80">
                Leading solar energy solutions for a sustainable future. Quality installations and exceptional service.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm hover:text-primary transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>Solar Panel Installation</li>
              <li>Energy Consultation</li>
              <li>System Maintenance</li>
              <li>Battery Storage</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
                    <li className="flex items-start gap-2 text-sm">
                      <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>+27 78 635 9549</span>
                    </li>
              <li className="flex items-start gap-2 text-sm">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>info@SOLARQUENCH.co.za</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>South Africa</span>
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
          <p>© {new Date().getFullYear()} SOLARQUENCH. All rights reserved.</p>
          <p className="mt-2">
            Professional solar energy solutions for South Africa
          </p>
          <p className="mt-2">
            Built by{" "}
            <a 
              href="https://www.lunexweb.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-bold text-orange-500 hover:text-orange-600 transition-colors"
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
