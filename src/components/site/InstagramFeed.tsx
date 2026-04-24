import { useEffect, useRef, useState } from "react";
import { Instagram, Sparkles } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

type IgPost = {
  id: string;
  shortcode: string;
  thumbnail: string;
  caption: string;
  permalink: string;
  isVideo: boolean;
};

type Props = {
  username?: string;
  fallbackImages: { src: string; alt: string }[];
};

export function InstagramFeed({ username = "lescreationsdaure_", fallbackImages }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [posts, setPosts] = useState<IgPost[] | null>(null);
  const [visible, setVisible] = useState(false);

  // Lazy: only fetch when section enters viewport
  useEffect(() => {
    if (!ref.current || visible) return;
    const el = ref.current;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    const ctrl = new AbortController();
    fetch(`/api/instagram?u=${encodeURIComponent(username)}`, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((data: { posts: IgPost[] }) => {
        if (data.posts && data.posts.length > 0) setPosts(data.posts.slice(0, 8));
        else setPosts([]);
      })
      .catch(() => setPosts([]));
    return () => ctrl.abort();
  }, [visible, username]);

  const items =
    posts && posts.length > 0
      ? posts
      : fallbackImages.map((f, i) => ({
          id: `fb-${i}`,
          shortcode: `fb-${i}`,
          thumbnail: f.src,
          caption: f.alt,
          permalink: `https://www.instagram.com/${username}/`,
          isVideo: false,
        }));

  const isLoading = visible && posts === null;

  return (
    <div ref={ref} className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {isLoading
        ? Array.from({ length: 8 }).map((_, i) => (
            <div
              key={`s-${i}`}
              className="aspect-square animate-pulse bg-foreground/5"
              aria-hidden
            />
          ))
        : items.map((p, i) => (
            <Reveal key={p.id} delay={i * 60}>
              <a
                href={p.permalink}
                target="_blank"
                rel="noreferrer"
                className="image-zoom group relative block aspect-square overflow-hidden bg-foreground/5"
                aria-label={p.caption ? p.caption.slice(0, 80) : "Voir sur Instagram"}
              >
                <img
                  src={p.thumbnail}
                  alt={p.caption ? p.caption.slice(0, 80) : "Post Instagram"}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    const img = e.currentTarget;
                    const fb = fallbackImages[i % fallbackImages.length];
                    if (fb && img.src !== fb.src) img.src = fb.src;
                  }}
                />
                <div className="absolute inset-0 bg-ink/0 transition-luxe group-hover:bg-ink/55" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-luxe group-hover:opacity-100">
                  {p.isVideo ? (
                    <Sparkles className="h-6 w-6 text-cream" />
                  ) : (
                    <Instagram className="h-6 w-6 text-cream" />
                  )}
                </div>
              </a>
            </Reveal>
          ))}
    </div>
  );
}