import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule, MatCardModule, MatButtonModule], // Incluye ReactiveFormsModule aquí
})
export class RegisterComponent {
  registerForm: FormGroup;

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  constructor() {
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      apellido: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, this.passwordMatchValidator]],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{9,15}$')]],
      fechaNacimiento: ['', [Validators.required]],
      gradoAcademico: ['', [Validators.required]],
      descripcion: [''],
    });
  }

  private passwordMatchValidator(control: any): { [key: string]: boolean } | null {
    const password = control?.parent?.get('password')?.value;
    if (password && control.value !== password) {
      return { passwordMismatch: true };
    }
    return null;
  }

  controlHasError(control: string, error: string): boolean {
    return this.registerForm.controls[control].hasError(error) && this.registerForm.controls[control].touched;
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    const user = {
      nombre: this.registerForm.value.nombre,
      apellido: this.registerForm.value.apellido,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      telefono: this.registerForm.value.telefono,
      fechaNacimiento: this.registerForm.value.fechaNacimiento,
      gradoAcademico: this.registerForm.value.gradoAcademico,
      descripcion: this.registerForm.value.descripcion || null,
    };

    // Aquí realizarías la llamada al servicio de registro
    console.log(user);
    this.snackBar.open('Registro exitoso', 'Cerrar', { duration: 3000, verticalPosition: 'top' });
    this.router.navigate(['/auth/login']);
  }
}
