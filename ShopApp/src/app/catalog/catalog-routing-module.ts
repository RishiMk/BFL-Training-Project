import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list';
import { ProductListComponent } from './product-list/product-list';
import { ProductDetailComponent } from './product-detail/product-detail';

const routes: Routes = [
  { path: '', component: CategoryListComponent },
  { path: 'category/:slug', component: ProductListComponent },
  { path: 'product/:id', component: ProductDetailComponent }
];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class CatalogRoutingModule {}
