import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./app/catalog/product-list/product-list').then(m => m.ProductListComponent)
  },
  {
    path: 'auth/login',
    loadComponent: () =>
      import('./app/auth/login/login').then(m => m.LoginComponent)
  },
  {
    path: 'auth/register',
    loadComponent: () =>
      import('./app/auth/register/register').then(m => m.RegisterComponent)
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./app/catalog/product-detail/product-detail').then(m => m.ProductDetailComponent)
  },

  {
    path: 'cart',
    loadComponent: () =>
      import('./app/cart/cart/cart').then(m => m.CartComponent)
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./app/orders/checkout/checkout').then(m => m.CheckoutComponent)
  },

  {
    path: 'orders',
    loadComponent: () =>
      import('./app/orders/order-list/order-list').then(m => m.OrderListComponent)
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./app/admin/admin.routes').then(m => m.adminRoutes)
  },
  { path: '**', redirectTo: '' }
];
