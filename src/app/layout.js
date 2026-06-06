import { Inter, Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
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
        <defs>
          <linearGradient id="instagram-gradient" x1="4" y1="20" x2="20" y2="4">
            <stop offset="0" stopColor="#feda75" />
            <stop offset="0.28" stopColor="#fa7e1e" />
            <stop offset="0.5" stopColor="#d62976" />
            <stop offset="0.74" stopColor="#962fbf" />
            <stop offset="1" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          fill="url(#instagram-gradient)"
        />
        <circle cx="12" cy="12" r="4" fill="none" stroke="#ffffff" strokeWidth="1.7" />
        <circle cx="17" cy="7" r="1.2" fill="#ffffff" />
      </>
    ),
    facebook: (
      <>
        <circle cx="12" cy="12" r="9" fill="#1877f2" />
        <path
          d="M13.6 21v-6.6h2.2l.4-2.6h-2.6v-1.7c0-.8.3-1.3 1.4-1.3h1.4V6.5c-.7-.1-1.4-.1-2.1-.1-2.2 0-3.8 1.4-3.8 3.9v1.5H8.1v2.6h2.4V21h3.1Z"
          fill="#ffffff"
        />
      </>
    ),
    youtube: (
      <>
        <rect x="2.5" y="6" width="19" height="12" rx="3.5" fill="#ff0000" />
        <path d="m10.4 15.2 5-3.2-5-3.2v6.4Z" fill="#ffffff" />
      </>
    ),
  };

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
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

        <nav className="mobile-bottom-nav" aria-label="Mobile quick navigation">
          <a href="#">Home</a>
          <a href="#">Search</a>
          <a href="#">Wishlist</a>
          <a href="#">Cart</a>
        </nav>

        <footer className="site-footer">
          <div className="container footer-grid">
            <div>
              <Link href="/" className="brand footer-brand" aria-label="Honest Catch home">
                <BrandLogo />
              </Link>
              <p>
                Premium seafood selected for flavor, traceability, and reliable
                chilled delivery.
              </p>
            </div>
            <div>
              <h3>Company</h3>
              <a href="#">About</a>
              <a href="#">Sustainability</a>
              <a href="#">Careers</a>
            </div>
            <div>
              <h3>Customer</h3>
              <a href="#">FAQ</a>
              <a href="#">Shipping</a>
              <a href="#">Returns</a>
            </div>
            <div>
              <h3>Social</h3>
              <div className="social-links">
                <a href="#" aria-label="Instagram">
                  <SocialIcon name="instagram" />
                </a>
                <a href="#" aria-label="Facebook">
                  <SocialIcon name="facebook" />
                </a>
                <a href="#" aria-label="YouTube">
                  <SocialIcon name="youtube" />
                </a>
              </div>
              <div className="payment-icons" aria-label="Accepted payments">
                <span>Visa</span>
                <span>MC</span>
                <span>PayPal</span>
              </div>
            </div>
          </div>
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
