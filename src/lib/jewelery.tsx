import { Category, PRODUCT } from "@/types/product";
import img1 from "@/assets/jewelery/51bKD0GEChL._SY625_.png";
import img2 from "@/assets/jewelery/71wuD8IzqtL._SL1500_.png";
import img3 from "@/assets/jewelery/81WZQlUV40L._SY625_.png";
import img4 from "@/assets/jewelery/61DJZr11BUL._SY625_.png";
import img5 from "@/assets/jewelery/51vkUXs47GL._SL1000_.png";

const jeweleryItems: Omit<PRODUCT, "category">[] = [
  {
    id: "daffd470-0109-4b17-997f-423d2df85f3b",
    title: "Okos Unisex Fashion Jewellery Adjustable",
    price: 149,
    image: img1,
    link: "https://amzn.in/d/2U6CAz6",
  },
  {
    id: "ed8b6850-27dc-416e-ad08-25725ab5674c",
    title: "ANZAILALA Ring Size Adjuster for Loose Rings",
    price: 184,
    image: img2,
    link: "https://amzn.in/d/6tfESKf",
  },
  {
    id: "17696935-4777-4cce-84a2-2cea7a4a979c",
    title: "Shining Diva Fashion 26 Pcs Colorful Hair",
    price: 282,
    image: img3,
    link: "https://amzn.in/d/h3WRrfu",
  },
  {
    id: "59dcfcd3-2d6e-4cb6-abc0-31f441d8ac92",
    title: "ANZAILALA Ring Size Adjuster for Loose Rings",
    price: 184,
    image: img4,
    link: "https://amzn.in/d/5CGAGJq",
  },
  {
    id: "e905ae1a-e120-49e6-9c19-00f36695a3b3",
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
