import { Helmet } from "react-helmet-async";

export default function Dashboard() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/dashboard';
  return (
    <main className="section">
      <Helmet>
        <title>Client Dashboard — Trivesha</title>
        <meta name="description" content="Projects, invoices, staging links, deploy status, and support tickets." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <div className="container text-left">
        <h1 className="font-heading text-4xl mb-4">Client Dashboard</h1>
        <p className="text-muted-foreground">Private area coming soon.</p>
      </div>
    </main>
  );
}
