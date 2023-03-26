import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { INouteDialogData, INouteTemplate } from 'src/app/interfaces/noute/noute';
import { NoutesService } from 'src/app/noutes.service';

@Component({
  selector: 'create-edit-noute-dialog',
  styleUrls: ['./create-edit-noute.component.css'],
  templateUrl: './create-edit-noute.component.html',
})
export class CreateEditNouteComponent  {
  constructor(
    private dialogRef: MatDialogRef<CreateEditNouteComponent>,
    private noutesService: NoutesService,
    @Inject(MAT_DIALOG_DATA) public data: INouteDialogData = {
      noute: {
        id: '',
        title: '',
        description: '',
        date: ''
      },
      titleDialog: ''
    },
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
