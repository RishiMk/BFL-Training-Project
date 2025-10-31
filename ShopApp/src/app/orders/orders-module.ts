import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdersRoutingModule } from './orders-routing-module';
import { CheckoutComponent } from './checkout/checkout';
import { OrderListComponent } from './order-list/order-list';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, OrderListComponent,OrdersRoutingModule,CheckoutComponent]
})
export class OrdersModule {}
