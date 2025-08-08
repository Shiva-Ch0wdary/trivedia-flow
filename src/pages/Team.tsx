import { Helmet } from "react-helmet-async";

export default function Team() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/team';
  return (
    <main className="section">
      <Helmet>
        <title>Team — Trivesha</title>
        <meta name="description" content="Meet the team. Careers and open roles." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <div className="container text-left">
        <h1 className="font-heading text-4xl mb-4">Team & Careers</h1>
        <p className="text-muted-foreground">We’re growing. Join us to design and build great products.</p>
      </div>
    </main>
  );
}
