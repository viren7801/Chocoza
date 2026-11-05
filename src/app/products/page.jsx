"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";
import { products, productCategories, getWhatsAppLink } from "@/data/catalog";

export default function Products() {
  const [category, setCategory] = useState("All");

  useEffect(() => {
    const requestedCategory = new URLSearchParams(window.location.search).get("category");
    if (requestedCategory && productCategories.includes(requestedCategory)) {
      setCategory(requestedCategory);
    }
  }, []);

  const filteredProducts = useMemo(
    () => category === "All" ? products : products.filter((product) => product.category === category),
    [category]
  );

  return (
    <>
      <section className="page-intro">
        <div className="section-shell">
          <div className="eyebrow">The Chocoza collection</div>
          <h1>Something sweet<br />for every mood.</h1>
          <p>Explore our chocolates, NYC-style cookies, brownies and thoughtful gift hampers. Availability can change with each small batch, so message us before visiting.</p>
        </div>
      </section>

      <section className="section">
        <div className="section-shell">
          <div className="catalog-filters" aria-label="Filter products by category">
            {productCategories.map((item) => (
              <button
                key={item}
                type="button"
                className={"catalog-filter " + (category === item ? "catalog-filter-active" : "")}
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="catalog-grid">
            {filteredProducts.map((product, index) => (
              <Reveal key={product.slug} delay={(index % 3) * 65}>
                <article className="catalog-card" data-tilt>
                  <Link href={"/products/" + product.slug} className="product-photo" aria-label={"View " + product.name}>
                    {product.badge && <span className="product-badge">{product.badge}</span>}
                    <Image src={product.image} alt={product.name} className={product.category === "Gift Hampers" ? "hamper-image" : product.category === "NYC Cookies" ? "cookie-image" : product.category === "Brownies" ? "brownie-box-image" : undefined} fill quality={92} sizes="(max-width: 760px) 46vw, 31vw" />
                  </Link>
                  <div className="product-meta">
                    <div><h3><Link href={"/products/" + product.slug}>{product.name}</Link></h3><p>{product.category}</p></div>
                  </div>
                  <p className="catalog-description">{product.description}</p>
                  {product.variants?.length > 0 && (
                    <p className="catalog-variant-count">
                      {product.variants.length} options · See sizes and prices
                    </p>
                  )}
                  {product.extraNote && <p className="catalog-variant-count">{product.extraNote}</p>}
                  <div className="catalog-price">
                    {product.price !== null ? "₹" + product.price : product.priceLabel}
                  </div>
                  <a
                    className="catalog-order"
                    href={getWhatsAppLink("Hi Chocoza! I am interested in " + product.name + ". Please share today's availability and ordering details.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={14} /> Enquire on WhatsApp <ArrowUpRight size={14} />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="pickup-band">
        <MessageCircle size={17} />
        <strong>No online checkout.</strong>
        <span>We confirm availability, pickup timing and payment details with you directly on WhatsApp.</span>
      </div>
    </>
  );
}
