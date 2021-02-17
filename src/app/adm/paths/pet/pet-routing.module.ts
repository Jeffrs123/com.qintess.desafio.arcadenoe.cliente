import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetListComponent } from './pet-list/pet-list.component';

const routes: Routes = [
  {
    path: '',
    component: PetListComponent
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
export class PetRoutingModule { }
