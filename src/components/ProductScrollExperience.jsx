"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight, MapPin, MessageCircle, Sparkles } from "lucide-react";

export default function ProductScrollExperience({ product, orderLink }) {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) return;

    const panels = section.querySelectorAll("[data-product-story-step]");
    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible) {
        setActiveStep(Number(visible.target.dataset.productStoryStep));
      }
    }, {
      root: null,
      rootMargin: "-32% 0px -32% 0px",
      threshold: [0.05, 0.2, 0.4, 0.6, 0.8],
    });

    panels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, []);

  const hasVariants = Array.isArray(product.variants) && product.variants.length > 0;
  const priceLabel = product.priceLabel || (product.price !== null ? "₹" + product.price : "Ask for current price");
  const imageClass = product.category === "Gift Hampers"
    ? "product-scroll-image--contain"
    : product.category === "NYC Cookies" || product.category === "Brownies"
      ? "product-scroll-image--food"
      : "";

  return (
    <section
      className="product-scroll-experience"
      ref={sectionRef}
      data-active-step={activeStep}
      aria-label={product.name + " product story"}
    >
      <div className="product-scroll-shell">
        <div className="product-scroll-visual-column">
          <div className="product-scroll-visual-sticky">
            <div className="product-scroll-topline">
              <span>CHOCOZA / {product.category}</span>
              <span>0{activeStep + 1} — 03</span>
            </div>

            <div className={"product-scroll-image " + imageClass}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(max-width: 760px) 92vw, 48vw"
                quality={92}
              />
              <div className="product-scroll-image-shade" />
              <span className="product-scroll-image-caption">
                <Sparkles size={14} /> A LITTLE EXTRA LOVE IN EVERY BITE
              </span>
            </div>

            <div className="product-scroll-progress" aria-label={"Story step " + (activeStep + 1) + " of 3"}>
              {[0, 1, 2].map((step) => (
                <span className={activeStep >= step ? "is-active" : ""} key={step} />
              ))}
            </div>
            <div className="product-scroll-bottomline">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown size={15} />
            </div>
          </div>
        </div>

        <div className="product-scroll-panels">
          <article className="product-scroll-panel" data-product-story-step="0">
            <div className="product-scroll-panel-inner">
              <span className="product-scroll-kicker">001 / THE FIRST IMPRESSION</span>
              <h2>{product.name}<br /><em>made to delight.</em></h2>
              <p className="product-scroll-description">{product.description}</p>
              <div className="product-scroll-tags">
                <span>Handcrafted</span>
                <span>Pure vegetarian</span>
                {product.weight ? <span>{product.weight}</span> : null}
              </div>
            </div>
          </article>

          <article className="product-scroll-panel" data-product-story-step="1">
            <div className="product-scroll-panel-inner">
              <span className="product-scroll-kicker">002 / THE DETAILS</span>
              <h2>Every little<br /><em>detail matters.</em></h2>
              <p className="product-scroll-description">
                Explore the available options and choose the one that feels just right.
              </p>

              {hasVariants ? (
                <div className="product-scroll-options">
                  {product.variants.map((variant) => (
                    <div className="product-scroll-option" key={variant.label}>
                      <span>{variant.label}{variant.note ? <small>{variant.note}</small> : null}</span>
                      <strong>₹{variant.price}</strong>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="product-scroll-detail-card">
                  <span>{product.weight ? "SIZE / WEIGHT" : "PRODUCT PRICE"}</span>
                  <strong>{product.weight || priceLabel}</strong>
                  {product.weight ? <small>{priceLabel}</small> : null}
                </div>
              )}

              {product.optionNote ? <p className="product-scroll-option-note">{product.optionNote}</p> : null}
            </div>
          </article>

          <article className="product-scroll-panel" data-product-story-step="2">
            <div className="product-scroll-panel-inner">
              <span className="product-scroll-kicker">003 / YOUR CHOCOZA MOMENT</span>
              <h2>A little joy,<br /><em>made for you.</em></h2>
              <p className="product-scroll-description">
                Tell us what you have in mind. Our team will confirm today's availability, quantity and pickup timing with you directly.
              </p>
              <div className="product-scroll-pickup">
                <MapPin size={17} />
                <span><strong>Made in Navsari, Gujarat</strong><small>Local pickup · Order confirmation on WhatsApp</small></span>
              </div>
              <a className="button-primary product-scroll-cta" href={orderLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} /> Enquire about {product.name} <ArrowUpRight size={15} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
