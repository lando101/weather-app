import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  signup(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/auth/signup`;
    const body = { email, password };
    return this.http.post<any>(url, body);
  }

  login(email: string, password: string): Observable<any> {
    const url = `${this.apiUrl}/auth/login`;
    const body = { email, password };
    return this.http.post<any>(url, body);
  }

  logout(): Observable<any> {
    const url = `${this.apiUrl}/auth/logout`;
    return this.http.post<any>(url, {});
  }
}
