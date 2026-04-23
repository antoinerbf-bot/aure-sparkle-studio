import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import { products, type Category } from "@/lib/products";
import { z } from "zod";

const searchSchema = z.object({
  cat: z.enum(["bijoux", "ecouteurs"]).optional(),
});

export const Route = createFileRoute("/boutique")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Boutique — Les Créations d'Auré" },
      {
        name: "description",
        content:
          "Découvrez tous les bijoux et écouteurs design Les Créations d'Auré. Or rosé, fait main, édition limitée.",
      },
      { property: "og:title", content: "Boutique — Les Créations d'Auré" },
      {
        property: "og:description",
        content: "Bijoux et écouteurs design en or rosé.",
      },
    ],
  }),
  component: BoutiquePage,
});

function BoutiquePage() {
  const { cat } = Route.useSearch();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<Category | "all">(cat ?? "all");

  const setCategory = (next: Category | "all") => {
    setFilter(next);
    navigate({
      to: "/boutique",
      search: next === "all" ? {} : { cat: next },
    });
  };

  const filtered = products.filter(
    (p) => filter === "all" || p.category === filter,
  );

  const filters: { value: Category | "all"; label: string }[] = [
    { value: "all", label: "Tout" },
    { value: "bijoux", label: "Bijoux" },
    { value: "ecouteurs", label: "Écouteurs" },
  ];

  return (
    <>
      <section className="bg-gradient-cream pt-40 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">
              — Boutique
            </p>
            <h1 className="font-display text-6xl leading-[0.95] text-foreground md:text-8xl">
              La <span className="italic">collection</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              Chaque pièce est imaginée, dessinée et assemblée à la main.
              Bijoux d'or rosé et écouteurs design — l'art du détail dans
              chaque création.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-32 lg:px-10">
        <div className="mb-16 flex flex-wrap items-center justify-center gap-2 border-y border-border py-6">
          {filters.map((f) => (
            <button
              key={f.value}
              type="button"
              onClick={() => setCategory(f.value)}
              className={`px-6 py-2 text-xs uppercase tracking-[0.25em] transition-smooth ${
                filter === f.value
                  ? "bg-foreground text-cream"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 100}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}