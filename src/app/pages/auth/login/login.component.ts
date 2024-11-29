import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatCardModule, MatButtonModule], // Incluye ReactiveFormsModule aquí
})
export class LoginComponent {
  loginForm: FormGroup;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  private authService = inject(AuthService)

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]], // Campo de correo electrónico
      password: ['', [Validators.required, Validators.minLength(6)]], // Campo de contraseña
    });
  }

  controlHasError(control: string, error: string): boolean {
    return this.loginForm.controls[control].hasError(error) && this.loginForm.controls[control].touched;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return; // Detén el flujo si el formulario es inválido
    }
  
    const loginData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };
  
    // Llamada al servicio de autenticación
    this.authService.login(loginData).subscribe(
      (response) => {
        console.log('Inicio de sesión exitoso', response);
        this.snackBar.open('Inicio de sesión exitoso', 'Cerrar', { duration: 3000, verticalPosition: 'top' });
        this.router.navigate(['/dashboard']); // Cambia la ruta según sea necesario
      },
      (error) => {
        console.error('Error al iniciar sesión', error);
        this.snackBar.open('Error al iniciar sesión', 'Cerrar', { duration: 3000, verticalPosition: 'top' });
      }
    );
  }
}
