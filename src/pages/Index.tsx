import { Helmet } from "react-helmet-async";
import heroBgImage from "@/assets/hero-bg.jpeg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Calendar, Users, HeartHandshake, Layers, Rocket, Shield, Smartphone, Globe, Gamepad2, Wrench, Eye, Star, MessageSquare, Mail } from "lucide-react";

const BenefitItem = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => (
  <div className="flex items-center gap-3">
    <div className="text-teal-600 bg-teal-50 p-2 rounded-lg flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  </div>
);

const ServiceCard = ({ icon, title, bullets, link }: { icon: React.ReactNode; title: string; bullets: string[]; link: string }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border hover:shadow-lg hover:scale-[1.02] hover:border-teal-200 transition-all duration-300">
    <div className="text-teal-600 mb-4">
      {icon}
    </div>
    <h3 className="font-semibold text-gray-900 mb-3">{title}</h3>
    <ul className="space-y-2 mb-4">
      {bullets.map((bullet, i) => (
        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
          <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
          {bullet}
        </li>
      ))}
    </ul>
    <Button asChild variant="link" className="text-teal-600 hover:text-teal-700 p-0">
      <Link to={link}>Learn More <ArrowRight className="w-4 h-4 ml-1" /></Link>
    </Button>
  </div>
);

const ProjectCard = ({ title, result, image }: { title: string; result: string; image: string }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border hover:shadow-lg transition-all duration-300 group">
    <div className="aspect-video bg-gray-100 relative overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-teal-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <Button variant="secondary" size="sm">
          <Eye className="w-4 h-4 mr-2" />
          View Case Study
        </Button>
      </div>
    </div>
    <div className="p-6">
      <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-orange-600 font-medium">{result}</p>
    </div>
  </div>
);

const PricingCard = ({ title, range, features, isPopular = false }: { title: string; range: string; features: string[]; isPopular?: boolean }) => (
  <div className={`bg-white rounded-2xl shadow-sm border overflow-hidden ${isPopular ? 'border-teal-200 scale-105' : ''}`}>
    <div className={`p-4 text-center text-white ${isPopular ? 'bg-teal-600' : 'bg-teal-500'}`}>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-lg font-bold mt-1">{range}</p>
    </div>
    <div className="p-6">
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
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
  <div className="bg-white rounded-2xl p-6 shadow-sm border relative">
    <div className="absolute -top-2 -left-2 text-6xl text-teal-100 font-serif">"</div>
    <div className="relative z-10">
      <p className="text-gray-700 mb-4 italic">{quote}</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
          <img src={avatar} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-semibold text-gray-900">{name}</p>
          <p className="text-sm text-gray-600">{company}</p>
        </div>
      </div>
    </div>
  </div>
);

const ProcessStep = ({ step, title, desc, icon }: { step: string; title: string; desc: string; icon: React.ReactNode }) => (
  <div className="bg-white rounded-2xl p-6 shadow-sm border text-center">
    <div className="text-orange-500 mb-4 flex justify-center">
      {icon}
    </div>
    <p className="text-xs font-semibold text-teal-600 uppercase tracking-wide mb-2">{step}</p>
    <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

export default function Index() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/';
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Build, Launch, Maintain — Websites, Apps, Games | Trivesha</title>
        <meta name="description" content="From Figma to Play Store: Design, Development, Deployment, Maintenance — all in one place. Since 2019, we've delivered 120+ projects with 99.9% uptime." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Trivesha",
          url: canonical,
          foundingDate: "2019",
          sameAs: [],
        })}</script>
      </Helmet>

      {/* Hero Section */}
      <section 
        className="relative pt-24 pb-24 md:pt-32 md:pb-32 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBgImage})`,
          filter: 'blur(0.5px)',
          minHeight: '50vh'
        }}
      >
        {/* Additional blur overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(${heroBgImage})`,
            filter: 'blur(1px)'
          }}
        ></div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex items-center justify-center" style={{ minHeight: 'calc(50vh - 6rem)' }}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight text-white mb-6">
                Build, Launch, Maintain — Websites, Apps, Games
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
                From Figma to Play Store: Design, Development, Deployment, Maintenance — all in one place.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white w-full sm:w-auto">
                  <Link to="/contact">
                    Get Free Quote <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-orange-500 bg-orange-500/10 text-orange-100 hover:bg-orange-500 hover:text-white w-full sm:w-auto">
                  <Link to="/portfolio">See Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Benefits Strip */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 grid-cols-2 md:grid-cols-4 text-center md:text-left">
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
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>
          <div className="grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              icon={<Layers className="w-8 h-8" />}
              title="UI/UX & Figma Design"
              bullets={[
                "User research & wireframes",
                "Interactive prototypes",
                "Design system creation"
              ]}
              link="/services/design"
            />
            <ServiceCard
              icon={<Globe className="w-8 h-8" />}
              title="Website Development"
              bullets={[
                "Static & dynamic sites",
                "Custom CMS solutions",
                "E-commerce platforms"
              ]}
              link="/services/web-development"
            />
            <ServiceCard
              icon={<Smartphone className="w-8 h-8" />}
              title="Mobile Apps & Games"
              bullets={[
                "iOS & Android apps",
                "React Native development",
                "Simple 2D games"
              ]}
              link="/services/mobile"
            />
            <ServiceCard
              icon={<Wrench className="w-8 h-8" />}
              title="Maintenance & Hosting"
              bullets={[
                "24/7 monitoring",
                "Regular updates",
                "Performance optimization"
              ]}
              link="/services/maintenance"
            />
          </div>
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl text-gray-900 mb-4">Our Work</h2>
              <div className="w-24 h-1 bg-teal-600"></div>
            </div>
            <Button asChild variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
              <Link to="/portfolio">View All Projects</Link>
            </Button>
          </div>
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3">
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
            <div className="hidden md:block">
              <ProjectCard
                title="Mobile Game"
                result="100K+ downloads in 3 months"
                image="/placeholder.svg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-teal-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-gray-900 mb-4">How We Work</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
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
            <div className="col-span-2 md:col-span-1">
              <ProcessStep
                step="Step 3"
                title="Deploy & Maintain"
                desc="Launch with CI/CD pipelines and ongoing support"
                icon={<Rocket className="w-8 h-8" />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
            <PricingCard
              title="Starter"
              range="₹15K - ₹50K"
              features={[
                "Landing pages",
                "Basic UI/UX design",
                "3 months support",
                "Mobile responsive"
              ]}
            />
            <PricingCard
              title="Growth"
              range="₹50K - ₹2L"
              features={[
                "Full websites",
                "Custom features",
                "6 months support",
                "SEO optimization",
                "Analytics setup"
              ]}
              isPopular={true}
            />
            <div className="col-span-2 md:col-span-1">
              <PricingCard
                title="Scale"
                range="₹2L+"
                features={[
                  "Complex applications",
                  "Mobile apps",
                  "12 months support",
                  "DevOps & hosting",
                  "Dedicated team"
                ]}
              />
            </div>
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white">
              <Link to="/pricing">View Detailed Pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-gray-900 mb-4">What Clients Say</h2>
            <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
          </div>
          <div className="grid gap-8 grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
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
            <div className="col-span-2 md:col-span-1">
              <TestimonialCard
                quote="Our website conversions jumped 38% after launch. The design is beautiful and the performance is outstanding."
                name="Michael Chen"
                company="Global Ventures"
                avatar="/placeholder.svg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and detailed quote for your next website, app, or digital project.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Brief project idea (optional)"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
