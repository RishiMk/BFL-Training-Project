import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  imports:[FormsModule],
  templateUrl: './products.html',
  styleUrls: ['./products.scss']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  newProduct = { name: '', price: 0 };

  constructor(private admin: AdminService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.admin.getProducts().subscribe(p => this.products = p);
  }

  add() {
    if (!this.newProduct.name || !this.newProduct.price) return;
    this.admin.addProduct(this.newProduct).subscribe(() => {
      this.newProduct = { name: '', price: 0 };
      this.load();
    });
  }

  delete(id: string) {
    this.admin.deleteProduct(id).subscribe(() => this.load());
  }
}
