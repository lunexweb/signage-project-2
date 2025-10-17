import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Battery, Home, Building2, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Products = () => {
  const packages = [
    {
      name: "Residential Starter",
      icon: Home,
      price: "From R45,000",
      savings: "Save up to R1,500/month",
      features: [
        "3kW Solar Panel System",
        "8 Premium Solar Panels",
        "3kW Hybrid Inverter",
        "5kWh Lithium Battery",
        "Professional Installation",
        "10 Year Warranty",
        "Monitoring System",
        "Post-Installation Support",
      ],
      popular: false,
    },
    {
      name: "Home Complete",
      icon: Battery,
      price: "From R85,000",
      savings: "Save up to R3,000/month",
      features: [
        "5kW Solar Panel System",
        "14 Premium Solar Panels",
        "5kW Hybrid Inverter",
        "10kWh Lithium Battery",
        "Professional Installation",
        "15 Year Warranty",
        "Advanced Monitoring",
        "Priority Support",
        "Free Annual Maintenance",
      ],
      popular: true,
    },
    {
      name: "Commercial Pro",
      icon: Building2,
      price: "From R250,000",
      savings: "Save up to R10,000/month",
      features: [
        "15kW+ Solar Panel System",
        "Custom Panel Configuration",
        "Commercial Grade Inverter",
        "30kWh+ Battery Storage",
        "Professional Installation",
        "20 Year Warranty",
        "Real-time Monitoring",
        "24/7 Priority Support",
        "Quarterly Maintenance",
        "Performance Guarantee",
      ],
      popular: false,
    },
  ];

  const promotions = [
    {
      title: "Summer Special",
      discount: "15% OFF",
      description: "Get 15% off all residential packages. Limited time offer!",
      validUntil: "Valid until end of December 2025",
    },
    {
      title: "Battery Upgrade",
      discount: "R8,000",
      description: "Upgrade to double battery capacity for just R8,000 extra",
      validUntil: "Available on Home Complete package",
    },
    {
      title: "Referral Bonus",
      discount: "R5,000",
      description: "Refer a friend and both receive R5,000 credit",
      validUntil: "Ongoing promotion",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="py-20 text-white relative"
        style={{
          backgroundImage: `url(/assets/ai-generated-8685407_1280.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Solar Solutions</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90 px-2">
            Premium solar packages designed for homes and businesses. Quality equipment, professional installation, and excellent value.
          </p>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground text-lg px-6 py-2">
              <Zap className="h-4 w-4 mr-2" />
              Limited Time Offers
            </Badge>
            <h2 className="text-4xl font-bold">Current Promotions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <Card
                key={index}
                className="border-2 border-primary/20 shadow-lg"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <CardHeader>
                  <div className="text-3xl font-bold text-primary mb-2">{promo.discount}</div>
                  <CardTitle className="text-2xl">{promo.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{promo.description}</p>
                  <p className="text-sm text-primary font-semibold">{promo.validUntil}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Solar Packages</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect solution for your energy needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <Card
                  key={index}
                  className={`relative border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full ${
                    pkg.popular ? "border-2 border-primary" : ""
                  }`}
                  style={{ boxShadow: pkg.popular ? "var(--card-shadow-hover)" : "var(--card-shadow)" }}
                >
                  {pkg.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  )}
                  <CardHeader className="text-center pb-8">
                    <div className="bg-gradient-to-br from-primary to-accent rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
                    <div className="text-3xl font-bold text-primary mb-1">{pkg.price}</div>
                    <div className="text-sm text-accent font-semibold">{pkg.savings}</div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="space-y-3">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="mt-auto">
                    <Button
                      asChild
                      className={`w-full ${
                        pkg.popular ? "bg-primary hover:bg-primary/90" : ""
                      }`}
                      size="lg"
                    >
                      <Link to="/quote">Get This Package</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">What's Included</h2>
            <p className="text-xl text-muted-foreground">Every package includes premium features</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🔧</div>
              <h3 className="font-semibold mb-2">Professional Installation</h3>
              <p className="text-sm text-muted-foreground">Certified experts handle everything</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-semibold mb-2">Premium Equipment</h3>
              <p className="text-sm text-muted-foreground">Top-tier panels and inverters</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">📱</div>
              <h3 className="font-semibold mb-2">Smart Monitoring</h3>
              <p className="text-sm text-muted-foreground">Track performance on your phone</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-semibold mb-2">Warranty Coverage</h3>
              <p className="text-sm text-muted-foreground">Long-term protection included</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Not Sure Which Package?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our energy consultants will help you choose the perfect solution for your needs and budget.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <Link to="/quote">Request Free Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
