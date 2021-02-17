import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { PetListComponent } from './pet-list/pet-list.component';


@NgModule({
  declarations: [PetListComponent],
  imports: [
    CommonModule,
    PetRoutingModule
  ]
})
export class PetModule { }
