import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';
import { AlertModalComponent } from './modals/alert-modal/alert-modal.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ConfirmModalComponent, 
    AlertModalComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [
    AlertModalComponent,
    ConfirmModalComponent,
  ]
})
export class SharedModule { }
