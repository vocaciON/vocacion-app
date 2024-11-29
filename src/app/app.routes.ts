import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path:'', redirectTo:'auth/register', pathMatch: 'full'
    },


    {
        path:'auth',
        loadChildren:()=> import('./pages/auth/auth.routes').then(a => a.authRoutes)
    },

    {
        path:'estudiante',
        loadChildren: () => import('./pages/estudiante/estudiante.routes').then(e => e.estudianteRoutes)
    }




];
