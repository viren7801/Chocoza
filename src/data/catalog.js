import chocoBlast from "@/images/ChocoBlast.png";
import nuttyHearts from "@/images/nuttyHearts.png";
import silkyChocolate from "@/images/silkyChocolate.png";
import pomegranateChocolate from "@/images/pomogranateChocolate.png";
import cookieChocolate from "@/images/cookieChocolate.png";
import giftHamperPhoto from "@/images/giftHamper.png";

const giftHamper = "/custom-gift-hamper.webp";
const brownieBox = "/box-of-6-brownies.webp";
const classicCookie = "/classic-cookie.webp";
const doubleChocolateCookie = "/double-chocolate-cookie.webp";

export const products = [
  {
    slug: "chocoblast",
    name: "Chocoblast",
    category: "Chocolates",
    description: "Our signature bestseller, with a deliciously flowing chocolate centre.",
    price: null,
    priceLabel: "Ask for current price",
    image: chocoBlast,
    badge: "Bestseller",
    extraNote: "Sugar-free option available for +₹20.",
  },
  {
    slug: "classic-homemade-chocolate",
    name: "Classic Homemade Chocolate",
    category: "Chocolates",
    description: "A smooth, comforting classic made in small batches. 200g.",
    price: 200,
    image: silkyChocolate,
    extraNote: "Sugar-free option available for +₹20.",
  },
  {
    slug: "fruit-and-nut",
    name: "Fruit & Nut Chocolate",
    category: "Chocolates",
    description: "200g of rich chocolate with almonds, cashews, walnuts, raisins and cranberries.",
    price: 280,
    image: nuttyHearts,
    extraNote: "Sugar-free option available for +₹20.",
  },
  {
    slug: "roasted-almond",
    name: "Roasted Almond Chocolate",
    category: "Chocolates",
    description: "200g of rich chocolate paired with premium California almonds.",
    price: 250,
    image: nuttyHearts,
    extraNote: "Sugar-free option available for +₹20.",
  },
  {
    slug: "pomegranate-chocolate",
    name: "Pomegranate Chocolate",
    category: "Chocolates",
    description: "200g of fresh pomegranate paired with premium chocolate.",
    price: 280,
    image: pomegranateChocolate,
    extraNote: "Sugar-free option available for +₹20.",
  },
  {
    slug: "cookie-chocolate",
    name: "Cookie Chocolate",
    category: "Chocolates",
    description: "200g of a chocolate bar with a cookie layer in between.",
    price: 250,
    image: cookieChocolate,
    extraNote: "Sugar-free option available for +₹20.",
  },
  {
    slug: "custom-chocolate-bar",
    name: "Custom Chocolate Bar",
    category: "Chocolates",
    description: "A special decorative chocolate bar. 100g and customisable.",
    price: 200,
    image: silkyChocolate,
    extraNote: "Sugar-free option available for +₹20. Custom decoration can be discussed on WhatsApp.",
  },
  {
    slug: "classic-nyc-cookie",
    name: "Classic Cookie",
    category: "NYC Cookies",
    description: "A chunky, golden NYC-style cookie with a gooey chocolate filling inside.",
    price: 120,
    image: classicCookie,
  },
  {
    slug: "double-chocolate-cookie",
    name: "Double Chocolate Cookie",
    category: "NYC Cookies",
    description: "A rich cocoa NYC-style cookie loaded with chocolate chunks and a gooey chocolate filling inside.",
    price: 130,
    image: doubleChocolateCookie,
    badge: "Customer favourite",
  },
  {
    slug: "cookie-tins",
    name: "Cookie Tins",
    category: "Cookie Tins",
    description: "Freshly baked goodness in five flavours. Choose a 100g or 300g tin.",
    price: null,
    priceLabel: "100g from ₹100 · 300g from ₹300",
    image: giftHamperPhoto,
    badge: "Five flavours",
    variantTitle: "Flavours & tin sizes",
    variants: [
      { name: "Classic", prices: [{ label: "100g", price: 100 }, { label: "300g", price: 300 }] },
      { name: "Coffee", prices: [{ label: "100g", price: 120 }, { label: "300g", price: 350 }] },
      { name: "Nutella", prices: [{ label: "100g", price: 150 }, { label: "300g", price: 450 }] },
      { name: "Choco-Orange", prices: [{ label: "100g", price: 150 }, { label: "300g", price: 450 }] },
      { name: "Choco-Strawberry", prices: [{ label: "100g", price: 150 }, { label: "300g", price: 450 }] },
    ],
  },
  {
    slug: "individual-brownies",
    name: "Brownies – 100g Each",
    category: "Brownies",
    description: "Choose from six fudgy brownie flavours, freshly made in small batches.",
    price: null,
    priceLabel: "₹120–₹150 each",
    image: brownieBox,
    variantTitle: "Brownie flavours",
    variants: [
      { name: "Classic Chocolate Chips", price: 120, label: "100g" },
      { name: "Milk Chocolate Drizzle", price: 150, label: "100g" },
      { name: "Dark Chocolate Drizzle", price: 150, label: "100g" },
      { name: "Triple Chocolate", price: 150, label: "100g", detail: "Dark + milk chocolate chips" },
      { name: "Nutella", price: 150, label: "100g", detail: "Nutella drizzle" },
      { name: "Walnut", price: 150, label: "100g", detail: "Walnut topping" },
    ],
  },
  {
    slug: "brownies",
    name: "Box of 6 Brownies",
    category: "Brownies",
    description: "A box of six fudgy brownies. Choose from Classic Chocolate Chips, Milk Chocolate Drizzle, Dark Chocolate Drizzle, Triple Chocolate, Nutella or Walnut.",
    price: 600,
    image: brownieBox,
    badge: "Box of 6",
  },
  {
    slug: "cookie-tart",
    name: "Cookie Tart",
    category: "Special Items",
    description: "A freshly baked 600g cookie tart with a Nutella centre and rich chocolate ganache top. Customisable for birthdays and special occasions.",
    price: 800,
    image: cookieChocolate,
  },
  {
    slug: "cookie-brownie",
    name: "Cookie Brownie",
    category: "Special Items",
    description: "A 250g layered treat with a brownie base, Nutella drizzle and an NYC-style cookie with chocolate filling.",
    price: 400,
    image: brownieBox,
  },
  {
    slug: "orange-posset",
    name: "Orange Posset",
    category: "Special Items",
    description: "A creamy orange posset served inside a fresh orange shell.",
    price: null,
    priceLabel: "₹200 · 1 piece",
    image: pomegranateChocolate,
  },
  {
    slug: "brownie-cake",
    name: "Brownie Cake",
    category: "Special Items",
    description: "A rich 500g chocolate brownie cake with customised decoration, perfect for birthdays and celebrations.",
    price: 800,
    image: brownieBox,
  },
  {
    slug: "gift-hampers",
    name: "Custom Gift Hampers",
    category: "Gift Hampers",
    description: "A thoughtful mix of Chocoza favourites, curated for your occasion.",
    price: null,
    priceLabel: "Custom pricing",
    image: giftHamper,
    badge: "Made for gifting",
  },
];

export const productCategories = [
  "All",
  "Chocolates",
  "NYC Cookies",
  "Cookie Tins",
  "Brownies",
  "Special Items",
  "Gift Hampers",
];

export function getWhatsAppLink(message) {
  const link = new URL("https://wa.me/919328032419");
  link.searchParams.set("text", message);
  return link.toString();
}
