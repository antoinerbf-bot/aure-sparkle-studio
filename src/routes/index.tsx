import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Heart, Award } from "lucide-react";
import heroJewelry from "@/assets/hero-jewelry.jpg";
import lifestyle from "@/assets/lifestyle.jpg";
import atelier from "@/assets/atelier.jpg";
import heroVideoMeta from "@/assets/hero-video.mp4.asset.json";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { InstagramFeed } from "@/components/site/InstagramFeed";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Les Créations d'Auré — Bijoux faits main : bracelets, bagues, colliers" },
      {
        name: "description",
        content:
          "Bijoux faits main par Auré : bracelets, bagues et colliers en finition dorée. Pièces uniques pensées comme des objets d'art.",
      },
      { property: "og:title", content: "Les Créations d'Auré — Bijoux faits main" },
      {
        property: "og:description",
        content: "L'élégance comme signature, le détail comme philosophie.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* HERO — IMMERSIVE VIDEO */}
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <video
            src={heroVideoMeta.url}
            poster={heroJewelry}
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
          {/* Subtle overlays for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-ink/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-32 lg:px-10">
          <Reveal>
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-cream/85">
              <span className="h-px w-12 bg-rose-gold-light" />
              Maison de bijoux faits main
            </p>
          </Reveal>
          <Reveal delay={150}>
            <h1 className="font-display text-[14vw] leading-[0.95] text-cream md:text-[8vw] lg:text-[7rem]">
              L'art du
              <br />
              <span className="italic text-shimmer">détail précieux</span>
            </h1>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-8 max-w-md text-base font-light leading-relaxed text-cream/90 md:text-lg">
              Bracelets, bagues et colliers pensés comme des bijoux
              d'exception. Pour celles qui savent que l'élégance se cache dans
              les petits détails.
            </p>
          </Reveal>
          <Reveal delay={450}>
            <div className="mt-12 flex flex-wrap items-center gap-6">
              <Link
                to="/boutique"
                className="group inline-flex items-center gap-3 bg-cream px-8 py-4 text-xs uppercase tracking-[0.25em] text-ink transition-luxe hover:bg-rose-gold hover:text-cream"
              >
                Découvrir la collection
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/a-propos"
                className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cream"
              >
                <span className="border-b border-cream/40 pb-1 transition-smooth group-hover:border-cream">
                  L'histoire d'Auré
                </span>
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-cream/70">
            Défiler
          </p>
          <div className="mx-auto mt-3 h-12 w-px bg-cream/40" />
        </div>
      </section>

      {/* MARQUEE */}
      <section className="overflow-hidden border-y border-border bg-background py-6">
        <div className="marquee-track flex gap-16 whitespace-nowrap font-display text-3xl text-foreground/30 md:text-5xl">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-16">
              <span className="italic">Fait main</span>
              <span className="text-primary">✦</span>
              <span>Bracelets</span>
              <span className="text-primary">✦</span>
              <span className="italic">Bagues</span>
              <span className="text-primary">✦</span>
              <span>Colliers</span>
              <span className="text-primary">✦</span>
              <span className="italic">Édition limitée</span>
              <span className="text-primary">✦</span>
              <span>Design français</span>
              <span className="text-primary">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="mb-16 text-center">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
              — Univers
            </p>
            <h2 className="font-display text-5xl leading-tight text-foreground md:text-6xl">
              Trois familles, <span className="italic">une signature</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { cat: "bracelets", label: "Bracelets", img: products.find((p) => p.category === "bracelets")?.image },
            { cat: "bagues", label: "Bagues", img: products.find((p) => p.category === "bagues")?.image },
            { cat: "colliers", label: "Colliers", img: products.find((p) => p.category === "colliers")?.image },
          ].map((c, i) => (
            <Reveal key={c.cat} delay={i * 120}>
              <Link
                to="/boutique"
                search={{ cat: c.cat as "bracelets" | "bagues" | "colliers" }}
                className="group block"
              >
                <div className="image-zoom relative aspect-[4/5] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.label}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-8">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-cream/80">
                      Catégorie
                    </p>
                    <h3 className="mt-2 font-display text-4xl text-cream">
                      {c.label}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cream/90">
                      Découvrir
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* STORY */}
      <section className="bg-gradient-cream py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <Reveal className="image-zoom relative aspect-[4/5] overflow-hidden">
              <img
                src={atelier}
                alt="Atelier de création Les Créations d'Auré"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </Reveal>
            <div className="flex flex-col justify-center">
              <Reveal>
                <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary">
                  <span className="h-px w-10 bg-primary" />
                  Notre histoire
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="font-display text-5xl leading-tight text-foreground md:text-6xl">
                  Chaque bijou raconte
                  <br />
                  <span className="italic text-primary">une émotion.</span>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                  Née d'une passion pour les matières précieuses et le geste
                  minutieux, Les Créations d'Auré est une maison indépendante.
                  Chaque bracelet, bague et collier est imaginé comme un objet
                  d'art — une rencontre entre artisanat délicat et design
                  contemporain.
                </p>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-10 grid grid-cols-3 gap-6">
                  {[
                    { icon: Heart, label: "Fait main" },
                    { icon: Sparkles, label: "Matières précieuses" },
                    { icon: Award, label: "Édition limitée" },
                  ].map((v) => (
                    <div key={v.label} className="text-center">
                      <v.icon className="mx-auto h-5 w-5 text-primary" />
                      <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        {v.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <div className="mb-16 flex items-end justify-between gap-8">
          <Reveal>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
              — Sélection
            </p>
            <h2 className="font-display text-5xl leading-tight text-foreground md:text-6xl">
              Pièces <span className="italic">précieuses</span>
            </h2>
          </Reveal>
          <Reveal>
            <Link
              to="/boutique"
              className="group hidden items-center gap-2 text-xs uppercase tracking-[0.25em] text-foreground md:inline-flex"
            >
              Voir tout
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-gradient-cream py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 text-center">
            <Reveal>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
                @lescreationsdaure_
              </p>
              <h2 className="font-display text-5xl leading-tight text-foreground md:text-6xl">
                Notre univers <span className="italic">en images</span>
              </h2>
            </Reveal>
          </div>

          <InstagramFeed
            username="lescreationsdaure_"
            fallbackImages={products.slice(0, 8).map((p) => ({ src: p.image, alt: p.name }))}
          />

          <div className="mt-12 text-center">
            <a
              href="https://www.instagram.com/lescreationsdaure_/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground"
            >
              <span className="border-b border-foreground/40 pb-1 transition-smooth group-hover:border-primary group-hover:text-primary">
                Suivre sur Instagram
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA LIFESTYLE */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src={lifestyle}
          alt="Porter Les Créations d'Auré"
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent" />
        <div className="absolute inset-0 flex items-center px-6 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <Reveal>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cream/80">
                — Pour vous
              </p>
              <h2 className="max-w-2xl font-display text-5xl leading-tight text-cream md:text-7xl">
                Trouvez le bijou qui
                <br />
                <span className="italic">vous ressemble.</span>
              </h2>
              <Link
                to="/boutique"
                className="mt-10 inline-flex items-center gap-3 bg-cream px-8 py-4 text-xs uppercase tracking-[0.25em] text-ink transition-luxe hover:bg-rose-gold hover:text-cream"
              >
                Toute la boutique
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
