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
        redirectTo: 'pet'
      },
      {
        path: 'atendimento',
        loadChildren: () => import('./paths/atendimento/atendimento.module').then(m => m.AtendimentoModule)
      },
      {
        path: 'cliente',
        loadChildren: () => import('./paths/cliente/cliente.module').then(m => m.ClienteModule)
      },
      {
        path: 'especialidade',
        loadChildren: () => import('./paths/especialidade/especialidade.module').then(m => m.EspecialidadeModule)
      },
      {
        path: 'exame',
        loadChildren: () => import('./paths/exame/exame.module').then(m => m.ExameModule)
      },
      {
        path: 'medicamento',
        loadChildren: () => import('./paths/medicamento/medicamento.module').then(m => m.MedicamentoModule)
      },
      {
        path: 'pet',
        loadChildren: () => import('./paths/pet/pet.module').then(m => m.PetModule)
      },
      {
        path: 'veterinario',
        loadChildren: () => import('./paths/veterinario/veterinario.module').then(m => m.VeterinarioModule)
      },
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
