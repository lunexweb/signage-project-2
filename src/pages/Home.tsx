import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, TrendingDown, Users, CheckCircle, ArrowRight, Phone } from "lucide-react";
import Layout from "@/components/Layout";
// Using Cloudinary signage image instead of local hero image

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Professional Design",
      description: "Custom signage solutions designed by qualified architects for maximum impact and compliance.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "17 years of experience with qualified team ensuring professional installation and council compliance.",
    },
    {
      icon: TrendingDown,
      title: "Council Applications",
      description: "Qualified architect handles all council applications and drawings for seamless approval process.",
    },
    {
      icon: Users,
      title: "Nationwide Service",
      description: "Qualified team of riggers travel throughout the country for professional installation services.",
    },
  ];

  const benefits = [
    "17 years of professional experience",
    "Qualified architect for council applications",
    "Professional installation nationwide",
    "Custom signage design solutions",
    "Council compliance guaranteed",
    "Qualified team of experienced workers",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden max-w-full">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(https://res.cloudinary.com/doqsolr8d/image/upload/v1760693621/pexels-pixabay-269077_zlsh3p.jpg)`,
            filter: "brightness(0.4)",
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-full overflow-x-hidden">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white">
            Professional Signage Solutions with
            <span className="block mt-2 bg-gradient-to-r from-red-600 via-red-500 to-primary bg-clip-text text-transparent">
              Great Signs
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto px-2">
            17 years of experience in professional signage. Qualified team, council applications, and nationwide installation services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <Button asChild size="lg" className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-primary hover:bg-primary/90 w-full sm:w-auto">
              <Link to="/quote">
                Get Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 w-full sm:w-auto"
            >
              <Link to="/products">View Products</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 mt-6 text-white/90">
            <Phone className="h-5 w-5" />
            <a href="tel:+27725679274" className="text-lg font-semibold hover:text-red-400 transition-colors">
              +27 72 567 9274
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30 overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-full">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Why Choose Great Signs?</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional signage company with 17 years experience and qualified team
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="bg-gradient-to-br from-red-600 via-red-500 to-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:shadow-red-600/30 hover:scale-110 transition-all duration-300">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        className="py-20 relative"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/doqsolr8d/image/upload/v1760712338/Screenshot_2025-10-17_163906_m9xhdy.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-white/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="px-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Professional Signage Benefits
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                Professional signage solutions that enhance your business visibility and brand presence with expert design and installation.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-8 bg-primary hover:bg-primary/90">
                <Link to="/about">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/doqsolr8d/image/upload/v1760712959/Screenshot_2025-10-17_164300_vurfyh.png"
                  alt="Professional signage installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-700 via-red-600 to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Professional Signage?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free, no-obligation quote today and discover how professional signage can enhance your business.
          </p>
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90"
          >
            <Link to="/quote">
              Request Your Free Quote <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
