import { Helmet } from "react-helmet-async";

export default function Portfolio() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/portfolio';
  return (
    <main className="section">
      <Helmet>
        <title>Portfolio — Trivesha</title>
        <meta name="description" content="Case studies with context, problem, solution, results, tech, and timeline." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <div className="container text-left">
        <h1 className="font-heading text-4xl mb-4">Portfolio</h1>
        <p className="text-muted-foreground">Filterable grid of case studies. Click a card to dive into details.</p>
      </div>
    </main>
  );
}
