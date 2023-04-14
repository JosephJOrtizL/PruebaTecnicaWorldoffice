import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmDeleteComponent } from './modal-confirm-delete.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    ModalConfirmDeleteComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    ModalConfirmDeleteComponent
  ]
})
export class ModalConfirmDeleteModule { }
