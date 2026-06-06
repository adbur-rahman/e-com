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

const features = [
  "Sashimi Quality - suitable for raw consumption",
  "MSC certified because of their sustainable fishing",
  "Rare delicacy - Catches are limited to around 300 tons per season",
  "Frozen, for a freshly caught taste",
  "For 48 hours only: Buy 5, pay for 4! You'll automatically get the cheapest one for free*",
];

const variants = ["75 g - S", "100 g - M", "140 g - L", "165 g - XL"];

function SnowflakeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3v18M5.6 6.2l12.8 11.6M18.4 6.2 5.6 17.8M4 12h16" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20.2 5.8 14C2 10.2 4.6 4 9.9 5.1c.9.2 1.7.7 2.1 1.4.5-.7 1.2-1.2 2.1-1.4 5.3-1.1 7.9 5.1 4.1 8.9L12 20.2Z" />
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

export async function generateMetadata() {
  return {
    title: `${product.name} | Honest Catch`,
    description: "Premium lobster tail product details and ordering options.",
  };
}

export default function ProductDetailsPage() {
  return (
    <section className="pdp-page">
      <div className="pdp-gallery">
        <div className="pdp-thumbs">
          {product.gallery.map((image, index) => (
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
            style={{ backgroundImage: `url("${product.image}")` }}
          ></div>
          <span className="pdp-cert">MSC</span>
        </div>
      </div>

      <div className="pdp-info">
        <div className="pdp-rating">
          <span>★★★★★</span>
          <small>(56 Reviews)</small>
        </div>

        <h1>{product.name}</h1>
        <p className="pdp-subtitle">{product.detail}</p>

        <div className="pdp-price">
          <strong>{product.price}</strong>
          <span>{product.unit}</span>
        </div>

        <div className="pdp-badges" aria-label="Certifications">
          <span>MSC</span>
          <span>SASHIMI</span>
        </div>

        <p className="pdp-description">
          Thanks to optimal living conditions, this MSC-certified rock lobster has
          a sweet taste. This is the tail of the rock lobster. In order to keep
          stocks healthy and stable, the fisheries catch quantities are limited.
        </p>

        <ol className="pdp-features">
          {features.map((feature, index) => (
            <li key={feature}>
              <span>{index + 1}</span>
              {feature}
            </li>
          ))}
        </ol>

        <div className="pdp-variants">
          <p>Variants:</p>
          <div>
            {variants.map((variant, index) => (
              <button className={index === 2 ? "disabled" : ""} type="button" key={variant}>
                {variant}
              </button>
            ))}
          </div>
        </div>

        <div className="pdp-availability">
          <TruckIcon />
          <span>Available immediately</span>
        </div>

        <div className="pdp-cart-row">
          <div className="quantity-control">
            <button type="button">-</button>
            <span>1</span>
            <button type="button">+</button>
          </div>
          <button className="pdp-add" type="button">Add to cart</button>
          <button className="pdp-wishlist" type="button" aria-label="Save product">
            <HeartIcon />
          </button>
        </div>

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
