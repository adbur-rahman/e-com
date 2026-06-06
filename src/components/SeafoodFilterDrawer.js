"use client";

import { useState } from "react";

const productTypes = [
  "Caviar (1)",
  "Crustaceans (17)",
  "Gyoza (1)",
  "Shellfish (9)",
  "Shrimp (27)",
  "Squids (7)",
];

const filterGroups = [
  "Genus",
  "Certification",
  "Country of origin",
  "Origin",
  "Brand",
  "Peel",
  "Portioning",
];

function FilterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 7h14" />
      <path d="M5 17h14" />
      <circle cx="9" cy="7" r="2" />
      <circle cx="15" cy="17" r="2" />
    </svg>
  );
}

function Chevron({ open = false }) {
  return (
    <svg className={open ? "open" : ""} viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 9 7 7 7-7" />
    </svg>
  );
}

export default function SeafoodFilterDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button className="filter-button" type="button" onClick={() => setIsOpen(true)}>
        <FilterIcon />
        Filter
      </button>

      {isOpen && (
        <div className="filter-drawer-shell" role="dialog" aria-modal="true" aria-label="Filter products">
          <button className="filter-backdrop" type="button" onClick={() => setIsOpen(false)} aria-label="Close filters"></button>
          <aside className="filter-drawer">
            <div className="filter-drawer-header">
              <h2>Filter</h2>
              <button type="button" onClick={() => setIsOpen(false)} aria-label="Close filters">
                <span></span>
                <span></span>
              </button>
            </div>

            <div className="filter-drawer-body">
              <a href="#">Reset All</a>

              <section className="filter-section expanded">
                <button type="button">
                  Product Type
                  <Chevron open />
                </button>
                <div className="filter-options">
                  {productTypes.map((type) => (
                    <label key={type}>
                      <input type="radio" name="product-type" />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </section>

              {filterGroups.map((group) => (
                <section className="filter-section" key={group}>
                  <button type="button">
                    {group}
                    <Chevron />
                  </button>
                </section>
              ))}
            </div>

            <button className="filter-save" type="button" onClick={() => setIsOpen(false)}>
              Save & Close
            </button>
          </aside>
        </div>
      )}
    </>
  );
}
