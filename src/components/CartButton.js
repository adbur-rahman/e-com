"use client";

import { useCart } from "@/components/CartProvider";

export default function CartButton() {
  const { itemCount, openCart } = useCart();

  return (
    <button className="icon-button cart-button" type="button" onClick={openCart} aria-label="Cart">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4.8 8.5h14.4l-1 11H5.8l-1-11Z" />
        <path d="M8.5 8.5a3.5 3.5 0 0 1 7 0" />
        <path d="M8 13h.1M12 13h.1M16 13h.1" />
      </svg>
      <span>{itemCount}</span>
    </button>
  );
}
