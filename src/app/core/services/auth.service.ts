import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { AuthRequest } from '../../shared/models/auth-request.model';
import { Observable, tap } from 'rxjs';
import { AuthResponse } from '../../shared/models/auth.response.model';  // Asegúrate de que el nombre del archivo sea correcto
import { RegisterRequest } from '../../shared/models/register-request.moderl';  // Corrige el nombre del archivo
import { RegisterResponse } from '../../shared/models/register-response.model';  // Asegúrate de que el nombre del archivo sea correcto

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseURL = `${environment.baseURL}/auth`;

  // Inyección de dependencias utilizando el constructor (recomendado en Angular)
  constructor(private http: HttpClient, private storageServie: StorageService) {}

  // Método para hacer login
  login(authRequest: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseURL}/login`, authRequest)
      .pipe(
        tap(response => {
          if (response) {
            this.storageServie.setAuthData(response);  // Guardamos los datos de autenticación en el localStorage
          }
        })
      );
  }

  // Método para hacer registro
  register(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>(`${this.baseURL}/register/perfil`, registerRequest)
      .pipe(
        tap(response => {
          if (response) {
            // Si el registro es exitoso, puedes hacer algo con la respuesta, como redirigir al login
            console.log('Registro exitoso:', response);
            // Ejemplo: redirigir al login (si tienes un servicio de enrutamiento)
            // this.router.navigate(['/login']);
          }
        })
      );
  }

  // Método para hacer logout
  logout(): void {
    this.storageServie.clearAuthData();  // Limpiamos los datos del usuario cuando cierre sesión
  }

  // Método para comprobar si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.storageServie.getAuthData() !== null;  // Verificamos si hay datos en el localStorage
  }

  // Método para obtener los datos del usuario almacenados
  getUser(): AuthResponse | null {
    return this.storageServie.getAuthData();  // Retorna los datos de usuario almacenados en el localStorage
  }

  getUserRole(): string | null {
    const authData = this.storageServie.getAuthData(); // Asegúrate de que storageService esté correctamente escrito.
    return authData ? authData.role : null;
  }
  
}
