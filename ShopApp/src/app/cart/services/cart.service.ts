import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartKey = 'shop_cart';
  private cartSubject = new BehaviorSubject<CartItem[]>(this.loadCart());
  cart$ = this.cartSubject.asObservable();

  private loadCart(): CartItem[] {
    const raw = localStorage.getItem(this.cartKey);
    return raw ? JSON.parse(raw) : [];
  }

  private saveCart(cart: CartItem[]) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
    this.cartSubject.next(cart);
  }

  getCart(): CartItem[] {
    return this.cartSubject.value;
  }

  addItem(item: CartItem) {
    const cart = this.getCart();
    const existing = cart.find(c => c.productId === item.productId);
    if (existing) {
      existing.quantity += item.quantity;
      if (existing.quantity <= 0) {
        this.removeItem(item.productId);
        return;
      }
    } else {
      cart.push(item);
    }
    this.saveCart([...cart]);
  }

  removeItem(productId: string) {
    const cart = this.getCart().filter(c => c.productId !== productId);
    this.saveCart(cart);
  }

  clearCart() {
    this.saveCart([]);
  }

  getTotalCount(): number {
    return this.getCart().reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
    getSubtotal(): number {
    return this.getCart().reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
