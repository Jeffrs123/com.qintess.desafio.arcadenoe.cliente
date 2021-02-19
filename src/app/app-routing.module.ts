import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  
  {
    path: 'admin',
    loadChildren: () => import('./adm/adm.module').then(m => m.AdmModule)
    //canActivate: [AuthFirebaseGuard],    canLoad: [AuthFirebaseGuard]
  },{
    path: '',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },/*,
  {
    path: '**',
    redirectTo: ''
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
