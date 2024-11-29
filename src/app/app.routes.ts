import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { authInverseGuard } from './core/guards/auth-inverse.guard';

export const routes: Routes = [

    {
        path:'', redirectTo:'auth/register', pathMatch: 'full'
    },


    {
        path:'auth',
        loadChildren:()=> import('./pages/auth/auth.routes').then(a => a.authRoutes),
        canActivate: [authInverseGuard]
    },

    {
        path:'estudiante',
        loadChildren: () => import('./pages/estudiante/estudiante.routes').then(e => e.estudianteRoutes),
        canActivate: [authGuard]
    }

    







];
