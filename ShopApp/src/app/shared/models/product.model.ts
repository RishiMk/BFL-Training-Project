export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image?: { url: string; alt?: string };
  category?: string;
}
