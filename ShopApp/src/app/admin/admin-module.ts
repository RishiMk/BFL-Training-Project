import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard';
import { CategoriesComponent } from './categories/categories';
import { ProductsComponent } from './products/products';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    DashboardComponent,
    ProductsComponent,
    CategoriesComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule {}
