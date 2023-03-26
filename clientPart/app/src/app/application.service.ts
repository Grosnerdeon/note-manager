import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { CreateEditNouteComponent } from './dialog/create-edit-noute/create-edit-noute.component';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  createEditState = new Subject();

  constructor(public dialog: MatDialog,) { }

  changeState () {
    this.createEditState.next(null);
  }

  openCreateEditDialog(title = '', description = '', id = '', edit = false): void {
    const dialogRef = this.dialog.open(CreateEditNouteComponent, {
      width: '500px',
      data: { noute: {title, description, id }, titleDialog: edit ? 'Edit Noute' : 'Create Noute' },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.changeState();
    });
  }
}
