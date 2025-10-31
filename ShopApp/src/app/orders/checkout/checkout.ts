import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../cart/services/cart.service';
import { OrderService } from '../services/order';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  imports: [FormsModule],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.scss']
})
export class CheckoutComponent implements OnInit {
  address = '';
  paymentMethod = 'cod';
  cart: any[] = [];

  constructor(
    public cartService: CartService,
    public orderService: OrderService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

placeOrder() {
  const order = {
    address: this.address,
    paymentMethod: this.paymentMethod,
    totals: {
      subtotal: this.cartService.getSubtotal(),
      grandTotal: this.cartService.getTotalPrice()
    },
    items: this.cart.map(item => ({
      sku: item.sku || item.productId || 'SKU-' + Date.now(),
      productId: item.productId, // must be a valid MongoDB ObjectId
      qty: item.quantity,
      price: {
        sale: item.price,
        currency: 'INR'
      }
    }))
  };

  this.orderService.placeOrder(order).subscribe({
    next: () => {
      this.cartService.clearCart();
      this.router.navigate(['/orders']);
    },
    error: err => {
      console.error('Order failed:', err);
    }
  });
}
}
