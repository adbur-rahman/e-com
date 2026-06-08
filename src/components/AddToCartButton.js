"use client";

import { useCart } from "@/components/CartProvider";

export default function AddToCartButton({ className = "add-button", product, quantity = 1 }) {
  const { addItem } = useCart();

  return (
    <button className={className} type="button" onClick={() => addItem(product, quantity)}>
      Add to cart
    </button>
  );
}
