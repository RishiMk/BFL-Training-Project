import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({ providedIn: 'root' })
export class OrderService {
  constructor(private http: HttpClient) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('shop_token');
    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  placeOrder(order: any): Observable<any> {
    return this.http.post(`${environment.apiBase}/orders`, order, {
      headers: this.getAuthHeaders()
    });
  }

  getOrders(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiBase}/orders`, {
      headers: this.getAuthHeaders()
    });
  }

  getOrderById(id: string): Observable<any> {
    return this.http.get<any>(`${environment.apiBase}/orders/${id}`, {
      headers: this.getAuthHeaders()
    });
  }
}
