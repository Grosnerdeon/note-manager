import { Component, OnInit, OnDestroy } from '@angular/core';
import { INoute } from '../interfaces/noute/noute';
import { NoutesService } from '../noutes.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ApplicationService } from '../application.service';

@Component({
  selector: 'app-noutes',
  templateUrl: './noutes.component.html',
  styleUrls: ['./noutes.component.css']
})
export class NoutesComponent implements OnInit, OnDestroy {
  noute: INoute = {
    _id: '',
    title: '',
    description: ''
  }
  subscribtions: any[] = [];

  noutes: INoute[] = [];

  constructor(
    public noutesService: NoutesService,
    private applicationService: ApplicationService) { 
  }

  ngOnInit(): void {
    this.getNoutes();
    this.subscribtions.push(this.applicationService.createEditState.subscribe(() => {
      this.noutesService.getNoutes().subscribe(noutes => {
        this.noutesService.noutes = noutes; 
        this.noutes = noutes; 
      });
    }))
  }

  ngOnDestroy(): void {
    this.subscribtions.forEach(subscribtion => {
      subscribtion.unsubscribe();
    });

    this.subscribtions = [];
  }

  openEditDialog(title = '', description = '', id = '', edit = false) {
    this.applicationService.openCreateEditDialog(title, description, id, edit)
  }

  getNoutes(): void {
    this.noutesService.getNoutes()
      .subscribe(noutes => {
        this.noutesService.noutes = noutes;
        this.noutes = noutes
      });
  }

  deleteNoute(id: string): void {
    this.noutesService.deleteNoute(id).subscribe(() => {
      this.getNoutes();
    });
  }
}