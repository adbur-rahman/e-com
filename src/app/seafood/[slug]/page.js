import ProductCartControls from "@/components/ProductCartControls";

const product = {
  name: "Tristan rock lobster tail",
  detail: "In shell | 75 g - 165 g",
  price: "৳ 16.99*",
  unit: "৳ 226.53 / kg",
  image:
    "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=1200&q=90",
  gallery: [
    "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=400&q=85",
    "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=85",
    "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=400&q=85",
    "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=400&q=85",
    "https://images.unsplash.com/photo-1607301405390-d831c242f59d?auto=format&fit=crop&w=400&q=85",
  ],
};

const tunaProduct = {
  name: "Tuna Saku Block",
  detail: "Sashimi quality | 200 g",
  price: "à§³ 23.99*",
  unit: "à§³ 119.95 / kg",
  image:
    "https://honest-catch.com/cdn/shop/products/10323-honest-catch-thunfisch-saku-block-1_grande.jpg?v=1671644740",
  gallery: [
    "https://honest-catch.com/cdn/shop/products/10323-honest-catch-thunfisch-saku-block-1_grande.jpg?v=1671644740",
    "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=400&q=85",
    "https://images.unsplash.com/photo-1562158074-d49fbeffcc91?auto=format&fit=crop&w=400&q=85",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=400&q=85",
  ],
};

const lobsterFeatures = [
  "Sashimi Quality - suitable for raw consumption",
  "MSC certified because of their sustainable fishing",
  "Rare delicacy - Catches are limited to around 300 tons per season",
  "Frozen, for a freshly caught taste",
  "For 48 hours only: Buy 5, pay for 4! You'll automatically get the cheapest one for free*",
];

const variants = ["75 g - S", "100 g - M", "140 g - L", "165 g - XL"];
const tunaFeatures = [
  "Also available as a Sashimi fish box",
  "Immediate shock freezing within 30 minutes of capture at -60 degrees",
  "Perfect rectangular shape, ideal for sushi",
  "Frozen, for a freshly caught taste",
];

function SnowflakeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v18M5.6 6.2l12.8 11.6M18.4 6.2 5.6 17.8M4 12h16" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 7h11v9H3zM14 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  );
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const currentProduct = slug === "tuna-saku-block" ? tunaProduct : product;

  return {
    title: `${currentProduct.name} | Honest Catch`,
    description: `${currentProduct.name} product details and ordering options.`,
  };
}

export default async function ProductDetailsPage({ params }) {
  const { slug } = await params;
  const currentProduct = slug === "tuna-saku-block" ? tunaProduct : product;
  const currentFeatures = slug === "tuna-saku-block" ? tunaFeatures : lobsterFeatures;
  const currentVariants = slug === "tuna-saku-block" ? ["200 g"] : variants;

  return (
    <section className="pdp-page">
      <div className="pdp-gallery">
        <div className="pdp-thumbs">
          {currentProduct.gallery.map((image, index) => (
            <button className={index === 0 ? "active" : ""} type="button" key={image}>
              <span style={{ backgroundImage: `url("${image}")` }}></span>
            </button>
          ))}
        </div>

        <div className="pdp-main-image">
          <span className="pdp-freeze">
            <SnowflakeIcon />
          </span>
          <div
            className="pdp-plate"
            style={{ backgroundImage: `url("${currentProduct.image}")` }}
          ></div>
          <span className="pdp-cert">MSC</span>
        </div>
      </div>

      <div className="pdp-info">
        <div className="pdp-rating">
          <span>★★★★★</span>
          <small>(56 Reviews)</small>
        </div>

        <h1>{currentProduct.name}</h1>
        <p className="pdp-subtitle">{currentProduct.detail}</p>

        <div className="pdp-price">
          <strong>{currentProduct.price}</strong>
          <span>{currentProduct.unit}</span>
        </div>

        <div className="pdp-badges" aria-label="Certifications">
          <span>MSC</span>
          <span>SASHIMI</span>
        </div>

        <p className="pdp-description">
          {slug === "tuna-saku-block"
            ? "The tuna has firm yet tender meat that can also be enjoyed raw. Its deep red color, mild mineral aroma, boneless cut, and sashimi quality make it perfect for sushi or pan-frying."
            : "Thanks to optimal living conditions, this MSC-certified rock lobster has a sweet taste. This is the tail of the rock lobster. In order to keep stocks healthy and stable, the fisheries catch quantities are limited."}
        </p>

        <ol className="pdp-features">
          {currentFeatures.map((feature, index) => (
            <li key={feature}>
              <span>{index + 1}</span>
              {feature}
            </li>
          ))}
        </ol>

        <div className="pdp-variants">
          <p>Variants:</p>
          <div>
            {currentVariants.map((variant, index) => (
              <button className={slug !== "tuna-saku-block" && index === 2 ? "disabled" : ""} type="button" key={variant}>
                {variant}
              </button>
            ))}
          </div>
        </div>

        <div className="pdp-availability">
          <TruckIcon />
          <span>Available immediately</span>
        </div>

        <ProductCartControls
          product={{
            id: currentProduct.name,
            name: currentProduct.name,
            detail: currentProduct.detail,
            price: currentProduct.price,
            unit: currentProduct.unit,
            image: currentProduct.image,
            variant: currentVariants[0],
          }}
        />

        <div className="pdp-pickup">
          <a href="#">Information about Click & Collect</a>
          <p>
            <span></span>
            Seafood Store München - available
          </p>
        </div>
      </div>
    </section>
  );
}
