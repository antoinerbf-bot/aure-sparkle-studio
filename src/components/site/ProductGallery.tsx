import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  images: string[];
  alt: string;
};

export function ProductGallery({ images, alt }: Props) {
  const [active, setActive] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: x * 10, y: -y * 10 });
  };
  const onLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div className="flex flex-col gap-4">
      <div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative aspect-square overflow-hidden bg-muted shadow-luxe"
        style={{ perspective: "1200px" }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
            style={{
              transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transformStyle: "preserve-3d",
              transition: "transform 200ms ease-out",
            }}
          >
            <img
              src={images[active]}
              alt={`${alt} — vue ${active + 1}`}
              className="h-full w-full object-cover"
              loading={active === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        </AnimatePresence>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-rose-gold/10 via-transparent to-transparent" />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-3">
          {images.map((src, i) => (
            <button
              key={src + i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Voir la vue ${i + 1}`}
              className={`group relative aspect-square overflow-hidden bg-muted transition-luxe ${
                active === i
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : "opacity-70 hover:opacity-100"
              }`}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-luxe group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}