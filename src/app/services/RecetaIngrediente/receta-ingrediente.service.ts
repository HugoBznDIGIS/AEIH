import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecetaIngredienteService {

  constructor(private httpClient: HttpClient) { }
  
  getById(id: string): Observable<any> {
    return this.httpClient.get(`${environment.apiURL}/api/recetaingrediente/getbyid/${id}`);
  }
}
