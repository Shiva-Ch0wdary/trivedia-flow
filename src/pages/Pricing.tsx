import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/pricing';
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'Starter' | 'Growth' | 'Scale'>('Growth');

  const pricingPlans = [
    {
      name: "Starter",
      price: "₹8k–₹25k",
      priceNote: "Starting from ₹8,000",
      description: "Perfect for small businesses and personal websites",
      popular: false,
      features: [
        "1–3 responsive pages",
        "Mobile-first design",
        "Basic SEO setup",
        "SSL certificate included",
        "Domain setup help",
        "30-day post-launch support",
        "Contact form integration"
      ],
      cta: "Choose Starter",
      note: "Custom features available on request"
    },
    {
      name: "Growth",
      price: "₹25k–₹80k",
      priceNote: "Starting from ₹25,000",
      description: "For businesses with dynamic content and custom needs",
      popular: true,
      features: [
        "5–10 custom pages",
        "Content Management System",
        "Custom UI/UX design",
        "Backend integration",
        "Analytics setup",
        "60-day support & updates",
        "Performance optimization",
        "Social media integration"
      ],
      cta: "Choose Growth",
      note: "Most popular for growing businesses"
    },
    {
      name: "Scale",
      price: "₹80k+",
      priceNote: "Starting from ₹80,000",
      description: "Custom applications and enterprise solutions",
      popular: false,
      features: [
        "Unlimited pages & features",
        "Complex backend systems",
        "API integrations",
        "Custom admin dashboard",
        "Advanced analytics",
        "90-day premium support",
        "Performance SLA",
        "Scalable architecture"
      ],
      cta: "Choose Scale",
      note: "Enterprise-grade solutions"
    }
  ];

  const comparisonFeatures = [
    {
      category: "Design Features",
      features: [
        { name: "Custom UI/UX Design", starter: true, growth: true, scale: true },
        { name: "Figma Prototypes", starter: false, growth: true, scale: true },
        { name: "Brand Guidelines", starter: false, growth: true, scale: true },
        { name: "Custom Graphics", starter: false, growth: true, scale: true }
      ]
    },
    {
      category: "Development Features",
      features: [
        { name: "Responsive Design", starter: true, growth: true, scale: true },
        { name: "Static Pages", starter: true, growth: true, scale: true },
        { name: "Dynamic Content", starter: false, growth: true, scale: true },
        { name: "Backend Systems", starter: false, growth: true, scale: true },
        { name: "API Integration", starter: false, growth: false, scale: true }
      ]
    },
    {
      category: "Support & Maintenance",
      features: [
        { name: "Post-launch Support", starter: "30 days", growth: "60 days", scale: "90 days" },
        { name: "Content Updates", starter: false, growth: true, scale: true },
        { name: "Technical Support", starter: "Email", growth: "Email + Call", scale: "Priority" },
        { name: "Performance SLA", starter: false, growth: false, scale: true }
      ]
    },
    {
      category: "Hosting & Security",
      features: [
        { name: "Domain Setup", starter: true, growth: true, scale: true },
        { name: "SSL Certificate", starter: true, growth: true, scale: true },
        { name: "Basic Security", starter: true, growth: true, scale: true },
        { name: "Daily Backups", starter: false, growth: true, scale: true },
        { name: "CDN Setup", starter: false, growth: false, scale: true }
      ]
    }
  ];

  const includedFeatures = [
    {
      icon: "🌐",
      title: "Domain Setup Help",
      description: "We'll help you register and configure your perfect domain name"
    },
    {
      icon: "🔒",
      title: "SSL & Security",
      description: "Free SSL certificates and basic security hardening included"
    },
    {
      icon: "📱",
      title: "Mobile Responsive",
      description: "Every site works perfectly on all devices and screen sizes"
    },
    {
      icon: "🛠️",
      title: "30-Day Support",
      description: "Post-launch support to ensure everything runs smoothly"
    }
  ];

  const faqs = [
    {
      question: "Can I upgrade my plan later?",
      answer: "Absolutely! You can upgrade to a higher plan anytime. We'll apply your previous payment towards the new plan and only charge the difference."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 14-day money-back guarantee if you're not satisfied with our initial design concepts. After development begins, refunds are handled case-by-case."
    },
    {
      question: "What's the payment schedule?",
      answer: "We typically work with a 50% upfront payment to start, and 50% upon project completion. For larger projects, we can arrange milestone-based payments."
    },
    {
      question: "Are domains & hosting included?",
      answer: "Domain registration and hosting setup help are included, but the ongoing costs (typically ₹1,000-3,000/year) are separate. We can recommend the best hosting solutions for your needs."
    },
    {
      question: "How long does it take to launch?",
      answer: "Starter plans: 1-2 weeks, Growth plans: 3-6 weeks, Scale plans: 6-12 weeks. Timeline depends on project complexity and your feedback response time."
    },
    {
      question: "What happens after the project is complete?",
      answer: "You get full ownership of your website, source code, and all assets. We also provide documentation and training on how to manage your site."
    }
  ];

  const renderFeatureValue = (value: boolean | string) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="w-5 h-5 text-[#0D9488] mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-300 mx-auto" />
      );
    }
    return <span className="text-sm text-center text-gray-600">{value}</span>;
  };

  return (
    <main>
      <Helmet>
        <title>Pricing — Trivesha</title>
        <meta name="description" content="Transparent pricing for web design and development. Choose from Starter, Growth, or Scale packages with clear deliverables." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#0D9488] text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v40c11.046 0 20-8.954 20-20z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container mx-auto max-w-7xl px-6 py-20 md:py-24 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Simple plans. Clear deliverables. No hidden fees.
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-10 leading-relaxed">
              Whether you need a simple static site or a full custom app, we've got a package for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white text-lg px-8">
                Get a Free Quote
              </Button>
              <Button 
                size="lg" 
                className="border-2 border-white bg-transparent text-white hover:bg-white hover:text-[#0D9488] text-lg px-8 transition-all duration-300"
                onClick={() => document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Compare Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 md:py-24 bg-[#F9FAFB]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0D9488] mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparent pricing with everything you need to succeed online
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={index}
                className={`pricing-card relative border-0 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 bg-white ${
                  plan.popular ? 'lg:scale-105 ring-2 ring-[#FF6B35]' : ''
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#FF6B35] hover:bg-[#e55a2b] text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}

                <CardHeader className="text-center p-8 pb-4">
                  <CardTitle className="text-2xl font-bold text-[#0D9488] mb-2">
                    {plan.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-gray-900 mb-2" style={{ letterSpacing: '-0.02em' }}>
                    {plan.price}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.priceNote}
                  </p>
                  <CardDescription className="text-base leading-relaxed">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-8 pt-4">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-[#0D9488] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    size="lg" 
                    className={`w-full text-lg ${
                      plan.popular 
                        ? 'bg-[#FF6B35] hover:bg-[#e55a2b] text-white' 
                        : 'bg-[#0D9488] hover:bg-[#0a7c70] text-white'
                    }`}
                  >
                    {plan.cta}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center mt-4">
                    {plan.note}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section id="comparison" className="py-20 md:py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0D9488] mb-4">
              Compare All Features
            </h2>
            <p className="text-lg text-muted-foreground">
              See exactly what's included in each plan
            </p>
          </div>

          {/* Mobile View - Card-based Layout */}
          <div className="lg:hidden">
            {/* Mobile Tab Navigation */}
            <div className="flex bg-gray-100 p-1 rounded-xl mb-6 overflow-hidden">
              {["Starter", "Growth", "Scale"].map((plan) => (
                <button
                  key={plan}
                  onClick={() => setActiveTab(plan as 'Starter' | 'Growth' | 'Scale')}
                  className={`flex-1 py-3 px-4 text-sm font-semibold rounded-lg transition-all ${
                    activeTab === plan
                      ? plan === 'Growth' 
                        ? 'bg-[#FF6B35] text-white shadow-md' 
                        : 'bg-[#0D9488] text-white shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {plan}
                  {plan === 'Growth' && <span className="ml-1 text-xs">★</span>}
                </button>
              ))}
            </div>

            {/* Active Plan Details */}
            <Card className={`border-2 ${activeTab === "Growth" ? "border-[#FF6B35] bg-[#FF6B35]/5" : "border-[#0D9488] bg-[#0D9488]/5"}`}>
              <CardHeader className={`text-center p-4 ${activeTab === "Growth" ? "bg-[#FF6B35]" : "bg-[#0D9488]"} text-white`}>
                <CardTitle className="text-xl font-bold">
                  {activeTab} Plan Features
                  {activeTab === "Growth" && (
                    <Badge className="ml-2 bg-white text-[#FF6B35] text-xs">Most Popular</Badge>
                  )}
                </CardTitle>
                <p className="text-sm opacity-90 mt-1">
                  {activeTab === "Starter" && "₹8k–₹25k • Perfect for small businesses"}
                  {activeTab === "Growth" && "₹25k–₹80k • Best for growing businesses"}
                  {activeTab === "Scale" && "₹80k+ • Enterprise solutions"}
                </p>
              </CardHeader>
              <CardContent className="p-4">
                {comparisonFeatures.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="mb-6 last:mb-0">
                    <h4 className="font-semibold text-[#0D9488] text-sm uppercase tracking-wide mb-3 border-b border-gray-200 pb-2 flex items-center">
                      <span className={`w-6 h-6 rounded-full text-white text-xs flex items-center justify-center mr-2 ${
                        activeTab === "Growth" ? "bg-[#FF6B35]" : "bg-[#0D9488]"
                      }`}>
                        {categoryIndex + 1}
                      </span>
                      {category.category}
                    </h4>
                    <div className="space-y-3">
                      {category.features.map((feature, featureIndex) => {
                        const featureValue = activeTab === "Starter" ? feature.starter : 
                                            activeTab === "Growth" ? feature.growth : 
                                            feature.scale;
                        
                        return (
                          <div key={featureIndex} className={`flex items-center justify-between py-2 px-3 rounded-lg ${
                            typeof featureValue === 'boolean' && featureValue ? 'bg-green-50' : 
                            typeof featureValue === 'string' ? 'bg-blue-50' : 'bg-gray-50'
                          }`}>
                            <span className="text-sm text-gray-700 flex-1 font-medium">{feature.name}</span>
                            <div className="flex-shrink-0 ml-3">
                              {typeof featureValue === 'boolean' ? (
                                featureValue ? (
                                  <div className="flex items-center text-green-600">
                                    <Check className="w-4 h-4 mr-1" />
                                    <span className="text-xs font-medium">Included</span>
                                  </div>
                                ) : (
                                  <div className="flex items-center text-gray-400">
                                    <X className="w-4 h-4 mr-1" />
                                    <span className="text-xs">Not included</span>
                                  </div>
                                )
                              ) : (
                                <span className="text-xs font-semibold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                                  {featureValue}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
                
                {/* CTA Button for Active Plan */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button 
                    size="lg" 
                    className={`w-full text-lg ${
                      activeTab === "Growth" 
                        ? 'bg-[#FF6B35] hover:bg-[#e55a2b] text-white' 
                        : 'bg-[#0D9488] hover:bg-[#0a7c70] text-white'
                    }`}
                  >
                    Choose {activeTab} Plan
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Compare All Plans - Mobile */}
            <div className="mt-8 bg-[#E6F7F5] rounded-2xl p-4">
              <h3 className="font-heading text-lg font-bold text-[#0D9488] mb-4 text-center">
                Quick Compare All Plans
              </h3>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-white rounded-lg p-3">
                  <h4 className="font-semibold text-[#0D9488] text-xs mb-2">Starter</h4>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div className="flex items-center justify-center"><Check className="w-3 h-3 text-green-500 mr-1" />Responsive</div>
                    <div className="flex items-center justify-center"><Check className="w-3 h-3 text-green-500 mr-1" />SSL</div>
                    <div className="text-[#0D9488] font-medium">30d Support</div>
                  </div>
                </div>
                <div className="bg-[#FF6B35] text-white rounded-lg p-3">
                  <h4 className="font-semibold text-xs mb-2">Growth ★</h4>
                  <div className="text-xs space-y-1 opacity-90">
                    <div className="flex items-center justify-center"><Check className="w-3 h-3 mr-1" />Everything +</div>
                    <div className="flex items-center justify-center"><Check className="w-3 h-3 mr-1" />Custom Design</div>
                    <div className="font-medium">60d Support</div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3">
                  <h4 className="font-semibold text-[#0D9488] text-xs mb-2">Scale</h4>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div className="flex items-center justify-center"><Check className="w-3 h-3 text-green-500 mr-1" />Everything +</div>
                    <div className="flex items-center justify-center"><Check className="w-3 h-3 text-green-500 mr-1" />API Integration</div>
                    <div className="text-[#0D9488] font-medium">90d Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop View - Table Layout */}
          <div className="hidden lg:block">
            <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#0D9488] text-white">
                    <th className="text-left p-6 font-semibold sticky left-0 bg-[#0D9488] z-10">Features</th>
                    <th className="text-center p-6 font-semibold">Starter</th>
                    <th className="text-center p-6 font-semibold bg-[#FF6B35]">Growth</th>
                    <th className="text-center p-6 font-semibold">Scale</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category, categoryIndex) => (
                    <>
                      <tr key={`category-${categoryIndex}`} className="bg-[#E6F7F5]">
                        <td colSpan={4} className="p-4 font-semibold text-[#0D9488] text-lg">
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr 
                          key={`feature-${categoryIndex}-${featureIndex}`}
                          className={featureIndex % 2 === 0 ? 'bg-white' : 'bg-[#F9FAFB]'}
                        >
                          <td className="p-4 font-medium sticky left-0 bg-inherit z-10">
                            {feature.name}
                          </td>
                          <td className="p-4 text-center">
                            {renderFeatureValue(feature.starter)}
                          </td>
                          <td className="p-4 text-center bg-[#FF6B35]/5">
                            {renderFeatureValue(feature.growth)}
                          </td>
                          <td className="p-4 text-center">
                            {renderFeatureValue(feature.scale)}
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mobile Comparison Toggle Alternative */}
          <div className="md:hidden lg:hidden mt-8">
            <div className="bg-[#E6F7F5] rounded-2xl p-6">
              <h3 className="font-heading text-lg font-bold text-[#0D9488] mb-4 text-center">
                Quick Feature Summary
              </h3>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <h4 className="font-semibold text-[#0D9488] text-sm mb-2">Starter</h4>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div>✓ Responsive Design</div>
                    <div>✓ SSL & Security</div>
                    <div>✓ 30-day Support</div>
                    <div className="text-[#FF6B35] font-medium">Basic Features</div>
                  </div>
                </div>
                <div className="border-x border-[#0D9488]/20 px-2">
                  <h4 className="font-semibold text-[#FF6B35] text-sm mb-2">Growth</h4>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div>✓ Everything in Starter</div>
                    <div>✓ Custom Design</div>
                    <div>✓ CMS Integration</div>
                    <div className="text-[#FF6B35] font-medium">Advanced Features</div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#0D9488] text-sm mb-2">Scale</h4>
                  <div className="text-xs text-gray-600 space-y-1">
                    <div>✓ Everything in Growth</div>
                    <div>✓ API Integration</div>
                    <div>✓ 90-day Support</div>
                    <div className="text-[#FF6B35] font-medium">Enterprise Features</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 md:py-24 bg-[#E6F7F5]">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0D9488] mb-4">
              What's Included in All Plans
            </h2>
            <p className="text-lg text-muted-foreground">
              Every project comes with these essential features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {includedFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <span className="text-3xl">{feature.icon}</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-[#0D9488] mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="py-20 bg-[#0D9488] text-white">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Need something unique? Let's scope it together.
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Every business is different. If our packages don't fit perfectly, let's create a custom solution just for you.
          </p>
          <Button 
            size="lg" 
            className="bg-[#FF6B35] hover:bg-[#e55a2b] text-white text-xl px-10 py-4"
          >
            Request Custom Quote
          </Button>
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
              Everything you need to know about our pricing and process
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-transparent hover:border-[#0D9488]/20 transition-colors">
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

      {/* Trust Section */}
      <section className="py-16 bg-[#F9FAFB] border-t">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
            <Badge variant="secondary" className="bg-[#0D9488]/10 text-[#0D9488] px-4 py-2">
              ✅ JustDial Verified Partner
            </Badge>
            <div className="flex items-center space-x-4">
              <img 
                src="/placeholder.svg" 
                alt="Client testimonial" 
                className="w-12 h-12 rounded-full"
              />
              <div className="text-left">
                <p className="text-sm text-muted-foreground italic">
                  "Excellent value for money. Professional service at fair prices."
                </p>
                <p className="text-xs text-[#0D9488] font-medium mt-1">
                  — Verified Client Review
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
