import { Component, OnInit } from '@angular/core';
import { INoute } from '../interfaces/noute/noute';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { NOUTES } from '../mouk/mouk-noutes';

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

  constructor() { 
    this.noutes = NOUTES;
  }

  ngOnInit(): void {
  }

}
