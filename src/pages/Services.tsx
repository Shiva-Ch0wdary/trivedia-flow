import { Helmet } from "react-helmet-async";

export default function Services() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/services';
  return (
    <main className="section">
      <Helmet>
        <title>Services — Trivesha</title>
        <meta name="description" content="Web design, development, apps, DevOps, maintenance. Explore Trivesha services and compare plans." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <div className="container text-left">
        <h1 className="font-heading text-4xl mb-4">Services</h1>
        <p className="text-muted-foreground mb-8">Design, development, apps, DevOps, and maintenance tailored to your goals.</p>
      </div>
    </main>
  );
}
