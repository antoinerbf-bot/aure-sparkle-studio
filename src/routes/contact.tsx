import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Instagram, MapPin, Send } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Les Créations d'Auré" },
      {
        name: "description",
        content:
          "Une question, un projet sur-mesure ? Échangez avec Auré, créatrice indépendante.",
      },
      { property: "og:title", content: "Contact — Les Créations d'Auré" },
      {
        property: "og:description",
        content: "Discutons de votre projet sur-mesure.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Message envoyé — merci !", {
      description: "Nous vous répondons sous 48h.",
    });
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="bg-gradient-cream pt-40 pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <p className="mb-6 text-xs uppercase tracking-[0.3em] text-primary">
                — Contact
              </p>
              <h1 className="font-display text-6xl leading-[0.95] text-foreground md:text-7xl">
                Écrivons une
                <br />
                <span className="italic">histoire ensemble.</span>
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
                Une question sur une pièce, un projet sur-mesure, une
                collaboration ? Nous lisons chaque message avec attention.
              </p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-12 space-y-6">
                {[
                  { Icon: Mail, label: "contact@lescreationsdaure.fr", href: "mailto:contact@lescreationsdaure.fr" },
                  { Icon: Instagram, label: "@lescreationsdaure_", href: "https://www.instagram.com/lescreationsdaure_/" },
                  { Icon: MapPin, label: "Atelier — France", href: undefined },
                ].map(({ Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/40 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        className="text-sm text-foreground transition-smooth hover:text-primary"
                      >
                        {label}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{label}</p>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <form
              onSubmit={onSubmit}
              className="space-y-6 border border-border bg-card p-8 shadow-soft md:p-10"
            >
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Prénom
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-smooth focus:border-primary"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Nom
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-smooth focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-smooth focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Sujet
                </label>
                <input
                  type="text"
                  className="w-full border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-smooth focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full resize-none border-b border-border bg-transparent py-3 text-sm text-foreground outline-none transition-smooth focus:border-primary"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="group inline-flex w-full items-center justify-center gap-3 bg-foreground py-4 text-xs uppercase tracking-[0.25em] text-cream transition-luxe hover:bg-primary disabled:opacity-60"
              >
                {sent ? "Envoyé" : "Envoyer le message"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}