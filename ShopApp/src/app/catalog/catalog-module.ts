import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogRoutingModule } from './catalog-routing-module';
import { CategoryListComponent } from './category-list/category-list';
import { ProductListComponent } from './product-list/product-list';
import { ProductDetailComponent } from './product-detail/product-detail';

@NgModule({
  declarations: [
  ],
  imports: [CommonModule, CatalogRoutingModule,ProductDetailComponent,ProductListComponent,CategoryListComponent]
})
export class CatalogModule {}
