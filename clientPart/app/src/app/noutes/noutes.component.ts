import { Component, OnInit, Inject } from '@angular/core';
import { INoute } from '../interfaces/noute/noute';
import { NoutesService } from '../noutes.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-noutes',
  templateUrl: './noutes.component.html',
  styleUrls: ['./noutes.component.css']
})
export class NoutesComponent implements OnInit {
  noute: INoute = {
    _id: '',
    title: '',
    description: ''
  }

  noutes: INoute[] = [];

  constructor(public noutesService: NoutesService, public dialog: MatDialog) { 
    this.getNoutes();
  }

  ngOnInit(): void {
  }

  getNoutes(): void {
    this.noutesService.getNoutes()
      .subscribe(noutes => this.noutes = noutes);
  }

  deleteNoute(id: string): void {
    this.noutesService.deleteNoute(id).subscribe(() => {
      this.getNoutes();
    });
  }

  openDialog(title = '', description = '', id = '', edit = false): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { noute: {title, description, id }, titleDialog: edit ? 'Edit Noute' : 'Create Noute' },
    });

    dialogRef.afterClosed().subscribe(result => {
      this.noutesService.getNoutes().subscribe(noutes => this.noutes = noutes);
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: '../dialog/dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    public noutesService: NoutesService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onSaveClick(): void {
    if (this.data.noute.id !== '') {
      this.noutesService.editNoute(this.data.noute.title, this.data.noute.description, this.data.noute.id).subscribe(() => {
        this.dialogRef.close();
      });
    } else {
      this.noutesService.addNoute(this.data.noute.title, this.data.noute.description).subscribe(() => {
        this.dialogRef.close();
      });
    }
    
  }
}