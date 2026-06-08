import FishProductBrowser from "@/components/FishProductBrowser";

const seafoodProducts = [
  {
    name: "Tristan rock lobster tail",
    slug: "tristan-rock-lobster-tail",
    detail: "In shell | 75 g - 165 g",
    price: "from ৳ 16.99*",
    unit: "",
    badge: "Kaufe 5 & zahle 4!",
    certified: "MSC",
    image:
      "https://honest-catch.com/cdn/shop/files/10196-honest-catch-tristan-languste-1-MSC-Label_grande.jpg?v=1758359296",
  },
  {
    name: "Organic Black Tiger king prawn, cooked",
    slug: "organic-black-tiger-king-prawn-cooked",
    detail: "headless, deveined & peeled | 160 g",
    price: "৳ 8.99*",
    unit: "৳ 56.19 / kg",
    badge: "MEER-Rabatt",
    certified: "BIO",
    image:
      "https://honest-catch.com/cdn/shop/files/10453-honest-catch-bio-blacktiger-cooked-1-bio-label_grande.jpg?v=1758361591",
  },
  {
    name: "GOOD GAMBA shrimp, whole",
    slug: "good-gamba-shrimp-whole",
    detail: "with head & shell | 500 g",
    price: "৳ 34.99*",
    unit: "৳ 69.98 / kg",
    badge: "MEER-Rabatt",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/files/HONEST-CATCH-Good-Gamba-hoso-roh-1_grande.jpg?v=1754375766",
  },
  {
    name: "Wild Atlantic scallops",
    slug: "wild-atlantic-scallops",
    detail: "cleaned meat | 300 g",
    price: "৳ 29.99*",
    unit: "৳ 99.97 / kg",
    badge: "Fresh",
    certified: "MSC",
    image:
      "https://honest-catch.com/cdn/shop/files/10139-honest-catch-jakobsmuschel-1-MSC-Label_grande.jpg?v=1758360327",
  },
  {
    name: "Cockles",
    slug: "cockles",
    detail: "with shell, pre-cooked | 300 g",
    price: "৳ 24.99*",
    unit: "৳ 62.48 / kg",
    badge: "",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/files/honest-catch-herzmuscheln-1_grande.jpg?v=1724054990",
  },
  {
    name: "Shellfish Mix",
    slug: "shellfish-mix",
    detail: "with shell, pre-cooked | 400 g",
    price: "৳ 31.99*",
    unit: "৳ 127.96 / kg",
    badge: "",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/files/honest-catch-muschel-mix-1_grande.jpg?v=1724055131",
  },
  {
    name: "Canadian scallop",
    slug: "canadian-scallop",
    detail: "raw mussel meat | 1 kg",
    price: "from ৳ 89.99*",
    unit: "",
    badge: "",
    certified: "MSC",
    image:
      "https://honest-catch.com/cdn/shop/files/10139-honest-catch-jakobsmuschel-1-MSC-Label_grande.jpg?v=1758360327",
  },
  {
    name: "Oyster, open in half shell",
    slug: "oyster-open-in-half-shell",
    detail: "size no. 2 | 6 pieces",
    price: "৳ 9.99*",
    unit: "৳ 28.54 / kg",
    badge: "",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/files/10469-honest-catch-austern-offen-1_grande.jpg?v=1706254752",
  },
  {
    name: "Mussels",
    slug: "mussels",
    detail: "with shell, pre-cooked | 1 kg",
    price: "৳ 11.99*",
    unit: "৳ 11.99 / kg",
    badge: "",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/files/honest-catch-miesmuscheln-1_grande.jpg?v=1723108607",
  },
  {
    name: "Canadian lobster tail",
    slug: "canadian-lobster-tail",
    detail: "in shell | 120 g, 190 g",
    price: "from ৳ 22.99*",
    unit: "",
    badge: "",
    certified: "MSC",
    image:
      "https://honest-catch.com/cdn/shop/files/10446-honest-catch-kanada-hummer-tail-1-MSC-Label_grande.jpg?v=1758359351",
  },
  {
    name: "Canadian lobster, halved",
    slug: "canadian-lobster-halved",
    detail: "with head, shell & scissors | 130 g, 160g",
    price: "from ৳ 18.99*",
    unit: "",
    badge: "",
    certified: "MSC",
    image:
      "https://honest-catch.com/cdn/shop/files/10362-honest-catch-kanada-hummer-halbiert-1-MSC-Label_grande.jpg?v=1758359983",
  },
  {
    name: "Bavarian shrimp cream soup",
    slug: "bavarian-shrimp-cream-soup",
    detail: "400 g",
    price: "৳ 9.99*",
    unit: "৳ 24.98 / kg",
    badge: "MEER-Rabatt",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/files/honest-catch-bayerische-garnelen-cremesuppe-1_grande.jpg?v=1700654885",
  },
  {
    name: "Carabinero Red Giant Deep Sea Shrimp, whole",
    slug: "carabinero-red-giant-deep-sea-shrimp-whole",
    detail: "with head & shell | 0,9 kg - 1,1 kg",
    price: "from ৳ 125.99*",
    unit: "",
    badge: "Sold out",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/files/10424-honest-catch-carabinero-tiefseegarnele_grande.jpg?v=1710226988",
  },
  {
    name: "Spanish octopus, whole",
    slug: "spanish-octopus-whole",
    detail: "raw | 2,25 kg - 2,8 kg",
    price: "from ৳ 79.99*",
    unit: "",
    badge: "",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/products/10219-honest-catch-spanischer-oktopus-ganz-1_grande.jpg?v=1671632635",
  },
  {
    name: "Cockles",
    slug: "cockles",
    detail: "with shell, pre-cooked | 300 g",
    price: "৳ 11.99*",
    unit: "৳ 39.97 / kg",
    badge: "",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/files/honest-catch-herzmuscheln-1_grande.jpg?v=1724054990",
  },
  {
    name: "Shellfish Mix",
    slug: "shellfish-mix",
    detail: "with shell, pre-cooked | 400 g",
    price: "৳ 9.99*",
    unit: "৳ 24.98 / kg",
    badge: "",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/files/honest-catch-muschel-mix-1_grande.jpg?v=1724055131",
  },
  {
    name: "Obsiblue southern sea shrimp",
    slug: "obsiblue-southern-sea-shrimp",
    detail: "with head & shell | 1 kg, L - XXL",
    price: "from ৳ 74.99*",
    unit: "",
    badge: "",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/files/10308-honest-catch-obsiblue-suedseegarnele-1_grande.jpg?v=1775721961",
  },
  {
    name: "Gambero Rosso",
    slug: "gambero-rosso",
    detail: "with head & shell | 200 g - M, 1 kg - XL",
    price: "from ৳ 34.99*",
    unit: "",
    badge: "",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/products/10084-honest-catch-rosso-di-mazara-gambero-rosso-1_grande.jpg?v=1670743545",
  },
];

const seafoodCatalog = seafoodProducts.filter(
  (product, index, products) =>
    products.findLastIndex((item) => item.slug === product.slug) === index
);

export const metadata = {
  title: "Seafood | Honest Catch",
  description: "Shop premium seafood with filters, sorting, and fresh offers.",
};

export default function SeafoodPage() {
  return (
    <section className="plp-page">
      <FishProductBrowser products={seafoodCatalog} showQuiz={false} />
    </section>
  );
}
