"use client";

import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

function numericPrice(price) {
  const match = price.match(/\d+(?:[.,]\d+)?/);
  return match ? Number(match[0].replace(",", ".")) : 0;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  function addItem(product, quantity = 1) {
    setItems((currentItems) => {
      const existing = currentItems.find((item) => item.id === product.id);

      if (existing) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }

      return [...currentItems, { ...product, quantity }];
    });
    setIsOpen(true);
  }

  function updateQuantity(id, quantity) {
    if (quantity < 1) {
      setItems((currentItems) => currentItems.filter((item) => item.id !== id));
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  }

  function removeItem(id) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== id));
  }

  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const subtotal = items.reduce(
    (total, item) => total + numericPrice(item.price) * item.quantity,
    0
  );

  const value = useMemo(
    () => ({
      addItem,
      closeCart: () => setIsOpen(false),
      itemCount,
      items,
      openCart: () => setIsOpen(true),
      removeItem,
      subtotal,
      updateQuantity,
    }),
    [itemCount, items, subtotal]
  );

  return (
    <CartContext.Provider value={value}>
      <div className={isOpen ? "cart-page-content cart-page-content-blurred" : "cart-page-content"}>
        {children}
      </div>
      {isOpen && <CartDrawer />}
    </CartContext.Provider>
  );
}

function CartDrawer() {
  const { closeCart, items, removeItem, subtotal, updateQuantity } = useCart();
  const [checkoutStarted, setCheckoutStarted] = useState(false);

  return (
    <div className="cart-drawer-shell" role="dialog" aria-modal="true" aria-label="Your cart">
      <button className="cart-drawer-backdrop" type="button" onClick={closeCart} aria-label="Close cart"></button>
      <aside className="cart-drawer">
        <header className="cart-drawer-header">
          <div>
            <h2>Your cart</h2>
            <p>Still ৳ 127.03 until free delivery for weekdays.</p>
          </div>
          <button type="button" onClick={closeCart} aria-label="Close cart">
            <span></span>
            <span></span>
          </button>
        </header>

        <div className="cart-progress" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="cart-drawer-items">
          {items.length === 0 ? (
            <div className="cart-empty">
              <h3>Your cart is empty.</h3>
              <button type="button" onClick={closeCart}>Continue shopping</button>
            </div>
          ) : (
            items.map((item) => (
              <article className="cart-line" key={item.id}>
                <div className="cart-line-image" style={{ backgroundImage: `url("${item.image}")` }}></div>
                <div className="cart-line-info">
                  <h3>{item.name}</h3>
                  <small>{item.unit || item.detail}</small>
                  <div className="cart-line-controls">
                    <span>{item.variant || item.detail?.split("|").at(-1)?.trim()}</span>
                    <div className="cart-quantity">
                      <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                      <b>{item.quantity}</b>
                      <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <button className="cart-remove" type="button" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`}>×</button>
                  </div>
                </div>
                <strong>{item.price}</strong>
              </article>
            ))
          )}
        </div>

        <footer className="cart-drawer-footer">
          <div>
            <strong>Subtotal</strong>
            <strong>৳ {subtotal.toFixed(2)}*</strong>
          </div>
          <p>* Prices incl. VAT plus <a href="#">shipping costs</a></p>
          {checkoutStarted && <p className="cart-checkout-message">Checkout is ready for your order.</p>}
          <button
            type="button"
            disabled={items.length === 0}
            onClick={() => setCheckoutStarted(true)}
          >
            Checkout
          </button>
        </footer>
      </aside>
    </div>
  );
}
