import { Category, PRODUCT } from "@/types/product";
import img1 from "@/assets/garden/61k26PaYxML._SL1500_.png";
import img2 from "@/assets/garden/61BTe9uJ6jL._SL1500_.png";
import img3 from "@/assets/garden/61TFqvazyyL._SL1500_.png";
import img4 from "@/assets/garden/616unjVbf4L._SL1500_.png";
import img5 from "@/assets/garden/51u7qh38-bL._SL1000_.png";

const gardenAndOutdoorsItems: Omit<PRODUCT, "category">[] = [
  {
    id: "5065148b-aba8-4e17-92a7-d04aec12d6d8",
    title: "Push Manual Lawn Mower with Grass Catcher",
    price: 6369,
    rating: 3.0,
    image: img1,
    link: "https://amzn.in/d/gVK3Gzo",
  },
  {
    id: "ef0a4c95-39e7-4175-aac2-c111a076ba9f",
    title: "ORILEY 500W Electric Air Blower Garden Leaf Dust Cleaner",
    price: 499,
    rating: 3.9,
    image: img2,
    link: "https://amzn.in/d/9YuCxO0",
  },
  {
    id: "7374a292-4b5c-41c0-9303-a9725a6b019c",
    title: "BLACK+DECKER GL9035-GB Corded Electric Strimmer Grass Trimmer",
    price: 5999,
    rating: 4.5,
    image: img3,
    link: "https://amzn.in/d/6KZbKwD",
  },
  {
    id: "3edd5f63-3acc-4f34-bf27-e82ea1c6cfcb",
    title: "BLACK+DECKER GT4245-B1 Corded 420-Watt Hedge Trimmer",
    price: 6013,
    rating: 4.2,
    image: img4,
    link: "https://amzn.in/d/cUmoAom",
  },
  {
    id: "26d2fdce-8f55-4f43-8f11-04ab5d265551",
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
