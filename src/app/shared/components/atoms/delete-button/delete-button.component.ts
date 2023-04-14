import { Component, OnInit, Input } from '@angular/core';
import { DeleteTeamsService } from 'src/app/core/services/delete/deleteTeam.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalConfirmDeleteComponent } from '../../molecules/modal-confirm-delete/modal-confirm-delete.component';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent implements OnInit {
  @Input() id:number = -1;
  constructor(private deleteService:DeleteTeamsService,
    public dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  public onDelete(event: MouseEvent):void{
    event.stopPropagation();
    this.dialog.open(ModalConfirmDeleteComponent, {
      panelClass: 'modalConfirmaDelete',
      autoFocus: false,
      data: {
        id: this.id,
      }
  });
  }
}
