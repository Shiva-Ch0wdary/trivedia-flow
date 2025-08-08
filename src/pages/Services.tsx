import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import designImage from "@/assets/1.jpeg";
import developmentImage from "@/assets/2.jpeg";
import infrastructureImage from "@/assets/3.jpeg";
import growthImage from "@/assets/4.jpeg";
import uiuxImage from "@/assets/uiux.jpeg";
import webImage from "@/assets/web.jpeg";
import devImage from "@/assets/dev.jpeg";
import appImage from "@/assets/app.jpeg";

export default function Services() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/services';
  
  const services = [
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Figma-first prototypes and user-centered design solutions that convert visitors into customers.",
      link: "#design"
    },
    {
      icon: "💻",
      title: "Website Development",
      description: "Static, dynamic, and custom websites built with modern technologies for optimal performance.",
      link: "#web-dev"
    },
    {
      icon: "⚙️",
      title: "Backend Maintenance & Deployment",
      description: "Reliable server management, continuous deployment, and infrastructure optimization services.",
      link: "#backend"
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for Play Store and App Store with native performance.",
      link: "#mobile"
    },
    {
      icon: "🎮",
      title: "Game Development",
      description: "Casual HTML5 and mobile games with engaging gameplay and monetization strategies.",
      link: "#games"
    },
    {
      icon: "🌐",
      title: "Domain & Hosting Management",
      description: "Complete domain registration, DNS management, and hosting solutions for your projects.",
      link: "#hosting"
    }
  ];

  const categories = [
    {
      title: "Design",
      subtitle: "UI/UX, redesigns",
      description: "Transform your ideas into beautiful, functional designs that users love and businesses need.",
      image: designImage,
      cta: "See design examples"
    },
    {
      title: "Development", 
      subtitle: "Web, Mobile, Games",
      description: "Build robust applications with cutting-edge technologies and best practices for scalability.",
      image: developmentImage,
      cta: "View development work"
    },
    {
      title: "Infrastructure",
      subtitle: "Domains, Hosting, Maintenance", 
      description: "Keep your digital assets running smoothly with reliable infrastructure and ongoing support.",
      image: infrastructureImage,
      cta: "Explore infrastructure"
    },
    {
      title: "Growth",
      subtitle: "SEO, Analytics, Support",
      description: "Grow your online presence with data-driven strategies and continuous optimization.",
      image: growthImage, 
      cta: "Learn about growth"
    }
  ];

  const processSteps = [
    {
      icon: "🔍",
      title: "Discover",
      description: "Understand your goals, audience, and technical requirements through detailed consultation."
    },
    {
      icon: "🛠️",
      title: "Build", 
      description: "Design and develop your solution using proven methodologies and modern technologies."
    },
    {
      icon: "🚀",
      title: "Launch & Maintain",
      description: "Deploy your project and provide ongoing support to ensure optimal performance."
    }
  ];

  const testimonials = [
    {
      avatar: "/placeholder.svg",
      name: "Priya Sharma",
      role: "CEO, TechStart",
      quote: "Trivesha delivered our mobile app ahead of schedule with exceptional quality. Their attention to detail is remarkable."
    },
    {
      avatar: "/placeholder.svg", 
      name: "Rajesh Kumar",
      role: "Founder, E-Commerce Plus",
      quote: "The website redesign increased our conversion rate by 40%. Professional service from start to finish."
    },
    {
      avatar: "/placeholder.svg",
      name: "Anita Gupta", 
      role: "Marketing Director, StartupXYZ",
      quote: "Outstanding UI/UX work that perfectly captured our brand identity. Highly recommend their services."
    }
  ];

  return (
    <main>
      <Helmet>
        <title>Services — Trivesha</title>
        <meta name="description" content="Web design, development, apps, DevOps, maintenance. Explore Trivesha services and compare plans." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary/50">
        <div className="container mx-auto max-w-7xl px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="font-heading text-4xl md:text-5xl xl:text-6xl font-bold text-[hsl(175_86%_18%)] leading-tight">
                All the digital services you need, in one place
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                From concept to deployment, we handle your entire digital journey. 
                Expert design, development, and maintenance services tailored to your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="btn-hero text-lg px-8 w-full sm:w-auto">
                  Get a free quote
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
                  See portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="hero-mockup bg-white rounded-lg shadow-lg overflow-hidden transform rotate-2">
                    <img src={uiuxImage} alt="Design mockup" className="w-full h-40 object-cover" />
                    <div className="p-4">
                      <h3 className="font-semibold text-sm">UI/UX Design</h3>
                    </div>
                  </div>
                  <div className="hero-mockup bg-white rounded-lg shadow-lg overflow-hidden transform -rotate-1">
                    <img src={appImage} alt="Mobile app" className="w-full h-32 object-cover" />
                    <div className="p-3">
                      <h3 className="font-semibold text-sm">Mobile Apps</h3>
                    </div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="hero-mockup bg-white rounded-lg shadow-lg overflow-hidden transform -rotate-2">
                    <img src={webImage} alt="Web development" className="w-full h-36 object-cover" />
                    <div className="p-4">
                      <h3 className="font-semibold text-sm">Web Development</h3>
                    </div>
                  </div>
                  <div className="hero-mockup bg-white rounded-lg shadow-lg overflow-hidden transform rotate-1">
                    <img src={devImage} alt="DevOps" className="w-full h-28 object-cover" />
                    <div className="p-3">
                      <h3 className="font-semibold text-sm">DevOps</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[hsl(175_86%_18%)] mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions to bring your vision to life
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <Card key={index} className="service-card group cursor-pointer border-0">
                <CardHeader className="text-center p-4 md:p-6">
                  <div className="service-icon w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <span className="text-lg md:text-2xl">{service.icon}</span>
                  </div>
                  <CardTitle className="text-lg md:text-xl font-bold text-[hsl(175_86%_18%)]">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6 pt-0">
                  <CardDescription className="text-center text-muted-foreground leading-relaxed text-sm md:text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="justify-center p-4 md:p-6 pt-0">
                  <a 
                    href={service.link}
                    className="text-accent hover:text-accent/80 font-medium transition-colors text-sm md:text-base"
                  >
                    Learn more →
                  </a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Category Sections */}
      <section className="py-0">
        {categories.map((category, index) => (
          <div 
            key={index} 
            className={`py-16 ${index % 2 === 0 ? 'bg-white' : 'bg-secondary/30'}`}
          >
            <div className="container mx-auto max-w-7xl px-6">
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Badge variant="secondary" className="text-primary bg-secondary">
                    {category.subtitle}
                  </Badge>
                  <h3 className="font-heading text-3xl font-bold text-[hsl(175_86%_18%)]">
                    {category.title}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    {category.cta}
                  </Button>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-r from-primary to-[hsl(175_86%_18%)] text-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our Process
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              A structured approach that ensures quality results every time
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-white/20 transition-colors">
                  <span className="text-lg md:text-2xl">{step.icon}</span>
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold mb-3 md:mb-4">
                  {step.title}
                </h3>
                <p className="opacity-90 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[hsl(175_86%_18%)] mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Trusted by businesses across India
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <p className="text-muted-foreground mb-4 md:mb-6 italic leading-relaxed text-sm md:text-base">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-[hsl(175_86%_18%)] text-sm md:text-base">
                        {testimonial.name}
                      </h4>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Badge variant="secondary" className="bg-accent/10 text-accent">
              JustDial Verified Partner
            </Badge>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-accent text-white">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Got a project in mind? Let's start building.
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Ready to transform your ideas into reality? Get a personalized quote today.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-accent hover:bg-gray-50 text-lg px-8"
          >
            Get Quote
          </Button>
        </div>
      </section>
    </main>
  );
}
