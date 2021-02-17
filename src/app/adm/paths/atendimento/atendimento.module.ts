import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AtendimentoRoutingModule } from './atendimento-routing.module';
import { AtendimentoListComponent } from './atendimento-list/atendimento-list.component';


@NgModule({
  declarations: [AtendimentoListComponent],
  imports: [
    CommonModule,
    AtendimentoRoutingModule
  ]
})
export class AtendimentoModule { }
