import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogService } from '../services/catalog';
import { CartService } from '../../cart/services/cart.service';

declare var bootstrap: any; // ✅ Fixes "Cannot find name 'bootstrap'"

@Component({
  selector: 'app-product-detail',
  standalone: true,
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.scss']
})
export class ProductDetailComponent {
  product: any;
  selectedVariant: any;

  @ViewChild('cartToast', { static: false }) cartToast!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private catalog: CatalogService,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.catalog.getProductById(id).subscribe(p => {
        this.product = p;
        this.selectedVariant = p.variants?.[0];
      });
    }
  }

  selectVariant(v: any) {
    this.selectedVariant = v;
  }

  addToCart(product: any) {
    const v = this.selectedVariant ?? product.variants?.[0];

    this.cart.addItem({
      productId: product._id,
      name: product.title,
      price: v?.price,
      quantity: 1,
      image: product.images?.[0]?.url
    });

    const toastEl = this.cartToast?.nativeElement;
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl, { delay: 3000 });
      toast.show();
    }
  }
}
