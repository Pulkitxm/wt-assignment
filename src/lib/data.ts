import { PRODUCT } from "@/types/product";
import CollectibleItems from "./collectibles";
import ElectronicItems from "./electronic";
import FurnitureItems from "./furniture";
import GardenAndOutdoorsItems from "./garden";
import JeweleryItems from "./jewelery";

const products: PRODUCT[] = [
  ...ElectronicItems,
  ...FurnitureItems,
  ...GardenAndOutdoorsItems,
  ...CollectibleItems,
  ...JeweleryItems
];

export default products.sort(() => Math.random() - 0.5);
