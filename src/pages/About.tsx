import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users } from "lucide-react";
import Layout from "@/components/Layout";
import teamImage from "@/assets/team-working.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To make clean, renewable energy accessible and affordable for every home and business in South Africa.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "A sustainable future where solar energy powers communities, reduces carbon footprint, and creates energy independence.",
    },
    {
      icon: Award,
      title: "Quality First",
      description:
        "We use only premium equipment and maintain the highest installation standards, backed by comprehensive warranties.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority. We provide personalized solutions and ongoing support throughout your solar journey.",
    },
  ];

  const stats = [
    { number: "500+", label: "Installations" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "20MW", label: "Energy Generated" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="py-20 text-white relative"
        style={{
          backgroundImage: `url(/assets/person-3062271_1280.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About SOLARQUENCH</h1>
            <p className="text-lg sm:text-xl opacity-90">
              Leading solar energy solutions provider, committed to transforming South Africa's energy landscape with sustainable, reliable power.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={teamImage}
                  alt="SOLARQUENCH team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 px-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
                <p>
                  Founded with a vision to bring sustainable energy solutions to South Africa, SOLARQUENCH has grown from a small startup to a trusted name in the solar industry.
                </p>
                <p>
                  Our team of certified professionals brings decades of combined experience in renewable energy, engineering, and customer service. We're passionate about helping our clients achieve energy independence while contributing to a cleaner environment.
                </p>
                <p>
                  Every installation we complete is a step toward a more sustainable future. We take pride in delivering quality workmanship, using premium materials, and providing exceptional ongoing support to all our customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="border-none shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <CardContent className="p-8">
                    <div className="bg-gradient-to-br from-primary to-accent rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-lg">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Expert Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Our certified professionals bring expertise in solar technology, electrical engineering, and project management to ensure your installation is completed to the highest standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">Certified</div>
              <div className="text-muted-foreground">Installation Experts</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">Licensed</div>
              <div className="text-muted-foreground">Electrical Engineers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">Trained</div>
              <div className="text-muted-foreground">Support Staff</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
