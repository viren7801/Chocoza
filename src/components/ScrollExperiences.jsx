"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/data/catalog";

const storySteps = [
  {
    eyebrow: "01 / THE FIRST BITE",
    title: "A little shell of pure chocolate.",
    description: "A delicate chocolate bite, handcrafted to make the everyday feel a little more special.",
  },
  {
    eyebrow: "02 / THE SURPRISE INSIDE",
    title: "A centre made to flow.",
    description: "Break through the shell and discover the luscious, liquid chocolate centre that makes Chocoblast our signature favourite.",
  },
  {
    eyebrow: "03 / THE CHOCOZA MOMENT",
    title: "One bite. A whole lot of joy.",
    description: "Thoughtfully made in small batches, ready to turn a simple craving into your new favourite chocolate moment.",
  },
];

export function ChocolateStory({ image }) {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = section?.querySelector(".choco-story__pin");
    if (!section || !pin) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 760px)").matches;
    if (reducedMotion || mobile) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const bounds = section.getBoundingClientRect();
      const travel = Math.max(1, section.offsetHeight - pin.offsetHeight);
      const progress = Math.max(0, Math.min(1, (110 - bounds.top) / travel));
      section.style.setProperty("--story-progress", progress.toFixed(4));
      const nextStep = Math.min(2, Math.floor(Math.min(.9999, progress) * 3));
      setActiveStep((current) => current === nextStep ? current : nextStep);
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section className="choco-story" ref={sectionRef} aria-label="The Chocoblast story">
      <div className="choco-story__pin">
        <div className="choco-story__copy">
          <div className="eyebrow">The Chocoza signature</div>
          <div className="choco-story__steps" aria-live="polite">
            {storySteps.map((step, index) => (
              <div className={"choco-story__step " + (activeStep === index ? "is-active" : "")} key={step.eyebrow}>
                <span className="choco-story__eyebrow">{step.eyebrow}</span>
                <h2>{step.title}</h2>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          <div className="choco-story__progress" aria-hidden="true">
            {storySteps.map((step, index) => (
              <span className={activeStep >= index ? "is-active" : ""} key={step.eyebrow} />
            ))}
          </div>
          <Link className="choco-story__link" href="/products/chocoblast">
            Discover Chocoblast <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="choco-story__visual">
          <div className="choco-story__halo" />
          <div className="choco-story__vertical">HANDCRAFTED IN SMALL BATCHES</div>
          <div className="choco-story__image">
            <Image src={image} alt="Chocoza Chocoblast with its rich flowing chocolate centre" fill sizes="(max-width: 760px) 90vw, 55vw" />
          </div>
          <span className="choco-story__note">A LITTLE<br />MOMENT OF<br /><em>HAPPINESS</em></span>
          <span className="choco-story__spark choco-story__spark--one">✳</span>
          <span className="choco-story__spark choco-story__spark--two">✧</span>
        </div>
        <span className="choco-story__index">01 — 03</span>
      </div>
    </section>
  );
}

export function HorizontalProductScroll({ products }) {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const track = trackRef.current;
    if (!section || !pin || !track) return;

    const mobile = window.matchMedia("(max-width: 760px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      if (mobile.matches || reducedMotion.matches) {
        section.style.setProperty("--gallery-shift", "0px");
        return;
      }
      const bounds = section.getBoundingClientRect();
      const travel = Math.max(1, section.offsetHeight - pin.offsetHeight);
      const progress = Math.max(0, Math.min(1, (110 - bounds.top) / travel));
      const maxShift = Math.max(0, track.scrollWidth - pin.clientWidth + 24);
      section.style.setProperty("--gallery-shift", Math.round(maxShift * progress) + "px");
      section.style.setProperty("--gallery-progress", progress.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    mobile.addEventListener?.("change", onScroll);
    reducedMotion.addEventListener?.("change", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      mobile.removeEventListener?.("change", onScroll);
      reducedMotion.removeEventListener?.("change", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [products.length]);

  return (
    <section className="horizontal-showcase" ref={sectionRef} aria-label="Chocoza bestsellers">
      <div className="horizontal-showcase__pin" ref={pinRef}>
        <div className="horizontal-showcase__heading">
          <div>
            <div className="eyebrow">A few crowd favourites</div>
            <h2>Made to be <em>loved.</em></h2>
          </div>
          <p>Scroll to savour the collection <span>↓</span></p>
        </div>
        <div className="horizontal-showcase__viewport">
          <div className="horizontal-showcase__track" ref={trackRef}>
            {products.map((product, index) => (
              <article className="horizontal-product-card" key={product.slug}>
                <Link href={"/products/" + product.slug} className="horizontal-product-card__image">
                  {product.badge && <span className="product-badge">{product.badge}</span>}
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 760px) 78vw, 30vw"
                    className={product.category === "NYC Cookies" ? "cookie-image" : ""}
                  />
                  <span className="horizontal-product-card__number">0{index + 1}</span>
                </Link>
                <div className="horizontal-product-card__meta">
                  <div>
                    <span>{product.category}</span>
                    <h3>{product.name}</h3>
                    <p>{product.priceLabel || (product.price ? "₹" + product.price : "Ask us for details")}</p>
                  </div>
                  <a
                    className="horizontal-product-card__ask"
                    href={getWhatsAppLink("Hi Chocoza! I'd like to know more about " + product.name + ".")}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={"Ask Chocoza about " + product.name + " on WhatsApp"}
                  >
                    <MessageCircle size={17} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="horizontal-showcase__footer">
          <span>SMALL BATCHES · BIG JOY</span>
          <Link href="/products">View the full menu <ArrowRight size={15} /></Link>
        </div>
      </div>
    </section>
  );
}
