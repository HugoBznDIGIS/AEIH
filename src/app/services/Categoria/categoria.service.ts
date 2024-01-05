import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  constructor(private httpClient: HttpClient) { }
  //Creamos el metodo que obtrendra los datos 
  getAll(): Observable<any>{
    return this.httpClient.get<any>(`${environment.apiURL}/api/categoria/getAll`);
  }
}
