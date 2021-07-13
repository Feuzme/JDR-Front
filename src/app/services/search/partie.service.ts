import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from 'src/app/models/Session';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PartieService {

  constructor(private http : HttpClient) { }
  
  private readonly baseUrl = "http://localhost:8080/sessions";
  getAll = () : Observable<Session[]> => {
    return this.http.get<Session[] > ("http://localhost:8080/sessions") ;
  }

  create = (modelsheets : Session) : Observable <Session> => { 
    return this.http.post<Session> ("http://localhost:8080/sessions", modelsheets);
  }

  save(body:Session){
    return this.http.post(this.baseUrl, body);
  }

  
  delete = (user : Session) : Observable<Session> => { 
    return this.http.request<Session>('delete',`${environment.urlSpring}/sessions`, { body : user})
  }

  deleteById(id : string){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }


  getByid = (id : String) : Observable<Session> => {
    return this.http.get<Session>(`${environment.urlSpring}/sessions/${id}`) ;

  }

 
  update = (modelsheets : Session) :  Observable<Session> => {
    return this.http.patch<Session>(`${environment.urlSpring}/sessions`,modelsheets) 
  }
  findByIdDetail(id:string){
    const url = `${this.baseUrl}/${id}/detail`;
    console.log(url);
    return this.http.get(url)
  }
}
