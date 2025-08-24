import SEO from "@/components/SEO";
import { generateOrganizationSchema, generateLocalBusinessSchema, generateWebSiteSchema } from "@/lib/seo";
import heroBgImage from "@/assets/hero-bg.jpeg";
import uiImage from "@/assets/home/ui.png";
import webImage from "@/assets/home/web.png";
import appImage from "@/assets/home/app.png";
import dImage from "@/assets/home/d.png";
import { Button } from "@/components/ui/button";
import ScrollToTop from "@/components/ui/scroll-to-top";
import AnimatedBackground from "@/components/ui/animated-background";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Calendar, Users, HeartHandshake, Layers, Rocket, Shield, Smartphone, Globe, Gamepad2, Wrench, Eye, Star, MessageSquare, Mail } from "lucide-react";

const BenefitItem = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-teal-500/50 transition-all duration-300 group">
    <div className="text-teal-400 bg-teal-500/10 p-3 rounded-lg flex-shrink-0 group-hover:bg-teal-500/20 transition-colors duration-300">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-white mb-1">{title}</h4>
      <p className="text-sm text-gray-400">{desc}</p>
    </div>
  </div>
);

const ServiceCard = ({ image, title, bullets, link }: { image: string; title: string; bullets: string[]; link: string }) => (
  <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800/50 hover:border-teal-500/50 hover:shadow-2xl hover:shadow-teal-500/10 hover:scale-[1.02] transition-all duration-500 group h-full">
    {/* Image Section - 40% of card */}
    <div className="relative h-48 bg-gradient-to-br from-teal-900/30 to-blue-900/30 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20"></div>
      <img 
        src={image} 
        alt={`${title} - Professional service illustration showing modern design and development capabilities`}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 z-10 opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    
    {/* Content Section - 60% of card */}
    <div className="p-8">
      <h3 className="font-bold text-xl text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">{title}</h3>
      <ul className="space-y-3 mb-6">
        {bullets.map((bullet, i) => (
          <li key={i} className="text-gray-400 flex items-start gap-3 group-hover:text-gray-300 transition-colors duration-300">
            <CheckCircle className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0 group-hover:text-teal-300" />
            <span className="text-sm leading-relaxed">{bullet}</span>
          </li>
        ))}
      </ul>
      <Button asChild variant="ghost" className="text-teal-400 hover:text-white hover:bg-teal-600 p-0 h-auto font-semibold group/btn">
        <Link to={link} className="flex items-center gap-2 py-2 px-4 rounded-lg transition-all duration-300">
          Learn More 
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </Link>
      </Button>
    </div>
  </div>
);

const ProjectCard = ({ title, result, image }: { title: string; result: string; image: string }) => (
  <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/50 hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300 group">
    <div className="aspect-video bg-gray-800 relative overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover opacity-80" />
      <div className="absolute inset-0 bg-teal-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <Button variant="secondary" size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
          <Eye className="w-4 h-4 mr-2" />
          View Case Study
        </Button>
      </div>
    </div>
    <div className="p-6">
      <h3 className="font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-orange-400 font-medium">{result}</p>
    </div>
  </div>
);

const PricingCard = ({ title, range, features, isPopular = false }: { title: string; range: string; features: string[]; isPopular?: boolean }) => (
  <div className={`bg-gray-900/80 backdrop-blur-sm rounded-2xl border overflow-hidden transition-all duration-300 hover:scale-105 ${isPopular ? 'border-teal-500 shadow-lg shadow-teal-500/20' : 'border-gray-800/50 hover:border-teal-500/50'}`}>
    <div className={`p-4 text-center text-white ${isPopular ? 'bg-gradient-to-r from-teal-600 to-teal-500' : 'bg-gradient-to-r from-gray-800 to-gray-700'}`}>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-lg font-bold mt-1">{range}</p>
      {isPopular && (
        <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full inline-block mt-2">
          Most Popular
        </div>
      )}
    </div>
    <div className="p-6">
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-teal-400 mt-0.5 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
      <Button className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white">
        Get Quote
      </Button>
    </div>
  </div>
);

