export interface Category {
  _id: string;
  name: string;
  slug: string;
  image?: { url: string; alt?: string };
}
