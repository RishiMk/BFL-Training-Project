import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService, CartItem } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-page.html',
  styleUrls: ['./cart-page.scss']
})
export class CartComponent implements OnInit {
  cart: CartItem[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(c => this.cart = c);
  }

  increase(item: CartItem) {
    this.cartService.addItem({ ...item, quantity: 1 });
  }

  decrease(item: CartItem) {
    item.quantity > 1
      ? this.cartService.addItem({ ...item, quantity: -1 })
      : this.remove(item);
  }

  remove(item: CartItem) {
    this.cartService.removeItem(item.productId);
  }

  clear() {
    this.cartService.clearCart();
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }

  get totalPrice(): number {
    return this.cartService.getTotalPrice();
  }

  get totalCount(): number {
    return this.cartService.getTotalCount();
  }
}
