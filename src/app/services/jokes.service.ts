import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Joke } from '../models/joke.model';

@Injectable({
  providedIn: 'root'
})
export class JokesService {
  private url = 'https://official-joke-api.appspot.com/random_ten';
  constructor(private http: HttpClient) { }

  public getJokes(): Observable<Joke[]> {
    return this.http.get<Joke[]>(this.url);
  }
}
