import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importamos Router para navegar
import { AuthService } from '../../../core/services/auth.service';// Importa el servicio de autenticación si lo tienes
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [RouterLink]  // Añadimos RouterLink como importación
})
export class NavbarComponent {
  // Propiedad para verificar si el usuario está autenticado
  constructor(private router: Router, private authService: AuthService) {}

  // Método para navegar a la página de perfil
  goToProfile() {
    this.router.navigate(['/profile']);
  }

  // Verifica si el usuario está autenticado
  isAuthenticated(): boolean {
    return this.isAuthenticated();  // Llamamos al método de autenticación
  }

  // Método de logout
  logout() {
    this.authService.logout();  // Llamamos al método de logout
    this.router.navigate(['/auth/login']);  // Redirige al login
  }
}
