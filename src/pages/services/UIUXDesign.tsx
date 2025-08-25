import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Palette, Users, Eye, Zap, Heart, TrendingUp } from "lucide-react";

export default function UIUXDesign() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/services/ui-ux-design';

  const tools = [
    { name: "Figma", category: "Design", icon: "🎨" },
    { name: "Adobe XD", category: "Prototyping", icon: "🎯" },
    { name: "Sketch", category: "UI Design", icon: "💎" },
    { name: "Principle", category: "Animation", icon: "🎬" },
    { name: "InVision", category: "Collaboration", icon: "💫" },
    { name: "Miro", category: "Research", icon: "🧠" },
    { name: "Maze", category: "Testing", icon: "🔍" },
    { name: "Hotjar", category: "Analytics", icon: "📊" }
  ];

  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Centered Design",
      description: "Deep user research and persona development to create designs that truly connect with your audience"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Visual Excellence",
      description: "Stunning visual designs that reflect your brand and create memorable user experiences"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Interactive Prototypes",
      description: "High-fidelity prototypes that bring your ideas to life before development begins"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Usability Focused",
      description: "Intuitive interfaces that users love, reducing learning curves and increasing engagement"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Conversion Optimized",
      description: "Design strategies that turn visitors into customers and improve business metrics"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Brand Consistency",
      description: "Cohesive design systems that strengthen your brand across all touchpoints"
    }
  ];

  const designTypes = [
    {
      title: "Website Design",
      description: "Modern, responsive web designs that look stunning on all devices and drive conversions",
      icon: "💻",
      deliverables: ["Wireframes", "Visual Designs", "Responsive Layouts", "Style Guide"]
    },
    {
      title: "Mobile App Design",
      description: "Native iOS and Android app designs following platform guidelines for optimal user experience",
      icon: "📱",
      deliverables: ["User Flows", "App Screens", "Interactive Prototypes", "Icon Design"]
    },
    {
      title: "Dashboard Design",
      description: "Data-rich dashboard interfaces that make complex information easy to understand and act upon",
      icon: "📊",
      deliverables: ["Data Visualization", "Admin Panels", "Analytics Dashboards", "User Interfaces"]
    },
    {
      title: "Brand Identity",
      description: "Complete brand identity design including logos, color schemes, and brand guidelines",
      icon: "🎨",
      deliverables: ["Logo Design", "Brand Guidelines", "Color Palette", "Typography"]
    }
  ];

  const packages = [
    {
      name: "Essential Design",
      price: "₹35,000",
      period: "one-time",
      description: "Perfect for startups and small projects",
      features: [
        "5-8 page designs",
        "Mobile responsive",
        "2 design revisions",
        "Basic style guide",
        "Figma source files",
        "30 days support"
      ],
      popular: false
    },
    {
      name: "Professional Design",
      price: "₹75,000",
      period: "one-time",
      description: "Comprehensive design solution for businesses",
      features: [
        "10-15 page designs",
        "Interactive prototypes",
        "5 design revisions",
        "Complete style guide",
        "User research insights",
        "60 days support",
        "Usability testing"
      ],
      popular: true
    },
    {
      name: "Premium Design",
      price: "₹1,50,000",
      period: "one-time",
      description: "Enterprise-level design with full UX research",
      features: [
        "Unlimited pages",
        "Advanced prototyping",
        "Unlimited revisions",
        "Design system",
        "User research & testing",
        "90 days support",
        "Brand identity included"
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Research & Discovery",
      description: "Deep dive into your business goals, target users, and competitive landscape to inform design decisions."
    },
    {
      step: "02", 
      title: "Wireframing & Strategy",
      description: "Create user flows and wireframes that map out the optimal user journey and information architecture."
    },
    {
      step: "03",
      title: "Visual Design & Prototyping",
      description: "Craft beautiful visual designs and interactive prototypes that bring your brand to life."
    },
    {
      step: "04",
      title: "Testing & Refinement",
      description: "Validate designs through user testing and iterate based on feedback for optimal user experience."
    }
  ];

  return (
    <main className="bg-[#0A0E2A] text-[#EAEAEA] min-h-screen">
      <Helmet>
        <title>UI/UX Design Services - Trivesha</title>
        <meta name="description" content="Professional UI/UX design services using Figma and modern design tools. User-centered designs that drive engagement and conversions." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F1428] to-[#0A0E2A] pt-24 pb-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-[#9333EA] bg-[#9333EA]/10 border border-[#9333EA]/20">
                  UI/UX Design
                </Badge>
                <h1 className="font-heading text-4xl md:text-5xl xl:text-6xl font-bold text-[#9333EA] leading-tight drop-shadow-[0_4px_20px_rgba(147,51,234,0.3)]">
                  Design That Converts
                </h1>
                <p className="text-lg md:text-xl text-[#A0AEC0] leading-relaxed">
                  Create exceptional user experiences that drive engagement and business growth. 
                  From wireframes to interactive prototypes, we design with purpose.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#9333EA] hover:bg-[#A855F7] text-white font-semibold text-lg px-8 w-full sm:w-auto shadow-[0_8px_24px_rgba(147,51,234,0.25)] hover:shadow-[0_12px_36px_rgba(147,51,234,0.35)] border-0">
                  Get Free Quote
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-[#9333EA]/50 text-[#9333EA] hover:bg-[#9333EA]/10 hover:border-[#9333EA] hover:text-[#A855F7] w-full sm:w-auto font-semibold bg-transparent">
                  View Designs
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#9333EA] mb-1">100+</div>
                  <div className="text-sm text-[#A0AEC0]">Designs Created</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2DD4BF] mb-1">95%</div>
                  <div className="text-sm text-[#A0AEC0]">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#9333EA] mb-1">40%</div>
                  <div className="text-sm text-[#A0AEC0]">Avg. Conversion Lift</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-[#111528] rounded-xl p-4 shadow-[0_20px_48px_rgba(0,0,0,0.4)] border border-[#1C2333] transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-gradient-to-br from-[#9333EA] to-[#A855F7] w-full h-32 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-white text-2xl">🎨</span>
                    </div>
                    <h3 className="font-semibold text-[#EAEAEA] text-sm">Website Design</h3>
                    <p className="text-xs text-[#A0AEC0]">Responsive & Modern</p>
                  </div>
                  <div className="bg-[#111528] rounded-xl p-4 shadow-[0_20px_48px_rgba(0,0,0,0.4)] border border-[#1C2333] transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-gradient-to-br from-[#2DD4BF] to-[#5EEAD4] w-full h-24 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-white text-xl">📱</span>
                    </div>
                    <h3 className="font-semibold text-[#EAEAEA] text-sm">App Design</h3>
                    <p className="text-xs text-[#A0AEC0]">iOS & Android</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-[#111528] rounded-xl p-4 shadow-[0_20px_48px_rgba(0,0,0,0.4)] border border-[#1C2333] transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-gradient-to-br from-[#FF7849] to-[#FF8B61] w-full h-28 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-white text-xl">📊</span>
                    </div>
                    <h3 className="font-semibold text-[#EAEAEA] text-sm">Dashboard Design</h3>
                    <p className="text-xs text-[#A0AEC0]">Data Visualization</p>
                  </div>
                  <div className="bg-[#111528] rounded-xl p-4 shadow-[0_20px_48px_rgba(0,0,0,0.4)] border border-[#1C2333] transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-gradient-to-br from-[#10B981] to-[#34D399] w-full h-20 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-white text-lg">🎯</span>
                    </div>
                    <h3 className="font-semibold text-[#EAEAEA] text-sm">Prototyping</h3>
                    <p className="text-xs text-[#A0AEC0]">Interactive Design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-[#0A0E2A]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#9333EA] mb-4 drop-shadow-[0_4px_20px_rgba(147,51,234,0.2)]">
              Why Choose Our UI/UX Design
            </h2>
            <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
              We create designs that users love and businesses trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group border border-[#1C2333] bg-[#111528] shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_36px_rgba(147,51,234,0.25)] hover:border-[#9333EA]/30 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full bg-[#9333EA]/10 border border-[#9333EA]/20 flex items-center justify-center mx-auto mb-4 text-[#9333EA] group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-[#EAEAEA]">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-[#A0AEC0] leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-[#0F1428]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#EAEAEA] mb-4">
              Design Tools We Master
            </h2>
            <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
              Industry-leading tools for professional design workflows
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {tools.map((tool, index) => (
              <Card key={index} className="text-center border border-[#1C2333] bg-[#111528] shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_36px_rgba(147,51,234,0.15)] hover:border-[#9333EA]/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="text-3xl mb-3">{tool.icon}</div>
                  <h3 className="font-bold text-[#EAEAEA] mb-1">{tool.name}</h3>
                  <p className="text-sm text-[#A0AEC0]">{tool.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Design Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designTypes.map((type, index) => (
              <Card key={index} className="border border-[#1C2333] bg-[#111528] shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_36px_rgba(147,51,234,0.25)] hover:border-[#9333EA]/30 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{type.icon}</div>
                    <div>
                      <CardTitle className="text-xl font-bold text-[#EAEAEA] mb-2">
                        {type.title}
                      </CardTitle>
                      <CardDescription className="text-[#A0AEC0]">
                        {type.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {type.deliverables.map((deliverable, delIndex) => (
                      <Badge key={delIndex} variant="secondary" className="bg-[#9333EA]/10 text-[#9333EA] border border-[#9333EA]/20">
                        {deliverable}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#0A0E2A]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#9333EA] mb-4 drop-shadow-[0_4px_20px_rgba(147,51,234,0.2)]">
              Our Design Process
            </h2>
            <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
              User-centered methodology that delivers exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border border-[#1C2333] bg-[#111528] shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_36px_rgba(147,51,234,0.25)] hover:border-[#9333EA]/30 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-[#9333EA] mb-4">{step.step}</div>
                    <h3 className="font-bold text-[#EAEAEA] text-lg mb-3">{step.title}</h3>
                    <p className="text-[#A0AEC0] leading-relaxed text-sm">{step.description}</p>
                  </CardContent>
                </Card>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#9333EA]/50 to-[#9333EA]/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-[#0F1428]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#EAEAEA] mb-4">
              UI/UX Design Packages
            </h2>
            <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
              Professional design solutions for every budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative border-2 bg-[#111528] shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 ${
                pkg.popular 
                  ? 'border-[#9333EA] shadow-[0_12px_36px_rgba(147,51,234,0.25)] scale-105' 
                  : 'border-[#1C2333] hover:border-[#9333EA]/30 hover:shadow-[0_12px_36px_rgba(147,51,234,0.15)]'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#9333EA] text-white font-bold px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-[#EAEAEA] mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#9333EA]">{pkg.price}</span>
                    <span className="text-[#A0AEC0] ml-2">/{pkg.period}</span>
                  </div>
                  <CardDescription className="text-[#A0AEC0]">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#9333EA] flex-shrink-0" />
                      <span className="text-[#EAEAEA]">{feature}</span>
                    </div>
                  ))}
                  
                  <div className="pt-6">
                    <Button 
                      className={`w-full font-semibold ${
                        pkg.popular
                          ? 'bg-[#9333EA] hover:bg-[#A855F7] text-white shadow-[0_8px_24px_rgba(147,51,234,0.25)]'
                          : 'bg-[#111528] border-2 border-[#9333EA]/50 text-[#9333EA] hover:bg-[#9333EA]/10 hover:border-[#9333EA]'
                      }`}
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      Get Started
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0A0E2A] via-[#111528] to-[#0F1428] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(147,51,234,0.15), transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(45,212,191,0.15), transparent 50%)`,
            }}
          />
        </div>
        
        <div className="container mx-auto max-w-7xl px-6 text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-6 drop-shadow-[0_4px_20px_rgba(234,234,234,0.2)]">
            Ready to Create Amazing Designs?
          </h2>
          <p className="text-xl text-[#A0AEC0] mb-8 max-w-2xl mx-auto">
            Let's design experiences that your users will love and remember.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#9333EA] to-[#A855F7] hover:from-[#A855F7] hover:to-[#C084FC] text-white font-bold text-xl px-12 py-4 shadow-[0_12px_32px_rgba(147,51,234,0.3)] hover:shadow-[0_20px_48px_rgba(147,51,234,0.4)] border-0 transition-all duration-300 transform hover:scale-105"
            >
              Start Design Project
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-xl px-12 py-4 border-2 border-[#2DD4BF]/50 text-[#2DD4BF] hover:bg-[#2DD4BF]/10 hover:border-[#2DD4BF] hover:text-[#5EEAD4] font-bold bg-transparent"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
