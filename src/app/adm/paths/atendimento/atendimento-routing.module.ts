import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtendimentoListComponent } from './atendimento-list/atendimento-list.component';

const routes: Routes = [
  {
    path: '',
    component: AtendimentoListComponent
    //loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  }/*,
  {
    path: '**',
    redirectTo: 'admin'
  }*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AtendimentoRoutingModule { }
