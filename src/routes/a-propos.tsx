import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import atelier from "@/assets/atelier.jpg";
import lifestyle from "@/assets/lifestyle.jpg";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Les Créations d'Auré" },
      {
        name: "description",
        content:
          "L'histoire d'Auré, créatrice indépendante de bijoux faits main et d'écouteurs design en or rosé.",
      },
      { property: "og:title", content: "À propos — Les Créations d'Auré" },
      {
        property: "og:description",
        content: "Une maison indépendante. Une créatrice. Une vision.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative h-[70vh] overflow-hidden">
        <img
          src={lifestyle}
          alt="Auré, créatrice"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/30 to-transparent" />
        <div className="absolute inset-0 flex items-end px-6 pb-20 lg:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <Reveal>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-cream/80">
                — La maison
              </p>
              <h1 className="font-display text-6xl leading-[0.95] text-cream md:text-8xl">
                L'art comme
                <br />
                <span className="italic">langage.</span>
              </h1>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-32 lg:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-primary">
            — Manifeste
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-8 font-display text-3xl leading-relaxed text-foreground md:text-4xl">
            « Je crée des pièces que j'aimerais porter chaque jour.
            <span className="italic text-primary">
              {" "}
              Discrètes, lumineuses, intemporelles.
            </span>{" "}
            Des objets qui accompagnent les histoires plutôt que de les
            raconter. »
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 text-sm uppercase tracking-[0.25em] text-muted-foreground">
            — Auré, fondatrice
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal className="image-zoom relative aspect-[4/5] overflow-hidden">
            <img
              src={atelier}
              alt="Atelier"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </Reveal>

          <div className="flex flex-col justify-center">
            <Reveal>
              <h2 className="font-display text-4xl leading-tight text-foreground md:text-5xl">
                Une maison <span className="italic">indépendante.</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
                <p>
                  Les Créations d'Auré est née du désir de créer en toute
                  liberté. Loin des grands volumes, chaque pièce est pensée,
                  dessinée et assemblée dans notre atelier — à la main, en
                  petites séries.
                </p>
                <p>
                  Nous travaillons les matières nobles : l'or rosé 18 carats,
                  les perles d'eau douce, les pierres semi-précieuses choisies
                  une à une. Notre signature ? Une élégance épurée, féminine,
                  qui s'inscrit dans le temps.
                </p>
                <p>
                  En 2024, nous avons élargi notre univers à l'écoute, avec la
                  collection Aura : des écouteurs design en finition or rosé,
                  pensés comme des bijoux d'écoute.
                </p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <Link
                to="/boutique"
                className="mt-10 inline-flex items-center gap-3 self-start border border-foreground/30 px-8 py-4 text-xs uppercase tracking-[0.25em] text-foreground transition-luxe hover:border-primary hover:bg-primary hover:text-cream"
              >
                Découvrir nos créations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-gradient-cream py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3 lg:px-10">
          {[
            {
              n: "01",
              t: "Imaginé",
              d: "Chaque pièce naît d'un croquis, d'une intuition, d'une émotion.",
            },
            {
              n: "02",
              t: "Façonné",
              d: "Assemblé à la main, dans le silence de notre atelier français.",
            },
            {
              n: "03",
              t: "Confié",
              d: "Emballé avec soin, expédié dans un écrin signature.",
            },
          ].map((step, i) => (
            <Reveal key={step.n} delay={i * 120}>
              <div className="border-l border-primary/40 pl-6">
                <p className="font-display text-5xl text-primary">{step.n}</p>
                <h3 className="mt-4 font-display text-2xl text-foreground">
                  {step.t}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}