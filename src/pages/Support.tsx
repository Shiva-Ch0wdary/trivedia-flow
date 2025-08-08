import { Helmet } from "react-helmet-async";

export default function Support() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/support';
  return (
    <main className="section">
      <Helmet>
        <title>Support — Trivesha</title>
        <meta name="description" content="Help center, knowledge base, ticket form, and incident status." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <div className="container text-left">
        <h1 className="font-heading text-4xl mb-4">Support & Status</h1>
        <p className="text-muted-foreground">Browse articles or open a ticket.</p>
      </div>
    </main>
  );
}