const TestimonialCard = ({ quote, name, company, avatar }: { quote: string; name: string; company: string; avatar: string }) => (
  <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-teal-500/50 transition-all duration-300 relative group">
    <div className="absolute -top-2 -left-2 text-6xl text-teal-500/30 font-serif">"</div>
    <div className="relative z-10">
      <div className="flex items-center gap-2 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
        ))}
      </div>
      <p className="text-gray-300 mb-6 italic leading-relaxed">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-700 rounded-full overflow-hidden ring-2 ring-teal-500/30">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-semibold text-white">{name}</p>
          <p className="text-sm text-teal-400">{company}</p>
        </div>
      </div>
    </div>
  </div>
);

const ProcessStep = ({ step, title, desc, icon }: { step: string; title: string; desc: string; icon: React.ReactNode }) => (
  <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-teal-500/50 transition-all duration-300 text-center group">
    <div className="text-orange-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div className="inline-block bg-gradient-to-r from-teal-400 to-blue-400 text-transparent bg-clip-text text-xs font-semibold uppercase tracking-wide mb-2">{step}</div>
    <h3 className="font-semibold text-white mb-2">{title}</h3>
    <p className="text-sm text-gray-400">{desc}</p>
  </div>
);

export default function Index() {
  // Schema markup for homepage
  const schemaMarkup = [
    generateOrganizationSchema(),
    generateLocalBusinessSchema(),
    generateWebSiteSchema()
  ];

  return (
    <main className="min-h-screen bg-black">
      <SEO
        title="Build, Launch, Maintain — Websites, Apps, Games | Trivesha"
        description="From Figma to Play Store: Design, Development, Deployment, Maintenance — all in one place. Since 2019, we've delivered 120+ projects with 99.9% uptime."
        canonical="/"
        ogImage="/social-images/og-home.png"
        schemaMarkup={schemaMarkup}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground />
        
        {/* Content Overlay */}
        <div className="container mx-auto px-6 relative z-20">
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center max-w-5xl mx-auto">
              <div className="inline-block bg-gray-800/50 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-700/50 mb-8">
                <span className="text-teal-400 text-sm font-medium">✨ Since 2019 • 120+ Projects Delivered</span>
              </div>
              
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl leading-tight mb-8">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 text-transparent bg-clip-text">
                  Build, Launch, Maintain
                </span>
                <br />
                <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-blue-400 text-transparent bg-clip-text">
                  Websites, Apps, Games
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
                From Figma to Play Store: Design, Development, Deployment, Maintenance — all in one place.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Button asChild size="lg" className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white border-0 px-8 py-4 text-lg w-full sm:w-auto shadow-lg shadow-teal-500/25">
                  <Link to="/contact">
                    Get Free Quote <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-orange-500/50 bg-orange-500/10 text-orange-400 hover:bg-orange-500 hover:text-white backdrop-blur-sm px-8 py-4 text-lg w-full sm:w-auto">
                  <Link to="/portfolio">See Our Work</Link>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">120+</div>
                  <div className="text-sm text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">6+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">24/7</div>
                  <div className="text-sm text-gray-400">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Benefits Strip */}
      <section className="bg-gray-900 py-20 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <BenefitItem 
              icon={<CheckCircle className="w-6 h-6" />}
              title="Verified on JustDial"
              desc="Trusted by 120+ clients"
            />
            <BenefitItem 
              icon={<Calendar className="w-6 h-6" />}
              title="Since 2019"
              desc="6+ years of experience"
            />
            <BenefitItem 
              icon={<Users className="w-6 h-6" />}
              title="Full-stack team"
              desc="UI → Backend coverage"
            />
            <BenefitItem 
              icon={<HeartHandshake className="w-6 h-6" />}
              title="Post-launch support"
              desc="99.9% uptime guarantee"
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-black py-24 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              From concept to launch, we provide comprehensive digital solutions tailored to your business needs
            </p>
          </div>
          <div className="grid gap-8 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto">
            <ServiceCard
              image={uiImage}
              title="UI/UX & Figma Design"
              bullets={[
                "User research & wireframes",
                "Interactive prototypes",
                "Design system creation",
                "Mobile-first approach"
              ]}
              link="/services/design"
            />
            <ServiceCard
              image={webImage}
              title="Website Development"
              bullets={[
                "Static & dynamic sites",
                "Custom CMS solutions", 
                "E-commerce platforms",
                "SEO optimization"
              ]}
              link="/services/web-development"
            />
            <ServiceCard
              image={appImage}
              title="Mobile Apps & Games"
              bullets={[
                "iOS & Android apps",
                "React Native development",
                "Simple 2D games",
                "App Store deployment"
              ]}
              link="/services/mobile"
            />
            <ServiceCard
              image={dImage}
              title="Maintenance & Hosting"
              bullets={[
                "24/7 monitoring",
                "Regular updates",
                "Performance optimization",
                "99.9% uptime guarantee"
              ]}
              link="/services/maintenance"
            />
          </div>
          <div className="text-center mt-16">
            <Button asChild size="lg" className="bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white px-8 py-4 text-lg shadow-lg shadow-teal-500/25">
              <Link to="/services">
                View All Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-gray-900 py-24 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">Our Work</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400"></div>
            </div>
            <Button asChild variant="outline" className="border-teal-500/50 text-teal-400 hover:bg-teal-500 hover:text-white backdrop-blur-sm">
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="E-commerce Platform"
              result="+120% traffic in 2 months"
              image="/placeholder.svg"
            />
            <ProjectCard
              title="SaaS Dashboard"
              result="50% faster user onboarding"
              image="/placeholder.svg"
            />
            <ProjectCard
              title="Mobile Game"
              result="100K+ downloads in 3 months"
              image="/placeholder.svg"
            />
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-black py-24 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">How We Work</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Our streamlined process ensures efficient delivery and exceptional results
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <ProcessStep
              step="Step 1"
              title="Discover"
              desc="Understand your goals, target audience, and project requirements"
              icon={<MessageSquare className="w-8 h-8" />}
            />
            <ProcessStep
              step="Step 2"
              title="Design"
              desc="Figma first approach with feedback loops and iterative design"
              icon={<Layers className="w-8 h-8" />}
            />
            <ProcessStep
              step="Step 3"
              title="Deploy & Maintain"
              desc="Launch with CI/CD pipelines and ongoing support"
              icon={<Rocket className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="bg-black py-24 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">What Clients Say</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-400 mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Trusted by businesses worldwide for exceptional digital solutions
            </p>
          </div>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            <TestimonialCard
              quote="Trivesha delivered our e-commerce platform ahead of schedule. The attention to detail and performance optimization exceeded our expectations."
              name="Rajesh Kumar"
              company="TechStart Solutions"
              avatar="/placeholder.svg"
            />
            <TestimonialCard
              quote="Clear communication and fast iterations made our mobile app project smooth. They handled both design and development perfectly."
              name="Priya Singh"
              company="HealthTech India"
              avatar="/placeholder.svg"
            />
            <TestimonialCard
              quote="Our website conversions jumped 38% after launch. The design is beautiful and the performance is outstanding."
              name="Michael Chen"
              company="Global Ventures"
              avatar="/placeholder.svg"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-24 border-t border-teal-500/20 relative overflow-hidden">
        {/* Animated Teal Particles Background */}
        <div className="absolute inset-0">
          {/* Large floating particles */}
          <div className="absolute top-20 left-20 w-3 h-3 bg-teal-400/20 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-32 w-2 h-2 bg-teal-300/30 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-40 left-40 w-4 h-4 bg-teal-500/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-40 left-1/3 w-1.5 h-1.5 bg-teal-400/25 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-32 right-20 w-2.5 h-2.5 bg-teal-300/20 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-60 right-1/4 w-1 h-1 bg-teal-400/40 rounded-full animate-ping" style={{animationDelay: '2.5s'}}></div>
          
          {/* Medium particles */}
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-teal-400/25 rounded-full animate-bounce" style={{animationDelay: '0.8s', animationDuration: '3s'}}></div>
          <div className="absolute bottom-1/3 right-1/6 w-1.5 h-1.5 bg-teal-300/30 rounded-full animate-bounce" style={{animationDelay: '1.2s', animationDuration: '4s'}}></div>
          <div className="absolute top-1/2 left-1/8 w-1 h-1 bg-teal-500/35 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
          
          {/* Small scattered particles */}
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-teal-400/30 rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/4 left-1/4 w-0.5 h-0.5 bg-teal-300/40 rounded-full animate-pulse" style={{animationDelay: '3.5s'}}></div>
          <div className="absolute top-3/4 right-1/8 w-1 h-1 bg-teal-400/20 rounded-full animate-ping" style={{animationDelay: '4s'}}></div>
          
          {/* Floating gradient orbs */}
          <div className="absolute top-1/4 right-1/5 w-8 h-8 bg-gradient-to-r from-teal-400/10 to-teal-300/5 rounded-full blur-sm animate-pulse" style={{animationDelay: '1.8s'}}></div>
          <div className="absolute bottom-1/5 left-1/5 w-12 h-12 bg-gradient-to-br from-teal-500/8 to-teal-400/3 rounded-full blur-md animate-pulse" style={{animationDelay: '2.3s'}}></div>
          <div className="absolute top-2/3 left-2/3 w-6 h-6 bg-gradient-to-l from-teal-300/12 to-teal-500/6 rounded-full blur-sm animate-pulse" style={{animationDelay: '0.7s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-teal-500/10 backdrop-blur-sm rounded-full px-4 py-2 border border-teal-500/30 mb-6">
              <span className="text-teal-400 text-sm font-medium">🚀 Start Your Journey</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl mb-8">
              <span className="bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">Ready to Start Your</span>
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-teal-300 text-transparent bg-clip-text">Project?</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get a free consultation and detailed quote for your next website, app, or digital project.
            </p>
            
            <div className="max-w-lg mx-auto">
              <div className="bg-gray-900/80 backdrop-blur-sm rounded-3xl p-8 border border-teal-500/20 shadow-2xl shadow-teal-500/10">
                <form className="space-y-6">
                  <div>
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-6 py-4 rounded-xl bg-gray-800/50 border border-teal-500/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Brief project idea (optional)"
                      rows={3}
                      className="w-full px-6 py-4 rounded-xl bg-gray-800/50 border border-teal-500/30 text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-400 focus:border-teal-400 resize-none transition-all duration-300"
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      type="submit" 
                      size="lg" 
                      className="flex-1 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-semibold py-4 text-lg shadow-lg shadow-teal-500/25"
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Get Free Quote
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline"
                      size="lg" 
                      className="flex-1 border-orange-500/50 bg-orange-500/10 text-orange-400 hover:bg-orange-500 hover:text-white font-semibold py-4 text-lg backdrop-blur-sm"
                    >
                      Call Now
                    </Button>
                  </div>
                </form>
                
                <div className="mt-8 pt-6 border-t border-teal-500/20">
                  <p className="text-sm text-gray-400 mb-3">Trusted by 120+ businesses</p>
                  <div className="flex items-center justify-center gap-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-teal-400">Free Consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <span className="text-xs text-teal-400">24h Response</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      <span className="text-xs text-teal-400">No Commitment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </main>
  );
}
