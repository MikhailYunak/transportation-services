import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models';

@Injectable()
export class CarsService {
  baseURL = 'https://api.github.com/';

  constructor(private http: HttpClient){
  }

  getRepos(userName: string): Observable<Car[]> {
    return this.http.get<Car[]>(this.baseURL + 'users/' + userName + '/repos');
  }
}
