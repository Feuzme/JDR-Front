import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserFriends } from 'src/app/models/UserFriends';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserFriendService {

  constructor(private http : HttpClient) { }

  private readonly baseUrl = "http://localhost:8080/userfriends";
  
  save(body:UserFriends){
    return this.http.post(this.baseUrl, body);
  }

  delete = (userfriends : UserFriends) : Observable<UserFriends> => { 
    return this.http.request<UserFriends>('delete',`${environment.urlSpring}/userfriends`, { body : userfriends})
  }

  create = (user : UserFriends) : Observable <User> => { 
    return this.http.post<User> ("http://localhost:8080/userfriends", user);
  }
}
