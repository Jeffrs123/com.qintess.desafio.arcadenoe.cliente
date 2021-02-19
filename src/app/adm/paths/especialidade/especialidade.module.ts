import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EspecialidadeRoutingModule } from './especialidade-routing.module';
import { EspecialidadeListComponent } from './especialidade-list/especialidade-list.component';
import { EspecialidadeFormComponent } from './especialidade-form/especialidade-form.component';
import { EspecialidadeDetailComponent } from './especialidade-detail/especialidade-detail.component';


@NgModule({
  declarations: [EspecialidadeListComponent, EspecialidadeFormComponent, EspecialidadeDetailComponent],
  imports: [
    CommonModule,
    EspecialidadeRoutingModule
  ]
})
export class EspecialidadeModule { }
