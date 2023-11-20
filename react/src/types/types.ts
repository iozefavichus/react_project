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

export interface Store {
  localStorageValue: string;
  page: number;
  limit: number;
}
