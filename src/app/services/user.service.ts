import { HttpClient } from '@angular/common/http';
import { HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  private readonly baseUrl = "http://localhost:8080/users";
  getAll = () : Observable<User[]> => {
    return this.http.get<User[] > ("http://localhost:8080/users") ;
  }

  create = (user : User) : Observable <User> => { 
    return this.http.post<User> ("http://localhost:8080/users", user);
  }

  save(body:User){
    return this.http.post(this.baseUrl, body);
  }

  
  delete = (user : User) : Observable<User> => { 
    return this.http.request<User>('delete',`${environment.urlSpring}/users`, { body : user})
  }

  deleteById(id:string){
    return this.http.delete(`${this.baseUrl}/${id}`)
  }


  getByid = (id : String) : Observable<User> => {
    return this.http.get<User>(`${environment.urlSpring}/users/${id}`) ;

  }

 
  update = (user : User) :  Observable<User> => {
    return this.http.patch<User>(`${environment.urlSpring}/users`,user) 
  }
  findByIdDetail(id:string){
    const url = `${this.baseUrl}/${id}/detail`;
    console.log(url);
    return this.http.get(url)
  }
}
