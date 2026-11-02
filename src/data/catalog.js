import chocoBlast from "@/images/ChocoBlast.png";
import nuttyHearts from "@/images/nuttyHearts.png";
import silkyChocolate from "@/images/silkyChocolate.png";
import cookieChocolate from "@/images/cookieChocolate.png";
import browniePhoto from "@/images/IMG_2394.jpg";
import giftHamper from "@/images/Hamper2.png";

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
  },
  {
    slug: "classic-homemade-chocolate",
    name: "Classic Homemade Chocolate",
    category: "Chocolates",
    description: "A smooth, comforting classic made in small batches.",
    price: 200,
    image: silkyChocolate,
  },
  {
    slug: "fruit-and-nut",
    name: "Fruit & Nut",
    category: "Chocolates",
    description: "Rich chocolate with a generous mix of nutty, fruity goodness.",
    price: 280,
    image: nuttyHearts,
  },
  {
    slug: "roasted-almond",
    name: "Roasted Almond",
    category: "Chocolates",
    description: "Chocolate paired with the satisfying crunch of roasted almonds.",
    price: 250,
    image: nuttyHearts,
  },
  {
    slug: "classic-nyc-cookie",
    name: "Classic NYC Cookie",
    category: "NYC Cookies",
    description: "A chunky, freshly baked cookie with a soft centre.",
    price: 120,
    image: cookieChocolate,
  },
  {
    slug: "double-chocolate-cookie",
    name: "Double Chocolate Cookie",
    category: "NYC Cookies",
    description: "A rich chocolate cookie for serious chocolate cravings.",
    price: 130,
    image: cookieChocolate,
    badge: "Customer favourite",
  },
  {
    slug: "brownies",
    name: "Brownies",
    category: "Brownies",
    description: "Freshly baked, fudgy treats. Message us for available flavours.",
    price: null,
    priceLabel: "Ask for flavours & price",
    image: browniePhoto,
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
  "Brownies",
  "Gift Hampers",
];

export function getWhatsAppLink(message) {
  const link = new URL("https://wa.me/919328032419");
  link.searchParams.set("text", message);
  return link.toString();
}
