import { Helmet } from "react-helmet-async";

export default function About() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/about';
  return (
    <main className="section">
      <Helmet>
        <title>About — Trivesha</title>
        <meta name="description" content="Our story since 2019, values, process, founders, and milestones." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <div className="container text-left">
        <h1 className="font-heading text-4xl mb-4">About</h1>
        <p className="text-muted-foreground">Trivesha is led by Gopi & Shiva, delivering full-stack excellence.</p>
      </div>
    </main>
  );
}
