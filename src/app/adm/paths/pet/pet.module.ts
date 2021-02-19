import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetDashboardComponent } from './pet-dashboard/pet-dashboard.component';


@NgModule({
  declarations: [PetListComponent, PetFormComponent, PetDetailComponent, PetDashboardComponent],
  imports: [
    CommonModule,
    PetRoutingModule
  ]
})
export class PetModule { }
