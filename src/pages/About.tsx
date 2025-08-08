import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function About() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/about';

  const milestones = [
    {
      year: "2019",
      title: "Founded in Khammam, India",
      description: "Started our journey with a vision to create exceptional digital experiences",
      isHighlight: false
    },
    {
      year: "2020",
      title: "First international client",
      description: "Expanded our reach beyond borders, serving clients globally",
      isHighlight: false
    },
    {
      year: "2022",
      title: "Expanded services",
      description: "Added mobile apps & game development to our expertise",
      isHighlight: true
    },
    {
      year: "2025",
      title: "AI-powered solutions",
      description: "Launched AI-powered project assistant for better client experience",
      isHighlight: true
    }
  ];

  const founders = [
    {
      name: "Gopi",
      role: "Co-Founder & Lead Developer",
      bio: "Full-stack developer with expertise in modern web technologies and system architecture.",
      image: "/placeholder.svg",
      linkedin: "#"
    },
    {
      name: "Shiva",
      role: "Co-Founder & Creative Director",
      bio: "UI/UX designer and strategist passionate about creating user-centered digital experiences.",
      image: "/placeholder.svg",
      linkedin: "#"
    }
  ];

  const values = [
    {
      icon: "💎",
      title: "Clarity",
      description: "Clear communication and transparent pricing. No hidden costs, no surprises—just honest collaboration from start to finish."
    },
    {
      icon: "🎨",
      title: "Craft",
      description: "Attention to detail in design and code. Every pixel matters, every line of code is purposeful and optimized."
    },
    {
      icon: "🤝",
      title: "Commitment",
      description: "We stay with you post-launch. Your success is our success, and we're here for the long haul."
    },
    {
      icon: "🚀",
      title: "Growth",
      description: "Scalable solutions that grow with your business. We build for today and tomorrow."
    }
  ];

  const miniServices = [
    { icon: "🎨", title: "UI/UX Design", link: "/services#design" },
    { icon: "💻", title: "Web Development", link: "/services#web-dev" },
    { icon: "📱", title: "Mobile Apps", link: "/services#mobile" },
    { icon: "⚙️", title: "DevOps", link: "/services#backend" },
    { icon: "🎮", title: "Game Development", link: "/services#games" },
    { icon: "🌐", title: "Hosting & Domains", link: "/services#hosting" }
  ];

  const testimonials = [
    {
      quote: "Trivesha transformed our digital presence completely. Their attention to detail is remarkable.",
      author: "Priya Sharma",
      role: "CEO, TechStart",
      rating: 5
    },
    {
      quote: "Professional service from concept to launch. They truly understand business needs.",
      author: "Rajesh Kumar", 
      role: "Founder, E-Commerce Plus",
      rating: 5
    },
    {
      quote: "Outstanding work that perfectly captured our brand identity. Highly recommended!",
      author: "Anita Gupta",
      role: "Marketing Director, StartupXYZ", 
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`text-sm ${i < rating ? 'text-[#FF6B35]' : 'text-gray-300'}`}>★</span>
    ));
  };

  return (
    <main>
      <Helmet>
        <title>About Us — Trivesha</title>
        <meta name="description" content="Learn about Trivesha's journey, founders, and our mission to deliver exceptional digital solutions since 2019." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#0D9488] to-[#064E49] text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container mx-auto max-w-7xl px-6 py-20 md:py-28 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              About Trivesha
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-12 leading-relaxed">
              Designing and developing digital experiences since 2019.
            </p>
            
            {/* Founders Photo Cluster */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex -space-x-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Founder" 
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                />
                <img 
                  src="/placeholder.svg" 
                  alt="Founder" 
                  className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                />
              </div>
              <span className="ml-6 text-lg opacity-80">Founded by Gopi & Shiva</span>
            </div>
            
            <Button size="lg" className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white text-lg px-8 py-4">
              Work with us
            </Button>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <Badge variant="secondary" className="text-[#0D9488] bg-[#0D9488]/10">
                Our Journey
              </Badge>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0D9488]">
                Building Digital Dreams
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2019 in Khammam, India, Trivesha began with a simple mission: 
                  to bridge the gap between innovative ideas and exceptional digital execution. 
                  What started as a small team of passionate developers has grown into a 
                  trusted partner for businesses worldwide.
                </p>
                <p>
                  We specialize in creating digital experiences that not only look beautiful 
                  but also drive real business results. From startups to established enterprises, 
                  we've helped our clients transform their digital presence and achieve their goals.
                </p>
                <p>
                  Today, we continue to push boundaries with cutting-edge technologies while 
                  maintaining our core values of clarity, craft, and commitment.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/placeholder.svg" 
                alt="Trivesha team at work"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#FF6B35] text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">6+</div>
                <div className="text-sm opacity-90">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-24 bg-secondary/20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0D9488] mb-4">
              Our Milestones
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key moments that shaped our journey and defined our growth
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#0D9488]/30 transform -translate-y-1/2" />
            
            <div className="grid grid-cols-4 gap-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative text-center">
                  <div className={`w-4 h-4 rounded-full mx-auto mb-8 ${
                    milestone.isHighlight 
                      ? 'bg-[#FF6B35] shadow-lg shadow-[#FF6B35]/50' 
                      : 'bg-[#0D9488]'
                  }`} />
                  
                  <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`text-2xl font-bold mb-2 ${
                      milestone.isHighlight ? 'text-[#FF6B35]' : 'text-[#0D9488]'
                    }`}>
                      {milestone.year}
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full ${
                    milestone.isHighlight 
                      ? 'bg-[#FF6B35] shadow-lg shadow-[#FF6B35]/50' 
                      : 'bg-[#0D9488]'
                  }`} />
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-16 bg-[#0D9488]/30 mt-4" />
                  )}
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-lg flex-1">
                  <div className={`text-xl font-bold mb-2 ${
                    milestone.isHighlight ? 'text-[#FF6B35]' : 'text-[#0D9488]'
                  }`}>
                    {milestone.year}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 md:py-24 bg-[#E6F7F5]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0D9488] mb-4">
              Meet Our Founders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The visionaries behind Trivesha's success story
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <Card 
                key={index} 
                className="founder-card group cursor-pointer border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:border-b-4 hover:border-[#FF6B35] transition-all duration-300 bg-white"
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <img 
                      src={founder.image} 
                      alt={founder.name}
                      className="w-32 h-32 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow"
                    />
                  </div>
                  
                  <h3 className="font-heading text-2xl font-bold text-[#0D9488] mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-[#FF6B35] font-medium mb-4">
                    {founder.role}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {founder.bio}
                  </p>
                  
                  <a 
                    href={founder.linkedin}
                    className="inline-flex items-center space-x-2 text-[#0D9488] hover:text-[#FF6B35] transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Connect on LinkedIn</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0D9488] mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="value-card group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-[#0D9488]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#FF6B35]/10 transition-colors">
                    <span className="text-3xl">{value.icon}</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-[#0D9488] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 md:py-24 bg-secondary/20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0D9488] mb-4">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A quick overview of our core services
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {miniServices.map((service, index) => (
              <a 
                key={index}
                href={service.link}
                className="mini-service-card group bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-transparent hover:border-[#FF6B35]"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-medium text-gray-900 text-sm leading-tight">
                  {service.title}
                </h3>
              </a>
            ))}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-[#0D9488] text-[#0D9488] hover:bg-[#0D9488] hover:text-white text-lg px-8"
            >
              See full services
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-24 bg-[#064E49] text-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Trusted by businesses across India and beyond
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="testimonial-card bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20 transition-colors">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className="opacity-90 mb-6 italic leading-relaxed text-lg">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-lg">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm opacity-80">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-[#0D9488] text-white">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to start your project?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Let's discuss your ideas and transform them into exceptional digital experiences.
          </p>
          <Button 
            size="lg" 
            className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white text-lg px-8 py-4"
          >
            Request a free quote
          </Button>
          
          {/* AI Agent mention */}
          <div className="mt-8 inline-flex items-center space-x-2 text-sm opacity-80">
            <span>💬</span>
            <span>Quick 2-min project brief with our AI assistant</span>
          </div>
        </div>
      </section>
    </main>
  );
}
