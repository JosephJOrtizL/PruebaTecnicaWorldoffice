import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DeleteTeamsService } from 'src/app/core/services/delete/deleteTeam.service';

@Component({
  selector: 'app-modal-confirm-delete',
  templateUrl: './modal-confirm-delete.component.html',
  styleUrls: ['./modal-confirm-delete.component.scss']
})
export class ModalConfirmDeleteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialog:MatDialog,
  private deleteService:DeleteTeamsService,) { }

  ngOnInit(): void {}
  
  public onConfirm():void{
    this.deleteService.deleteTeam(this.data.id.toString()); 
    this.dialog.closeAll();
  }
  public onCancel():void{
    this.dialog.closeAll();
  }
}
