export interface Product {
  quantity: number;
  product: string;
}

export interface Order {
  id: string;
  products: Product[];
  complete: boolean;
  cancel: boolean;
}

export interface OrderState {
  orders: Order[];
  sortBy: Order[];
}
