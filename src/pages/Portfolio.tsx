import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Portfolio() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/portfolio';
  
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', 'Web Design', 'Web Development', 'Mobile Apps', 'Games', 'Maintenance'];
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform Redesign",
      category: "Web Design",
      description: "Complete UI/UX overhaul that increased conversion rates by 45% for a leading fashion retailer.",
      image: "/placeholder.svg",
      tags: ["Figma", "React", "TypeScript"],
      client: "Fashion Forward",
      link: "/case-study/ecommerce-redesign"
    },
    {
      id: 2,
      title: "FinTech Mobile App",
      category: "Mobile Apps",
      description: "Secure banking app with biometric authentication serving 100K+ active users daily.",
      image: "/placeholder.svg",
      tags: ["React Native", "Node.js", "MongoDB"],
      client: "SecureBank",
      link: "/case-study/fintech-app"
    },
    {
      id: 3,
      title: "SaaS Dashboard Development",
      category: "Web Development",
      description: "Real-time analytics dashboard processing 1M+ data points for enterprise clients.",
      image: "/placeholder.svg",
      tags: ["Next.js", "PostgreSQL", "AWS"],
      client: "DataFlow Pro",
      link: "/case-study/saas-dashboard"
    },
    {
      id: 4,
      title: "Casual Puzzle Game",
      category: "Games",
      description: "HTML5 puzzle game with 500K+ downloads and 4.8-star rating on mobile stores.",
      image: "/placeholder.svg",
      tags: ["Phaser.js", "Canvas", "WebGL"],
      client: "GameStudio XYZ",
      link: "/case-study/puzzle-game"
    },
    {
      id: 5,
      title: "Restaurant Chain Website",
      category: "Web Design",
      description: "Multi-location restaurant website with online ordering and table reservation system.",
      image: "/placeholder.svg",
      tags: ["Figma", "WordPress", "WooCommerce"],
      client: "Spice Route",
      link: "/case-study/restaurant-website"
    },
    {
      id: 6,
      title: "Cloud Infrastructure Optimization",
      category: "Maintenance",
      description: "Reduced hosting costs by 60% while improving performance for high-traffic application.",
      image: "/placeholder.svg",
      tags: ["AWS", "Docker", "Kubernetes"],
      client: "TechScale Inc",
      link: "/case-study/cloud-optimization"
    },
    {
      id: 7,
      title: "Healthcare Management System",
      category: "Web Development",
      description: "HIPAA-compliant patient management system for 50+ medical practices.",
      image: "/placeholder.svg",
      tags: ["Vue.js", "Laravel", "MySQL"],
      client: "MedCare Solutions",
      link: "/case-study/healthcare-system"
    },
    {
      id: 8,
      title: "Learning Management App",
      category: "Mobile Apps",
      description: "Educational app with offline capabilities used by 250K+ students across India.",
      image: "/placeholder.svg",
      tags: ["Flutter", "Firebase", "Dart"],
      client: "EduTech Prime",
      link: "/case-study/learning-app"
    },
    {
      id: 9,
      title: "Racing Game Mobile",
      category: "Games",
      description: "3D racing game with multiplayer support and in-app purchase integration.",
      image: "/placeholder.svg",
      tags: ["Unity", "C#", "Photon"],
      client: "Speed Games",
      link: "/case-study/racing-game"
    }
  ];

  const featuredProject = {
    title: "TechStart Platform",
    subtitle: "Complete Digital Transformation",
    description: "End-to-end development of a B2B platform that revolutionized how startups connect with investors. From initial wireframes to a fully deployed solution handling $50M+ in transactions.",
    image: "/placeholder.svg",
    results: [
      "300% increase in user engagement",
      "$50M+ transactions processed",
      "98.5% uptime in first year",
      "Featured in TechCrunch"
    ],
    tags: ["React", "Node.js", "AWS", "PostgreSQL", "Stripe"]
  };

  const clientLogos = [
    { name: "TechStart", logo: "/placeholder.svg" },
    { name: "DataFlow", logo: "/placeholder.svg" },
    { name: "SecureBank", logo: "/placeholder.svg" },
    { name: "EduTech", logo: "/placeholder.svg" },
    { name: "MedCare", logo: "/placeholder.svg" },
    { name: "GameStudio", logo: "/placeholder.svg" }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <main>
      <Helmet>
        <title>Portfolio — Trivesha</title>
        <meta name="description" content="Explore our portfolio of web design, development, mobile apps, games and maintenance projects. Real results for real businesses." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(175_86%_18%)] to-primary text-white min-h-[60vh] flex items-center portfolio-hero-pattern">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10"></div>
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Our Work. Your Results.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-slate-100 leading-relaxed max-w-3xl">
              From Figma concepts to deployed products — here's how we deliver measurable results for businesses like yours.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-4"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="portfolio-filter py-12 border-b">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-primary text-white hover:bg-primary/90"
                    : "border-primary text-primary hover:bg-primary hover:text-white"
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={featuredProject.image} 
                alt={featuredProject.title}
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <Badge className="mb-4 bg-accent/10 text-accent">Featured Project</Badge>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[hsl(175_86%_18%)] mb-4">
                  {featuredProject.title}
                  <span className="block text-accent text-2xl font-normal border-b-2 border-accent inline-block">
                    {featuredProject.subtitle}
                  </span>
                </h2>
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                {featuredProject.description}
              </p>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-[hsl(175_86%_18%)]">Key Results:</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {featuredProject.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <Button className="btn-hero">
                View Full Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[hsl(175_86%_18%)] mb-4">
              {activeFilter === 'All' ? 'All Projects' : activeFilter} Portfolio
            </h2>
            <p className="text-lg text-muted-foreground">
              {filteredProjects.length} projects found
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 filter-transition">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="portfolio-card group overflow-hidden border-0 shadow-lg hover:shadow-xl cursor-pointer bg-white">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="project-overlay absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white text-black hover:bg-gray-100">
                      View Case Study →
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-secondary text-primary">
                    {project.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold text-[hsl(175_86%_18%)] mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-primary/30 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Client: {project.client}
                    </span>
                    <a 
                      href={project.link}
                      className="text-accent hover:text-accent/80 font-medium text-sm transition-colors"
                    >
                      View Details →
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl font-bold text-[hsl(175_86%_18%)] mb-4">
              Trusted by Leading Brands
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="group">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="client-logo w-full h-16 object-contain opacity-60 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[hsl(175_86%_18%)] text-white">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Your Project Could Be Here Next
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's design and build something that works for you. Join the growing list of businesses we've helped transform digitally.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-4"
          >
            Get a Free Quote
          </Button>
        </div>
      </section>
    </main>
  );
}
