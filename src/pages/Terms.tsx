import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, Handshake, CreditCard, Users, Copyright, XCircle, AlertTriangle, Scale, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Terms() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/terms';
  const lastUpdated = "January 15, 2025";

  const sections = [
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      icon: FileText,
      content: "By accessing or using Trivesha's website and services, you agree to be bound by these Terms of Service."
    },
    {
      id: "services",
      title: "Services Provided",
      icon: Handshake,
      content: "Trivesha offers:",
      list: [
        "Website design & development (static, dynamic, custom)",
        "UI/UX design (Figma)",
        "Backend maintenance & deployment",
        "Domain purchase & management",
        "Mobile app and simple game development"
      ]
    },
    {
      id: "quotes-payment",
      title: "Quotes & Payment",
      icon: CreditCard,
      content: "Payment and quote terms:",
      list: [
        "All quotes are valid for 14 days unless otherwise stated",
        "Payment terms will be agreed upon in writing before project start",
        "Late payments may incur a delay in delivery"
      ]
    },
    {
      id: "client-responsibilities",
      title: "Client Responsibilities",
      icon: Users,
      content: "You agree to:",
      list: [
        "Provide accurate project information and required assets",
        "Respond to communication in a timely manner",
        "Obtain all necessary rights/permissions for materials you supply"
      ]
    },
    {
      id: "intellectual-property",
      title: "Intellectual Property",
      icon: Copyright,
      content: "Rights and ownership:",
      list: [
        "Final deliverables become your property once full payment is made",
        "Trivesha may display non-confidential work in its portfolio unless otherwise agreed"
      ]
    },
    {
      id: "cancellations",
      title: "Cancellations & Refunds",
      icon: XCircle,
      content: "Cancellation policy:",
      list: [
        "Cancellation before work starts: full refund minus processing fees",
        "Cancellation after work starts: refund based on uncompleted milestones"
      ]
    },
    {
      id: "limitations",
      title: "Limitations of Liability",
      icon: AlertTriangle,
      content: "We are not responsible for:",
      list: [
        "Loss of data, revenue, or business resulting from the use of our services",
        "Downtime or service interruptions caused by third-party providers"
      ]
    },
    {
      id: "governing-law",
      title: "Governing Law",
      icon: Scale,
      content: "These terms are governed by the laws of India, and disputes will be resolved in the courts of Khammam, Telangana."
    },
    {
      id: "contact",
      title: "Contact",
      icon: Mail,
      content: "For questions about these terms:",
      contact: {
        email: "trivesha.tech@gmail.com"
      }
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <Helmet>
        <title>Terms of Service — Trivesha</title>
        <meta name="description" content="Terms of Service for Trivesha. Learn about our service agreements, payment terms, and client responsibilities." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#064E49] text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v40c11.046 0 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto max-w-7xl px-6 py-16 md:py-20 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm text-white/70 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ArrowRight size={14} />
            <span className="text-white/70">Legal</span>
            <ArrowRight size={14} />
            <span className="text-white font-medium">Terms of Service</span>
          </nav>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Terms of Service
            </h1>
            <p className="text-lg text-white/90 mb-6">
              Our service agreements and terms of engagement
            </p>
            <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
              Last updated: {lastUpdated}
            </Badge>
          </div>
        </div>
      </section>

      <div className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="p-6 shadow-lg border-0">
                  <h3 className="font-heading text-lg font-bold text-[#0D9488] mb-4">
                    Quick Navigation
                  </h3>
                  <nav className="space-y-2">
                    {sections.map((section, index) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className="flex items-center space-x-3 w-full text-left px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-[#0D9488]/10 hover:text-[#0D9488] transition-colors"
                      >
                        <section.icon size={16} />
                        <span>{section.title}</span>
                      </button>
                    ))}
                  </nav>
                </Card>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <Card className="shadow-xl border-0 overflow-hidden">
                <CardContent className="p-0">
                  {sections.map((section, index) => (
                    <div
                      key={section.id}
                      id={section.id}
                      className="p-8 md:p-12 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex items-start space-x-4 mb-6">
                        <div className="w-12 h-12 bg-[#0D9488] rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0D9488] mb-3">
                            {section.title}
                          </h2>
                          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            {section.content}
                          </p>
                        </div>
                      </div>

                      {section.list && (
                        <ul className="space-y-3 mb-6 ml-16">
                          {section.list.map((item, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-[#FF6B35] rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {section.contact && (
                        <div className="ml-16 p-6 bg-gradient-to-r from-[#E6F7F5] to-[#F0F9FF] rounded-xl">
                          <div className="flex items-center space-x-3">
                            <Mail size={20} className="text-[#0D9488]" />
                            <div>
                              <p className="text-muted-foreground">Email us at:</p>
                              <a 
                                href={`mailto:${section.contact.email}`}
                                className="text-[#FF6B35] hover:underline font-medium"
                              >
                                {section.contact.email}
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Important Notice */}
              <Card className="mt-8 border-2 border-[#FF6B35]/20 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="w-8 h-8 text-[#FF6B35] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-heading text-xl font-bold text-[#0D9488] mb-3">
                        Important Notice
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        These terms constitute a legally binding agreement between you and Trivesha. 
                        By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        If you do not agree with any part of these terms, please do not use our services. 
                        For any clarifications or custom arrangements, please contact us before engaging our services.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <section className="py-16 bg-[#0D9488] text-white">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Ready to work with us?
          </h3>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Now that you understand our terms, let's discuss your project and how we can help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white text-lg px-8"
              onClick={() => window.location.href = '/contact'}
            >
              Start Your Project
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-[#0D9488] text-lg px-8"
              onClick={() => window.location.href = '/services'}
            >
              View Services
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
