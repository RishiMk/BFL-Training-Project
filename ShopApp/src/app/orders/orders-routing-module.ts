import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout';
import { OrderListComponent } from './order-list/order-list';
import { AuthGuard } from '../core/guards/auth-guard';

const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: '', component: OrderListComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {}
