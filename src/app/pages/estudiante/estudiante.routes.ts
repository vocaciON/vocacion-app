import { Routes } from '@angular/router';
import { ComprasComponent } from './compras/compras.component';
import { InformacionComponent } from './informacion/informacion.component';

import { UpdateProfileComponent } from '../../shared/components/update-profile/update-profile.component';
import { UserProfileComponent } from '../../shared/components/user-profile/user-profile.component';
import { EstudianteLayoutComponent } from './estudiante-layout/estudiante-layout.component';

export const estudianteRoutes: Routes = [

    {
        path:'',
        component: EstudianteLayoutComponent,
        children:[
            {path:'compras',component:ComprasComponent},
            {path:'informacion', component:InformacionComponent},             
            {path:'profile',component:UserProfileComponent},
            {path:'profile/update', component:UpdateProfileComponent}
              
            
        ]
    }



];
