"use client";

import { useEffect, useState } from "react";

const filterGroups = [
  {
    name: "Product Type",
    options: ["Fish", "Crustaceans", "Shellfish", "Shrimp", "Squids", "Prepared food"],
  },
  { name: "Product Art", options: ["Fillet", "Whole", "Tail", "Steak", "Soup"] },
  { name: "Genus", options: ["Salmon", "Tuna", "Lobster", "Shrimp", "Mussel", "Octopus"] },
  { name: "Certification", options: ["BIO", "MSC", "ASC"] },
  { name: "Country of origin", options: ["Germany", "Canada", "Spain", "New Zealand"] },
  { name: "Origin", options: ["Wild catch", "Aquaculture"] },
  { name: "Delivery condition", options: ["Frozen", "Fresh", "Pre-cooked"] },
  { name: "Brand", options: ["HONEST CATCH", "GOOD GAMBA", "Loch Duart"] },
  { name: "Skin", options: ["With skin", "Without skin"] },
  { name: "Portioning", options: ["Single portion", "Multiple portions", "Whole side"] },
  { name: "Refinement", options: ["Natural", "Smoked", "Marinated"] },
  { name: "Preparation", options: ["Raw", "Cooked", "Ready to eat"] },
  { name: "Unit", options: ["Under 200 g", "200 g - 500 g", "Over 500 g"] },
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

export default function SeafoodFilterDrawer({ selectedFilters = {}, onApply }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState(["Product Type"]);
  const [draftFilters, setDraftFilters] = useState(selectedFilters);

  useEffect(() => {
    if (isOpen) {
      setDraftFilters(selectedFilters);
    }
  }, [isOpen, selectedFilters]);

  function toggleGroup(group) {
    setOpenGroups((groups) =>
      groups.includes(group) ? groups.filter((item) => item !== group) : [...groups, group]
    );
  }

  function toggleOption(group, option) {
    setDraftFilters((filters) => {
      const selected = filters[group] ?? [];
      const nextSelected = selected.includes(option)
        ? selected.filter((item) => item !== option)
        : [...selected, option];

      if (nextSelected.length === 0) {
        const { [group]: unused, ...remainingFilters } = filters;
        void unused;
        return remainingFilters;
      }

      return { ...filters, [group]: nextSelected };
    });
  }

  function resetFilters() {
    setDraftFilters({});
    onApply?.({});
  }

  function saveFilters() {
    onApply?.(draftFilters);
    setIsOpen(false);
  }

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
              <button className="filter-reset" type="button" onClick={resetFilters}>
                Reset All
              </button>

              {filterGroups.map((group) => {
                const isExpanded = openGroups.includes(group.name);

                return (
                <section className="filter-section" key={group.name}>
                  <button type="button" onClick={() => toggleGroup(group.name)}>
                    {group.name}
                    <Chevron open={isExpanded} />
                  </button>
                  {isExpanded && (
                    <div className="filter-options">
                      {group.options.map((option) => (
                        <label key={option}>
                          <input
                            type="checkbox"
                            checked={draftFilters[group.name]?.includes(option) ?? false}
                            onChange={() => toggleOption(group.name, option)}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  )}
                </section>
                );
              })}
            </div>

            <button className="filter-save" type="button" onClick={saveFilters}>
              Save & Close
            </button>
          </aside>
        </div>
      )}
    </>
  );
}
