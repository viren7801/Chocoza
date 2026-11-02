import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Leaf, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import storyImage from "@/images/overlayImage.jpg";

export const metadata = {
  title: "Our Story",
  description: "The story behind Chocoza — handcrafted chocolates and bakes made with love in Navsari, Gujarat.",
};

export default function AboutUs() {
  return (
    <>
      <section className="page-intro">
        <div className="section-shell">
          <div className="eyebrow">A little about Chocoza</div>
          <h1>Sweet things.<br />Made with feeling.</h1>
          <p>We believe a thoughtful little treat can turn an ordinary day into something worth remembering.</p>
        </div>
      </section>

      <section className="section-shell about-story-layout">
        <Reveal className="about-story-image">
          <Image src={storyImage} alt="A glimpse into the Chocoza kitchen" fill sizes="(max-width: 760px) 100vw, 50vw" />
        </Reveal>
        <Reveal className="about-story-copy" delay={100}>
          <div className="eyebrow">From our kitchen to your moments</div>
          <h2>Small batches.<br /><em>Big-hearted</em> treats.</h2>
          <p>Chocoza is a homemade, pure-vegetarian chocolate and baking venture from Navsari, Gujarat. It grew from a simple love of making and sharing sweet things.</p>
          <p>Today, we make handcrafted chocolates, NYC-style cookies, brownies and gift hampers. We keep the experience personal, prepare with care and make each order feel special.</p>
          <Link href="/products" className="button-primary">Explore our collection <ArrowRight size={15} /></Link>
        </Reveal>
      </section>

      <section className="about-values">
        <div className="section-shell">
          <Reveal className="section-heading">
            <div><div className="eyebrow">The Chocoza way</div><h2>Made with care, always.</h2></div>
            <p>Three little things that shape every Chocoza experience.</p>
          </Reveal>
          <div className="about-value-grid">
            <Reveal className="about-value-card">
              <Leaf size={23} strokeWidth={1.5} />
              <h3>Pure vegetarian</h3>
              <p>Our homemade range is thoughtfully prepared as a pure-vegetarian offering.</p>
            </Reveal>
            <Reveal className="about-value-card" delay={90}>
              <Heart size={23} strokeWidth={1.5} />
              <h3>Made with love</h3>
              <p>We care about the little details, from the first stir to the final wrap.</p>
            </Reveal>
            <Reveal className="about-value-card" delay={180}>
              <Sparkles size={23} strokeWidth={1.5} />
              <h3>Made for moments</h3>
              <p>Everyday cravings, celebrations and gifting — there is a sweet Chocoza moment for all of them.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="pickup-band">
        <span>✳</span>
        <strong>Made in Navsari, Gujarat.</strong>
        <span>Every order is confirmed personally on WhatsApp for local pickup.</span>
      </div>
    </>
  );
}
