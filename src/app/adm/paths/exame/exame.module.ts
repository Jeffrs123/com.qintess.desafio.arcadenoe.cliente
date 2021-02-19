import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExameRoutingModule } from './exame-routing.module';
import { ExameListComponent } from './exame-list/exame-list.component';
import { ExameFormComponent } from './exame-form/exame-form.component';
import { ExameDetailComponent } from './exame-detail/exame-detail.component';


@NgModule({
  declarations: [ExameListComponent, ExameFormComponent, ExameDetailComponent],
  imports: [
    CommonModule,
    ExameRoutingModule
  ]
})
export class ExameModule { }
