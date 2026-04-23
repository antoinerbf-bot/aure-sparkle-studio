import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/produit/$slug"
      params={{ slug: product.slug }}
      className="group block"
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="image-zoom relative aspect-[4/5] overflow-hidden bg-muted"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover"
        />
        {product.images.length > 1 && (
          <img
            src={product.images[1]}
            alt=""
            loading="lazy"
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-luxe group-hover:opacity-100"
          />
        )}
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/40 to-transparent opacity-0 transition-luxe group-hover:opacity-100" />
        <span className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 text-xs uppercase tracking-[0.25em] text-cream opacity-0 transition-luxe group-hover:translate-y-0 group-hover:opacity-100">
          Découvrir
        </span>
      </motion.div>
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl text-foreground transition-smooth group-hover:text-primary">
            {product.name}
          </h3>
          <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {product.tagline}
          </p>
        </div>
        <p className="font-display text-lg text-foreground">{product.price} €</p>
      </div>
    </Link>
  );
}