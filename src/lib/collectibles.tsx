import { Category, PRODUCT } from "@/types/product";
import img1 from "@/assets/collectibles/81f1jhRE6FL._SL1500_.png";
import img2 from "@/assets/collectibles/71a1BV-S37L._SL1500_.png";
import img3 from "@/assets/collectibles/41uoBWzjFvL.png";
import img4 from "@/assets/collectibles/51cTsQp0jIL._SL1280_.png";
import img5 from "@/assets/collectibles/51ktnFFL8FL.png";

const collectibleItems: Omit<PRODUCT, "category">[] = [
  {
    title: "Customized Handmade pencil sketch portrait with frame on A3 size Paper ",
    price: 1950,
    image: img1,
    link: "https://amzn.in/d/f50gBE7",
  },
  {
    title: "Ckartistic Photo to Personalized Charcoal Sketch",
    price: 1999,
    image: img2,
    link: "https://amzn.in/d/4maAxTY",
  },
  {
    title: "Brass Test Sieves (Diameter 300 mm)",
    price: 750,
    image: img3,
    link: "https://amzn.in/d/30VTozg",
  },
  {
    title: "Big Red Boots(Both Green&White)",
    price: 225,
    image: img4,
    link: "https://amzn.in/d/emUuSNb",
  },
  {
    title: "Raingear Handcraft clay thali set",
    price: 799,
    image: img5,
    link: "https://amzn.in/d/1fR0NcQ",
  },
];

const CollectibleItems = collectibleItems.map((item) => ({
  ...item,
  category: Category.Collectibles,
}));

export default CollectibleItems;
