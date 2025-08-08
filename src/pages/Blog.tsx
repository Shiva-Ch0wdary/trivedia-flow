import { Helmet } from "react-helmet-async";

export default function Blog() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/blog';
  return (
    <main className="section">
      <Helmet>
        <title>Blog — Trivesha</title>
        <meta name="description" content="Resources and guides from Trivesha: design, development, DevOps, and product tips." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <div className="container text-left">
        <h1 className="font-heading text-4xl mb-4">Blog</h1>
        <p className="text-muted-foreground">Articles and guides coming soon.</p>
      </div>
    </main>
  );
}
