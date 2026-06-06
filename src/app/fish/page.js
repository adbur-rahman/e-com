import SeafoodFilterDrawer from "@/components/SeafoodFilterDrawer";

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

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20.2 5.8 14C2 10.2 4.6 4 9.9 5.1c.9.2 1.7.7 2.1 1.4.5-.7 1.2-1.2 2.1-1.4 5.3-1.1 7.9 5.1 4.1 8.9L12 20.2Z" />
    </svg>
  );
}

function SnowflakeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v18M5.6 6.2l12.8 11.6M18.4 6.2 5.6 17.8M4 12h16" />
    </svg>
  );
}

export const metadata = {
  title: "Fish | Honest Catch",
  description: "Shop premium fish fillets, tuna, salmon, cod, and sashimi cuts.",
};

export default function FishPage() {
  return (
    <section className="plp-page">
      <div className="plp-toolbar">
        <SeafoodFilterDrawer />

        <div className="plp-controls">
          <span>77 Products</span>
          <button className="sort-button" type="button">
            Sort by
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="plp-grid">
        {fishProducts.slice(0, 2).map((product) => (
          <article className="plp-card" key={product.name}>
            <ProductImage product={product} />
            <ProductInfo product={product} />
          </article>
        ))}

        <article className="plp-promo fish-promo">
          <div className="plp-promo-art">
            <span>FISH</span>
            <strong>QUIZ</strong>
            <em>?</em>
          </div>
          <h2>Take part in our fish quiz!</h2>
          <p>Find your perfect fish</p>
          <a href="#">Participate now</a>
        </article>

        {fishProducts.slice(2).map((product) => (
          <article className="plp-card" key={product.name}>
            <ProductImage product={product} />
            <ProductInfo product={product} />
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductImage({ product }) {
  return (
    <div className="plp-image">
      <span className="plp-freeze">
        <SnowflakeIcon />
      </span>
      {product.badge && (
        <span className={`plp-badge ${product.badge === "Sold out" ? "sold-out" : ""}`}>
          {product.badge}
        </span>
      )}
      {product.certified && <span className="plp-certified">{product.certified}</span>}
      <a
        href={`/seafood/${product.slug}`}
        className="plp-plate"
        style={{ backgroundImage: `url("${product.image}")` }}
        aria-label={`View ${product.name}`}
      ></a>
      <button type="button" className="plp-heart" aria-label={`Save ${product.name}`}>
        <HeartIcon />
      </button>
    </div>
  );
}

function ProductInfo({ product }) {
  return (
    <div className="plp-info">
      <a href={`/seafood/${product.slug}`}>
        <h2>{product.name}</h2>
      </a>
      <p>{product.detail}</p>
      <div className="plp-price">
        <strong>{product.price}</strong>
        {product.unit && <span>{product.unit}</span>}
      </div>
    </div>
  );
}
