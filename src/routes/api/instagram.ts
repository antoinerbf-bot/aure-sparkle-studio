import { createFileRoute } from "@tanstack/react-router";

type IgPost = {
  id: string;
  shortcode: string;
  thumbnail: string;
  caption: string;
  permalink: string;
  isVideo: boolean;
};

type CacheEntry = { ts: number; data: IgPost[] };
const cache = new Map<string, CacheEntry>();
const TTL_MS = 1000 * 60 * 60 * 6; // 6h

const FALLBACK: IgPost[] = [];

async function fetchInstagramPosts(username: string): Promise<IgPost[]> {
  const cached = cache.get(username);
  if (cached && Date.now() - cached.ts < TTL_MS) return cached.data;

  try {
    const res = await fetch(`https://www.instagram.com/${username}/?__a=1&__d=dis`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
      },
    });
    if (!res.ok) throw new Error(`status ${res.status}`);
    const html = await res.text();

    // Try to find embedded JSON
    const match =
      html.match(/"edge_owner_to_timeline_media":\s*({[^}]*"edges":\s*\[[\s\S]*?\]\s*})/);
    if (match) {
      const fragment = match[1];
      const edgesMatch = fragment.match(/"edges":\s*(\[[\s\S]*?\])\s*}/);
      if (edgesMatch) {
        try {
          const edges = JSON.parse(edgesMatch[1]) as Array<{ node: any }>;
          const posts: IgPost[] = edges.slice(0, 8).map((e) => {
            const n = e.node;
            return {
              id: n.id,
              shortcode: n.shortcode,
              thumbnail: n.thumbnail_src || n.display_url,
              caption: n.edge_media_to_caption?.edges?.[0]?.node?.text ?? "",
              permalink: `https://www.instagram.com/p/${n.shortcode}/`,
              isVideo: !!n.is_video,
            };
          });
          cache.set(username, { ts: Date.now(), data: posts });
          return posts;
        } catch {
          // fallthrough
        }
      }
    }
    throw new Error("could not parse Instagram payload");
  } catch (err) {
    if (cached) return cached.data; // serve stale on error
    return FALLBACK;
  }
}

export const Route = createFileRoute("/api/instagram")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const username = (url.searchParams.get("u") || "lescreationsdaure_").replace(
          /[^a-zA-Z0-9._]/g,
          "",
        );
        const posts = await fetchInstagramPosts(username);
        return new Response(JSON.stringify({ posts }), {
          headers: {
            "Content-Type": "application/json",
            "Cache-Control": "public, max-age=1800, s-maxage=21600, stale-while-revalidate=86400",
          },
        });
      },
    },
  },
});