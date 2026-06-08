"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import SeafoodFilterDrawer from "@/components/SeafoodFilterDrawer";

const sortOptions = [
  { value: "featured", label: "Topseller" },
  { value: "name-asc", label: "Name A-Z" },
  { value: "name-desc", label: "Name Z-A" },
  { value: "price-asc", label: "Preis aufsteigend" },
  { value: "price-desc", label: "Preis absteigend" },
  { value: "newest", label: "Neuheiten zuerst" },
];

const PRODUCTS_PER_PAGE = 8;

function productPrice(product) {
  const match = product.price.match(/\d+(?:[.,]\d+)?/);
  return match ? Number(match[0].replace(",", ".")) : 0;
}

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

export default function FishProductBrowser({ products, showQuiz = true }) {
  const [sortBy, setSortBy] = useState("featured");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [filters, setFilters] = useState({});
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const sortRef = useRef(null);

  useEffect(() => {
    function closeSort(event) {
      if (event.key === "Escape" || !sortRef.current?.contains(event.target)) {
        setIsSortOpen(false);
      }
    }

    document.addEventListener("keydown", closeSort);
    document.addEventListener("pointerdown", closeSort);

    return () => {
      document.removeEventListener("keydown", closeSort);
      document.removeEventListener("pointerdown", closeSort);
    };
  }, []);

  const sortedProducts = useMemo(() => {
    const filteredProducts = products.filter((product) => matchesFilters(product, filters));
    const nextProducts = [...filteredProducts];

    if (sortBy === "name-asc") {
      return nextProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortBy === "name-desc") {
      return nextProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    if (sortBy === "price-asc") {
      return nextProducts.sort((a, b) => productPrice(a) - productPrice(b));
    }
    if (sortBy === "price-desc") {
      return nextProducts.sort((a, b) => productPrice(b) - productPrice(a));
    }
    if (sortBy === "newest") {
      return nextProducts.reverse();
    }

    return nextProducts;
  }, [filters, products, sortBy]);

  const selectedLabel = sortOptions.find((option) => option.value === sortBy)?.label;
  const visibleProducts = sortedProducts.slice(0, visibleCount);
  const hasMoreProducts = visibleCount < sortedProducts.length;

  return (
    <>
      <div className="plp-toolbar">
        <SeafoodFilterDrawer
          selectedFilters={filters}
          onApply={(nextFilters) => {
            setFilters(nextFilters);
            setVisibleCount(PRODUCTS_PER_PAGE);
          }}
        />

        <div className="plp-controls">
          <span>{sortedProducts.length} Products</span>
          <div className="sort-menu" ref={sortRef}>
            <button
              className="sort-button"
              type="button"
              onClick={() => setIsSortOpen((open) => !open)}
              aria-expanded={isSortOpen}
              aria-haspopup="listbox"
            >
              Sort by: {selectedLabel}
              <svg className={isSortOpen ? "open" : ""} viewBox="0 0 24 24" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>

            {isSortOpen && (
              <div className="sort-options" role="listbox" aria-label="Sort products">
                {sortOptions.map((option) => (
                  <label key={option.value}>
                    <input
                      type="radio"
                      name="fish-sort"
                      value={option.value}
                      checked={sortBy === option.value}
                      onChange={() => {
                        setSortBy(option.value);
                        setVisibleCount(PRODUCTS_PER_PAGE);
                        setIsSortOpen(false);
                      }}
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="plp-grid">
        {sortedProducts.length === 0 ? (
          <div className="plp-empty">
            <h2>No products match these filters.</h2>
            <p>Reset the filters to see the full collection again.</p>
          </div>
        ) : showQuiz ? (
          <>
            {visibleProducts.slice(0, 2).map((product) => (
              <ProductCard product={product} key={product.name} />
            ))}
            <QuizCard />
            {visibleProducts.slice(2).map((product) => (
              <ProductCard product={product} key={product.name} />
            ))}
          </>
        ) : (
          visibleProducts.map((product) => (
            <ProductCard product={product} key={`${product.slug}-${product.name}`} />
          ))
        )}
      </div>

      {hasMoreProducts && (
        <div className="plp-load-more">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PRODUCTS_PER_PAGE)}
          >
            Load more products
          </button>
        </div>
      )}
    </>
  );
}

function matchesFilters(product, filters) {
  return Object.entries(filters).every(([group, options]) =>
    options.some((option) => matchesOption(product, group, option))
  );
}

function matchesOption(product, group, option) {
  const content = `${product.name} ${product.detail} ${product.certified} ${product.badge}`.toLowerCase();
  const optionText = option.toLowerCase();

  if (group === "Certification") return product.certified.toLowerCase() === optionText;
  if (group === "Skin") return content.includes(optionText);
  if (group === "Delivery condition") {
    if (option === "Frozen") return !content.includes("fresh");
    if (option === "Fresh") return content.includes("fresh");
    return content.includes("cooked");
  }
  if (group === "Origin") {
    if (option === "Wild catch") return content.includes("wild");
    return !content.includes("wild");
  }
  if (group === "Unit") {
    const weight = Number(product.detail.match(/\d+/)?.[0] ?? 0);
    if (option === "Under 200 g") return weight > 0 && weight < 200;
    if (option === "200 g - 500 g") return weight >= 200 && weight <= 500;
    return weight > 500;
  }

  return content.includes(optionText);
}

function ProductCard({ product }) {
  return (
    <article className="plp-card">
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
    </article>
  );
}

function QuizCard() {
  return (
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
  );
}
