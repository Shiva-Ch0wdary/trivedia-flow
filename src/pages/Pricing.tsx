import { Helmet } from "react-helmet-async";

export default function Pricing() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/pricing';
  return (
    <main className="section">
      <Helmet>
        <title>Pricing — Trivesha</title>
        <meta name="description" content="Starter, Growth, and Scale packages with transparent inclusions and add-ons." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <div className="container text-left">
        <h1 className="font-heading text-4xl mb-4">Pricing</h1>
        <p className="text-muted-foreground">Clear packages and flexible add-ons. Request a custom quote anytime.</p>
      </div>
    </main>
  );
}
