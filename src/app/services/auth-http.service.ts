import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthHttpService {
    private baseUrl = 'http://localhost:8080/auth';

    constructor(private http: HttpClient) {
    }

    public connexion(connexionDTO: any) {
        return this.http.post(`${this.baseUrl}/connexion`, connexionDTO, {responseType: 'text'});
    }
}

