import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Award, Users, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import teamImage from "@/assets/team-working.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To provide professional signage solutions that enhance business visibility and brand presence across South Africa.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the leading signage company in South Africa, known for quality, professionalism, and council compliance.",
    },
    {
      icon: Award,
      title: "Quality First",
      description:
        "We use only premium materials and maintain the highest installation standards, backed by our 17 years of experience.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description:
        "Your satisfaction is our priority. We provide personalized signage solutions and ongoing support throughout your project.",
    },
  ];

  const stats = [
    { number: "1000+", label: "Signage Projects" },
    { number: "17", label: "Years Experience" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "100%", label: "Council Compliance" },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="py-20 text-white relative overflow-x-hidden"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/doqsolr8d/image/upload/v1760712951/Screenshot_2025-10-17_164332_kfxbsh.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-full overflow-x-hidden">
          <div className="max-w-3xl mx-auto text-center px-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About Great Signs</h1>
            <p className="text-lg sm:text-xl opacity-90 mb-6">
              Professional signage company with 17 years experience, committed to delivering quality signage solutions across South Africa.
            </p>
            <div className="flex items-center justify-center gap-2 text-white/90">
              <Phone className="h-5 w-5" />
              <a href="tel:+27725679274" className="text-lg font-semibold hover:text-primary transition-colors">
                +27 72 567 9274
              </a>
            </div>
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
                  alt="Great Signs team"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 px-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-base sm:text-lg text-muted-foreground">
                <p>
                  Founded 17 years ago with a vision to provide professional signage solutions, Great Signs has grown from a small startup to a trusted name in the signage industry.
                </p>
                <p>
                  Our team of qualified professionals brings decades of combined experience in signage design, council applications, and installation. We're passionate about helping our clients achieve maximum visibility and brand presence through professional signage solutions.
                </p>
                <p>
                  Every signage project we complete enhances our client's business visibility. We take pride in delivering quality workmanship, using premium materials, and providing exceptional ongoing support to all our customers.
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
            Our qualified professionals bring expertise in signage design, council applications, and installation to ensure your project is completed to the highest standards.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">Qualified</div>
              <div className="text-muted-foreground">Architect for Council Applications</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">Experienced</div>
              <div className="text-muted-foreground">Signage Workers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">Professional</div>
              <div className="text-muted-foreground">Installation Riggers</div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
