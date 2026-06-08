"use client";

import { useEffect, useRef, useState } from "react";

export default function DiscountOffer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function closeOnEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    window.setTimeout(() => inputRef.current?.focus(), 0);

    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  function submitOffer(event) {
    event.preventDefault();
    setIsSubscribed(true);
  }

  return (
    <>
      {isVisible && (
        <div className="discount-teaser">
          <button
            className="discount-teaser-button"
            type="button"
            onClick={() => setIsOpen(true)}
            aria-haspopup="dialog"
          >
            Get 10% off
          </button>
          <button
            className="discount-teaser-close"
            type="button"
            onClick={() => setIsVisible(false)}
            aria-label="Hide discount offer"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      )}

      {isOpen && (
        <div className="discount-offer-shell">
          <button
            className="discount-offer-backdrop"
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close discount offer"
          ></button>

          <section
            className="discount-offer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="discount-offer-title"
          >
            <div className="discount-offer-image" aria-hidden="true"></div>
            <div className="discount-offer-content">
              <button
                className="discount-offer-close"
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close discount offer"
              >
                <span></span>
                <span></span>
              </button>

              {isSubscribed ? (
                <div className="discount-success" role="status">
                  <span>Welcome aboard</span>
                  <h2 id="discount-offer-title">Your 10% discount is on its way.</h2>
                  <p>Check your inbox for your welcome offer and fresh seafood inspiration.</p>
                  <button type="button" onClick={() => setIsOpen(false)}>
                    Continue shopping
                  </button>
                </div>
              ) : (
                <>
                  <h2 id="discount-offer-title">Save 10%</h2>
                  <h3>on your first order</h3>
                  <p>
                    Also receive exclusive offers and delicious recipes directly
                    via our newsletter!
                  </p>

                  <form className="discount-offer-form" onSubmit={submitOffer}>
                    <label htmlFor="discount-email">Your email</label>
                    <input
                      ref={inputRef}
                      id="discount-email"
                      type="email"
                      placeholder="Your e-mail"
                      required
                    />
                    <button type="submit">Subscribe now</button>
                  </form>

                  <small>
                    You can unsubscribe at any time. See our{" "}
                    <a href="#">privacy policy</a> for details.
                  </small>
                </>
              )}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
