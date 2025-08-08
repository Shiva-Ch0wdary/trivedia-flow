import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CaseStudy() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/case-study';
  
  const project = {
    title: "E-Commerce Platform Redesign",
    client: "Fashion Forward",
    category: "Web Design",
    duration: "3 months",
    year: "2024",
    heroImage: "/placeholder.svg",
    overview: "Fashion Forward, a leading online retailer, approached us to redesign their e-commerce platform. Their existing site had high bounce rates and low conversion, affecting their bottom line.",
    challenge: "The main challenges were poor user experience, outdated design, slow loading times, and a complex checkout process that led to cart abandonment.",
    solution: "We conducted user research, redesigned the entire user journey, implemented a modern design system, optimized performance, and streamlined the checkout process.",
    results: [
      { metric: "Conversion Rate", improvement: "+45%", description: "Increased from 2.1% to 3.0%" },
      { metric: "Page Load Time", improvement: "-60%", description: "Reduced from 5.2s to 2.1s" },
      { metric: "Cart Abandonment", improvement: "-35%", description: "Reduced from 70% to 45%" },
      { metric: "Mobile Traffic", improvement: "+80%", description: "Better mobile experience" }
    ],
    techStack: [
      { name: "Figma", category: "Design" },
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Frontend" },
      { name: "Next.js", category: "Framework" },
      { name: "Tailwind CSS", category: "Styling" },
      { name: "Stripe", category: "Payment" }
    ],
    timeline: [
      { phase: "Discovery & Research", duration: "2 weeks", tasks: ["User interviews", "Competitor analysis", "Technical audit"] },
      { phase: "Design & Prototyping", duration: "4 weeks", tasks: ["Wireframes", "UI design", "Interactive prototypes"] },
      { phase: "Development", duration: "6 weeks", tasks: ["Frontend development", "Backend integration", "Testing"] },
      { phase: "Launch & Optimization", duration: "2 weeks", tasks: ["Deployment", "Performance optimization", "Bug fixes"] }
    ],
    screenshots: [
      { image: "/placeholder.svg", title: "Homepage Redesign", description: "Modern, conversion-focused design" },
      { image: "/placeholder.svg", title: "Product Pages", description: "Enhanced product showcase" },
      { image: "/placeholder.svg", title: "Checkout Process", description: "Streamlined 2-step checkout" },
      { image: "/placeholder.svg", title: "Mobile Experience", description: "Responsive mobile design" }
    ],
    testimonial: {
      quote: "The team at Trivesha completely transformed our online presence. The new design not only looks amazing but has significantly improved our business metrics.",
      author: "Sarah Johnson",
      role: "CEO, Fashion Forward",
      avatar: "/placeholder.svg"
    }
  };

  return (
    <main>
      <Helmet>
        <title>{project.title} Case Study — Trivesha</title>
        <meta name="description" content={`Case study: ${project.overview.substring(0, 150)}...`} />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary">{project.category}</Badge>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-[hsl(175_86%_18%)] leading-tight">
                  {project.title}
                </h1>
                <div className="flex flex-wrap gap-6 text-muted-foreground">
                  <div>
                    <span className="font-medium">Client:</span> {project.client}
                  </div>
                  <div>
                    <span className="font-medium">Duration:</span> {project.duration}
                  </div>
                  <div>
                    <span className="font-medium">Year:</span> {project.year}
                  </div>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
              <Button className="btn-hero">
                View Live Site
              </Button>
            </div>
            <div>
              <img 
                src={project.heroImage} 
                alt={project.title}
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-[hsl(175_86%_18%)] mb-4">
              The Challenge
            </h2>
          </div>
          <div className="bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
            <p className="text-lg leading-relaxed text-gray-700">
              {project.challenge}
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-[hsl(175_86%_18%)] mb-4">
              Our Solution
            </h2>
          </div>
          <div className="bg-primary/5 border-l-4 border-primary p-8 rounded-lg">
            <p className="text-lg leading-relaxed text-gray-700">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-[hsl(175_86%_18%)] mb-4">
              Results & Impact
            </h2>
            <p className="text-lg text-muted-foreground">
              Measurable improvements across all key metrics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.results.map((result, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-accent mb-2">
                    {result.improvement}
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-[hsl(175_86%_18%)] mb-2">
                    {result.metric}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {result.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-[hsl(175_86%_18%)] mb-4">
              Design Showcase
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {project.screenshots.map((screenshot, index) => (
              <div key={index} className="space-y-4">
                <img 
                  src={screenshot.image} 
                  alt={screenshot.title}
                  className="w-full h-80 object-cover rounded-lg shadow-lg"
                />
                <div className="text-center">
                  <h3 className="font-semibold text-lg text-[hsl(175_86%_18%)] mb-2">
                    {screenshot.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {screenshot.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-[hsl(175_86%_18%)] mb-4">
              Technology Stack
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {['Design', 'Frontend', 'Framework', 'Styling', 'Payment'].map((category) => (
              <div key={category}>
                <h3 className="font-semibold text-lg text-[hsl(175_86%_18%)] mb-4">
                  {category}
                </h3>
                <div className="space-y-2">
                  {project.techStack
                    .filter(tech => tech.category === category)
                    .map((tech, index) => (
                      <Badge key={index} variant="outline" className="mr-2 border-primary/30 text-primary">
                        {tech.name}
                      </Badge>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-[hsl(175_86%_18%)] mb-4">
              Project Timeline
            </h2>
          </div>

          <div className="space-y-8">
            {project.timeline.map((phase, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-heading text-xl font-semibold text-[hsl(175_86%_18%)]">
                        {phase.phase}
                      </h3>
                      <Badge variant="secondary" className="bg-accent/10 text-accent">
                        {phase.duration}
                      </Badge>
                    </div>
                    <ul className="space-y-2">
                      {phase.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-12">
                <div className="text-6xl text-accent mb-6">"</div>
                <p className="text-xl text-muted-foreground mb-8 italic leading-relaxed">
                  {project.testimonial.quote}
                </p>
                <div className="flex items-center justify-center space-x-4">
                  <img 
                    src={project.testimonial.avatar} 
                    alt={project.testimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-lg text-[hsl(175_86%_18%)]">
                      {project.testimonial.author}
                    </h4>
                    <p className="text-muted-foreground">
                      {project.testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-accent text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl opacity-90 mb-8 leading-relaxed">
            Let's discuss how we can help you achieve similar results for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-accent hover:bg-gray-50 text-lg px-8"
            >
              Start Your Project
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-accent text-lg px-8"
            >
              View More Work
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
