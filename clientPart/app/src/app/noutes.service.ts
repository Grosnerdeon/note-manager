import { Injectable } from '@angular/core';
import { INoute } from './interfaces/noute/noute';
import { NOUTES } from './mouk/mouk-noutes';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoutesService {

  constructor(private http: HttpClient) { }

  getNoutes(): Observable<INoute[]> {
    return this.http.get<INoute[]>('/api/noutes/all');
  }

  addNoute(title: string, description: string): Observable<Object> {
    return this.http.post(
      '/api/noutes', 
      { title, description }, 
      { headers: { 'Content-Type': 'application/json' } });
  }

  editNoute(title: string, description: string, id: string): Observable<Object> {
    return this.http.put(
      `/api/noutes/${id}`, 
      { title, description }, 
      { headers: { 'Content-Type': 'application/json' } });
  }

  deleteNoute(id: string): Observable<Object> {
    return this.http.delete(
      `/api/noutes/${id}`) 
  }
}
