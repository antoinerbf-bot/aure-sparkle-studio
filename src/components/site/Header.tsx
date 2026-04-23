import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { to: "/", label: "Accueil" },
    { to: "/boutique", label: "Boutique" },
    { to: "/a-propos", label: "À propos" },
    { to: "/contact", label: "Contact" },
  ] as const;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-luxe ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          to="/"
          className="font-display text-xl tracking-wide text-foreground transition-smooth hover:text-primary"
        >
          Les Créations <span className="italic text-primary">d'Auré</span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative text-sm uppercase tracking-[0.18em] text-muted-foreground transition-smooth hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/boutique"
            className="hidden items-center gap-2 text-sm text-foreground transition-smooth hover:text-primary md:inline-flex"
          >
            <ShoppingBag className="h-4 w-4" />
            <span className="uppercase tracking-[0.18em]">Panier</span>
          </Link>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden text-foreground"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-6">
            {navItems.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.2em] text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}