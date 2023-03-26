import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApplicationService } from '../application.service';
import { CreateEditNouteComponent } from '../dialog/create-edit-noute/create-edit-noute.component';
import { NoutesService } from '../noutes.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {

  constructor(
    public noutesService: NoutesService,
    private applicationService: ApplicationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  openCreateDialog(): void {
    this.applicationService.openCreateEditDialog();
  }

  goToMainPage () {
    this.router.navigate([''])
  }
}
