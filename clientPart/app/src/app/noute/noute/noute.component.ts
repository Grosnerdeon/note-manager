import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { INoute } from '../../../app/interfaces/noute/noute';
import { NoutesService } from '../../../app/noutes.service';

@Component({
  selector: 'app-noute',
  templateUrl: './noute.component.html',
  styleUrls: ['./noute.component.css']
})
export class NouteComponent implements OnInit {
  noute: INoute | undefined;

  constructor(
    private route: ActivatedRoute,
    public noutesService: NoutesService,
  ) { 
  }

  ngOnInit(): void {
    const routerParams = this.route.snapshot.paramMap;
    const producIdFromRoute = routerParams.get('nouteId');

    this.noutesService.getNoutes()
      .subscribe(noutes => {
        this.noutesService.noutes = noutes;
        this.noute = this.noutesService.noutes.find((noute: INoute) => noute._id === producIdFromRoute)
      });

    
  }

}
