import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Afinidade } from 'src/app/models/Afinidade';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AfinidadeService {

  constructor(
    private http: HttpClient
  ) { }

  getAll() {
      return this.http.get<Afinidade[]>(`${environment.apiUrl}/afinidade`);
  }

  getById(id: number) {
      return this.http.get<Afinidade>(`${environment.apiUrl}/afinidade/${id}`);
  }

  create(params: any) {
      return this.http.post(`${environment.apiUrl}/afinidade`, params);
  }

  update(id: number, params: any) {
      return this.http.put(`${environment.apiUrl}/afinidade/${id}`, params);
  }

  delete(id: number) {
      return this.http.delete(`${environment.apiUrl}/afinidade/${id}`);
  }
}
