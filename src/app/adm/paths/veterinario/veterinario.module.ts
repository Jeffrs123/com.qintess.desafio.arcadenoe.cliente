import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VeterinarioRoutingModule } from './veterinario-routing.module';
import { VeterinarioListComponent } from './veterinario-list/veterinario-list.component';
import { VeterinarioFormComponent } from './veterinario-form/veterinario-form.component';
import { VeterinarioDetailComponent } from './veterinario-detail/veterinario-detail.component';


@NgModule({
  declarations: [VeterinarioListComponent, VeterinarioFormComponent, VeterinarioDetailComponent],
  imports: [
    CommonModule,
    VeterinarioRoutingModule
  ]
})
export class VeterinarioModule { }
