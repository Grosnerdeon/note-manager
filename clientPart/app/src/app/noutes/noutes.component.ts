import { Component, OnInit } from '@angular/core';
import { INoute } from '../interfaces/noute/noute';
import { NoutesService } from '../noutes.service';

@Component({
  selector: 'app-noutes',
  templateUrl: './noutes.component.html',
  styleUrls: ['./noutes.component.css']
})
export class NoutesComponent implements OnInit {
  noute: INoute = {
    id: '',
    title: '',
    description: ''
  }

  noutes: INoute[] = [];

  constructor(public noutesService: NoutesService) { 
    this.getNoutes();
  }

  ngOnInit(): void {
  }

  getNoutes(): void {
    this.noutesService.getNoutes()
      .subscribe(noutes => this.noutes = noutes);
  }
}
