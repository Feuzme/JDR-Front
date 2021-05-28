import { Injectable } from '@angular/core';
import { DisplayGrid, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';


export interface IComponent {
  id: string;
  componentRef: string;
} 

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  
  public options: GridsterConfig ={
    gridType: GridType.Fit,
      displayGrid: DisplayGrid.Always,
      pushItems: true,
      pushDirections: { north: true, east: false, south: true, west: true },
      pushResizeItems: true,
      swap: false,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      },
      disableWindowResize: true,
      scrollToNewItems:false
  }

  public layout: GridsterItem[] = [];
  public components: IComponent[] = [];

  constructor() { }

  addItem() {
    this.layout.push({
       cols: 1, 
       rows: 1, 
       y: 1, 
       x: 1,
       id: UUID.UUID()
      });
  }

  removeItem(id: string) : void {
    const item = this.layout.find(d => d.id === id);
    this.layout.splice(this.layout.indexOf(item), 1);
  }

  
}