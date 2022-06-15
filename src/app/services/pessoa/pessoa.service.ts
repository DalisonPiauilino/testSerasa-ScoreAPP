import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/models/Pessoa';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor(
    private http: HttpClient
  ) { }

    getAll() {
        return this.http.get<Pessoa[]>(`${environment.apiUrl}/pessoa`);
    }

    getById(id: number) {
        return this.http.get<Pessoa>(`${environment.apiUrl}/pessoa/${id}`);
    }

    create(pessoa: Pessoa) {
        return this.http.post(`${environment.apiUrl}/pessoa`, pessoa);
    }

    update(id: number, pessoa: Pessoa) {
        return this.http.put(`${environment.apiUrl}/pessoa/${id}`, pessoa);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/pessoa/${id}`);
    }
}
