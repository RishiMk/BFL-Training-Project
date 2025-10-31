import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-list',
  imports:[RouterLink],
  templateUrl: './category-list.html',
  styleUrls: ['./category-list.scss']
})
export class CategoryListComponent implements OnInit {
  categories: any[] = [];

  constructor(private catalog: CatalogService) {}

  ngOnInit(): void {
    this.catalog.getCategories().subscribe(c => this.categories = c);
  }
}
