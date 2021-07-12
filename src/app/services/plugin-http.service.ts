import { PlugIn } from 'src/app/models/PlugIn';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PluginHttpService {
  baseUrl: string = "http://localhost:8080/plugins"

  constructor(
    private http: HttpClient
  ) { }

  public getAll(): Observable<PlugIn[]> {
    return this.http.get<PlugIn[]>(`${this.baseUrl}`);
  }

  public getById(id: string): Observable<PlugIn> {
    return this.http.get<PlugIn>(`${this.baseUrl}/${id}`);
  }

  public save(entity: PlugIn): Observable<PlugIn> {
    return this.http.post<PlugIn>(`${this.baseUrl}`, entity);
  }

  public update(entity: PlugIn) {
    return this.http.patch<PlugIn>(`${this.baseUrl}`, entity);
  }

  public delete(entity: PlugIn) {
    return this.http.request<PlugIn>('delete', `${this.baseUrl}`, {body : entity});
  }
}