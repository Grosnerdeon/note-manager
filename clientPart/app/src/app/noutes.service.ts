import { Injectable } from '@angular/core';
import { INoute } from './interfaces/noute/noute';
import { NOUTES } from './mouk/mouk-noutes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoutesService {

  constructor() { }

  getNoutes(): Observable<INoute[]> {
    const noutes = of(NOUTES)
    return noutes;
  }

  addNoute(title: string, description: string): void {
    NOUTES.unshift({
      id: new Date().toISOString(),
      title,
      description
    })
  }
}
