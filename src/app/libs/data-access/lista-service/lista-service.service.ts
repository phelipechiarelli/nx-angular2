import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ListaServiceService {

  constructor(private http: HttpClient) { }

  getPersonList(page?: any){    
    return this.http.get(`https://swapi.dev/api/people/${page}`).pipe(map((res: any) => res))
  }
}
