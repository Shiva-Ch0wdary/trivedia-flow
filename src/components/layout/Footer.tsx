import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="container grid gap-12 py-12 md:grid-cols-4">
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2 font-heading text-lg">
            <span aria-hidden className="inline-block h-3 w-3 rounded-sm bg-primary" />
            <span>Trivesha</span>
          </Link>
          <p className="text-sm text-muted-foreground">Design, development, and DevOps since 2019.</p>
          <div className="flex items-center gap-3">
            <a aria-label="Facebook" href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="h-5 w-5" />
            </a>
            <a aria-label="Twitter" href="#" className="text-muted-foreground hover:text-foreground">
              <Twitter className="h-5 w-5" />
            </a>
            <a aria-label="LinkedIn" href="#" className="text-muted-foreground hover:text-foreground">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Sitemap</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Legal</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 font-semibold">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@trivesha.com</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Hyderabad, IN</li>
          </ul>
        </div>
      </div>
      <div className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-3 md:flex-row">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Trivesha. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">Made with care.</p>
        </div>
      </div>
    </footer>
  );
}
