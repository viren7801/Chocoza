import chocoBlast from "@/images/ChocoBlast.png";
import nuttyHearts from "@/images/nuttyHearts.png";
import silkyChocolate from "@/images/silkyChocolate.png";
import pomegranateChocolate from "@/images/pomogranateChocolate.png";
import cookieChocolate from "@/images/cookieChocolate.png";

const classicCookie = "/classic-cookie.webp";
const doubleChocolateCookie = "/double-chocolate-cookie.webp";
const brownieBox = "/box-of-6-brownies.webp";
const giftHamper = "/custom-gift-hamper.webp";

const chocolateSugarFreeNote = "Sugar-free option available for every chocolate flavour. Add ₹20 to the listed price.";

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
    description: "A smooth, comforting classic, handcrafted in small batches.",
    weight: "200g",
    price: 200,
    image: silkyChocolate,
    optionNote: chocolateSugarFreeNote,
  },
  {
    slug: "fruit-and-nut",
    name: "Fruit & Nut Chocolate",
    category: "Chocolates",
    description: "Premium chocolate with almonds, cashews, walnuts, raisins and cranberries.",
    weight: "200g",
    price: 280,
    image: nuttyHearts,
    optionNote: chocolateSugarFreeNote,
  },
  {
    slug: "roasted-almond",
    name: "Roasted Almond Chocolate",
    category: "Chocolates",
    description: "Rich homemade chocolate paired with premium California almonds.",
    weight: "200g",
    price: 250,
    image: nuttyHearts,
    optionNote: chocolateSugarFreeNote,
  },
  {
    slug: "pomegranate-chocolate",
    name: "Pomegranate Chocolate",
    category: "Chocolates",
    description: "Fresh pomegranate paired with premium chocolate.",
    weight: "200g",
    price: 280,
    image: pomegranateChocolate,
    optionNote: chocolateSugarFreeNote,
  },
  {
    slug: "cookie-chocolate",
    name: "Cookie Chocolate",
    category: "Chocolates",
    description: "A rich chocolate bar with a cookie layer in between.",
    weight: "200g",
    price: 250,
    image: cookieChocolate,
    optionNote: chocolateSugarFreeNote,
  },
  {
    slug: "custom-chocolate-bar",
    name: "Custom Chocolate Bar",
    category: "Chocolates",
    description: "A special decorative chocolate bar, customisable for gifting and celebrations.",
    weight: "100g",
    price: 200,
    image: silkyChocolate,
    optionNote: chocolateSugarFreeNote,
  },
  {
    slug: "classic-nyc-cookie",
    name: "Classic Cookies",
    category: "NYC Cookies",
    description: "A chunky NYC-style cookie with a gooey chocolate filling inside.",
    price: 120,
    priceLabel: "₹120 per piece",
    image: classicCookie,
  },
  {
    slug: "double-chocolate-cookie",
    name: "Double Chocolate Cookie",
    category: "NYC Cookies",
    description: "A rich double-chocolate NYC-style cookie with a gooey chocolate filling inside.",
    price: 130,
    priceLabel: "₹130 per piece",
    image: doubleChocolateCookie,
    badge: "Customer favourite",
  },
  {
    slug: "cookie-tins",
    name: "Cookie Tin Collection",
    category: "Cookie Tins",
    description: "Freshly baked cookie tins in five delicious flavours. Choose a 100g or 300g tin.",
    price: null,
    priceLabel: "From ₹100",
    image: classicCookie,
    variants: [
      { label: "Classic · 100g", price: 100 },
      { label: "Classic · 300g", price: 300 },
      { label: "Coffee · 100g", price: 120 },
      { label: "Coffee · 300g", price: 350 },
      { label: "Nutella · 100g", price: 150 },
      { label: "Nutella · 300g", price: 450 },
      { label: "Choco-Orange · 100g", price: 150 },
      { label: "Choco-Orange · 300g", price: 450 },
      { label: "Choco-Strawberry · 100g", price: 150 },
      { label: "Choco-Strawberry · 300g", price: 450 },
    ],
  },
  {
    slug: "brownies",
    name: "Box of 6 Brownies",
    category: "Brownies",
    description: "A box of six fudgy brownies. Mix and match from six freshly prepared 100g flavours.",
    price: 600,
    image: brownieBox,
    badge: "Box of 6",
    variants: [
      { label: "Classic Chocolate Chips · 100g", price: 120 },
      { label: "Milk Chocolate Drizzle · 100g", price: 150 },
      { label: "Dark Chocolate Drizzle · 100g", price: 150 },
      { label: "Triple Chocolate · 100g", price: 150, note: "Dark + milk chocolate chips" },
      { label: "Nutella Drizzle · 100g", price: 150 },
      { label: "Walnut Topping · 100g", price: 150 },
      { label: "Assorted Box of 6", price: 600 },
    ],
  },
  {
    slug: "cookie-tart",
    name: "Cookie Tart",
    category: "Special Items",
    description: "Freshly baked cookie tart with a Nutella centre and rich chocolate ganache topping. Customisable for birthdays and special occasions.",
    weight: "600g",
    price: 800,
    image: classicCookie,
  },
  {
    slug: "cookie-brownie",
    name: "Cookie Brownie",
    category: "Special Items",
    description: "Layers of brownie, Nutella and an NYC-style cookie with chocolate filling, finished with Nutella drizzle.",
    weight: "250g",
    price: 400,
    image: brownieBox,
  },
  {
    slug: "orange-posset",
    name: "Orange Posset",
    category: "Special Items",
    description: "A creamy orange posset, served inside a fresh orange shell.",
    weight: "1 piece",
    price: 200,
    image: silkyChocolate,
  },
  {
    slug: "brownie-cake",
    name: "Brownie Cake",
    category: "Special Items",
    description: "A rich chocolate brownie cake with customised decoration, perfect for birthdays and celebrations.",
    weight: "500g",
    price: 800,
    image: brownieBox,
  },
  {
    slug: "gift-hampers",
    name: "Custom Gift Hampers",
    category: "Gift Hampers",
    description: "A thoughtful mix of Chocoza favourites, curated to your choice and occasion. Customisation available for birthdays, anniversaries, festivals and special celebrations.",
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
