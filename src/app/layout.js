import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import DiscountOffer from "@/components/DiscountOffer";
import SearchOverlay from "@/components/SearchOverlay";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Honest Catch Seafood | Premium Sustainable Seafood",
  description:
    "Shop premium sustainable seafood, caviar, sauces, and frozen favorites delivered fresh.",
};

const navItems = [
  { label: "Seafood", href: "/seafood", menu: "seafood" },
  { label: "Fish", href: "/fish", menu: "fish" },
  { label: "Lobster", href: "#" },
  { label: "Shrimp", href: "#" },
  { label: "Caviar", href: "#" },
  { label: "Recipes", href: "#" },
  { label: "About", href: "#" },
];

const megaMenus = {
  seafood: {
    links: ["ALL Seafood", "Shrimp", "Crustaceans", "Squids", "Shellfish"],
    ambient:
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=800&q=75",
    images: [
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=400&q=85",
      "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=400&q=85",
      "https://images.unsplash.com/photo-1606851091880-ca6c8f31f31f?auto=format&fit=crop&w=400&q=85",
      "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&w=400&q=85",
      "https://images.unsplash.com/photo-1563379091339-03246963d29a?auto=format&fit=crop&w=400&q=85",
      "https://images.unsplash.com/photo-1580109802681-872f0c179b22?auto=format&fit=crop&w=400&q=85",
      "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=400&q=85",
      "https://images.unsplash.com/photo-1606851091851-e8c8c0fca5ba?auto=format&fit=crop&w=400&q=85",
      "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&w=400&q=85",
      "https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=401&q=85",
      "https://images.unsplash.com/photo-1606851091880-ca6c8f31f31f?auto=format&fit=crop&w=401&q=85",
      "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?auto=format&fit=crop&w=401&q=85",
    ],
  },
  fish: {
    links: ["ALL Fish", "Fish raw", "Smoked fish", "Canned fish", "Caviar"],
    ambient:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=75",
    images: [
      "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?auto=format&fit=crop&w=400&q=85",
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=85",
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=400&q=85",
      "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=400&q=85",
      "https://images.unsplash.com/photo-1607301405390-d831c242f59d?auto=format&fit=crop&w=400&q=85",
      "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&w=400&q=85",
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=400&q=85",
      "https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?auto=format&fit=crop&w=400&q=85",
      "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?auto=format&fit=crop&w=400&q=85",
    ],
  },
};

