import { Category, PRODUCT } from "../types/product";
import img1 from "../assets/electronics/61sjfVAHnSL._SL1500_.png";
import img2 from "../assets/electronics/61z8qgRCtNL._SL1500_.png";
import img3 from "../assets/electronics/613jbjQTn8L._SL1500_.png";
import img4 from "../assets/electronics/61CYV-pyToL._SL1500_.png";
import img5 from "../assets/electronics/51BmSwjFu5L._SL1281_.png";

const electronicItems: Omit<PRODUCT, "category">[] = [
  {
    title: "Magic Style Keyboard for iPad Air 11",
    price: 8295,
    rating: 4.3,
    image: img1,
    link: "https://amzn.in/d/31oKonZ",
  },
  {
    title: "Combo Touch Detachable 10Th Gen Ipad Keyboard Case",
    price: 11999,
    rating: 3.9,
    image: img2,
    link: "https://amzn.in/d/8uEPebl",
  },
  {
    title: "Kingone Upgraded Stylus",
    price: 1339,
    image: img3,
    link: "https://amzn.in/d/7wBFjCi",
    rating: 4.1,
  },
  {
    title: "Wacom CTL-472/K0-CX Digital Drawing Graphics Pen Tablet",
    price: 2890,
    rating: 4.3,
    image: img4,
    link: "https://amzn.in/d/gBvhO3F",
  },
  {
    title: "Logitech C270 Digital HD Webcam with Widescreen",
    rating: 4.3,
    price: 1749,
    image: img5,
    link: "https://amzn.in/d/5hrw47F",
  },
];

const ElectronicItems = electronicItems.map((item) => ({
  ...item,
  category: Category.Electronics,
}));

export default ElectronicItems;
