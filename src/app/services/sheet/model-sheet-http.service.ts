import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelSheetDto } from 'src/app/models/dto/ModelSheetDto';
import { ModelSheet } from 'src/app/models/ModelSheet';


@Injectable({
  providedIn: 'root'
})
export class ModelSheetHttpService {
  private baseUrl : string = "http://localhost:8080/modelsheets";

  constructor(
    private http : HttpClient
  ) { }

  public getById(id : string) :Observable<ModelSheet>{
    return this.http.get<ModelSheet>(`${this.baseUrl}/${id}`);
  }

  public save(entity : ModelSheetDto) : Observable<ModelSheet>{
    return this.http.post<ModelSheet>(`${this.baseUrl}`, entity);
  }

  public update(entity : ModelSheet) : Observable<ModelSheet>{
    return this.http.patch<ModelSheet>(`${this.baseUrl}`, entity);
  }
}
