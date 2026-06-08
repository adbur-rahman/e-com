import AddToCartButton from "@/components/AddToCartButton";

const categories = [
  {
    title: "Fish",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Lobster",
    image:
      "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Shrimp",
    image:
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Caviar",
    image:
      "https://images.unsplash.com/photo-1606851091851-e8c8c0fca5ba?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Sauces",
    image:
      "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Frozen Foods",
    image:
      "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=900&q=85",
  },
];

const products = [
  {
    name: "Loch Salmon Fillet",
    detail: "Skin on | 140 g",
    price: "৳ 39",
    oldPrice: "৳ 48",
    rating: "4.9",
    badge: "-20%",
    image:
      "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Tuna Saku Block",
    detail: "Sashimi grade | 200 g",
    price: "৳ 92",
    oldPrice: "৳ 108",
    rating: "4.8",
    badge: "Chef pick",
    image:
      "https://images.unsplash.com/photo-1607301405390-d831c242f59d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "GOOD Gamba Prawns",
    detail: "Head and shell | 500 g",
    price: "৳ 128",
    oldPrice: "৳ 149",
    rating: "5.0",
    badge: "Fresh",
    image:
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Sashimi Fish Box",
    detail: "Salmon, tuna, hamachi",
    price: "৳ 245",
    oldPrice: "৳ 275",
    rating: "4.9",
    badge: "Bundle",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=85",
  },
];

const recipes = [
  {
    title: "Butter-poached lobster with citrus",
    time: "25 min",
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Weeknight salmon with herbs",
    time: "18 min",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Sashimi platter at home",
    time: "15 min",
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=900&q=85",
  },
];

const testimonials = [
  {
    name: "Maya R.",
    text: "The salmon arrived beautifully chilled and tasted restaurant-level.",
    rating: "★★★★★",
  },
  {
    name: "Omar K.",
    text: "Packaging is premium, delivery is reliable, and the prawns are superb.",
    rating: "★★★★★",
  },
  {
    name: "Lina S.",
    text: "My go-to shop for dinner parties. The quality feels special every time.",
    rating: "★★★★★",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">Sustainably sourced</span>
          <h1>Premium Sustainable Seafood Delivered Fresh</h1>
          <p>
            Luxury fish, shellfish, caviar, and chef-ready delicacies delivered
            chilled with transparent sourcing and refined presentation.
          </p>
          <div className="hero-actions">
            <a href="#" className="primary-button">
              Shop Now
            </a>
            <a href="#" className="secondary-button">
              Explore Collections
            </a>
          </div>
        </div>
      </section>

      <section className="benefit-strip" aria-label="Store benefits">
        <span>Traceable sourcing</span>
        <span>Eco packaging</span>
        <span>Chilled delivery</span>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span className="eyebrow">Shop by taste</span>
          <h2>Curated categories</h2>
        </div>
        <div className="category-grid">
          {categories.map((category) => (
            <a
              className="category-card"
              href="#"
              key={category.title}
              style={{ backgroundImage: `url("${category.image}")` }}
            >
              <span>{category.title}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Featured products</span>
            <h2>Fresh from the counter</h2>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <div
                  className="product-image"
                  style={{ backgroundImage: `url("${product.image}")` }}
                >
                  <span>{product.badge}</span>
                  <button aria-label={`Save ${product.name}`}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 20.2 5.8 14C2 10.2 4.6 4 9.9 5.1c.9.2 1.7.7 2.1 1.4.5-.7 1.2-1.2 2.1-1.4 5.3-1.1 7.9 5.1 4.1 8.9L12 20.2Z" />
                    </svg>
                  </button>
                </div>
                <div className="product-details">
                  <div className="rating">{product.rating} ★</div>
                  <h3>{product.name}</h3>
                  <p>{product.detail}</p>
                  <div className="price-row">
                    <strong>{product.price}</strong>
                    <small>{product.oldPrice}</small>
                  </div>
                  <AddToCartButton
                    product={{
                      id: product.name,
                      name: product.name,
                      detail: product.detail,
                      price: product.price,
                      unit: product.detail,
                      image: product.image,
                    }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container sustainability-section">
        <div
          className="sustainability-image"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=1100&q=85")',
          }}
        ></div>
        <div className="sustainability-copy">
          <span className="eyebrow">Our standards</span>
          <h2>Sustainable fishing, premium sourcing, eco packaging.</h2>
          <p>
            We partner with responsible fisheries and pack every order in
            chilled, recyclable materials to protect flavor from dock to door.
          </p>
          <ul>
            <li>Verified supply partners</li>
            <li>Temperature-safe delivery</li>
            <li>Reusable and recyclable materials</li>
          </ul>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <span className="eyebrow">Kitchen inspiration</span>
          <h2>Recipe showcase</h2>
        </div>
        <div className="recipe-grid">
          {recipes.map((recipe) => (
            <article className="recipe-card" key={recipe.title}>
              <div
                className="recipe-image"
                style={{ backgroundImage: `url("${recipe.image}")` }}
              ></div>
              <div>
                <p>
                  {recipe.time} / {recipe.difficulty}
                </p>
                <h3>{recipe.title}</h3>
                <a href="#">View recipe</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section testimonial-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Loved by customers</span>
            <h2>Fresh reviews</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div>{testimonial.rating}</div>
                <p>{testimonial.text}</p>
                <strong>{testimonial.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container newsletter-panel">
          <div>
            <span className="eyebrow">Seafood journal</span>
            <h2>Get 15% off your first premium catch.</h2>
            <p>Seasonal drops, chef tips, and private offers in your inbox.</p>
          </div>
          <form className="newsletter-form">
            <label htmlFor="newsletter-email">Email address</label>
            <div>
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
              />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
