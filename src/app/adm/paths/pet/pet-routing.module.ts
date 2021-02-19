import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetDashboardComponent } from './pet-dashboard/pet-dashboard.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetListComponent } from './pet-list/pet-list.component';

const routes: Routes = [
  {
    path: '',
    component: PetDashboardComponent,
    children: [
      {
        path: '',
        component: PetListComponent
      },
      {
        path: 'novo',
        component: PetFormComponent
      },
      {
        path: ':id',
        component: PetDetailComponent
      },
      {
        path: ':id/editar',
        component: PetFormComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
