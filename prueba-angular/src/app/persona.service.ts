import { Injectable } from '@angular/core';
import { Humano } from './humano';
import { Observable } from 'rxjs/Observable';
import { HttpClient , HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class PersonaService {

  private heroesUrl = 'http://localhost:8080/humanos';

  constructor(
    private http: HttpClient
  ) { }

  getHumanos(): Observable<Humano[]> {
    return this.http.get<Humano[]>(this.heroesUrl);
  }

}
