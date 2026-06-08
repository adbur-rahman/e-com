import Image from "next/image";
import FishProductBrowser from "@/components/FishProductBrowser";

const fishProducts = [
  {
    name: "Tuna Saku Block",
    slug: "tuna-saku-block",
    detail: "Sashimi quality | 200 g",
    price: "৳ 23.99*",
    unit: "৳ 119.95 / kg",
    badge: "",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/products/10323-honest-catch-thunfisch-saku-block-1_grande.jpg?v=1671644740",
  },
  {
    name: "Loch Duart salmon fillet",
    slug: "loch-duart-salmon-fillet",
    detail: "with skin | 140 g",
    price: "৳ 9.99*",
    unit: "৳ 71.36 / kg",
    badge: "",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/files/10641-honest-catch-loch-duart-filet-mit-haut-1_grande.jpg?v=1775635859",
  },
  {
    name: "Wild Salmon Fillet “Coho”",
    slug: "wild-salmon-fillet-coho",
    detail: "with skin | 2 x 125 g",
    price: "৳ 29.99*",
    unit: "৳ 119.96 / kg",
    badge: "",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/products/10352-honest-catch-wildlachsfilet-coho-1_grande.jpg?v=1670867335",
  },
  {
    name: "Organic salmon fillet",
    slug: "organic-salmon-fillet",
    detail: "with skin | 160 g",
    price: "৳ 8.99*",
    unit: "৳ 56.19 / kg",
    badge: "MEER-Rabatt",
    certified: "BIO",
    image:
      "https://honest-catch.com/cdn/shop/files/10182-honest-catch-bio-lachsfilet-1-schottland-Bio-Label_grande.jpg?v=1758361824",
  },
  {
    name: "Sea bass fillet",
    slug: "sea-bass-fillet",
    detail: "with skin | 145 g, 170 g",
    price: "from ৳ 11.99*",
    unit: "",
    badge: "MEER-Rabatt",
    certified: "ASC",
    image:
      "https://honest-catch.com/cdn/shop/files/10353-honest-catch-wolfsbarschfilet-1-ASC-Label_grande.jpg?v=1758358542",
  },
  {
    name: "Yellowfin tuna steak",
    slug: "yellowfin-tuna-steak",
    detail: "Sashimi quality",
    price: "from ৳ 18.99*",
    unit: "",
    badge: "MEER-Rabatt",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/products/10094-honest-catch-thunfisch-steak-1_grande.jpg?v=1752128024",
  },
  {
    name: "Black cod fillet",
    slug: "black-cod-fillet",
    detail: "with skin | 2 x 125 g",
    price: "৳ 31.99*",
    unit: "৳ 127.96 / kg",
    badge: "MEER-Rabatt",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/files/10174-honest-catch-black-cod-filet-1_grande.jpg?v=1690879509",
  },
  {
    name: "Alaskan black cod",
    slug: "alaskan-black-cod",
    detail: "with skin | 150 g, 1 kg",
    price: "from ৳ 14.99*",
    unit: "",
    badge: "Sold out",
    certified: "MSC",
    image:
      "https://honest-catch.com/cdn/shop/files/30503-honest-catch-alaska-black-cod-filet-mit-haut-1_grande.jpg?v=1776759131",
  },
  {
    name: "Loch Duart salmon side",
    slug: "loch-duart-salmon-side",
    detail: "with skin | 0.9 kg - 1.2 kg",
    price: "from ৳ 46.99*",
    unit: "",
    badge: "",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/files/10645-honest-catch-loch-duart-seite-mit-haut-1_grande.jpg?v=1775575467",
  },
  {
    name: "North Sea sole fillets",
    slug: "north-sea-sole-fillets",
    detail: "without skin | 2 x 100 g",
    price: "৳ 44.99*",
    unit: "৳ 224.95 / kg",
    badge: "MEER-Rabatt",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/products/10384-honest-catch-nordsee-seezungenfilets-1_grande.jpg?v=1671644496",
  },
  {
    name: "New Zealand king salmon side",
    slug: "new-zealand-king-salmon-side",
    detail: "with skin & pin bones | 1 kg - 1.5 kg",
    price: "from ৳ 79.99*",
    unit: "",
    badge: "",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/files/honest-catch-regal-koenigslachsseite-1_grande.jpg?v=1747811637",
  },
  {
    name: "Natural herring fillet",
    slug: "natural-herring-fillet",
    detail: "in oil | 260 g",
    price: "৳ 7.99*",
    unit: "৳ 30.73 / kg",
    badge: "",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/products/10364-honest-catch-matjesfilet-natur-1_grande.jpg?v=1750402595",
  },
  {
    name: "Sashimi fish box",
    slug: "sashimi-fish-box",
    detail: "Perfect for sushi | Loch Duart salmon, Saku block, and Hamachi fillet",
    price: "৳ 63.99*",
    unit: "৳ 94.10 / kg",
    badge: "On sale",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/files/27032-honest-catch-sashimi-box_grande.jpg?v=1778239917",
  },
  {
    name: "Zander fillets",
    slug: "zander-fillets",
    detail: "with skin | 250 g",
    price: "৳ 18.99*",
    unit: "৳ 75.96 / kg",
    badge: "",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/products/10356-honest-catch-zander-filet-1_grande.jpg?v=1671644965",
  },
  {
    name: "Smoked wild salmon fillet \"Coho\"",
    slug: "smoked-wild-salmon-fillet-coho",
    detail: "cut | 100 g",
    price: "৳ 16.99*",
    unit: "৳ 169.90 / kg",
    badge: "",
    certified: "",
    image:
      "https://honest-catch.com/cdn/shop/products/10350-honest-catch-coho-wildlachs-geraeuchert-1_grande.jpg?v=1736512445",
  },
];

