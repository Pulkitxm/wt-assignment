import { Category, PRODUCT } from "../types/product";
import img1 from "../assets/jewelery/51bKD0GEChL._SY625_.png";
import img2 from "../assets/jewelery/71wuD8IzqtL._SL1500_.png";
import img3 from "../assets/jewelery/81WZQlUV40L._SY625_.png";
import img4 from "../assets/jewelery/61DJZr11BUL._SY625_.png";
import img5 from "../assets/jewelery/51vkUXs47GL._SL1000_.png";

const jeweleryItems: Omit<PRODUCT, "category">[] = [
  {
    title: "Okos Unisex Fashion Jewellery Adjustable",
    price: 149,
    image: img1,
    link: "https://amzn.in/d/2U6CAz6",
  },
  {
    title: "ANZAILALA Ring Size Adjuster for Loose Rings",
    price: 184,
    image: img2,
    link: "https://amzn.in/d/6tfESKf",
  },
  {
    title: "Shining Diva Fashion 26 Pcs Colorful Hair",
    price: 282,
    image: img3,
    link: "https://amzn.in/d/h3WRrfu",
  },
  {
    title: "ANZAILALA Ring Size Adjuster for Loose Rings",
    price: 184,
    image: img4,
    link: "https://amzn.in/d/5CGAGJq",
  },
  {
    title: "Elina 30 Black Vandy Ponytail Holder",
    price: 199,
    image: img5,
    link: "https://amzn.in/d/8z8NzVA",
  },
];

const JeweleryItems = jeweleryItems.map((item) => ({
  ...item,
  category: Category.Jewelery,
}));

export default JeweleryItems;
