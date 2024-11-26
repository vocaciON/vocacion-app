import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule] // Importa FormsModule aquí
})
export class LoginComponent {
  onSubmit() {
    alert('Formulario enviado');
    // Aquí puedes implementar la lógica de autenticación
  }
}
