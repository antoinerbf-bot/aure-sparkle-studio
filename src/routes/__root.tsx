import { Outlet, Link, createRootRoute, HeadContent, Scripts, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";

import appCss from "../styles.css?url";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CustomCursor } from "@/components/site/CustomCursor";
import { Toaster } from "@/components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Les Créations d'Auré — Bijoux & Écouteurs design" },
      { name: "description", content: "Bijoux faits main et écouteurs design or rosé. L'élégance comme signature, le détail comme philosophie." },
      { name: "author", content: "Les Créations d'Auré" },
      { property: "og:title", content: "Les Créations d'Auré — Bijoux & Écouteurs design" },
      { property: "og:description", content: "Bijoux faits main et écouteurs design or rosé. L'élégance comme signature, le détail comme philosophie." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Les Créations d'Auré — Bijoux & Écouteurs design" },
      { name: "twitter:description", content: "Bijoux faits main et écouteurs design or rosé. L'élégance comme signature, le détail comme philosophie." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/357fa3b9-6e4a-4aa9-b69c-99c299dab9d6/id-preview-794f151a--b16d2fdc-65ef-4a14-b46c-13b359979a00.lovable.app-1776952542886.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/357fa3b9-6e4a-4aa9-b69c-99c299dab9d6/id-preview-794f151a--b16d2fdc-65ef-4a14-b46c-13b359979a00.lovable.app-1776952542886.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const location = useLocation();
  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
