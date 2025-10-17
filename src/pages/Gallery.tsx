import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Layout from "@/components/Layout";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "stores", label: "Stores" },
    { id: "industrial", label: "Industrial" },
  ];

  const projects = [
    {
      id: 1,
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760712962/Screenshot_2025-10-17_164316_koohnu.png",
      title: "Professional Signage Project 1",
      category: "stores",
      description: "Custom signage solution with professional installation",
      stats: "High Quality • Professional Finish",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760712959/Screenshot_2025-10-17_164300_vurfyh.png",
      title: "Professional Signage Project 2",
      category: "industrial",
      description: "Industrial signage with durable materials",
      stats: "Durable Materials • Weather Resistant",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760712951/Screenshot_2025-10-17_164332_kfxbsh.png",
      title: "Professional Signage Project 3",
      category: "stores",
      description: "Retail signage with custom design",
      stats: "Custom Design • Professional Installation",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760712446/Screenshot_2025-10-17_164245_bwekdv.png",
      title: "Professional Signage Project 4",
      category: "industrial",
      description: "Large format signage solution",
      stats: "Large Format • Professional Quality",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760712408/Screenshot_2025-10-17_164207_dbtngk.png",
      title: "Professional Signage Project 5",
      category: "stores",
      description: "Storefront signage with LED lighting",
      stats: "LED Illuminated • Weather Resistant",
    },
    {
      id: 6,
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760712403/Screenshot_2025-10-17_164014_js7eoh.png",
      title: "Professional Signage Project 6",
      category: "industrial",
      description: "Industrial signage with premium materials",
      stats: "Premium Materials • Professional Installation",
    },
    {
      id: 7,
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760712404/Screenshot_2025-10-17_164147_fbzzbv.png",
      title: "Professional Signage Project 7",
      category: "stores",
      description: "Custom retail signage solution",
      stats: "Custom Design • Professional Finish",
    },
    {
      id: 8,
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760712400/Screenshot_2025-10-17_164221_b55bdf.png",
      title: "Professional Signage Project 8",
      category: "industrial",
      description: "Professional industrial signage",
      stats: "Industrial Grade • Durable Finish",
    },
    {
      id: 9,
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760712396/Screenshot_2025-10-17_164123_mhxeyu.png",
      title: "Professional Signage Project 9",
      category: "stores",
      description: "Retail store signage with custom branding",
      stats: "Custom Branding • Professional Quality",
    },
    {
      id: 10,
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760712341/Screenshot_2025-10-17_163927_oihxwl.png",
      title: "Professional Signage Project 10",
      category: "industrial",
      description: "Large format industrial signage",
      stats: "Large Format • Industrial Grade",
    },
    {
      id: 11,
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760712338/Screenshot_2025-10-17_163906_m9xhdy.png",
      title: "Professional Signage Project 11",
      category: "stores",
      description: "Professional storefront signage",
      stats: "Professional Grade • Weather Resistant",
    },
    {
      id: 12,
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760712337/Screenshot_2025-10-17_163532_egzzsb.png",
      title: "Professional Signage Project 12",
      category: "industrial",
      description: "Industrial signage with premium finish",
      stats: "Premium Finish • Professional Installation",
    },
    {
      id: 13,
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760712341/Screenshot_2025-10-17_163503_j2gmya.png",
      title: "Professional Signage Project 13",
      category: "industrial",
      description: "Industrial signage with professional installation",
      stats: "Professional Installation • Industrial Grade",
    },
    {
      id: 14,
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760712383/Screenshot_2025-10-17_163944_cfjniv.png",
      title: "Professional Signage Project 14",
      category: "industrial",
      description: "Large format industrial signage solution",
      stats: "Large Format • Durable Materials",
    },
    {
      id: 15,
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760712395/Screenshot_2025-10-17_164105_jqtatj.png",
      title: "Professional Signage Project 15",
      category: "industrial",
      description: "Industrial signage with premium materials",
      stats: "Premium Materials • Weather Resistant",
    },
    {
      id: 16,
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760712395/Screenshot_2025-10-17_164030_it4vv5.png",
      title: "Professional Signage Project 16",
      category: "industrial",
      description: "Professional industrial signage installation",
      stats: "Professional Grade • Industrial Finish",
    },
    {
      id: 17,
      image: "https://res.cloudinary.com/doqsolr8d/image/upload/v1760712395/Screenshot_2025-10-17_164053_af2ymt.png",
      title: "Professional Signage Project 17",
      category: "industrial",
      description: "Industrial signage with custom design",
      stats: "Custom Design • Professional Installation",
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
        className="py-20 text-white relative overflow-x-hidden"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/doqsolr8d/image/upload/v1760712408/Screenshot_2025-10-17_164207_dbtngk.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10 max-w-full overflow-x-hidden">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Signage Gallery</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90 px-2 mb-6">
            Browse our portfolio of professional signage projects across South Africa. Quality craftsmanship and satisfied customers.
          </p>
          <div className="flex items-center justify-center gap-2 text-white/90">
            <Phone className="h-5 w-5" />
            <a href="tel:+27725679274" className="text-lg font-semibold hover:text-red-400 transition-colors">
              +27 72 567 9274
            </a>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-muted/30 sticky top-20 z-40 backdrop-blur-sm overflow-x-hidden">
        <div className="container mx-auto px-4 max-w-full">
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
            <p className="text-xl text-muted-foreground">Real results from real signage projects</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1000+</div>
              <div className="text-muted-foreground">Signage Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">17</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Council Compliance</div>
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
            Want Your Signage Project Featured?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us create custom signage solutions for your business. Join hundreds of satisfied customers.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="/quote">Start Your Signage Project</a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
