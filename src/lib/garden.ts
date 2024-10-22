import { Category, PRODUCT } from "@/types/product";
import img1 from "@/assets/garden/61k26PaYxML._SL1500_.png";
import img2 from "@/assets/garden/61BTe9uJ6jL._SL1500_.png";
import img3 from "@/assets/garden/61TFqvazyyL._SL1500_.png";
import img4 from "@/assets/garden/616unjVbf4L._SL1500_.png";
import img5 from "@/assets/garden/51u7qh38-bL._SL1000_.png";

const gardenAndOutdoorsItems: Omit<PRODUCT, "category">[] = [
  {
    title: "Push Manual Lawn Mower with Grass Catcher",
    price: 6369,
    rating: 3.0,
    image: img1,
    link: "https://amzn.in/d/gVK3Gzo",
  },
  {
    title: "ORILEY 500W Electric Air Blower Garden Leaf Dust Cleaner",
    price: 499,
    rating: 3.9,
    image: img2,
    link: "https://amzn.in/d/9YuCxO0",
  },
  {
    title: "BLACK+DECKER GL9035-GB Corded Electric Strimmer Grass Trimmer",
    price: 5999,
    rating: 4.5,
    image: img3,
    link: "https://amzn.in/d/6KZbKwD",
  },
  {
    title: "BLACK+DECKER GT4245-B1 Corded 420-Watt Hedge Trimmer",
    price: 6013,
    rating: 4.2,
    image: img4,
    link: "https://amzn.in/d/cUmoAom",
  },
  {
    title:
      "WOLF Garten 18Bkejs2650 1400W 3500 RPM Electric 3-in-1 Push Lawn Mower",
    price: 12999,
    rating: 4.3,
    image: img5,
    link: "https://amzn.in/d/csxVPY7",
  },
];

const GardenAndOutdoorsItems = gardenAndOutdoorsItems.map((item) => ({
  ...item,
  category: Category.GardenAndOutDoors,
}));

export default GardenAndOutdoorsItems;
