import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Signpost, Building2, MapPin, Zap, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const Products = () => {
  const packages = [
    {
      name: "Business Signage",
      icon: Signpost,
      price: "From R2,500",
      savings: "Professional design included",
      features: [
        "Custom signage design",
        "High-quality materials",
        "Professional installation",
        "Council application assistance",
        "2-year warranty",
        "Free design consultation",
        "Quick turnaround",
        "Local installation team",
      ],
      popular: false,
    },
    {
      name: "Complete Signage Package",
      icon: Award,
      price: "From R8,500",
      savings: "Save up to R2,000",
      features: [
        "Custom signage design",
        "Premium materials & finishes",
        "Professional installation",
        "Council applications handled",
        "5-year warranty",
        "Priority support",
        "Free maintenance for 1 year",
        "Nationwide installation",
        "Design revisions included",
      ],
      popular: true,
    },
    {
      name: "Commercial Signage Pro",
      icon: Building2,
      price: "From R15,000",
      savings: "Enterprise pricing available",
      features: [
        "Large format signage",
        "Custom architectural design",
        "Professional installation",
        "Full council compliance",
        "10-year warranty",
        "24/7 support",
        "Quarterly maintenance",
        "Performance guarantee",
        "Multiple location support",
        "Brand consistency package",
      ],
      popular: false,
    },
  ];

  const promotions = [
    {
      title: "New Business Special",
      discount: "20% OFF",
      description: "Get 20% off your first signage project. Perfect for new businesses!",
      validUntil: "Valid until end of March 2025",
    },
    {
      title: "Council Application",
      discount: "FREE",
      description: "Free council application handling on Complete Package and above",
      validUntil: "Available on all premium packages",
    },
    {
      title: "Referral Bonus",
      discount: "R1,000",
      description: "Refer a business and both receive R1,000 credit",
      validUntil: "Ongoing promotion",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="py-20 text-white relative overflow-x-hidden"
        style={{
          backgroundImage: `url(/assets/ai-generated-8685407_1280.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10 max-w-full overflow-x-hidden">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Professional Signage Solutions</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90 px-2">
            Custom signage packages designed for businesses. Professional design, quality materials, council compliance, and nationwide installation.
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
      <section className="py-20 overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-full">
          <div className="text-center mb-16 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Signage Packages</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect signage solution for your business needs
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
            <p className="text-xl text-muted-foreground">Every package includes professional features</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-semibold mb-2">Custom Design</h3>
              <p className="text-sm text-muted-foreground">Professional design by qualified architects</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🏛️</div>
              <h3 className="font-semibold mb-2">Council Compliance</h3>
              <p className="text-sm text-muted-foreground">All applications handled professionally</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-semibold mb-2">Nationwide Installation</h3>
              <p className="text-sm text-muted-foreground">Professional installation anywhere in SA</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-sm text-muted-foreground">17 years experience with warranty</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Not Sure Which Signage Package?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our signage specialists will help you choose the perfect solution for your business needs and budget.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/25">
            <Link to="/quote">Request Free Signage Consultation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