const fishCategories = [
  { name: "Salmon", image: "/fish-category-salmon.gif", href: "#" },
  { name: "Tuna", image: "/fish-category-tuna.gif", href: "#" },
  { name: "Grouper", image: "/fish-category-grouper.gif", href: "#" },
  { name: "Monkfish", image: "/fish-category-monkfish.gif", href: "#" },
  { name: "Sole", image: "/fish-category-sole.gif", href: "#" },
  { name: "Hamachi Kingfish", image: "/fish-category-kingfish.gif", href: "#" },
];

export const metadata = {
  title: "Fish | Honest Catch",
  description: "Shop premium fish fillets, tuna, salmon, cod, and sashimi cuts.",
};

export default function FishPage() {
  return (
    <>
      <FishIntro />
      <section className="plp-page">
        <FishProductBrowser products={fishProducts} />
        <FishAdvantages />
      </section>
    </>
  );
}

function FishAdvantages() {
  return (
    <section className="fish-advantages">
      <div className="fish-advantages-copy">
        <h2>Your advantages at a glance!</h2>
        <p>
          Freshness and quality: At HONEST CATCH we guarantee first-class
          premium fish products that meet the highest quality standards.
          Sustainability: We rely on sustainable fishing and farming to protect
          marine resources and support future generations. Convenience: Order
          from the comfort of your home and fill your{" "}
          <a href="#">freezer</a> with high-quality, <a href="#">frozen</a>{" "}
          seafood. Variety: Discover a wide selection of fish species and
          products to suit your individual taste. Top chefs trust us: We supply
          the most renowned chefs in Germany.{" "}
          <strong>Buy fish at HONEST CATCH:</strong> Experience the advantages
          of buying fish at HONEST CATCH and enjoy maximum enjoyment with a
          clear conscience. Need <a href="#">recipe</a> inspiration? Then head
          to our world of enjoyment.
        </p>
      </div>
      <div className="fish-advantages-image">
        <Image
          src="/fish-advantages-mobile.jpg"
          alt="Two fresh sea bream on paper"
          fill
          sizes="(max-width: 1024px) 100vw, 38vw"
        />
      </div>
    </section>
  );
}

function FishIntro() {
  return (
    <section className="fish-intro">
      <div className="fish-intro-hero">
        <div className="fish-intro-image">
          <Image
            src="/fish-intro-hero.jpg"
            alt="Fresh fish resting on ice"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="fish-intro-copy">
          <div>
            <h1>Buy fish online</h1>
            <p>
              When purchasing fish from HONEST CATCH, you&apos;ll find
              sustainable, premium quality, and maximum flavor. Explore our
              handpicked selection of premium seafood and fish products in our
              online shop. Only fish that meet our high standards for
              sustainable fishing or aquaculture, premium quality, and
              exceptional flavor earn a spot in our collection. It&apos;s no
              wonder we supply Germany&apos;s top chefs. Discover for yourself
              how easy it is to buy fish online, ensuring an unparalleled
              culinary experience.
            </p>
          </div>
        </div>
      </div>

      <nav className="fish-category-strip" aria-label="Browse fish categories">
        {fishCategories.map((category) => (
          <a href={category.href} key={category.name} aria-label={category.name}>
            <span className="fish-category-image">
              <Image
                src={category.image}
                alt=""
                width={1024}
                height={1024}
                unoptimized
              />
            </span>
            <span className="fish-category-name">{category.name}</span>
          </a>
        ))}
      </nav>
    </section>
  );
}
