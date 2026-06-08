"use client";

import { useState } from "react";
import AddToCartButton from "@/components/AddToCartButton";

export default function ProductCartControls({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="pdp-cart-row">
      <div className="quantity-control">
        <button type="button" onClick={() => setQuantity((count) => Math.max(1, count - 1))}>-</button>
        <span>{quantity}</span>
        <button type="button" onClick={() => setQuantity((count) => count + 1)}>+</button>
      </div>
      <AddToCartButton className="pdp-add" product={product} quantity={quantity} />
      <button className="pdp-wishlist" type="button" aria-label="Save product">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 20.2 5.8 14C2 10.2 4.6 4 9.9 5.1c.9.2 1.7.7 2.1 1.4.5-.7 1.2-1.2 2.1-1.4 5.3-1.1 7.9 5.1 4.1 8.9L12 20.2Z" />
        </svg>
      </button>
    </div>
  );
}
