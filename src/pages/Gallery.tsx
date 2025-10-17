import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "residential", label: "Residential" },
    { id: "commercial", label: "Commercial" },
    { id: "industrial", label: "Industrial" },
  ];

  const projects = [
    {
      id: 1,
      image: gallery1,
      title: "Residential Installation - Cape Town",
      category: "residential",
      description: "5kW system with battery storage",
      stats: "12 Panels • 10kWh Battery",
    },
    {
      id: 2,
      image: gallery2,
      title: "Commercial Building - Johannesburg",
      category: "commercial",
      description: "20kW system for office complex",
      stats: "48 Panels • 30kWh Storage",
    },
    {
      id: 3,
      image: gallery3,
      title: "Solar Farm - Pretoria",
      category: "industrial",
      description: "Large-scale solar installation",
      stats: "200+ Panels • 100kW System",
    },
    {
      id: 4,
      image: gallery4,
      title: "Premium Solar Installation",
      category: "residential",
      description: "High-efficiency panels with monitoring",
      stats: "16 Panels • 15kWh Battery",
    },
    {
      id: 5,
      image: gallery1,
      title: "Family Home - Durban",
      category: "residential",
      description: "Complete solar solution",
      stats: "10 Panels • 8kWh Battery",
    },
    {
      id: 6,
      image: gallery2,
      title: "Retail Center - Sandton",
      category: "commercial",
      description: "Energy-efficient commercial installation",
      stats: "60 Panels • 40kWh Storage",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section 
        className="py-20 text-white relative"
        style={{
          backgroundImage: `url(/assets/nature-6602982_1280.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Project Gallery</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90 px-2">
            Browse our portfolio of successful solar installations across South Africa. Quality workmanship and satisfied customers.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30 sticky top-20 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <Button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={
                  selectedCategory === category.id
                    ? "bg-primary hover:bg-primary/90"
                    : ""
                }
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2"
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                    <span>{project.stats}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-muted-foreground">Real results from real installations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Completed Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">20MW</div>
              <div className="text-muted-foreground">Energy Generated</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15K</div>
              <div className="text-muted-foreground">Tons CO₂ Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Want Your Project Featured?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us create a custom solar solution for your property. Join hundreds of satisfied customers.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="/quote">Start Your Solar Journey</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
