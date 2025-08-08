import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/contact';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    privacyPolicy: false
  });
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const contactCards = [
    {
      icon: Mail,
      title: "Email Us",
      content: "trivesha.tech@gmail.com",
      action: "mailto:trivesha.tech@gmail.com",
      actionText: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+91 98765 43210",
      subtitle: "Mon–Fri, 9am–7pm IST",
      action: "tel:+919876543210",
      actionText: "Call Now"
    },
    {
      icon: MapPin,
      title: "Khammam, India",
      content: "Telangana, India",
      subtitle: "Office headquarters",
      action: "https://maps.google.com",
      actionText: "Get Directions"
    }
  ];

  const projectTypes = [
    "Website Development",
    "Mobile App Development",
    "UI/UX Design",
    "Backend Development",
    "Game Development",
    "Website Redesign",
    "Maintenance & Support",
    "Other"
  ];

  const budgetRanges = [
    "₹10k - ₹25k",
    "₹25k - ₹50k", 
    "₹50k - ₹1L",
    "₹1L - ₹3L",
    "₹3L+",
    "Let's discuss"
  ];

  const timelineOptions = [
    "ASAP (Rush job)",
    "1-2 weeks",
    "1-2 months",
    "3-6 months",
    "6+ months",
    "Flexible"
  ];

  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer: "We respond to all inquiries within 24 hours, usually much faster. For urgent projects, we're available for immediate calls during business hours."
    },
    {
      question: "What information do you need to provide a quote?",
      answer: "Tell us about your project goals, preferred timeline, and budget range. If you have wireframes, designs, or examples of what you like, that helps us provide a more accurate estimate."
    },
    {
      question: "Do you work with international clients?",
      answer: "Yes! We work with clients worldwide. We're experienced in remote collaboration and have clients across different time zones."
    },
    {
      question: "Can we schedule a call to discuss the project?",
      answer: "Absolutely! After you submit the form, we'll email you with available time slots for a detailed discussion about your project."
    },
    {
      question: "What's your typical project timeline?",
      answer: "Simple websites: 1-3 weeks, Complex web apps: 4-8 weeks, Mobile apps: 6-12 weeks. Timeline depends on project scope and feedback cycles."
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you! We\'ll get back to you within 24 hours.');
  };

  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <Helmet>
        <title>Contact Us — Trivesha</title>
        <meta name="description" content="Get in touch with Trivesha. Request a quote, discuss your project, or ask questions. We respond within 24 hours." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#E6F7F5] to-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='none'/%3E%3Cpath d='M20 20h60M20 40h60M20 60h60M20 80h60' stroke='%230D9488' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }} />
        </div>

        <div className="container mx-auto max-w-7xl px-6 py-20 md:py-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl xl:text-6xl font-bold text-[#0D9488] mb-6 leading-tight">
              Let's Build Something Together
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Have a project in mind? We're here to answer questions, discuss ideas, and start your next launch.
            </p>
            
            {/* Founders Quote */}
            <div className="flex items-center justify-center mb-8 bg-white/70 backdrop-blur rounded-2xl p-6 max-w-lg mx-auto">
              <div className="flex -space-x-3 mr-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Founder" 
                  className="w-12 h-12 rounded-full border-3 border-white shadow-md"
                />
                <img 
                  src="/placeholder.svg" 
                  alt="Founder" 
                  className="w-12 h-12 rounded-full border-3 border-white shadow-md"
                />
              </div>
              <p className="text-sm text-[#0D9488] font-medium">
                "We reply in less than 24 hours"
              </p>
            </div>
            
            <Button 
              size="lg" 
              className="bg-[#0D9488] hover:bg-[#064E49] text-white text-lg px-10 py-4"
              onClick={scrollToForm}
            >
              Request a Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {contactCards.map((card, index) => (
              <div key={index} className={`${index === 2 ? 'col-span-2 md:col-span-1' : ''}`}>
                <Card className="contact-card group border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white h-full">
                  <CardContent className="p-6 md:p-8 text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-[#0D9488] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:bg-[#064E49] transition-colors">
                      <card.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    
                    <h3 className="font-heading text-lg md:text-xl font-bold text-[#0D9488] mb-2 md:mb-3">
                      {card.title}
                    </h3>
                    
                    <p className="text-gray-900 font-medium mb-1 md:mb-2 text-sm md:text-base">
                      {card.content}
                    </p>
                    
                    {card.subtitle && (
                      <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                        {card.subtitle}
                      </p>
                    )}
                    
                    <a 
                      href={card.action}
                      className="inline-flex items-center text-[#0D9488] hover:text-[#FF6B35] transition-colors font-medium text-sm md:text-base"
                      target={card.action.startsWith('http') ? '_blank' : '_self'}
                      rel={card.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {card.actionText} →
                    </a>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 md:py-24 bg-[#F9FAFB]">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0D9488] mb-4">
              Tell Us About Your Project
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you with a detailed proposal
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    required
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12 border-2 focus:border-[#0D9488]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="h-12 border-2 focus:border-[#0D9488]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Company
                  </Label>
                  <Input
                    id="company"
                    placeholder="Your company name"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="h-12 border-2 focus:border-[#0D9488]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="h-12 border-2 focus:border-[#0D9488]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="projectType" className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Project Type
                </Label>
                <Select value={formData.projectType} onValueChange={(value) => setFormData({...formData, projectType: value})}>
                  <SelectTrigger className="h-12 border-2 focus:border-[#0D9488]">
                    <SelectValue placeholder="Select project type" />
                  </SelectTrigger>
                  <SelectContent>
                    {projectTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Budget Range
                  </Label>
                  <Select value={formData.budget} onValueChange={(value) => setFormData({...formData, budget: value})}>
                    <SelectTrigger className="h-12 border-2 focus:border-[#0D9488]">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetRanges.map((budget) => (
                        <SelectItem key={budget} value={budget}>{budget}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeline" className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                    Timeline
                  </Label>
                  <Select value={formData.timeline} onValueChange={(value) => setFormData({...formData, timeline: value})}>
                    <SelectTrigger className="h-12 border-2 focus:border-[#0D9488]">
                      <SelectValue placeholder="Select timeline" />
                    </SelectTrigger>
                    <SelectContent>
                      {timelineOptions.map((timeline) => (
                        <SelectItem key={timeline} value={timeline}>{timeline}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-sm font-medium text-gray-700 uppercase tracking-wider">
                  Project Details
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="border-2 focus:border-[#0D9488] resize-none"
                />
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="privacy"
                  checked={formData.privacyPolicy}
                  onChange={(e) => setFormData({...formData, privacyPolicy: e.target.checked})}
                  className="mt-1 h-4 w-4 text-[#0D9488] border-2 border-gray-300 rounded focus:ring-[#0D9488]"
                />
                <label htmlFor="privacy" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <Link to="/privacy" className="text-[#0D9488] hover:text-[#064E49] underline">
                    privacy policy
                  </Link>{' '}
                  and consent to being contacted about this inquiry.
                </label>
              </div>

              <Button 
                type="submit"
                size="lg"
                className="w-full h-14 bg-[#0D9488] hover:bg-[#064E49] text-white text-lg font-semibold"
                disabled={!formData.name || !formData.email || !formData.privacyPolicy}
              >
                Send Project Request
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0D9488] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about working with us
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-[#E2E8F0] hover:border-[#0D9488]/20 hover:bg-[#E6F7F5]/30 transition-all duration-300">
                <CardContent className="p-0">
                  <button
                    className="w-full p-6 text-left flex items-center justify-between focus:outline-none"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <h3 className="font-semibold text-lg text-[#0D9488] pr-4">
                      {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-[#0D9488] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#0D9488] flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-[#0D9488] text-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto gap-6">
            <div className="text-center sm:text-left">
              <h3 className="font-heading text-2xl font-bold mb-2">Ready to start?</h3>
              <p className="opacity-90">Let's discuss your project and make it happen.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg" 
                className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white px-8 w-full sm:w-auto"
                onClick={scrollToForm}
              >
                Start Your Project
              </Button>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-sm font-bold">Li</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-sm font-bold">Ig</span>
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
                  <span className="text-sm font-bold">Gh</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
