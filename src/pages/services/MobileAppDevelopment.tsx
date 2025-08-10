import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Smartphone, Download, Users, Star, Zap, Shield } from "lucide-react";

export default function MobileAppDevelopment() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/services/mobile-app-development';

  const platforms = [
    { name: "iOS", category: "Native", icon: "🍎", color: "text-[#007AFF]" },
    { name: "Android", category: "Native", icon: "🤖", color: "text-[#3DDC84]" },
    { name: "React Native", category: "Cross-Platform", icon: "⚛️", color: "text-[#61DAFB]" },
    { name: "Flutter", category: "Cross-Platform", icon: "🐦", color: "text-[#02569B]" }
  ];

  const features = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Cross-Platform Development",
      description: "Single codebase for both iOS and Android, reducing development time and costs"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Native Performance",
      description: "Optimized performance that feels native on both platforms"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with data encryption and secure APIs"
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "App Store Ready",
      description: "Complete app store submission and approval assistance"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed for maximum user engagement"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "5-Star Quality",
      description: "Rigorous testing ensures bug-free, high-quality applications"
    }
  ];

  const appTypes = [
    {
      title: "E-Commerce Apps",
      description: "Shopping apps with payment integration, inventory management, and order tracking",
      icon: "🛒",
      examples: ["Online Store", "Marketplace", "Food Delivery"]
    },
    {
      title: "Business Apps",
      description: "Custom apps for business processes, CRM, inventory, and team collaboration",
      icon: "💼",
      examples: ["CRM System", "Inventory", "Task Manager"]
    },
    {
      title: "Social Apps",
      description: "Social networking, messaging, and community building applications",
      icon: "👥",
      examples: ["Chat App", "Social Network", "Forum"]
    },
    {
      title: "Educational Apps",
      description: "Learning platforms, course management, and educational content delivery",
      icon: "📚",
      examples: ["LMS", "Quiz App", "Language Learning"]
    }
  ];

  const packages = [
    {
      name: "Basic App",
      price: "₹75,000",
      period: "one-time",
      description: "Simple apps with essential features",
      features: [
        "Single platform (iOS or Android)",
        "5-8 screens",
        "Basic UI/UX design",
        "API integration",
        "3 months support",
        "App store submission"
      ],
      popular: false
    },
    {
      name: "Business App",
      price: "₹1,50,000",
      period: "one-time",
      description: "Feature-rich apps for growing businesses",
      features: [
        "Cross-platform (iOS + Android)",
        "10-15 screens",
        "Advanced UI/UX design",
        "Multiple API integrations",
        "Push notifications",
        "6 months support",
        "Analytics integration"
      ],
      popular: true
    },
    {
      name: "Enterprise App",
      price: "₹3,00,000",
      period: "one-time",
      description: "Complex apps with custom features",
      features: [
        "Cross-platform development",
        "Unlimited screens",
        "Custom features",
        "Advanced integrations",
        "Admin panel",
        "12 months support",
        "Priority support"
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Concept & Strategy",
      description: "We analyze your app idea, define target audience, and create a comprehensive development strategy with market research."
    },
    {
      step: "02", 
      title: "UI/UX Design",
      description: "Creating intuitive, engaging designs that follow platform guidelines and ensure excellent user experience."
    },
    {
      step: "03",
      title: "Development & Testing",
      description: "Agile development with regular testing on real devices, performance optimization, and security implementation."
    },
    {
      step: "04",
      title: "Launch & Maintenance",
      description: "App store submission, marketing support, and ongoing maintenance with updates and feature additions."
    }
  ];

  return (
    <main className="bg-[#0A0E2A] text-[#EAEAEA] min-h-screen">
      <Helmet>
        <title>Mobile App Development Services — Trivesha</title>
        <meta name="description" content="Professional mobile app development for iOS and Android. React Native and Flutter apps that drive business growth." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0F1428] to-[#0A0E2A] pt-24 pb-16">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-[#FF7849] bg-[#FF7849]/10 border border-[#FF7849]/20">
                  Mobile App Development
                </Badge>
                <h1 className="font-heading text-4xl md:text-5xl xl:text-6xl font-bold text-[#FF7849] leading-tight drop-shadow-[0_4px_20px_rgba(255,120,73,0.3)]">
                  Build Apps That Users Love
                </h1>
                <p className="text-lg md:text-xl text-[#A0AEC0] leading-relaxed">
                  Transform your ideas into powerful mobile applications. We create cross-platform apps 
                  that deliver native performance and exceptional user experiences.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#FF7849] hover:bg-[#FF8B61] text-white font-semibold text-lg px-8 w-full sm:w-auto shadow-[0_8px_24px_rgba(255,120,73,0.25)] hover:shadow-[0_12px_36px_rgba(255,120,73,0.35)] border-0">
                  Get Free Quote
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-2 border-[#FF7849]/50 text-[#FF7849] hover:bg-[#FF7849]/10 hover:border-[#FF7849] hover:text-[#FF8B61] w-full sm:w-auto font-semibold bg-transparent">
                  See Our Apps
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FF7849] mb-1">25+</div>
                  <div className="text-sm text-[#A0AEC0]">Apps Published</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#2DD4BF] mb-1">100K+</div>
                  <div className="text-sm text-[#A0AEC0]">Downloads</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#FF7849] mb-1">4.8★</div>
                  <div className="text-sm text-[#A0AEC0]">Average Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-[#111528] rounded-xl p-4 shadow-[0_20px_48px_rgba(0,0,0,0.4)] border border-[#1C2333] transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-[#FF7849] w-full h-32 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-3xl">📱</span>
                    </div>
                    <h3 className="font-semibold text-[#EAEAEA] text-sm">E-Commerce App</h3>
                    <p className="text-xs text-[#A0AEC0]">Shopping & Payments</p>
                  </div>
                  <div className="bg-[#111528] rounded-xl p-4 shadow-[0_20px_48px_rgba(0,0,0,0.4)] border border-[#1C2333] transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-[#2DD4BF] w-full h-24 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-2xl">💼</span>
                    </div>
                    <h3 className="font-semibold text-[#EAEAEA] text-sm">Business App</h3>
                    <p className="text-xs text-[#A0AEC0]">CRM & Management</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-[#111528] rounded-xl p-4 shadow-[0_20px_48px_rgba(0,0,0,0.4)] border border-[#1C2333] transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-[#9333EA] w-full h-28 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-2xl">👥</span>
                    </div>
                    <h3 className="font-semibold text-[#EAEAEA] text-sm">Social App</h3>
                    <p className="text-xs text-[#A0AEC0]">Community & Chat</p>
                  </div>
                  <div className="bg-[#111528] rounded-xl p-4 shadow-[0_20px_48px_rgba(0,0,0,0.4)] border border-[#1C2333] transform rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="bg-[#10B981] w-full h-20 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-xl">📚</span>
                    </div>
                    <h3 className="font-semibold text-[#EAEAEA] text-sm">Education App</h3>
                    <p className="text-xs text-[#A0AEC0]">Learning Platform</p>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#FF7849] mb-4 drop-shadow-[0_4px_20px_rgba(255,120,73,0.2)]">
              Why Choose Our Mobile App Development
            </h2>
            <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
              We build apps that users love and businesses trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group border border-[#1C2333] bg-[#111528] shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_36px_rgba(255,120,73,0.25)] hover:border-[#FF7849]/30 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 rounded-full bg-[#FF7849]/10 border border-[#FF7849]/20 flex items-center justify-center mx-auto mb-4 text-[#FF7849] group-hover:scale-110 transition-transform duration-300">
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

      {/* Platforms Section */}
      <section className="py-24 bg-[#0F1428]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#EAEAEA] mb-4">
              Platforms We Support
            </h2>
            <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
              Native and cross-platform development for maximum reach
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {platforms.map((platform, index) => (
              <Card key={index} className="text-center border border-[#1C2333] bg-[#111528] shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_36px_rgba(255,120,73,0.15)] hover:border-[#FF7849]/30 transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="text-4xl mb-3">{platform.icon}</div>
                  <h3 className="font-bold text-[#EAEAEA] mb-1">{platform.name}</h3>
                  <p className="text-sm text-[#A0AEC0]">{platform.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* App Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appTypes.map((type, index) => (
              <Card key={index} className="border border-[#1C2333] bg-[#111528] shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_36px_rgba(255,120,73,0.25)] hover:border-[#FF7849]/30 transition-all duration-300">
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
                    {type.examples.map((example, exIndex) => (
                      <Badge key={exIndex} variant="secondary" className="bg-[#FF7849]/10 text-[#FF7849] border border-[#FF7849]/20">
                        {example}
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#FF7849] mb-4 drop-shadow-[0_4px_20px_rgba(255,120,73,0.2)]">
              Our App Development Process
            </h2>
            <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
              From concept to app store - a proven methodology for success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <Card className="border border-[#1C2333] bg-[#111528] shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_12px_36px_rgba(255,120,73,0.25)] hover:border-[#FF7849]/30 transition-all duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-[#FF7849] mb-4">{step.step}</div>
                    <h3 className="font-bold text-[#EAEAEA] text-lg mb-3">{step.title}</h3>
                    <p className="text-[#A0AEC0] leading-relaxed text-sm">{step.description}</p>
                  </CardContent>
                </Card>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#FF7849]/50 to-[#FF7849]/20"></div>
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
              Mobile App Development Packages
            </h2>
            <p className="text-lg text-[#A0AEC0] max-w-2xl mx-auto">
              Flexible pricing for apps of all sizes and complexities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative border-2 bg-[#111528] shadow-[0_8px_24px_rgba(0,0,0,0.35)] transition-all duration-300 ${
                pkg.popular 
                  ? 'border-[#FF7849] shadow-[0_12px_36px_rgba(255,120,73,0.25)] scale-105' 
                  : 'border-[#1C2333] hover:border-[#FF7849]/30 hover:shadow-[0_12px_36px_rgba(255,120,73,0.15)]'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#FF7849] text-white font-bold px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-[#EAEAEA] mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-[#FF7849]">{pkg.price}</span>
                    <span className="text-[#A0AEC0] ml-2">/{pkg.period}</span>
                  </div>
                  <CardDescription className="text-[#A0AEC0]">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#FF7849] flex-shrink-0" />
                      <span className="text-[#EAEAEA]">{feature}</span>
                    </div>
                  ))}
                  
                  <div className="pt-6">
                    <Button 
                      className={`w-full font-semibold ${
                        pkg.popular
                          ? 'bg-[#FF7849] hover:bg-[#FF8B61] text-white shadow-[0_8px_24px_rgba(255,120,73,0.25)]'
                          : 'bg-[#111528] border-2 border-[#FF7849]/50 text-[#FF7849] hover:bg-[#FF7849]/10 hover:border-[#FF7849]'
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
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,120,73,0.15), transparent 50%),
                                radial-gradient(circle at 75% 75%, rgba(45,212,191,0.15), transparent 50%)`,
            }}
          />
        </div>
        
        <div className="container mx-auto max-w-7xl px-6 text-center relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-6 drop-shadow-[0_4px_20px_rgba(234,234,234,0.2)]">
            Ready to Launch Your App?
          </h2>
          <p className="text-xl text-[#A0AEC0] mb-8 max-w-2xl mx-auto">
            Turn your app idea into reality. Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#FF7849] to-[#FF8B61] hover:from-[#FF8B61] hover:to-[#FFB088] text-white font-bold text-xl px-12 py-4 shadow-[0_12px_32px_rgba(255,120,73,0.3)] hover:shadow-[0_20px_48px_rgba(255,120,73,0.4)] border-0 transition-all duration-300 transform hover:scale-105"
            >
              Start Your App
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
