import { Category, PRODUCT } from "../types/product";
import img1 from "../assets/furniture/716eVbI8IBL._SL1500_.png";
import img2 from "../assets/furniture/71Q1Z2kUbhL._SL1500_.png";
import img3 from "../assets/furniture/81dl6Wx3LYL._SL1500_.png";
import img4 from "../assets/furniture/81Sllf6C25L._SL1500_.png";
import img5 from "../assets/furniture/71BH74yEG7L._SL1210_.png";

const furnitureItems: Omit<PRODUCT, "category">[] = [
  {
    title: "Centuary Mattresses Sleepables 5-Inch Queen Size",
    price: 6495,
    rating: 4.4,
    image: img1,
    link: "https://amzn.in/d/4moDcGk",
  },
  {
    title: "ARTIKEL Multi-Purpose Electric Height Adjustable Table DIY",
    price: 15001,
    rating: 4.7,
    image: img2,
    link: "https://amzn.in/d/hn5ShOo",
  },
  {
    title: "Solimo Mars 1 Seater Fabric Recliner (Grey)",
    price: 11999,
    rating: 4.1,
    image: img3,
    link: "https://amzn.in/d/6KKfzuS",
  },
  {
    title:
      "SONA ART & CRAFTS Solid Sheesham Wood Dining Table 4 Seater Dining Table Set with 2 Chairs",
    price: 13999,
    rating: 4.2,
    image: img4,
    link: "https://amzn.in/d/627XXBR",
  },
  {
    title:
      "CORAZZIN Garden Patio Seating Chair and Table Set Outdoor Balcony Garden Coffee Table Set",
    price: 64999,
    rating: 4.5,
    link: "https://amzn.in/d/1zuQdoU",
    image: img5,
  },
];

const FurnitureItems = furnitureItems.map((item) => ({
  ...item,
  category: Category.Furniture,
}));

export default FurnitureItems;
