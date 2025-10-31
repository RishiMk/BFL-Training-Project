import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { CategoriesComponent } from './categories/categories';
import { ProductsComponent } from './products/products';
import { AuthGuard } from '../core/guards/auth-guard';
import { RoleGuard } from '../core/guards/role-guard';

export const adminRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin'] }
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin'] }
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [AuthGuard, RoleGuard],
    data: { roles: ['admin'] }
  }
];