function Icon({ name }) {
  const icons = {
    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),
    search: (
      <>
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 4.5 4.5" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="7.5" r="3.2" />
        <path d="M4.5 20c1.3-4 3.8-6 7.5-6s6.2 2 7.5 6" />
      </>
    ),
    heart: (
      <path d="M12 20.2 5.8 14C2 10.2 4.6 4 9.9 5.1c.9.2 1.7.7 2.1 1.4.5-.7 1.2-1.2 2.1-1.4 5.3-1.1 7.9 5.1 4.1 8.9L12 20.2Z" />
    ),
    cart: (
      <>
        <path d="M4.8 8.5h14.4l-1 11H5.8l-1-11Z" />
        <path d="M8.5 8.5a3.5 3.5 0 0 1 7 0" />
        <path d="M8 13h.1M12 13h.1M16 13h.1" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

function BrandLogo({ priority = false }) {
  return (
    <Image
      src="/logo.webp"
      alt=""
      width={200}
      height={70}
      className="brand-logo"
      priority={priority}
    />
  );
}

function SocialIcon({ name }) {
  const icons = {
    instagram: (
      <>
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5"
          fill="none"
          stroke="#0f31b6"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="4" fill="none" stroke="#0f31b6" strokeWidth="2" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="#0f31b6" />
      </>
    ),
    facebook: (
      <>
        <circle cx="12" cy="12" r="10" fill="#0f31b6" />
        <path
          d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V5c-.8-.1-1.7-.2-2.5-.2-2.7 0-4.5 1.6-4.5 4.6V11H7v3h2.8v8h3.7Z"
          fill="#ffffff"
        />
      </>
    ),
    youtube: (
      <>
        <rect x="1" y="5" width="22" height="14" rx="4.5" fill="#0f31b6" />
        <path d="m10 16 6-4-6-4v8Z" fill="#ffffff" />
      </>
    ),
    tiktok: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="4" fill="#0f31b6" />
        <path
          d="M13.6 6.5c.3 1.5 1.2 2.4 2.8 2.7v2a5.9 5.9 0 0 1-2.8-.8v3.4a3.5 3.5 0 1 1-3-3.4v2.1a1.5 1.5 0 1 0 1 1.4V6.5h2Z"
          fill="#ffffff"
        />
      </>
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2.5" fill="#0f31b6" />
        <circle cx="8" cy="9" r="1.3" fill="#ffffff" />
        <path d="M6.8 11h2.4v6H6.8v-6Zm4 0h2.3v.9c.7-.8 1.5-1.2 2.5-1.2 2 0 2.8 1.3 2.8 3.5V17H16v-2.5c0-1.1-.3-1.7-1.2-1.7-1 0-1.5.7-1.5 2V17h-2.5v-6Z" fill="#ffffff" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {icons[name]}
    </svg>
  );
}

function PaymentIcon({ name }) {
  const icons = {
    visa: (
      <>
        <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" />
        <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z" />
        <text x="19" y="15.5" fill="#142688" fontSize="8" fontWeight="900" textAnchor="middle">VISA</text>
      </>
    ),
    mastercard: (
      <>
        <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" />
        <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z" />
        <circle fill="#eb001b" cx="15" cy="12" r="7" />
        <circle fill="#f79e1b" cx="23" cy="12" r="7" />
        <path fill="#ff5f00" d="M22 12c0-2.4-1.2-4.5-3-5.7-1.8 1.3-3 3.4-3 5.7s1.2 4.5 3 5.7c1.8-1.2 3-3.3 3-5.7Z" />
      </>
    ),
    amex: (
      <>
        <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" />
        <path fill="#006fcf" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z" />
        <text x="19" y="10.7" fill="#fff" fontSize="5.7" fontWeight="900" textAnchor="middle">AMERICAN</text>
        <text x="19" y="16.4" fill="#fff" fontSize="6.7" fontWeight="900" textAnchor="middle">EXPRESS</text>
      </>
    ),
    paypal: (
      <>
        <path opacity=".07" d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3Z" />
        <path fill="#fff" d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32Z" />
        <path fill="#003087" d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1Z" />
        <path fill="#3086c8" d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4l.4-2.5c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8Z" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 38 24" role="img" aria-label={name}>
      {icons[name]}
    </svg>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <header className="site-header">
          <div className="announcement-bar">
            <span>Free chilled shipping over ৳ 250</span>
            <span>15% off first seafood box</span>
            <span>Next-day delivery available</span>
          </div>

          <div className="header-main">
            <div className="header-shell">
              <button className="menu-button" aria-label="Open menu">
                <Icon name="menu" />
              </button>

              <Link href="/" className="brand" aria-label="Honest Catch home">
                <BrandLogo priority />
              </Link>

              <nav className="nav-categories" aria-label="Primary navigation">
                <ul>
                  {navItems.map((item) => (
                    <li className={item.menu ? "has-mega" : ""} key={item.label}>
                      <a href={item.href}>{item.label}</a>
                      {item.menu && <MegaMenu menu={megaMenus[item.menu]} />}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="header-actions" aria-label="Shop actions">
                <SearchOverlay />
                <a className="icon-button" href="#" aria-label="Wishlist">
                  <Icon name="heart" />
                </a>
                <a className="icon-button cart-button" href="#" aria-label="Cart">
                  <Icon name="cart" />
                  <span>2</span>
                </a>
                <a className="icon-button account-link" href="#" aria-label="Account">
                  <Icon name="user" />
                </a>
              </div>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <DiscountOffer />

        <nav className="mobile-bottom-nav" aria-label="Mobile quick navigation">
          <a href="#">Home</a>
          <a href="#">Search</a>
          <a href="#">Wishlist</a>
          <a href="#">Cart</a>
        </nav>

        <footer className="site-footer">
          <section className="footer-press" aria-labelledby="known-by-title">
            <div className="footer-press-inner">
              <h2 id="known-by-title">Known by</h2>
              <div className="press-logos" aria-label="Press mentions">
                {[
                  ["press-spiegel.png", "Der Spiegel"],
                  ["press-award.png", "German Online Shop Award 2025"],
                  ["press-taste.png", "The Taste"],
                  ["press-frankfurter.png", "Frankfurter Allgemeine"],
                  ["press-freaks.png", "Freaks to Table"],
                  ["press-galileo.png", "Galileo"],
                  ["press-slowfood.png", "Slow Food"],
                  ["press-gala.png", "Gala"],
                  ["press-feinschmecker.png", "Der Feinschmecker"],
                  ["press-focus.png", "Focus"],
                ].map(([src, alt]) => (
                  <span key={src}>
                    <Image src={`/${src}`} alt={alt} width={180} height={110} />
                  </span>
                ))}
              </div>
            </div>
          </section>

          <div className="footer-fish-badge" aria-hidden="true"></div>

          <div className="footer-main">
            <div className="footer-inner">
              <div className="footer-grid">
                <div className="footer-column">
                  <h3>Information</h3>
                  <a href="#">GTC</a>
                  <a href="#">Right of withdrawal</a>
                  <a href="#">GDPR</a>
                  <a href="#">Imprint</a>
                  <a href="#">Cookies</a>
                  <a href="#">Accessibility</a>
                  <a href="#">Accessibility Assistance</a>
                </div>
                <div className="footer-column">
                  <h3>Service</h3>
                  <a href="#">Contact</a>
                  <a href="#">Shipping conditions &amp; payment</a>
                  <a href="#">Packaging</a>
                  <a href="#">Click &amp; Collect</a>
                  <a href="#">Refer a friend</a>
                </div>
                <div className="footer-column">
                  <h3>HONEST CATCH</h3>
                  <a href="#">About Us</a>
                  <a href="#">Our promise</a>
                  <a href="#">Career</a>
                  <a href="#">News</a>
                  <a href="#">Wholesale</a>
                </div>
                <div className="footer-newsletter">
                  <h3>Newsletter</h3>
                  <p>
                    Benefit from discounts, new products &amp; events. Register
                    now and receive a 10% discount on your first order.
                  </p>
                  <form>
                    <label htmlFor="footer-email">Email address</label>
                    <input id="footer-email" type="email" placeholder="Email address" />
                    <button type="submit">Sign up</button>
                  </form>
                </div>
              </div>

              <div className="footer-lower">
                <div>
                  <h3>Follow us</h3>
                  <div className="social-links">
                    {["instagram", "facebook", "youtube", "tiktok", "linkedin"].map((name) => (
                      <a href="#" aria-label={name} key={name}>
                        <SocialIcon name={name} />
                      </a>
                    ))}
                  </div>
                  <small>*Prices include VAT plus shipping costs</small>
                </div>
                <div>
                  <h3>Pay with</h3>
                  <div className="payment-icons" aria-label="Accepted payments">
                    {["visa", "mastercard", "amex", "paypal"].map((name) => (
                      <PaymentIcon name={name} key={name} />
                    ))}
                  </div>
                  <small>©FOOD NETWORK AGRO 2026</small>
                </div>
                <div className="footer-shipping">
                  <h3>Shipping</h3>
                  <Image src="/footer-go-shipping.png" alt="GO! shipping" width={52} height={30} />
                </div>
              </div>
            </div>
          </div>
          <div className="footer-waves" aria-hidden="true"></div>
        </footer>
      </body>
    </html>
  );
}

function MegaMenu({ menu }) {
  return (
    <div className="mega-menu">
      <div
        className="mega-ambient"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.9)), url("${menu.ambient}")`,
        }}
      ></div>
      <div className="mega-links">
        {menu.links.map((link) => (
          <a href="#" key={link}>
            {link}
          </a>
        ))}
      </div>
      <div className="mega-collage">
        {menu.images.map((image, index) => (
          <span
            key={`${image}-${index}`}
            style={{ backgroundImage: `url("${image}")` }}
          ></span>
        ))}
      </div>
      <div className="mega-promo">
        <p>Premium cuts, carefully sourced, ready for your next memorable meal.</p>
      </div>
    </div>
  );
}
