import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AdminService {
  constructor(private http: HttpClient) {}

  // Categories
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiBase}/categories`);
  }

  addCategory(data: any): Observable<any> {
    return this.http.post(`${environment.apiBase}/categories`, data);
  }

  deleteCategory(id: string): Observable<any> {
    return this.http.delete(`${environment.apiBase}/categories/${id}`);
  }

  // Products
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiBase}/products`);
  }

  addProduct(data: any): Observable<any> {
    return this.http.post(`${environment.apiBase}/products`, data);
  }

  deleteProduct(id: string): Observable<any> {
    return this.http.delete(`${environment.apiBase}/products/${id}`);
  }
}
