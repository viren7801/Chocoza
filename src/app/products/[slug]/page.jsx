import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MessageCircle, MapPin } from "lucide-react";
import { getWhatsAppLink, products } from "@/data/catalog";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return { title: "Product not found" };
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) notFound();

  const orderLink = getWhatsAppLink(
    "Hi Chocoza! I am interested in " + product.name + ". Please share today's availability and pickup details."
  );

  return (
    <>
      <section className="section-shell product-detail">
        <Link href="/products" className="product-back"><ArrowLeft size={15} /> Back to collection</Link>
        <div className="product-detail-grid">
          <div className="product-detail-image">
            {product.badge && <span className="product-badge">{product.badge}</span>}
            <Image src={product.image} alt={product.name} className={product.category === "NYC Cookies" ? "cookie-image" : undefined} fill priority sizes="(max-width: 760px) 100vw, 50vw" />
          </div>
          <div className="product-detail-copy">
            <div className="eyebrow">{product.category}</div>
            <h1>{product.name}</h1>
            <p className="product-detail-description">{product.description}</p>
            <div className="product-detail-price">
              {product.price !== null ? "₹" + product.price : product.priceLabel}
            </div>
            <p className="product-detail-note">Message us to confirm today's availability, quantity and pickup time. No online payment or delivery checkout.</p>
            <a className="button-primary" href={orderLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} /> Enquire on WhatsApp <ArrowUpRight size={15} />
            </a>
            <div className="product-detail-pickup"><MapPin size={15} /> Local pickup in Navsari, Gujarat</div>
          </div>
        </div>
      </section>
      <div className="pickup-band">
        <strong>Freshly made, personally confirmed.</strong>
        <span>Your order is confirmed with the Chocoza team on WhatsApp before collection.</span>
      </div>
    </>
  );
}
