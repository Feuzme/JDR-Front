import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameType } from 'src/app/models/GameType';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GametypeHttpService {

  constructor(
    private http : HttpClient
  ) { }

  getAll() : Observable<GameType[]> {
    return this.http.get<GameType[]>(`${environment.urlSpring}/gametypes`);
  }
}
