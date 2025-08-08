import { Helmet } from "react-helmet-async";

export default function Privacy() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/privacy';
  return (
    <main className="section">
      <Helmet>
        <title>Privacy Policy — Trivesha</title>
        <meta name="description" content="Privacy policy for Trivesha." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <div className="container text-left">
        <h1 className="font-heading text-4xl mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">We value your privacy. Details will be published here.</p>
      </div>
    </main>
  );
}
