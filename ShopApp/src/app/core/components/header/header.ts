import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-header',
  imports:[RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent {
  user: any | null = null;
  cartCount = 0;

  constructor(private auth: AuthService, private cart: CartService, private router: Router) {
    this.auth.user$.subscribe(u => this.user = u);
    this.cart.cart$.subscribe(c => this.cartCount = c.reduce((s, i) => s + i.quantity, 0));
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
