import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {
  //Defenimos la url de la API
  

  //Inicializamos el contructor 

  constructor(private httpClient: HttpClient) { }

  //Creamos el metodo que obtrendra los datos 
  getAll(): Observable<any>{
    return this.httpClient.get<any>(`${environment.apiURL}/api/pais/getall`);
  }
}
