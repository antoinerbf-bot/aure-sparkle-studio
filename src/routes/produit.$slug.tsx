import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, Heart, Truck, Shield, Sparkles } from "lucide-react";
import { getProductBySlug, products } from "@/lib/products";
import { ProductCard } from "@/components/site/ProductCard";
import { ProductGallery } from "@/components/site/ProductGallery";
import { Reveal } from "@/components/site/Reveal";
import { toast } from "sonner";

export const Route = createFileRoute("/produit/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — Les Créations d'Auré` },
          { name: "description", content: loaderData.product.description },
          {
            property: "og:title",
            content: `${loaderData.product.name} — Les Créations d'Auré`,
          },
          { property: "og:description", content: loaderData.product.tagline },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-6 pt-24">
      <div className="text-center">
        <h1 className="font-display text-5xl text-foreground">Produit introuvable</h1>
        <Link to="/boutique" className="mt-6 inline-block text-sm uppercase tracking-[0.25em] text-primary">
          Retour à la boutique
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="flex min-h-screen items-center justify-center px-6 pt-24">
      <p className="text-sm text-destructive">Erreur : {error.message}</p>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 3);

  return (
    <>
      <section className="bg-gradient-cream pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Link
            to="/boutique"
            className="group inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground transition-smooth hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Boutique
          </Link>

          <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-20">
            {/* GALLERY 3D-ish */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductGallery images={product.images} alt={product.name} />
            </motion.div>

            {/* INFO */}
            <div className="flex flex-col justify-center">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] text-primary capitalize">
                  {product.category}
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h1 className="mt-4 font-display text-5xl leading-tight text-foreground md:text-6xl">
                  {product.name}
                </h1>
                <p className="mt-3 text-sm uppercase tracking-[0.18em] text-muted-foreground">
                  {product.tagline}
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-6 font-display text-3xl text-primary">
                  {product.price} €
                </p>
              </Reveal>

              <div className="my-10 divider-gold" />

              <Reveal delay={300}>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {product.description}
                </p>
              </Reveal>

              <Reveal delay={400}>
                <ul className="mt-8 space-y-3">
                  {product.details.map((d: string) => (
                    <li
                      key={d}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
                      {d}
                    </li>
                  ))}
                </ul>
              </Reveal>

              <Reveal delay={500}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      toast.success(`${product.name} ajouté au panier`, {
                        description: "Paiement sécurisé bientôt disponible.",
                      })
                    }
                    className="group inline-flex flex-1 items-center justify-center gap-3 bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-cream transition-luxe hover:bg-primary"
                  >
                    <ShoppingBag className="h-4 w-4" />
                    Ajouter au panier
                  </button>
                  <button
                    type="button"
                    aria-label="Favori"
                    onClick={() => toast("Ajouté à votre wishlist")}
                    className="flex h-[58px] w-[58px] items-center justify-center border border-foreground/30 text-foreground transition-smooth hover:border-primary hover:text-primary"
                  >
                    <Heart className="h-4 w-4" />
                  </button>
                </div>
              </Reveal>

              <Reveal delay={600}>
                <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-8 text-xs">
                  <div className="flex items-start gap-3">
                    <Truck className="mt-0.5 h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Livraison offerte</p>
                      <p className="text-muted-foreground">dès 80 €</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="mt-0.5 h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">Garantie 2 ans</p>
                      <p className="text-muted-foreground">SAV maison</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="mx-auto max-w-7xl px-6 py-32 lg:px-10">
        <Reveal>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-primary">
            — Aussi
          </p>
          <h2 className="font-display text-4xl text-foreground md:text-5xl">
            Vous aimerez <span className="italic">aussi</span>
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p, i) => (
            <Reveal key={p.slug} delay={i * 100}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}