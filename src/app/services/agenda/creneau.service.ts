import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Creneau } from 'src/app/models/Creneau';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CreneauService {

  constructor(private http : HttpClient) { }

  getById = (id : String) : Observable<Creneau> => {
    return this.http.get<Creneau>(`${environment.urlSpring}/creneaux/${id}`);
  }

  getAllDispoByGameId = (idGame : String) : Observable<Creneau[]> => {
    return this.http.get<Creneau[]>(`${environment.urlSpring}/creneaux/getallcreneauxbygame/${idGame}`);
  }

  update = (creneau : Creneau) : Observable<Creneau> => {
    return this.http.patch<Creneau>(`${environment.urlSpring}/creneaux`, creneau);
  }

  create = (creneau : Creneau) : Observable<Creneau> => {
    return this.http.post<Creneau>(`${environment.urlSpring}/creneaux`, creneau);
  }
  
  delete = (creneau : Creneau) : Observable<Creneau> => {
    return this.http.request<Creneau>('delete', `${environment.urlSpring}/creneaux`, { body : creneau});
  }
}
