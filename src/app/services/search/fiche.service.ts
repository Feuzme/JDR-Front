import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelSheet } from 'src/app/models/ModelSheet';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FicheService {

  constructor(private http : HttpClient) { }


  private readonly baseUrl = "http://localhost:8080/modelsheets";
  getAll = () : Observable<ModelSheet[]> => {
    return this.http.get<ModelSheet[] > ("http://localhost:8080/modelsheets") ;
  }

  create = (modelsheets : ModelSheet) : Observable <ModelSheet> => { 
    return this.http.post<ModelSheet> ("http://localhost:8080/modelsheets", modelsheets);
  }

  save(body:ModelSheet){
    return this.http.post(this.baseUrl, body);
  }

  
  delete = (user : ModelSheet) : Observable<ModelSheet> => { 
    return this.http.request<ModelSheet>('delete',`${environment.urlSpring}/modelsheets`, { body : user})
  }

  deleteById(id : string){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }


  getByid = (id : String) : Observable<ModelSheet> => {
    return this.http.get<ModelSheet>(`${environment.urlSpring}/modelsheets/${id}`) ;

  }

 
  update = (modelsheets : ModelSheet) :  Observable<ModelSheet> => {
    return this.http.patch<ModelSheet>(`${environment.urlSpring}/modelsheets`,modelsheets) 
  }
  findByIdDetail(id:string){
    const url = `${this.baseUrl}/${id}/detail`;
    console.log(url);
    return this.http.get(url)
  }


}
