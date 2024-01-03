import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private apiURL = "http://192.168.0.201";

  constructor(private httpClient: HttpClient) { }
  //Creamos el metodo que obtrendra los datos 
  getAll(): Observable<any>{
    return this.httpClient.get<any>(`${this.apiURL}/api/categoria/getAll`);
  }
}
