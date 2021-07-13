import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/User';

@Injectable({
    providedIn: 'root'
})
export class AuthHttpService {
    private baseUrl = 'http://localhost:8080/auth';

    constructor(private http: HttpClient) {
    }

    public connexion(connexionDTO: any): Observable<User> {
        return this.http.post<User>(`${this.baseUrl}/connexion`, connexionDTO);
    }
}

