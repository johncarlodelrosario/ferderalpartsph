export interface Product {
  id: string;
  name: string;
  description: string;
  brand: string;
  motorcycle: string[];
  category: string;
  subCategory?: string;
  partNumber: string;
  oemNumber: string;
  model: string;
  quantityPerBox: string;
  price: number;
  image: string;
}

export interface Brand {
  id: string;
  name: string;
  logo?: string;
}

export interface Motorcycle {
  id: string;
  name: string;
  brand: string;
}
