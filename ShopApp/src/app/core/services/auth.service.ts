import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../environment/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private tokenKey = 'shop_token';
  private userKey = 'shop_user';

  private userSubject = new BehaviorSubject<any | null>(this.getUser());
  user$: Observable<any | null> = this.userSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(payload: { email: string; password: string }) {
    return this.http.post<{ token: string; user: any }>(
      `${environment.apiBase}/auth/login`,
      payload
    );
  }

  register(data: { email: string; password: string; name: { first: string; last: string } }) {
    return this.http.post('http://localhost:5000/api/auth/register', data);
  }


  saveSession(token: string, user: any) {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.userSubject.next(user);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  getUser(): any | null {
    const raw = localStorage.getItem(this.userKey);
    return raw ? JSON.parse(raw) : null;
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    this.userSubject.next(null);
  }
}
