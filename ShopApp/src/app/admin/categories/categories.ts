import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  imports:[FormsModule],
  templateUrl: './categories.html',
  styleUrls: ['./categories.scss']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = [];
  newCategory = '';

  constructor(private admin: AdminService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.admin.getCategories().subscribe(c => this.categories = c);
  }

  add() {
    if (!this.newCategory) return;
    this.admin.addCategory({ name: this.newCategory }).subscribe(() => {
      this.newCategory = '';
      this.load();
    });
  }

  delete(id: string) {
    this.admin.deleteCategory(id).subscribe(() => this.load());
  }
}
