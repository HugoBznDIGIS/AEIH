import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private apiURL = "http://192.168.0.201"
  constructor(private httpClient: HttpClient) { }
  //GetAll
  obtenerDatos(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiURL}/api/receta/?nombre=&pais=`);
  }
  //POST / Add
  postDatos (data: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiURL}/api/receta`, data);
  }
  //DELETE
  deleteRecetas (id: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiURL}/api/receta/${id}`);
  }
  //GetById
  getbyid(id: string): Observable<any> {
    return this.httpClient.get(`${this.apiURL}/api/receta/${id}`);
  }
  //Update
  update(id: string, data: any): Observable<any> {
    return this.httpClient.put(`${this.apiURL}/api/receta/${id}`, data);
  }
}
