import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class IngredienteService {
  private apiUrl = 'http://192.168.0.201';

  constructor(private httpClient: HttpClient){ }

  getAll(): Observable<any>{
    return this.httpClient.get<any>(`${this.apiUrl}/api/ingrediente?nombre=`);
  }
  getById(id: any): Observable<any>{
    return this.httpClient.get(`${this.apiUrl}/api/ingrediente/${parseInt(id)}`);
  }
  add(datos: any): Observable<any>{
    return this.httpClient.post(`${this.apiUrl}/api/ingrediente`, datos);
  }
  update(idIngrediente: string, datos: any): Observable<any>{
    return this.httpClient.put(`${this.apiUrl}/api/ingrediente`, datos);
  }
  delete(id: any): Observable<any>{
    return this.httpClient.delete(`${this.apiUrl}/api/ingrediente/${parseInt(id)}`);
  }
}
