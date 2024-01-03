import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  //Defenimos la url de la API
  private apiURL = "http://192.168.0.201";

  //Inicializamos el contructor 

  constructor(private httpClient: HttpClient) { }

  //Creamos el metodo que obtrendra los datos 
  getAll(): Observable<any>{
    return this.httpClient.get<any>(`${this.apiURL}/api/pais/getall`);
  }
}
