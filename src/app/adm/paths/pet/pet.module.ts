import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { ReactiveFormsModule } from '@angular/forms';
import { PetRoutingModule } from './pet-routing.module';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetDetailComponent } from './pet-detail/pet-detail.component';
import { PetDashboardComponent } from './pet-dashboard/pet-dashboard.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [PetListComponent, PetFormComponent, PetDetailComponent, PetDashboardComponent],
  imports: [
    CommonModule,
    PetRoutingModule,
    ReactiveFormsModule, FormsModule
  ]
})
export class PetModule { }
