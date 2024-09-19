import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, Register } from '../../models/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string = 'http://localhost:8080/auth';

  constructor(private httpClient: HttpClient) {}

  login(login: Login): Observable<Login> {
    return this.httpClient.post<Login>(`${this.url}/login`, login);
  }

  register(data: Register): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/register`, data);
  }
}
