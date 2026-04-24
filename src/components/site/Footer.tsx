import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Facebook, Music2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border/60 bg-gradient-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4 lg:px-10">
        <div className="md:col-span-2">
          <h3 className="font-display text-3xl text-foreground">
            Les Créations <span className="italic text-primary">d'Auré</span>
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Bijoux et accessoires conçus à la main, dans une démarche
            artistique et sensible. Pour celles qui aiment les détails qui
            changent tout.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="https://www.instagram.com/lescreationsdaure_/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-smooth hover:border-primary hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@lescreationsdaure"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-smooth hover:border-primary hover:text-primary"
            >
              <Music2 className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/lescreationsdaure"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-smooth hover:border-primary hover:text-primary"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="mailto:contact@lescreationsdaure.fr"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-smooth hover:border-primary hover:text-primary"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Boutique
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/boutique" className="hover:text-primary transition-smooth">
                Tous les produits
              </Link>
            </li>
            <li>
              <Link to="/boutique" search={{ cat: "bracelets" } as never} className="hover:text-primary transition-smooth">
                Bracelets
              </Link>
            </li>
            <li>
              <Link to="/boutique" search={{ cat: "bagues" } as never} className="hover:text-primary transition-smooth">
                Bagues
              </Link>
            </li>
            <li>
              <Link to="/boutique" search={{ cat: "colliers" } as never} className="hover:text-primary transition-smooth">
                Colliers
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Maison
          </p>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/a-propos" className="hover:text-primary transition-smooth">
                À propos
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition-smooth">
                Contact
              </Link>
            </li>
            <li>
              <a href="https://www.instagram.com/lescreationsdaure_/" target="_blank" rel="noreferrer" className="hover:text-primary transition-smooth">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/60 px-6 py-6 lg:px-10">
        <p className="mx-auto max-w-7xl text-xs uppercase tracking-[0.18em] text-muted-foreground">
          © {new Date().getFullYear()} Les Créations d'Auré — Fait main avec amour
        </p>
      </div>
    </footer>
  );
}