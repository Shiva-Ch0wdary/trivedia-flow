import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const canonical = typeof window !== 'undefined' ? window.location.href : '/contact';

  return (
    <main className="section">
      <Helmet>
        <title>Contact — Trivesha</title>
        <meta name="description" content="Request a quote. Tell us about your project scope, budget, and timeline." />
        <link rel="canonical" href={canonical} />
      </Helmet>
      <div className="container grid gap-10 md:grid-cols-2 text-left">
        <div>
          <h1 className="font-heading text-4xl mb-4">Request a quote</h1>
          <p className="text-muted-foreground mb-6">We respond within one business day.</p>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Thanks! We\'ll be in touch.'); }}>
            <input required className="w-full rounded-md border bg-background px-4 py-3" placeholder="Name" aria-label="Name" />
            <input required type="email" className="w-full rounded-md border bg-background px-4 py-3" placeholder="Email" aria-label="Email" />
            <input className="w-full rounded-md border bg-background px-4 py-3" placeholder="Company" aria-label="Company" />
            <div className="grid gap-4 md:grid-cols-2">
              <input className="w-full rounded-md border bg-background px-4 py-3" placeholder="Budget" aria-label="Budget" />
              <input className="w-full rounded-md border bg-background px-4 py-3" placeholder="Timeline" aria-label="Timeline" />
            </div>
            <textarea className="w-full rounded-md border bg-background px-4 py-3" placeholder="Brief" rows={6} aria-label="Brief" />
            <Button type="submit" variant="accent">Send request</Button>
          </form>
        </div>
        <div className="space-y-4">
          <div className="card p-6">
            <h2 className="font-semibold mb-2">Contact</h2>
            <p className="text-sm text-muted-foreground">hello@trivesha.com • +91 98765 43210</p>
            <p className="text-sm text-muted-foreground mt-2">Hyderabad, IN</p>
            <p className="text-sm text-muted-foreground mt-2">Hours: Mon–Fri, 9am–6pm IST</p>
          </div>
          <div className="card p-6">
            <h2 className="font-semibold mb-2">Map</h2>
            <p className="text-sm text-muted-foreground">Location map placeholder.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
