import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Code, Database, Globe, Zap, Shield, TrendingUp } from "lucide-react";

export default function WebDevelopment() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/services/web-development';

  const technologies = [
    { name: "React", category: "Frontend", icon: "⚛️" },
    { name: "Next.js", category: "Framework", icon: "🔺" },
    { name: "TypeScript", category: "Language", icon: "📘" },
    { name: "Node.js", category: "Backend", icon: "🟢" },
    { name: "MongoDB", category: "Database", icon: "🍃" },
    { name: "PostgreSQL", category: "Database", icon: "🐘" },
    { name: "AWS", category: "Cloud", icon: "☁️" },
    { name: "Docker", category: "DevOps", icon: "🐳" }
  ];

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring your website looks perfect on all devices"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized performance with 95+ Google PageSpeed scores"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with SSL, HTTPS, and regular backups"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Scalable Architecture",
      description: "Built to grow with your business using modern tech stacks"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "SEO Optimized",
      description: "Search engine friendly with structured data and meta optimization"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code",
      description: "Well-documented, maintainable code following industry best practices"
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "₹25,000",
      period: "one-time",
      description: "Perfect for small businesses and personal websites",
      features: [
        "5-8 pages",
        "Responsive design",
        "Contact form",
        "Basic SEO",
        "3 months support",
        "Free domain setup"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "₹55,000",
      period: "one-time",
      description: "Ideal for growing businesses with advanced features",
      features: [
        "10-15 pages",
        "Advanced animations",
        "CMS integration",
        "E-commerce ready",
        "6 months support",
        "Performance optimization",
        "Analytics setup"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹1,25,000",
      period: "one-time",
      description: "Custom solutions for large organizations",
      features: [
        "Unlimited pages",
        "Custom features",
        "API integrations",
        "Advanced security",
        "12 months support",
        "Priority support",
        "Custom training"
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and create a detailed project roadmap with wireframes and technical specifications."
    },
    {
      step: "02", 
      title: "Design & Prototyping",
      description: "Our designers create stunning mockups and interactive prototypes that align with your brand identity and user experience goals."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Clean, scalable code development followed by rigorous testing across devices, browsers, and performance benchmarks."
    },
    {
      step: "04",
      title: "Launch & Optimization",
      description: "Smooth deployment to production with ongoing monitoring, optimization, and support to ensure peak performance."
    }
  ];

  return (
    <main className="bg-[#0A0E2A] text-[#EAEAEA] min-h-screen">
      <Helmet>
        <title>Web Development Services - Trivesha</title>
        <meta name="description" content="Professional web development services using React, Next.js, and modern technologies. Custom websites that drive business growth." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F1428] to-[#0A0E2A] pt-24 pb-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-[#2DD4BF] bg-[#2DD4BF]/10 border border-[#2DD4BF]/20">
                  Web Development
                </Badge>
                <h1 className="font-heading text-4xl md:text-5xl xl:text-6xl font-bold text-[#2DD4BF] leading-tight drop-shadow-[0_4px_20px_rgba(45,212,191,0.3)]">
                  Custom Web Development
                </h1>
                <p className="text-lg md:text-xl text-[#A0AEC0] leading-relaxed">
                  Transform your business with modern, responsive websites built using cutting-edge technologies. 
                  From simple landing pages to complex web applications.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#2DD4BF] hover:bg-[#5EEAD4] text-[#0A0E2A] font-semibold text-lg px-8 w-full sm:w-auto shadow-[0_8px_24px_rgba(45,212,191,0.25)] hover:shadow-[0_12px_36px_rgba(45,212,191,0.35)] border-0">
                  Get Free Quote
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-[#2DD4BF]/50 text-[#2DD4BF] hover:bg-[#2DD4BF]/10 hover:border-[#2DD4BF] hover:text-[#5EEAD4] w-full sm:w-auto font-semibold bg-transparent">
                  View Portfolio
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2DD4BF] mb-1">50+</div>
                  <div className="text-sm text-[#A0AEC0]">Websites Built</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FF7849] mb-1">95%</div>
                  <div className="text-sm text-[#A0AEC0]">PageSpeed Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2DD4BF] mb-1">24/7</div>
                  <div className="text-sm text-[#A0AEC0]">Support</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-[#111528] rounded-lg p-6 shadow-[0_20px_48px_rgba(0,0,0,0.4)] border border-[#1C2333]">
                <div className="mb-4 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-[#FF5F57] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#FFBD2E] rounded-full"></div>
                  <div className="w-3 h-3 bg-[#28CA42] rounded-full"></div>
                </div>
                <div className="bg-[#0F1428] rounded p-4 font-mono text-sm">
                  <div className="text-[#2DD4BF]">const</div>
                  <div className="text-[#EAEAEA] ml-4">website = {"{"}</div>
                  <div className="text-[#FF7849] ml-8">responsive: true,</div>
                  <div className="text-[#FF7849] ml-8">performance: '95+',</div>
                  <div className="text-[#FF7849] ml-8">secure: true,</div>
                  <div className="text-[#FF7849] ml-8">seo: 'optimized'</div>
                  <div className="text-[#EAEAEA] ml-4">{"}"}</div>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2DD4BF] mb-4 drop-shadow-[0_4px_20px_rgba(45,212,191,0.2)]">
              Why Choose Our Web Development
            </h2>
            <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
              We deliver modern, scalable websites that drive business growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group border border-[#1C2333] bg-[#111528] shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_36px_rgba(45,212,191,0.25)] hover:border-[#2DD4BF]/30 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 flex items-center justify-center mx-auto mb-4 text-[#2DD4BF] group-hover:scale-110 transition-transform duration-300">
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

      {/* Technologies Section */}
      <section className="py-24 bg-[#0F1428]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#EAEAEA] mb-4">
              Technologies We Use
            </h2>
            <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
              Cutting-edge tech stack for modern, performant websites
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="group">
                <Card className="text-center border border-[#1C2333] bg-[#111528] shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_36px_rgba(45,212,191,0.15)] hover:border-[#2DD4BF]/30 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-3">{tech.icon}</div>
                    <h3 className="font-bold text-[#EAEAEA] mb-1">{tech.name}</h3>
                    <p className="text-sm text-[#A0AEC0]">{tech.category}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#0A0E2A]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#2DD4BF] mb-4 drop-shadow-[0_4px_20px_rgba(45,212,191,0.2)]">
              Our Development Process
            </h2>
            <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
              A proven methodology that ensures quality and on-time delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border border-[#1C2333] bg-[#111528] shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_36px_rgba(45,212,191,0.25)] hover:border-[#2DD4BF]/30 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-[#2DD4BF] mb-4">{step.step}</div>
                    <h3 className="font-bold text-[#EAEAEA] text-lg mb-3">{step.title}</h3>
                    <p className="text-[#A0AEC0] leading-relaxed text-sm">{step.description}</p>
                  </CardContent>
                </Card>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#2DD4BF]/50 to-[#2DD4BF]/20"></div>
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
              Web Development Packages
            </h2>
            <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
              Choose the perfect package for your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative border-2 bg-[#111528] shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 ${
                pkg.popular 
                  ? 'border-[#2DD4BF] shadow-[0_12px_36px_rgba(45,212,191,0.25)] scale-105' 
                  : 'border-[#1C2333] hover:border-[#2DD4BF]/30 hover:shadow-[0_12px_36px_rgba(45,212,191,0.15)]'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#2DD4BF] text-[#0A0E2A] font-bold px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-[#EAEAEA] mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#2DD4BF]">{pkg.price}</span>
                    <span className="text-[#A0AEC0] ml-2">/{pkg.period}</span>
                  </div>
                  <CardDescription className="text-[#A0AEC0]">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#2DD4BF] flex-shrink-0" />
                      <span className="text-[#EAEAEA]">{feature}</span>
                    </div>
                  ))}
                  
                  <div className="pt-6">
                    <Button 
                      className={`w-full font-semibold ${
                        pkg.popular
                          ? 'bg-[#2DD4BF] hover:bg-[#5EEAD4] text-[#0A0E2A] shadow-[0_8px_24px_rgba(45,212,191,0.25)]'
                          : 'bg-[#111528] border-2 border-[#2DD4BF]/50 text-[#2DD4BF] hover:bg-[#2DD4BF]/10 hover:border-[#2DD4BF]'
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
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(45,212,191,0.15), transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(255,120,73,0.15), transparent 50%)`,
            }}
          />
        </div>
        
        <div className="container mx-auto max-w-7xl px-6 text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-6 drop-shadow-[0_4px_20px_rgba(234,234,234,0.2)]">
            Ready to Build Your Website?
          </h2>
          <p className="text-xl text-[#A0AEC0] mb-8 max-w-2xl mx-auto">
            Let's create a stunning, high-performance website that drives your business forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#2DD4BF] to-[#5EEAD4] hover:from-[#5EEAD4] hover:to-[#7DD3FC] text-[#0A0E2A] font-bold text-xl px-12 py-4 shadow-[0_12px_32px_rgba(45,212,191,0.3)] hover:shadow-[0_20px_48px_rgba(45,212,191,0.4)] border-0 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Project
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="text-xl px-12 py-4 border-2 border-[#FF7849]/50 text-[#FF7849] hover:bg-[#FF7849]/10 hover:border-[#FF7849] hover:text-[#FF8B61] font-bold bg-transparent"
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
