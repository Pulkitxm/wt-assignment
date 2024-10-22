export enum Category {
  ALL = "All",
  Electronics = "Electronics",
  Furniture = "Furniture",
  GardenAndOutDoors = "Garden & Outdoors",
  Collectibles = "Collectibles",
  Jewelery = "Jewelery",
}

export type PRODUCT = {
  id: string;
  title: string;
  price: number;
  rating?: number;
  image: string;
  link: string;
  category: Category;
};
