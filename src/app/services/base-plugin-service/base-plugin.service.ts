import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasePlugIn } from 'src/app/models/BasePlugin';

@Injectable({
  providedIn: 'root'
})
export class BasePluginService {

  public basePlugins: BasePlugIn[] = [];

  constructor(private http : HttpClient) { }

  getAll = () : Observable<BasePlugIn[]> => {
    return this.http.get<BasePlugIn[]>("http://localhost:8080/base-plugins"); 
  }

  getById = (id : number) : Observable<BasePlugIn> => {
    return this.http.get<BasePlugIn>(`http://localhost:8080/base-plugins/${id}`);
  }

  update = (basePlugin : BasePlugIn) : Observable<BasePlugIn> => {
    return this.http.put<BasePlugIn>(`http://localhost:8080/base-plugins`, basePlugin)
  }

  create = (basePlugin : BasePlugIn) : Observable<BasePlugIn> => {
    return this.http.post<BasePlugIn>(`http://localhost:8080/base-plugins`, basePlugin);
  }

  delete = (basePlugin : BasePlugIn) : Observable<BasePlugIn> => {
    return this.http.request<BasePlugIn>('delete', `http://localhost:8080/base-plugins`, { body : basePlugin});
  }

  addBasePlugin(basePlugin: BasePlugIn) {
    this.basePlugins.push(basePlugin);
  }
}
