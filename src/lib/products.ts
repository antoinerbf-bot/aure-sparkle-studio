import braceletPearl from "@/assets/bracelet-pearl.jpg";
import braceletBeads from "@/assets/bracelet-beads.jpg";
import braceletCharm from "@/assets/bracelet-charm.jpg";
import ringSignet from "@/assets/ring-signet.jpg";
import ringStack from "@/assets/ring-stack.jpg";
import ringPearl from "@/assets/ring-pearl.jpg";
import necklacePearl from "@/assets/necklace-pearl.jpg";
import necklaceStar from "@/assets/necklace-star.jpg";
import necklaceLayered from "@/assets/necklace-layered.jpg";

export type Category = "bracelets" | "bagues" | "colliers";

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
  // BRACELETS
  {
    slug: "bracelet-perle-douce",
    name: "Bracelet Perle Douce",
    category: "bracelets",
    price: 58,
    image: braceletPearl,
    images: [braceletPearl, braceletPearl, braceletPearl],
    tagline: "Chaîne fine dorée, perle d'eau douce",
    description:
      "Une chaîne délicate sublimée par une perle d'eau douce. Une pièce signature à porter seule ou superposée pour un poignet lumineux.",
    details: [
      "Chaîne plaquée or fin",
      "Perle d'eau douce naturelle",
      "Longueur ajustable 16-19 cm",
      "Fait main dans notre atelier",
    ],
  },
  {
    slug: "bracelet-perles-soleil",
    name: "Bracelet Soleil",
    category: "bracelets",
    price: 52,
    image: braceletBeads,
    images: [braceletBeads, braceletBeads, braceletBeads],
    tagline: "Perles dorées et pierre naturelle",
    description:
      "Inspiré des étés dorés, ce bracelet associe perles dorées et pierre naturelle. Élastique, confortable, lumineux.",
    details: [
      "Perles dorées hématite",
      "Pierre centrale en agate",
      "Élastique souple haute qualité",
      "Hypoallergénique",
    ],
  },
  {
    slug: "bracelet-charme-coeur",
    name: "Bracelet Loves",
    category: "bracelets",
    price: 62,
    image: braceletCharm,
    images: [braceletCharm, braceletCharm, braceletCharm],
    tagline: "Charme cœur gravé, maille dorée",
    description:
      "Une maille forçat dorée et un charme cœur gravé « Loves ». La déclaration douce d'un poignet aimé.",
    details: [
      "Charme cœur gravé acier doré",
      "Maille forçat plaquée or",
      "Fermoir mousqueton ajustable",
      "Édition limitée",
    ],
  },
  // BAGUES
  {
    slug: "bague-signet-or",
    name: "Bague Signet",
    category: "bagues",
    price: 68,
    image: ringSignet,
    images: [ringSignet, ringSignet, ringSignet],
    tagline: "Anneau lisse doré, finition mate",
    description:
      "L'essence de la simplicité. Une bague signet aux lignes pures, à porter au quotidien comme une seconde peau.",
    details: [
      "Acier inoxydable plaqué or",
      "Finition mate satinée",
      "Tailles disponibles 50 à 58",
      "Garantie sans nickel",
    ],
  },
  {
    slug: "bague-duo-anneaux",
    name: "Duo d'Anneaux",
    category: "bagues",
    price: 54,
    image: ringStack,
    images: [ringStack, ringStack, ringStack],
    tagline: "Deux anneaux fins entrelacés",
    description:
      "Deux anneaux fins entrelacés pour un effet stack délicat. Pensés pour s'empiler ou se porter seuls.",
    details: [
      "Lot de 2 anneaux fins",
      "Plaqué or 18k brillant",
      "Tailles 50 à 58",
      "Hypoallergénique",
    ],
  },
  {
    slug: "bague-perle-luna",
    name: "Bague Luna",
    category: "bagues",
    price: 49,
    image: ringPearl,
    images: [ringPearl, ringPearl, ringPearl],
    tagline: "Perle blanche sertie, anneau fin",
    description:
      "Une perle blanche posée comme une lune sur un anneau d'une finesse extrême. Romantique et intemporel.",
    details: [
      "Perle d'eau douce 5 mm",
      "Anneau fin plaqué or",
      "Tailles 50 à 58",
      "Fait main",
    ],
  },
  // COLLIERS
  {
    slug: "collier-perle-aurore",
    name: "Collier Aurore",
    category: "colliers",
    price: 78,
    image: necklacePearl,
    images: [necklacePearl, necklacePearl, necklacePearl],
    tagline: "Perle d'eau douce sur chaîne dorée",
    description:
      "Une perle naturelle suspendue à une chaîne fine dorée. Délicat, lumineux, parfait à porter seul ou superposé.",
    details: [
      "Perle d'eau douce sélectionnée",
      "Chaîne plaquée or fin",
      "Longueur ajustable 40-45 cm",
      "Fait main",
    ],
  },
  {
    slug: "collier-etoile",
    name: "Collier Étoile",
    category: "colliers",
    price: 65,
    image: necklaceStar,
    images: [necklaceStar, necklaceStar, necklaceStar],
    tagline: "Pendentif étoile, chaîne dorée",
    description:
      "Une étoile dorée suspendue à une chaîne fine. Symbole de lumière, à porter comme un porte-bonheur du quotidien.",
    details: [
      "Pendentif étoile en acier doré",
      "Chaîne fine plaquée or",
      "Longueur ajustable 38-43 cm",
      "Hypoallergénique",
    ],
  },
  {
    slug: "collier-multirangs",
    name: "Collier Multirangs",
    category: "colliers",
    price: 89,
    image: necklaceLayered,
    images: [necklaceLayered, necklaceLayered, necklaceLayered],
    tagline: "Trois chaînes dorées superposées",
    description:
      "L'effet layering parfait, déjà composé. Trois chaînes dorées de mailles différentes, à porter ensemble.",
    details: [
      "3 chaînes plaquées or",
      "Mailles forçat, gourmette, vénitienne",
      "Longueurs 38, 42, 46 cm",
      "Édition signature",
    ],
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug);
