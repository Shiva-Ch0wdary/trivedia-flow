import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import workImage from "@/assets/work.jpeg";
import projectFeatured from "@/assets/project/project-featured.png";
import project1 from "@/assets/project/project-1.png";
import project2 from "@/assets/project/project-2.png";
import project3 from "@/assets/project/project-3.png";

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
      image: project1,
      tags: ["Figma", "React", "TypeScript"],
      client: "Fashion Forward",
      link: "/portfolio/ecommerce-redesign"
    },
    {
      id: 2,
      title: "FinTech Mobile App",
      category: "Mobile Apps",
      description: "Secure banking app with biometric authentication serving 100K+ active users daily.",
      image: project2,
      tags: ["React Native", "Node.js", "MongoDB"],
      client: "SecureBank",
      link: "/portfolio/fintech-app"
    },
    {
      id: 3,
      title: "SaaS Dashboard Development",
      category: "Web Development",
      description: "Real-time analytics dashboard processing 1M+ data points for enterprise clients.",
      image: project3,
      tags: ["Next.js", "PostgreSQL", "AWS"],
      client: "DataFlow Pro",
      link: "/portfolio/saas-dashboard"
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
    image: projectFeatured,
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
    <main className="bg-[#0A0E2A] text-[#EAEAEA]">
      <Helmet>
        <title>Portfolio — Trivesha</title>
        <meta name="description" content="Explore our portfolio of web design, development, mobile apps, games and maintenance projects. Real results for real businesses." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F1428] to-[#0A0E2A] pt-24 pb-24 md:pt-32 md:pb-32">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(45,212,191,0.15), transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(255,120,73,0.1), transparent 50%)`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="text-left">
              <div className="inline-block">
                <Badge variant="secondary" className="bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/20 mb-6">
                  Portfolio
                </Badge>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-[#EAEAEA] mb-6 drop-shadow-[0_4px_20px_rgba(234,234,234,0.2)]">
                Our Work.<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2DD4BF] to-[#5EEAD4] drop-shadow-[0_4px_20px_rgba(45,212,191,0.3)]">Your Results.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#A0AEC0] mb-8 leading-relaxed">
                From Figma concepts to deployed products — here's how we deliver measurable results for businesses like yours.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#2DD4BF] hover:bg-[#5EEAD4] text-[#0A0E2A] font-semibold w-full sm:w-auto shadow-[0_8px_24px_rgba(45,212,191,0.25)] hover:shadow-[0_12px_36px_rgba(45,212,191,0.35)] border-0"
                  asChild
                >
                  <Link to="/contact">Start Your Project</Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-[#FF7849]/50 text-[#FF7849] hover:bg-[#FF7849]/10 hover:border-[#FF7849] hover:text-[#FF8B61] w-full sm:w-auto font-semibold bg-transparent"
                  onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View Case Studies
                </Button>
              </div>
              
              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8">
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-[#2DD4BF] mb-1">120+</div>
                  <div className="text-xs md:text-sm text-[#A0AEC0]">Projects Delivered</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-[#FF7849] mb-1">50+</div>
                  <div className="text-xs md:text-sm text-[#A0AEC0]">Happy Clients</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-[#2DD4BF] mb-1">6+</div>
                  <div className="text-xs md:text-sm text-[#A0AEC0]">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-[#111528] to-[#0F1428] rounded-2xl p-8 border border-[#1C2333] shadow-[0_12px_32px_rgba(0,0,0,0.4)]">
                <img 
                  src={workImage} 
                  alt="Portfolio showcase mockup"
                  className="w-full rounded-lg shadow-2xl border border-[#1C2333]"
                />
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-[#111528] rounded-xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.4)] border border-[#1C2333]">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-[#2DD4BF] rounded-full"></div>
                  <span className="font-medium text-[#EAEAEA]">99.9% Uptime</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-[#111528] rounded-xl p-4 shadow-[0_8px_24px_rgba(0,0,0,0.4)] border border-[#1C2333]">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-[#FF7849] rounded-full"></div>
                  <span className="font-medium text-[#EAEAEA]">Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="bg-[#111528] py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl text-[#EAEAEA] mb-4 drop-shadow-[0_4px_20px_rgba(234,234,234,0.1)]">Browse Our Work</h2>
            <p className="text-[#A0AEC0] mb-8">Filter projects by category to find what interests you most</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-[#2DD4BF] text-[#0A0E2A] hover:bg-[#5EEAD4] shadow-[0_8px_24px_rgba(45,212,191,0.25)] font-semibold border-0"
                    : "border-2 border-[#2DD4BF]/50 text-[#2DD4BF] hover:bg-[#2DD4BF]/10 hover:border-[#2DD4BF] hover:text-[#5EEAD4] bg-transparent"
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
      <section className="py-24 bg-[#0F1428] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 20%, rgba(45,212,191,0.1), transparent 50%),
                                radial-gradient(circle at 70% 80%, rgba(255,120,73,0.1), transparent 50%)`,
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.4)] border border-[#1C2333]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E2A]/60 to-transparent rounded-2xl"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <Badge variant="secondary" className="bg-[#FF7849]/10 text-[#FF7849] border border-[#FF7849]/20 mb-4">
                  Featured Project
                </Badge>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#EAEAEA] mb-2 drop-shadow-[0_4px_20px_rgba(234,234,234,0.1)]">
                  {featuredProject.title}
                </h2>
                <p className="text-xl text-[#2DD4BF] font-semibold mb-4">
                  {featuredProject.subtitle}
                </p>
              </div>
              
              <p className="text-lg text-[#A0AEC0] leading-relaxed">
                {featuredProject.description}
              </p>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-[#EAEAEA]">Key Results:</h3>
                <div className="grid gap-3">
                  {featuredProject.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#2DD4BF] rounded-full flex-shrink-0"></div>
                      <span className="text-[#A0AEC0]">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag, index) => (
                  <span key={index} className="bg-[#2DD4BF]/10 text-[#2DD4BF] text-sm px-3 py-1 rounded-full border border-[#2DD4BF]/20">
                    {tag}
                  </span>
                ))}
              </div>

              <Button className="bg-[#2DD4BF] hover:bg-[#5EEAD4] text-[#0A0E2A] font-semibold shadow-[0_8px_24px_rgba(45,212,191,0.25)] hover:shadow-[0_12px_36px_rgba(45,212,191,0.35)] border-0" asChild>
                <Link to="/portfolio/ecommerce-redesign">View Full Case Study</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-[#0A0E2A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2DD4BF] mb-4 drop-shadow-[0_4px_20px_rgba(45,212,191,0.2)]">
              {activeFilter === 'All' ? 'All Projects' : activeFilter} Portfolio
            </h2>
            <div className="w-24 h-1 bg-[#2DD4BF] mx-auto mb-4 rounded-full"></div>
            <p className="text-lg text-[#A0AEC0]">
              {filteredProjects.length} projects found
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-2 border-[#1C2333] shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_36px_rgba(45,212,191,0.25)] cursor-pointer bg-[#111528] transition-all duration-500 hover:-translate-y-1 hover:border-[#2DD4BF]/30">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#2DD4BF]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Button className="bg-[#0A0E2A] text-[#2DD4BF] hover:bg-[#111528] hover:text-[#5EEAD4] text-sm md:text-base font-semibold shadow-[0_8px_24px_rgba(10,14,42,0.3)]">
                      View Case Study →
                    </Button>
                  </div>
                  <Badge className="absolute top-2 left-2 md:top-4 md:left-4 bg-[#111528]/90 text-[#2DD4BF] border border-[#2DD4BF]/20 text-xs md:text-sm font-medium">
                    {project.category}
                  </Badge>
                </div>
                
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-[#EAEAEA] mb-2 md:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-[#A0AEC0] mb-3 md:mb-4 line-clamp-2 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="text-xs bg-[#2DD4BF]/10 text-[#2DD4BF] px-2 py-1 rounded border border-[#2DD4BF]/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm text-[#7A869C]">
                      Client: {project.client}
                    </span>
                    <a 
                      href={project.link}
                      className="text-[#FF7849] hover:text-[#FF8B61] font-medium text-xs md:text-sm transition-colors hover:drop-shadow-[0_0_8px_rgba(255,120,73,0.6)]"
                    >
                      View Details →
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-2 border-[#2DD4BF]/50 text-[#2DD4BF] hover:bg-[#2DD4BF]/10 hover:border-[#2DD4BF] hover:text-[#5EEAD4] font-semibold bg-transparent">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-[#0F1428] via-[#FF7849]/20 to-[#0A0E2A] text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-15">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,120,73,0.15), transparent 60%),
                                radial-gradient(circle at 75% 75%, rgba(45,212,191,0.1), transparent 60%)`,
            }}
          />
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#FF7849] rounded-full opacity-40 animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-[#2DD4BF] rounded-full opacity-30 animate-pulse"></div>
          <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-[#FF7849] rounded-full opacity-50 animate-ping" style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 drop-shadow-[0_4px_20px_rgba(234,234,234,0.2)]">
            <span className="text-[#EAEAEA]">Your Project Could Be</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7849] via-[#FF8B61] to-[#FFB088] drop-shadow-[0_4px_20px_rgba(255,120,73,0.4)]">Here Next</span>
          </h2>
          <p className="text-xl text-[#A0AEC0] mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's design and build something that works for you. Join the growing list of businesses we've helped transform digitally.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-[#FF7849] hover:bg-[#FF8B61] text-white w-full sm:w-auto font-bold shadow-[0_12px_32px_rgba(255,120,73,0.3)] hover:shadow-[0_20px_48px_rgba(255,120,73,0.4)] border-0 transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link to="/contact">Get a Free Quote</Link>
            </Button>
            <Button 
              size="lg" 
              className="border-2 border-[#2DD4BF]/50 bg-transparent text-[#2DD4BF] hover:bg-[#2DD4BF]/10 hover:border-[#2DD4BF] hover:text-[#5EEAD4] w-full sm:w-auto font-bold transition-all duration-300"
              asChild
            >
              <Link to="/contact">Schedule a Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
