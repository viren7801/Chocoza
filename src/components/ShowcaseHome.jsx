import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Heart, Leaf, MapPin, MessageCircle, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { getWhatsAppLink, products } from "@/data/catalog";
import chocoBlast from "@/images/ChocoBlast.png";
import silkyChocolate from "@/images/silkyChocolate.png";
import nuttyHearts from "@/images/nuttyHearts.png";
const hamperImage = "/custom-gift-hamper.webp";
import storyImage from "@/images/overlayImage.jpg";

const classicCookie = "/classic-cookie.webp";
const doubleChocolateCookie = "/double-chocolate-cookie.webp";

const collections = [
  { title: "Chocolates", subtitle: "Little bites of joy", image: chocoBlast, href: "/products?category=Chocolates" },
  { title: "NYC Cookies", subtitle: "Two irresistible flavours", image: classicCookie, href: "/products?category=NYC%20Cookies" },
  { title: "Brownies", subtitle: "Box of 6 · assorted flavours", image: "/box-of-6-brownies.webp", href: "/products?category=Brownies" },
  { title: "Gift Hampers", subtitle: "Made for your moments", image: hamperImage, href: "/products?category=Gift%20Hampers" },
];

const featured = [
  { ...products[0], image: chocoBlast },
  { ...products[2], image: nuttyHearts },
  { ...products[5], image: doubleChocolateCookie },
  { ...products[1], image: silkyChocolate },
];

export default function ShowcaseHome() {
  const heroOrder = getWhatsAppLink("Hi Chocoza! I'd love to know more about your handcrafted collection.");
  const hamperOrder = getWhatsAppLink("Hi Chocoza! I'd like to create a custom gift hamper. Please share the options.");

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <Reveal>
            <div className="eyebrow">Homemade · Pure veg · Made with love</div>
            <h1>A little piece of <em>happiness.</em></h1>
            <p className="hero-description">
              Handcrafted chocolates, freshly baked cookies and brownies — thoughtful little treats for your everyday moments and sweetest celebrations.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href={heroOrder} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} /> Order on WhatsApp <ArrowUpRight size={15} />
              </a>
              <Link className="button-secondary" href="/products">
                Explore the collection <ArrowRight size={15} />
              </Link>
            </div>
            <div className="hero-note"><span /> MADE IN SMALL BATCHES, JUST FOR YOU</div>
          </Reveal>
        </div>

        <div className="hero-art" data-tilt>
          <div className="hero-orbit" />
          <div className="hero-vertical">A SWEET MOMENT · CHOCOZA</div>
          <div className="hero-product">
            <Image src={chocoBlast} alt="Chocoza signature Chocoblast chocolate" fill priority sizes="(max-width: 760px) 92vw, 48vw" />
          </div>
          <div className="hero-stamp">A little<br />extra love<br />in every bite</div>
          <div className="hero-float-note hero-float-note--left"><Sparkles size={13} /> SMALL BATCH MAGIC</div>
          <div className="hero-float-note hero-float-note--right"><Leaf size={13} /> PURE VEG ALWAYS</div>
          <span className="hero-orbit-spark hero-orbit-spark--one">✳</span>
          <span className="hero-orbit-spark hero-orbit-spark--two">✧</span>
        </div>
      </section>

      <div className="marquee" aria-label="Chocoza handmade chocolate and bakery collection">
        <div className="marquee-track">
          {Array.from({ length: 2 }).map((_, index) => (
            <span key={index} className="contents">
              <span>Handmade with heart</span><b>✳</b><span>Chocolate in every mood</span><b>✳</b><span>Freshly baked happiness</span><b>✳</b><span>Thoughtful gifting</span><b>✳</b><span>Made in Navsari</span><b>✳</b>
            </span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="section-shell">
          <Reveal className="section-heading">
            <div>
              <div className="eyebrow">Find your favourite</div>
              <h2>Made for every craving.</h2>
            </div>
            <p>From rich chocolate moments to freshly baked comforts, find something lovely to take home.</p>
            <Link className="text-link" href="/products">View all treats <ArrowUpRight size={15} /></Link>
          </Reveal>

          <div className="collection-grid">
            {collections.map((item, index) => (
              <Reveal key={item.title} delay={index * 85}>
                <Link href={item.href} className="collection-card" data-tilt>
                  <div className="collection-image">
                    <Image src={item.image} alt={item.title + " by Chocoza"} className={item.title === "Gift Hampers" ? "hamper-image" : item.title === "NYC Cookies" ? "cookie-image" : item.title === "Brownies" ? "brownie-box-image" : undefined} fill quality={92} sizes="(max-width: 760px) 45vw, 24vw" />
                  </div>
                  <div className="collection-info">
                    <div><h3>{item.title}</h3><p>{item.subtitle}</p></div>
                    <span className="collection-arrow"><ArrowUpRight size={16} /></span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-shell">
          <Reveal className="section-heading">
            <div>
              <div className="eyebrow">A few crowd favourites</div>
              <h2>Made to be loved.</h2>
            </div>
            <p>Small-batch creations, prepared with care. Message us to check what is freshly available.</p>
            <Link className="text-link" href="/products">Explore the menu <ArrowUpRight size={15} /></Link>
          </Reveal>

          <div className="product-grid">
            {featured.map((product, index) => (
              <Reveal key={product.slug} delay={index * 70}>
                <article className="product-card" data-tilt>
                  <div className="product-photo">
                    {product.badge && <span className="product-badge">{product.badge}</span>}
                    <Image src={product.image} alt={product.name} className={product.category === "NYC Cookies" ? "cookie-image" : undefined} fill sizes="(max-width: 760px) 44vw, 23vw" />
                  </div>
                  <div className="product-meta">
                    <div><h3>{product.name}</h3><p>{product.category}</p></div>
                  </div>
                  <a className="product-enquire" href={getWhatsAppLink("Hi Chocoza! I'd like to know more about " + product.name + ".")} target="_blank" rel="noopener noreferrer">
                    Ask about this <ArrowUpRight size={14} />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="story-section">
        <div className="story-image">
          <Image src={storyImage} alt="A glimpse into the Chocoza kitchen" fill sizes="(max-width: 760px) 100vw, 50vw" />
        </div>
        <div className="story-copy">
          <Reveal>
            <div className="eyebrow">A little about us</div>
            <h2>Made by hand. Shared from the heart.</h2>
            <p>Chocoza began with a love for making people smile through something sweet. Every batch is prepared with attention, care and the joy of creating something worth sharing.</p>
            <Link className="button-secondary" href="/about">Get to know Chocoza <ArrowRight size={15} /></Link>
          </Reveal>
        </div>
      </section>

      <section className="section-shell gift-section">
        <Reveal className="gift-art" >
          <Image src={hamperImage} alt="Chocoza custom chocolate and bakery gift hamper" fill quality={92} sizes="(max-width: 760px) 100vw, 50vw" />
        </Reveal>
        <Reveal className="gift-copy" delay={100}>
          <div className="eyebrow">A gift with a little more meaning</div>
          <h2>You choose.<br />We create.</h2>
          <p>Celebrations, thank-yous or just-because moments — tell us what you have in mind and we’ll help put together a thoughtful Chocoza hamper.</p>
          <a className="button-primary" href={hamperOrder} target="_blank" rel="noopener noreferrer">
            Create your hamper <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </section>

      <div className="pickup-band">
        <MapPin size={17} />
        <strong>Made in Navsari, Gujarat.</strong>
        <span>Orders are confirmed on WhatsApp and collected locally. Delivery is not available.</span>
      </div>
    </>
  );
}
