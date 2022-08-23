import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApi = "https://restcountries.com/v2/all";

  constructor(private http:HttpClient) { }

  
  getApi(): Observable<IPais[]> {
    return this.http.get<IPais[]>(this.urlApi);
  }
}
