import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { RestauranteReceta } from "src/app/interfaces/restaurante-receta-interface";

@Injectable({
  providedIn: 'root'
})
export class RestauranteRecetaService {
  constructor(private httpClient: HttpClient) { }

  getAll(idReceta: number = 0): Observable<RestauranteReceta> {
    return this.httpClient.get<RestauranteReceta>(`${environment.apiURL}/getall/${idReceta}`);
  };  
}