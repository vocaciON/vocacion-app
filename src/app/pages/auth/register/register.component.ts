import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
//import { UserService } from 'src/app/services/user.service';  // Servicio de registro

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [MatInputModule, MatCardModule, MatButtonModule] // Agregar otros módulos de Angular Material
})
export class RegisterComponent {
  registerForm: FormGroup;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);
  //private userService = inject(UserService);  // Servicio de registro de usuario

  constructor() {
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]], // Nombre
      apellido: ['', [Validators.required, Validators.minLength(2)]], // Apellido
      email: ['', [Validators.required, Validators.email]], // Email
      password: ['', [Validators.required, Validators.minLength(6)]], // Contraseña
      confirmPassword: ['', [Validators.required, this.passwordMatchValidator]], // Confirmar Contraseña
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{9,15}$')]], // Teléfono
      fechaNacimiento: ['', [Validators.required]], // Fecha de Nacimiento
      gradoAcademico: ['', [Validators.required]], // Grado Académico
      descripcion: [''] // Descripción (no obligatoria)
    });
  }

  // Validador personalizado para verificar que las contraseñas coincidan
  private passwordMatchValidator(control: any): { [key: string]: boolean } | null {
    const password = control?.parent?.get('password')?.value;
    if (password && control.value !== password) {
      return { passwordMismatch: true };
    }
    return null;
  }

  // Control de errores para los campos del formulario
  controlHasError(control: string, error: string) {
    return this.registerForm.controls[control].hasError(error) && this.registerForm.controls[control].touched;
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.registerForm.invalid) {
      return; // Si el formulario es inválido, no se hace nada
    }

    // Crear el objeto de usuario para el registro
    const user = {
      nombre: this.registerForm.value.nombre,
      apellido: this.registerForm.value.apellido,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      telefono: this.registerForm.value.telefono,
      fechaNacimiento: this.registerForm.value.fechaNacimiento,
      gradoAcademico: this.registerForm.value.gradoAcademico,
      descripcion: this.registerForm.value.descripcion || null, // Si la descripción está vacía, se envía null
    };

    // Llamar al servicio de registro
    /*this.userService.register(user).subscribe({
      next: (response) => {
        this.showSnackBar('Registro exitoso');
        this.router.navigate(['/auth/login']); // Redirigir al login después del registro
      },
      error: (err) => {
        this.showSnackBar('Error al registrar el usuario');
      },
    });*/
  }

  // Método para mostrar el mensaje de snack bar
  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Cerrar', { duration: 3000, verticalPosition: 'top' });
  }
}

