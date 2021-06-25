import { BasicUser } from './../../models/BasicUser';
import { BasePluginService } from 'src/app/services/base-plugin-service/base-plugin.service';
import { Injectable } from '@angular/core';
import { DisplayGrid, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';
import { Observable } from 'rxjs';
import { ModelSheet } from 'src/app/models/ModelSheet';
import { PlugIn } from 'src/app/models/PlugIn';
import { User } from 'src/app/models/user';
import { ModelSheetHttpService } from './model-sheet-http.service';

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
  public plugIns : PlugIn[] = [];
  public modelSheet : ModelSheet;
  public mockUser : BasicUser = new BasicUser("60c5ff80e628b7723b249e75");

  
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

  constructor(
    private httpService : ModelSheetHttpService
  ) { 
    this.layout.push(
      {
        cols: 2, rows: 1, y: 2, x: 2, id: 1, css: {
          backgroundColor: '',
          borderRadius: '',
          borderWidth: '',
          borderStyle: 'none',
          borderColor: ''
        }
      },
      {
        cols: 2, rows: 1, y: 2, x: 2, id: 2, css: {
          backgroundColor: '',
          borderRadius: '',
          borderWidth: '',
          borderStyle: 'none',
          borderColor: ''
        }
      }
    );

    this.modelSheet = new ModelSheet(UUID.UUID(), "", false, null, []);
  }

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
       css:{       
        backgroundColor:'',
        borderRadius:'',
        borderWidth: '',
        borderStyle:'none',
        borderColor: ''
        },
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

  getStyles = (item) =>{
    return {
    'background-color' : item.css.backgroundColor,
    'border-radius':item.css.borderRadius,
    'border-style':item.css.borderStyle,
    'border-color':item.css.borderColor,
    'border-width':item.css.borderWidth,
    };
  }

  changedOptions() {
    this.options.api.optionsChanged();
  } 

  /**
   * Fonction pour envoyer au back le layout de la page, et la config des plugins
   * @returns la modelSheet enregistrée
   */
  saveSheet(){
    let plugIn: PlugIn = new PlugIn("", "", null, null);

    for (let index = 0; index < this.layout.length; index++) {
      plugIn.positionSize = this.layout[index];
      plugIn.name = this.layout[index].content;      
      this.modelSheet.composants.push(plugIn);
    }

    this.modelSheet.user = this.mockUser;
    this.modelSheet.isPublic = true;
    this.modelSheet.name = "test";

    //TODO transformet l'objet envoyé en body de requete check discord 
  

    console.log(this.modelSheet);

    return this.httpService.save(this.modelSheet).subscribe(
      (resp : ModelSheet) => {
        console.log(resp);
      }
    );
  }
}