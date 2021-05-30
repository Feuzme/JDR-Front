import { ComponentRef, Injectable } from '@angular/core';
import { DisplayGrid, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';
import { PlugIn } from 'src/app/models/plugin';

export interface IComponent {
  id: string;
  componentRef: string;
} 

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public layout: GridsterItem[] = [];
  public components: IComponent[] = [];
  dropId: string;
  public plugIns : PlugIn[] = [];

  
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

  constructor() { }

  /**
   * Method called when you want to add an empty item to the grid
   */
  addItem(plugin: PlugIn) {
    this.plugIns.push(plugin);
    this.layout.push({
      cols: 1, 
      rows: 1, 
      y: 1, 
      x: 1,
      id: UUID.UUID(),
      content : plugin.name
      });
    console.log(
      {
        cols: 1, 
        rows: 1, 
        y: 1, 
        x: 1,
        id: UUID.UUID(),
        content : plugin.name
        }
    )
  }
  /**
   *  method to remove item and components from the grid
   * @param id id of the component to remove
   */
  removeItem(id: string) : void {
    const item = this.layout.find(d => d.id === id);
    this.layout.splice(this.layout.indexOf(item), 1);
    const comp = this.components.find(c => c.id === id);
    this.components.splice(this.components.indexOf(comp), 1);
  }

  /**
   * Called when the user move the mouse over a layout item
   * @param dropId the id of the item to set is this service
   */
  setDropId(dropId : string) : void {
    this.dropId = dropId;
  }

  /**
   * The method called when droping an item on the grid 
   * @param dragId id of the dropped item
   */
  dropItem(dragId : string)  :void {
    const { components } = this;
    const comp: IComponent = components.find(c => c.id === this.dropId);
    const updateIndex: number = comp ? components.indexOf(comp):components.length;
    const componentItem :IComponent = {
      id: this.dropId,
      componentRef: dragId
    }
  }

  /**
   * Utility method to find the ref of a component via his id
   * @param id of the component we wish to find the ref
   * @returns the reference of the finded component
   */
  getComponentRef(id: string) : string{
    const comp = this.components.find(c => c.id === id);
    // console.log(id);
    // console.log(comp);
    return comp ? comp.componentRef : null;
  }
}