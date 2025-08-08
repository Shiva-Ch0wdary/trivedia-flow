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
      <section className="bg-white pt-24 pb-24 md:pt-32 md:pb-32">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="text-left">
              <div className="inline-block">
                <span className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-2 block">Portfolio</span>
                <div className="w-16 h-1 bg-teal-600 mb-6"></div>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-gray-900 mb-6">
                Our Work.<br />
                <span className="text-teal-600">Your Results.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
                From Figma concepts to deployed products — here's how we deliver measurable results for businesses like yours.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Button 
                  size="lg" 
                  className="bg-teal-600 hover:bg-teal-700 text-white w-full sm:w-auto"
                >
                  Start Your Project
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-orange-500 text-orange-600 hover:bg-orange-50 w-full sm:w-auto"
                >
                  View Case Studies
                </Button>
              </div>
              
              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8">
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-teal-600">120+</div>
                  <div className="text-xs md:text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-teal-600">50+</div>
                  <div className="text-xs md:text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-teal-600">6+</div>
                  <div className="text-xs md:text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-50 to-orange-50 rounded-2xl p-8">
                <img 
                  src="/placeholder.svg" 
                  alt="Portfolio showcase mockup"
                  className="w-full rounded-lg shadow-2xl border border-gray-200"
                />
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">99.9% Uptime</span>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg border border-gray-100">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">Fast Delivery</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl text-gray-900 mb-4">Browse Our Work</h2>
            <p className="text-gray-600 mb-8">Filter projects by category to find what interests you most</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-teal-600 text-white hover:bg-teal-700 shadow-md"
                    : "border-teal-200 text-teal-700 hover:bg-teal-50 hover:border-teal-300"
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
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl border border-gray-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <span className="inline-block bg-orange-100 text-orange-600 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  Featured Project
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {featuredProject.title}
                </h2>
                <p className="text-xl text-teal-600 font-semibold mb-4">
                  {featuredProject.subtitle}
                </p>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {featuredProject.description}
              </p>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-gray-900">Key Results:</h3>
                <div className="grid gap-3">
                  {featuredProject.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {featuredProject.tags.map((tag, index) => (
                  <span key={index} className="bg-teal-50 text-teal-700 text-sm px-3 py-1 rounded-full border border-teal-200">
                    {tag}
                  </span>
                ))}
              </div>

              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                View Full Case Study
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {activeFilter === 'All' ? 'All Projects' : activeFilter} Portfolio
            </h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">
              {filteredProjects.length} projects found
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-0 shadow-sm hover:shadow-xl cursor-pointer bg-white transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-teal-600/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white text-teal-600 hover:bg-gray-100 text-sm md:text-base">
                      View Case Study →
                    </Button>
                  </div>
                  <span className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/90 text-teal-600 text-xs md:text-sm font-medium px-2 py-1 md:px-3 md:py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-heading text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-3 md:mb-4 line-clamp-2 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="text-xs bg-teal-50 text-teal-700 px-2 py-1 rounded border border-teal-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm text-gray-500">
                      Client: {project.client}
                    </span>
                    <a 
                      href={project.link}
                      className="text-orange-600 hover:text-orange-700 font-medium text-xs md:text-sm transition-colors"
                    >
                      View Details →
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-2xl font-bold text-gray-900 mb-4">
              Trusted by Leading Brands
            </h2>
            <div className="w-16 h-1 bg-teal-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="group flex justify-center">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="w-full h-16 object-contain opacity-40 group-hover:opacity-80 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
            Your Project Could Be Here Next
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Let's design and build something that works for you. Join the growing list of businesses we've helped transform digitally.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-orange-500 hover:bg-orange-600 text-white w-full sm:w-auto"
            >
              Get a Free Quote
            </Button>
            <Button 
              size="lg" 
              className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-teal-600 w-full sm:w-auto transition-all duration-300"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
