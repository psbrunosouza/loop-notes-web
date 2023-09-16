import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IIterationsService, Iteration } from '../models/iteration';
import { Observable } from 'rxjs';

@Injectable()
export class InterationsService implements IIterationsService {
  constructor(private httpClient: HttpClient) {}

  list(): Observable<Iteration[]> {
    return this.httpClient.get<Iteration[]>(
      'http://localhost:3000/v1/iterations',
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}
