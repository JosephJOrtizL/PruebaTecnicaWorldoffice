import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteButtonComponent } from './delete-button.component';
import { MatIconModule } from '@angular/material/icon';
import { ModalConfirmDeleteModule } from '../../molecules/modal-confirm-delete/modal-confirm-delete.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from "@angular/material/tooltip";


@NgModule({
  declarations: [
    DeleteButtonComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ModalConfirmDeleteModule,
    MatDialogModule,
    MatTooltipModule
  ],
  exports:[
    DeleteButtonComponent
  ]
})
export class DeleteButtonModule { }
