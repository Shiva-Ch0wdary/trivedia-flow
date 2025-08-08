import { Helmet } from "react-helmet-async";

export default function Terms() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/terms';
  return (
    <main className="section">
      <Helmet>
        <title>Terms of Service — Trivesha</title>
        <meta name="description" content="Terms of service for Trivesha." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <div className="container text-left">
        <h1 className="font-heading text-4xl mb-4">Terms of Service</h1>
        <p className="text-muted-foreground">Legal terms and conditions.</p>
      </div>
    </main>
  );
}
