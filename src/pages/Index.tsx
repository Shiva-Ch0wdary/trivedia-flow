import { Helmet } from "react-helmet-async";
import heroImage from "@/assets/hero-devices.webp";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, Rocket, Shield } from "lucide-react";

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="text-center">
    <div className="text-2xl font-semibold">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

const Benefit = ({ title, desc }: { title: string; desc: string }) => (
  <div className="card p-6 text-left">
    <h3 className="mb-2 font-semibold">{title}</h3>
    <p className="text-muted-foreground text-sm">{desc}</p>
  </div>
);

export default function Index() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/';
  return (
    <main>
      <Helmet>
        <title>Trivesha — Web Design & App Development Agency</title>
        <meta name="description" content="Since 2019 we design and build fast websites, apps, and cloud backends with Figma-first workflow, staging previews, and post-launch care." />
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

      <section className="section" onMouseMove={(e) => { const r = (e.currentTarget as HTMLElement).getBoundingClientRect(); const mx = ((e.clientX - r.left) / r.width) * 100; const my = ((e.clientY - r.top) / r.height) * 100; document.documentElement.style.setProperty('--mx', mx + '%'); document.documentElement.style.setProperty('--my', my + '%'); }}>
        <div className="container grid items-center gap-10 md:grid-cols-2">
          <div className="text-left">
            <p className="eyebrow">Since 2019</p>
            <h1 className="mt-2 font-heading text-4xl md:text-5xl leading-tight">Web design & development that ships</h1>
            <p className="mt-4 text-lg text-muted-foreground">We craft high-performance websites, apps, and cloud backends. Figma-first. Staging links. Reliable maintenance.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Get a free quote <ArrowRight /></Link>
              </Button>
              <Button asChild variant="accent" size="lg">
                <Link to="/portfolio">See our work</Link>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6">
              <Stat label="Projects" value="120+" />
              <Stat label="Uptime" value="99.9%" />
              <Stat label="NPS" value="68" />
            </div>
          </div>
          <div className="relative">
            <img src={heroImage} alt="Responsive website and app mockups — Trivesha" loading="eager" className="w-full rounded-lg border shadow" />
          </div>
        </div>
      </section>

      {/* Why Trivesha */}
      <section className="section">
        <div className="container">
          <h2 className="font-heading text-3xl text-center mb-10">Why choose Trivesha</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <Benefit title="Figma-first" desc="Design system-driven, clickable prototypes before code." />
            <Benefit title="Staging previews" desc="Share live QA links for every feature." />
            <Benefit title="Post-launch care" desc="Maintenance SLAs and rapid support." />
            <Benefit title="Performance" desc="Lighthouse 90+ targets, best practices by default." />
          </div>
        </div>
      </section>

      {/* Services snapshot */}
      <section className="section">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="font-heading text-3xl">Services</h2>
            <Button asChild variant="link"><Link to="/services">View all</Link></Button>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="card p-6 text-left">
              <Layers className="text-primary mb-3" />
              <h3 className="font-semibold mb-1">Design</h3>
              <p className="text-sm text-muted-foreground">Brand, UI/UX, prototypes, design systems.</p>
            </div>
            <div className="card p-6 text-left">
              <Rocket className="text-primary mb-3" />
              <h3 className="font-semibold mb-1">Web Development</h3>
              <p className="text-sm text-muted-foreground">Marketing sites, SaaS, dashboards.</p>
            </div>
            <div className="card p-6 text-left">
              <Shield className="text-primary mb-3" />
              <h3 className="font-semibold mb-1">Backend & DevOps</h3>
              <p className="text-sm text-muted-foreground">APIs, databases, CI/CD, observability.</p>
            </div>
            <div className="card p-6 text-left">
              <Shield className="text-primary mb-3" />
              <h3 className="font-semibold mb-1">Maintenance</h3>
              <p className="text-sm text-muted-foreground">Bug fixes, updates, and SLAs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case highlights (horizontal scroll) */}
      <section className="section">
        <div className="container">
          <h2 className="font-heading text-3xl mb-8">Recent case studies</h2>
          <div className="flex gap-6 overflow-x-auto pb-2 snap-x">
            {[1,2,3,4].map((i) => (
              <article key={i} className="card min-w-[320px] snap-start p-6 text-left">
                <p className="eyebrow">Growth • 4 weeks</p>
                <h3 className="mt-2 font-semibold">Project {i}</h3>
                <p className="mt-2 text-sm text-muted-foreground">Problem → approach → result with measurable impact.</p>
                <Button variant="link" className="mt-2" asChild><Link to="/portfolio">Read more</Link></Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container grid gap-6 md:grid-cols-3 text-left">
          <div className="card p-6">
            <p className="eyebrow">Step 1</p>
            <h3 className="font-semibold mt-1">Discovery</h3>
            <p className="text-sm text-muted-foreground mt-2">Workshops, requirements, and priorities.</p>
          </div>
          <div className="card p-6">
            <p className="eyebrow">Step 2</p>
            <h3 className="font-semibold mt-1">Design</h3>
            <p className="text-sm text-muted-foreground mt-2">Figma flows, components, prototypes.</p>
          </div>
          <div className="card p-6">
            <p className="eyebrow">Step 3</p>
            <h3 className="font-semibold mt-1">Deploy</h3>
            <p className="text-sm text-muted-foreground mt-2">CI/CD, monitoring, and handover.</p>
          </div>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="section">
        <div className="container card p-8 text-left">
          <div className="grid gap-4 md:grid-cols-2 items-center">
            <div>
              <h3 className="font-heading text-2xl">Transparent pricing, flexible plans</h3>
              <p className="text-muted-foreground mt-2">Starter, Growth, and Scale packages with add-ons.</p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <Button asChild variant="accent"><Link to="/pricing">See pricing</Link></Button>
              <Button asChild variant="outline"><Link to="/contact">Request custom quote</Link></Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <h2 className="font-heading text-3xl mb-8">What clients say</h2>
          <div className="grid gap-6 md:grid-cols-3 text-left">
            {["“They delivered on time with exceptional quality.”","“Clear communication and fast iterations.”","“Our conversions jumped 38% post launch.”"].map((q, i) => (
              <blockquote key={i} className="card p-6 text-sm text-muted-foreground">{q}</blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
