import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CatalogService } from '../services/catalog';
import { CartService } from '../../cart/services/cart.service';
import { TitleCasePipe } from '@angular/common';
import { ChunkPipe } from '../../shared/pipes/chunk.pipe';

declare var bootstrap: any;
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, TitleCasePipe, ChunkPipe],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.scss']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  categorySlug: string | null = null;
  activeIndex = 0;
  

  @ViewChild('cartToast', { static: false }) cartToast!: ElementRef;

  constructor(
    private route: ActivatedRoute,
    private catalog: CatalogService,
    private cart: CartService
  ) {}

  ngOnInit(): void {
    this.categorySlug = this.route.snapshot.paramMap.get('slug');
    if (this.categorySlug) {
      this.catalog.getProductsByCategory(this.categorySlug).subscribe(p => {
        this.products = p;
      });
    } else {
      this.catalog.getProducts().subscribe(p => {
        this.products = p;
      });
    }
  }

  prevSlide() {
    const totalChunks = Math.ceil(this.products.length / 8);
    this.activeIndex = (this.activeIndex - 1 + totalChunks) % totalChunks;
  }

  nextSlide() {
    const totalChunks = Math.ceil(this.products.length / 8);
    this.activeIndex = (this.activeIndex + 1) % totalChunks;
  }

  addToCart(product: any) {
    const v = product.variants?.[0];
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
