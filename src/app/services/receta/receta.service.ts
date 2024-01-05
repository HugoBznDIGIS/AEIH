import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  private apiURL = "http://192.168.0.201"
  constructor(private httpClient: HttpClient) { }
  //GetAll
  obtenerDatos(): Observable<any> {
    return this.httpClient.get<any>(`${environment.apiURL}/receta/?nombre=&pais=`);
  }
  //POST / Add
  postDatos (data: any): Observable<any> {
    return this.httpClient.post<any>(`${environment.apiURL}/receta`, data);
  }
  //DELETE
  deleteRecetas (id: string): Observable<any> {
    return this.httpClient.delete<any>(`${environment.apiURL}/receta/${id}`);
  }
  //GetById
  getbyid(id: string): Observable<any> {
    return this.httpClient.get(`${environment.apiURL}/receta/${id}`);
  }
  //Update
  update(id: string, data: any): Observable<any> {
    return this.httpClient.put(`${environment.apiURL}/receta/${id}`, data);
  }
  
}

// export class RecetaService {

//   private apiURL = "http://192.168.0.201"
//   constructor(private httpClient: HttpClient) { }
//   //GetAll
//   obtenerDatos(): Observable<any> {
//     return this.httpClient.get<any>(`${this.apiURL}/api/receta/?nombre=&pais=`);
//   }
//   //POST / Add
//   postDatos (data: any): Observable<any> {
//     return this.httpClient.post<any>(`${this.apiURL}/api/receta`, data);
//   }
//   //DELETE
//   deleteRecetas (id: string): Observable<any> {
//     return this.httpClient.delete<any>(`${this.apiURL}/api/receta/${id}`);
//   }
//   //GetById
//   getbyid(id: string): Observable<any> {
//     return this.httpClient.get(`${this.apiURL}/api/receta/${id}`);
//   }
//   //Update
//   update(id: string, data: any): Observable<any> {
//     return this.httpClient.put(`${this.apiURL}/api/receta/${id}`, data);
//   }
  
// }
