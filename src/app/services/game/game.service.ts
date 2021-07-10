import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/Game';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http : HttpClient) { }

  getById = (id : String) : Observable<Game> => {
    return this.http.get<Game>(`${environment.urlSpring}/games/${id}`);
  }

  getGamesByMjId = (id : String) : Observable<Game[]> => {
    return this.http.get<Game[]>(`${environment.urlSpring}/games/mj/${id}`);
  }

  getGamesByPlayerId = (id : String) : Observable<Game[]> => {
    return this.http.get<Game[]>(`${environment.urlSpring}/games/players/${id}`);
  }

  update = (game : Game) : Observable<Game> => {
    return this.http.patch<Game>(`${environment.urlSpring}/games`, game);
  }

  create = (game : Game) : Observable<Game> => {
    return this.http.post<Game>(`${environment.urlSpring}/games`, game);
  }
  
  delete = (game : Game) : Observable<Game> => {
    return this.http.request<Game>('delete', `${environment.urlSpring}/games`, { body : game});
  }
}
