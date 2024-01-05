import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Restaurante, RestaurantePost } from "src/app/interfaces/restaurante-interface";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestauranteServiceService {
  
  constructor(private httpClient: HttpClient) { }

  getAll(pais: string = '', receta: string = '', calificacion: number = 0): Observable<any> {
    return this.httpClient.get<Restaurante>(`${environment.apiURL}/Restaurante?pais=${pais}&receta=${receta}&calificacion=${calificacion}`);
  };

  postData(data: RestaurantePost): Observable<RestaurantePost> {
    return this.httpClient.post<RestaurantePost>(`${environment.apiURL}/Restaurante`, data);
  };

  delete(idRestaurante: number): Observable<number> {
    return this.httpClient.delete<number>(`${environment.apiURL}/${idRestaurante}`);
  };

  getById(idRestaurante: number): Observable<Restaurante> {
    return this.httpClient.get<Restaurante>(`${environment.apiURL}/${idRestaurante}`);
  };

  update(data: RestaurantePost, idRestaurante: number): Observable<RestaurantePost> {
    return this.httpClient.put<RestaurantePost>(`${environment.apiURL}/${idRestaurante}`, data);
  };
}
