import necklace from "@/assets/necklace.jpg";
import necklace2 from "@/assets/necklace-2.jpg";
import necklace3 from "@/assets/necklace-3.jpg";
import rings from "@/assets/rings.jpg";
import rings2 from "@/assets/rings-2.jpg";
import rings3 from "@/assets/rings-3.jpg";
import bracelet from "@/assets/bracelet.jpg";
import bracelet2 from "@/assets/bracelet-2.jpg";
import bracelet3 from "@/assets/bracelet-3.jpg";
import earrings from "@/assets/earrings.jpg";
import earrings2 from "@/assets/earrings-2.jpg";
import earrings3 from "@/assets/earrings-3.jpg";
import earbudsHero from "@/assets/earbuds-hero.jpg";
import earbudsPro2 from "@/assets/earbuds-pro-2.jpg";
import earbudsPro3 from "@/assets/earbuds-pro-3.jpg";
import earbudsCase from "@/assets/earbuds-case.jpg";
import earbudsClassic2 from "@/assets/earbuds-classic-2.jpg";
import earbudsClassic3 from "@/assets/earbuds-classic-3.jpg";
import earbudSingle from "@/assets/earbud-single.jpg";
import earbudsMini2 from "@/assets/earbuds-mini-2.jpg";
import earbudsMini3 from "@/assets/earbuds-mini-3.jpg";

export type Category = "bijoux" | "ecouteurs";

export type Product = {
  slug: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  images: string[];
  tagline: string;
  description: string;
  details: string[];
};

export const products: Product[] = [
  {
    slug: "collier-perle-aurore",
    name: "Collier Aurore",
    category: "bijoux",
    price: 89,
    image: necklace,
    images: [necklace, necklace2, necklace3],
    tagline: "Perle d'eau douce, chaîne or rosé 18k",
    description:
      "Une perle naturelle suspendue à une chaîne fine en or rosé. Pensée pour être portée seule ou superposée, elle accompagne chaque moment avec délicatesse.",
    details: [
      "Perle d'eau douce sélectionnée à la main",
      "Chaîne plaquée or rosé 18 carats",
      "Longueur ajustable 40-45 cm",
      "Fait main dans notre atelier",
    ],
  },
  {
    slug: "anneaux-duo-soleil",
    name: "Duo Soleil",
    category: "bijoux",
    price: 65,
    image: rings,
    images: [rings, rings2, rings3],
    tagline: "Deux anneaux fins or rosé",
    description:
      "Un duo épuré pensé pour s'empiler ou se porter séparément. La promesse d'un éclat discret au quotidien.",
    details: [
      "Lot de 2 anneaux",
      "Plaqué or rosé 18 carats",
      "Tailles disponibles : 50 à 58",
      "Garanti sans nickel",
    ],
  },
  {
    slug: "bracelet-charme-etoile",
    name: "Bracelet Étoile",
    category: "bijoux",
    price: 55,
    image: bracelet,
    images: [bracelet, bracelet2, bracelet3],
    tagline: "Charme étoile, chaîne fine or rosé",
    description:
      "Un bracelet délicat orné d'un charme étoile, symbole de lumière. La signature parfaite d'un poignet élégant.",
    details: [
      "Charme étoile en or rosé",
      "Fermoir mousqueton ajustable",
      "Longueur 16-19 cm",
      "Hypoallergénique",
    ],
  },
  {
    slug: "creoles-luna",
    name: "Créoles Luna",
    category: "bijoux",
    price: 49,
    image: earrings,
    images: [earrings, earrings2, earrings3],
    tagline: "Créoles épurées or rosé",
    description:
      "L'essentiel à porter tous les jours. Des créoles parfaitement équilibrées, douces sur l'oreille, lumineuses sur la peau.",
    details: [
      "Diamètre 18 mm",
      "Plaqué or rosé 3 microns",
      "Fermoir cliquet sécurisé",
      "Légères et confortables",
    ],
  },
  {
    slug: "ecouteurs-aura-pro",
    name: "Aura Pro",
    category: "ecouteurs",
    price: 149,
    image: earbudsHero,
    images: [earbudsHero, earbudsPro2, earbudsPro3],
    tagline: "Écouteurs sans fil — finition or rosé mat",
    description:
      "Un design pensé comme un bijou. Réduction de bruit active, son haute définition et autonomie de 32 h. La technologie au service de l'élégance.",
    details: [
      "Réduction de bruit active",
      "Bluetooth 5.3 — codec aptX",
      "Autonomie 8h + 24h avec boîtier",
      "Charge sans fil Qi",
    ],
  },
  {
    slug: "ecouteurs-aura-classic",
    name: "Aura Classic",
    category: "ecouteurs",
    price: 119,
    image: earbudsCase,
    images: [earbudsCase, earbudsClassic2, earbudsClassic3],
    tagline: "Boîtier marbre & or rosé",
    description:
      "L'écoute confortable au quotidien dans un boîtier signature. Une pièce à exposer autant qu'à utiliser.",
    details: [
      "Bluetooth 5.2",
      "Autonomie 6h + 18h",
      "Boîtier finition marbre",
      "Micros dual-array",
    ],
  },
  {
    slug: "ecouteurs-aura-mini",
    name: "Aura Mini",
    category: "ecouteurs",
    price: 89,
    image: earbudSingle,
    images: [earbudSingle, earbudsMini2, earbudsMini3],
    tagline: "Le plus compact de la collection",
    description:
      "Ultra léger, ultra discret. Le compagnon parfait pour les esprits libres qui ne se séparent jamais de leur musique.",
    details: [
      "3,8g par écouteur",
      "Bluetooth 5.2",
      "Autonomie 5h + 15h",
      "Résistance IPX4",
    ],
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);