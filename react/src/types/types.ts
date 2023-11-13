export interface CardProps {
  id: number;
  title: string;
  images: string[];
  price: number;
  description: string;
}

export interface ApiData {
  products: CardProps[];
  total: number;
  skip: number;
  limit: number;
}
