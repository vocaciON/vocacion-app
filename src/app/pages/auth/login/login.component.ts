import { Component, inject, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,MatInputModule,
     MatCardModule,MatSnackBarModule,RouterLink,MatButtonModule] // Importa FormsModule aquí
})
export class LoginComponent {
  loginForm: FormGroup;

  private fb = inject(FormBuilder);
  private  router = inject(Router);
  private snackBar = inject(MatSnackBar);

  constructor() {
    this.loginForm=this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      password: ['',[Validators.required]]
    });
    
  }

  controlHasErro(control:string,error:string){
    return this.loginForm.controls[control].hasError(error);
  }

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    };

    this.showSnackBar("inicio de sesion exitoso")
  }

  private showSnackBar(message:string):void{
    this.snackBar.open('Login Successful','Close',{duration:2000,verticalPosition:'top'});
  }

}
