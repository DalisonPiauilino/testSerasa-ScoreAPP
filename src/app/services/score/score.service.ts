import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Score } from 'src/app/models/Score';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(
    private http: HttpClient
  ) { }

    getAll() {
        return this.http.get<Score[]>(`${environment.apiUrl}/score`);
    }

    getById(id: number) {
        return this.http.get<Score>(`${environment.apiUrl}/score/${id}`);
    }

    create(score: Score) {
        return this.http.post(`${environment.apiUrl}/score`, score);
    }

    update(id: number, score: Score) {
        return this.http.put(`${environment.apiUrl}/score/${id}`, score);
    }

    delete(id: number) {
        return this.http.delete(`${environment.apiUrl}/score/${id}`);
    }
}
