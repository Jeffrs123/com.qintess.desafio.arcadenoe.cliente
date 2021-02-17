import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'atendimento'
      },
      {
        path: 'atendimento',
        loadChildren: () => import('./paths/atendimento/atendimento.module').then(m => m.AtendimentoModule)
      },
      {
        path: 'pet',
        loadChildren: () => import('./paths/pet/pet.module').then(m => m.PetModule)
        //canActivate: [AuthFirebaseGuard],    canLoad: [AuthFirebaseGuard]
      }
    ]
    /*pathMatch: 'full',
    redirectTo: 'atendimento'*/
  },
  /*{
    path: 'atendimento',
    loadChildren: () => import('./paths/atendimento/atendimento.module').then(m => m.AtendimentoModule)
  },
  {
    path: 'pet',
    loadChildren: () => import('./paths/pet/pet.module').then(m => m.PetModule)
    //canActivate: [AuthFirebaseGuard],    canLoad: [AuthFirebaseGuard]
  },*/
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmRoutingModule { }
