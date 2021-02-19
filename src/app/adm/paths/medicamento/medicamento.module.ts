import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicamentoRoutingModule } from './medicamento-routing.module';
import { MedicamentoListComponent } from './medicamento-list/medicamento-list.component';
import { MedicamentoFormComponent } from './medicamento-form/medicamento-form.component';
import { MedicamentoDetailComponent } from './medicamento-detail/medicamento-detail.component';


@NgModule({
  declarations: [MedicamentoListComponent, MedicamentoFormComponent, MedicamentoDetailComponent],
  imports: [
    CommonModule,
    MedicamentoRoutingModule
  ]
})
export class MedicamentoModule { }
