import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { AuthRequest } from '../../shared/models/auth-request.model';
import { Observable, tap } from 'rxjs';
import { AuthResponse } from '../../shared/models/auth.response.model';
import { RegisterRequest } from '../../shared/models/register-request.moderl';
import { RegisterResponse } from '../../shared/models/register-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = `${environment.baseURL}/auth`;
  private http = inject(HttpClient);

  private storageServie = inject(StorageService);

  constructor() {}

  login(authRequest: AuthRequest):Observable<AuthResponse>{
    return this.http.post<AuthResponse>(`${this.baseURL}/login`, authRequest)
    .pipe(
      tap(response => this.storageServie.setAuthData(response))
    );
  }

  register(registerRequest:RegisterRequest):Observable<RegisterResponse>{
    return this.http.post<RegisterResponse>(`${this.baseURL}/register/perfil`, registerRequest)
  }

  logout(): void {
    this.storageServie.clearAuthData();
  }


  isAuthenticated(): Boolean {
    return this.storageServie.getAuthData() !==null;
  }

  getUser(): AuthResponse | null {
    const authData = this.storageServie.getAuthData();
    return authData ? authData : null;
  }



}
