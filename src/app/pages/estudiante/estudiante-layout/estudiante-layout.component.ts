import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';  // Importar MatIconModule

@Component({
  selector: 'app-estudiante-layout',
  templateUrl: './estudiante-layout.component.html',
  styleUrls: ['./estudiante-layout.component.css'],
  standalone: true,
  imports: [MatIconModule]  // Aquí se importa MatIconModule
})
export class EstudianteLayoutComponent {
  studentName = 'Fabian';
}
