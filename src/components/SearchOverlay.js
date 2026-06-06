"use client";

import { useMemo, useRef, useState } from "react";

const mostWanted = [
  "Bavarian shrimp",
  "Crawfish",
  "Salmon",
  "Octopus",
  "Cooking boxes",
  "Lobster",
  "Caviar",
  "Tuna saku",
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="10.8" cy="10.8" r="6.8" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

export default function SearchOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  const results = useMemo(() => {
    const term = query.trim().toLowerCase();

    if (!term) {
      return mostWanted.slice(0, 5);
    }

    return mostWanted.filter((item) => item.toLowerCase().includes(term));
  }, [query]);

  function openSearch() {
    setIsOpen(true);
    window.setTimeout(() => inputRef.current?.focus(), 0);
  }

  function closeSearch() {
    setIsOpen(false);
    setQuery("");
  }

  return (
    <>
      <button className="icon-button" type="button" onClick={openSearch} aria-label="Search">
        <SearchIcon />
      </button>

      {isOpen && (
        <div className="search-overlay" role="dialog" aria-modal="true" aria-label="Search products">
          <div className="search-overlay-bar">
            <SearchIcon />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="What are you looking for?"
              aria-label="Search products"
            />
            <button type="button" className="search-close" onClick={closeSearch} aria-label="Close search">
              <span></span>
              <span></span>
            </button>
          </div>

          <div className="search-suggestions">
            <h2>{query ? "Search Results" : "Most Wanted"}</h2>
            {results.length > 0 ? (
              <ul>
                {results.map((item) => (
                  <li key={item}>
                    <button type="button" onClick={() => setQuery(item)}>
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No matches found.</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
