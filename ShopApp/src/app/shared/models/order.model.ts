import { CartItem } from './cart-item.model';

export interface Order {
  _id: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'shipped' | 'delivered';
  createdAt: string;
}
