import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, TrendingDown, Users, CheckCircle, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-solar.jpg";

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "Efficient Energy",
      description: "High-performance solar panels that maximize energy production for your home or business.",
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Premium equipment with comprehensive warranties and professional installation.",
    },
    {
      icon: TrendingDown,
      title: "Lower Bills",
      description: "Dramatically reduce your electricity costs while increasing property value.",
    },
    {
      icon: Users,
      title: "Expert Support",
      description: "Dedicated team providing consultation, installation, and ongoing maintenance.",
    },
  ];

  const benefits = [
    "25+ year warranty on solar panels",
    "Professional installation by certified technicians",
    "Reduce electricity bills by up to 80%",
    "Increase property value",
    "Environmentally friendly and sustainable",
    "Government incentives and rebates available",
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            filter: "brightness(0.4)",
          }}
        />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white">
            Power Your Future with
            <span className="block mt-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Solar Energy
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto px-2">
            Transform sunlight into savings. Professional solar solutions for homes and businesses across South Africa.
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Why Choose SOLARQUENCH?</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading solar energy provider with proven expertise and commitment to excellence
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
                    <div className="bg-gradient-to-br from-primary to-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
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
          backgroundImage: `url(/assets/pexels-pixabay-371900.jpg)`,
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
                Solar Energy Benefits
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                Investing in solar energy is investing in your future. Experience the advantages of clean, renewable power.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
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
                  src={heroImage}
                  alt="Solar panels installation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Get a free, no-obligation quote today and discover how much you can save with solar energy.
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
