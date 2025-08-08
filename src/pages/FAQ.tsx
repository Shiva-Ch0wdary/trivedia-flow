import { Helmet } from "react-helmet-async";

export default function FAQ() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/faq';
  return (
    <main className="section">
      <Helmet>
        <title>FAQ — Trivesha</title>
        <meta name="description" content="Frequently asked questions about services, pricing, and process." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <div className="container text-left">
        <h1 className="font-heading text-4xl mb-4">FAQ</h1>
        <p className="text-muted-foreground">Answers to common questions.</p>
      </div>
    </main>
  );
}
