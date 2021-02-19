import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { AtendimentoListComponent } from './atendimento-list/atendimento-list.component';
import { AtendimentoFormComponent } from './atendimento-form/atendimento-form.component';
import { AtendimentoDetailComponent } from './atendimento-detail/atendimento-detail.component';


@NgModule({
  declarations: [
    AtendimentoListComponent,
    AtendimentoFormComponent,
    AtendimentoDetailComponent
  ],
  imports: [
    CommonModule,
    AtendimentoRoutingModule
  ]
})
export class AtendimentoModule { }
