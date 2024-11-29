import { Component, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service'; // Asegúrate de que el servicio esté importado
import { RouterLink, RouterOutlet,Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [RouterLink, RouterOutlet,CommonModule]  // Añadimos RouterLink como importación
})
export class NavbarComponent {
  
  private authService = inject(AuthService);
  private router = inject(Router);

  isAuthenticated: boolean = true;

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();  // Método para cerrar sesión
    this.isAuthenticated = false;  // Redirige a la página de login
  }
}
