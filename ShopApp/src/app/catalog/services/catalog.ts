import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({ providedIn: 'root' })
export class CatalogService {
  constructor(private http: HttpClient) {}

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiBase}/categories`);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiBase}/products`);
  }

  getProductsByCategory(slug: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiBase}/categories/${slug}/products`);
  }

  getProductById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiBase}/products/${id}`);
  }

  searchProducts(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiBase}/products/search?q=${query}`);
  }
}
