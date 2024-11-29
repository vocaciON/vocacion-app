import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';  // Importar MatIconModule
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-estudiante-layout',
  templateUrl: './estudiante-layout.component.html',
  styleUrls: ['./estudiante-layout.component.css'],
  standalone: true,
  imports: [MatIconModule,CommonModule,NavbarComponent,FooterComponent,RouterOutlet,RouterLink]  // Aquí se importa MatIconModule
})

export class EstudianteLayoutComponent {
  isSiderActive = false;
  toggleSidebar(): void {
    this.isSiderActive = !this.isSiderActive;
  }
  
}
