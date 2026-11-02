import { ArrowUpRight, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "Contact",
  description: "Contact Chocoza in Navsari, Gujarat. Enquire about chocolates, cookies, brownies and custom hampers on WhatsApp.",
};

export default function Contact() {
  return (
    <>
      <section className="page-intro">
        <div className="section-shell">
          <div className="eyebrow">We would love to hear from you</div>
          <h1>Let's make<br />something sweet.</h1>
          <p>Have a question, a special request or a gifting idea? Reach out and we will help you find the right Chocoza treat.</p>
        </div>
      </section>

      <section className="section-shell contact-layout">
        <Reveal className="contact-intro">
          <div className="eyebrow">Say hello</div>
          <h2>Good conversations<br /><em>start here.</em></h2>
          <p>For product availability, custom hampers, bulk enquiries and pickup arrangements, WhatsApp is the quickest way to reach us.</p>
          <div className="contact-location"><MapPin size={17} /><span>Navsari, Gujarat, India<br /><small>Local pickup only · No delivery at the moment</small></span></div>
        </Reveal>

        <div className="contact-card-grid">
          <Reveal className="contact-card">
            <span className="contact-icon"><MessageCircle size={22} /></span>
            <span className="contact-card-label">QUICK ENQUIRIES</span>
            <h3>Chat on WhatsApp</h3>
            <p>Ask about today's availability, prices or pickup timings.</p>
            <a href="https://wa.me/919409664446?text=Hi%20Chocoza!%20I%20have%20a%20question." target="_blank" rel="noopener noreferrer">Start a conversation <ArrowUpRight size={15} /></a>
          </Reveal>
          <Reveal className="contact-card" delay={90}>
            <span className="contact-icon"><Instagram size={22} /></span>
            <span className="contact-card-label">FOLLOW THE SWEETNESS</span>
            <h3>Find us on Instagram</h3>
            <p>See new creations, updates and a little behind the scenes.</p>
            <a href="https://www.instagram.com/__chocoza__/" target="_blank" rel="noopener noreferrer">Follow @__chocoza__ <ArrowUpRight size={15} /></a>
          </Reveal>
          <Reveal className="contact-card" delay={180}>
            <span className="contact-icon"><Mail size={22} /></span>
            <span className="contact-card-label">OTHER ENQUIRIES</span>
            <h3>Send us an email</h3>
            <p>For detailed requests or collaboration enquiries, write to us.</p>
            <a href="mailto:chocoza.chocolates@gmail.com">Email Chocoza <ArrowUpRight size={15} /></a>
          </Reveal>
        </div>
      </section>

      <div className="pickup-band">
        <MapPin size={17} />
        <strong>Local pickup only.</strong>
        <span>We confirm your order and collection details with you directly before it is prepared.</span>
      </div>
    </>
  );
}
