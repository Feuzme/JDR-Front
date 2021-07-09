import { UserIdDto } from './../../models/dto/UserIdDto';
import { PlugInIdDto } from './../../models/dto/PlugInIdDto';
import { Injectable } from '@angular/core';
import { DisplayGrid, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { ModelSheet } from 'src/app/models/ModelSheet';
import { PlugIn } from 'src/app/models/PlugIn';
import { ModelSheetHttpService } from './model-sheet-http.service';
import { ModelSheetDto } from 'src/app/models/dto/ModelSheetDto';
import { UUID } from 'angular2-uuid';
import { PluginHttpService } from '../plugin-http.service';

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
  public modelSheetDto : ModelSheetDto;
  public mockUser : UserIdDto = new UserIdDto("60c5ff80e628b7723b249e75");

  
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
    private modelSheetHttpService : ModelSheetHttpService,
    private pluginHttpService : PluginHttpService
  ) {     
    this.modelSheetDto = new ModelSheetDto("", "",false, null, null);
    this.modelSheet = new ModelSheet("", "",false, null, null);    
  }

  /**
   * ajoute un item à la grille avec le style par défaut.
   */
  addItem(plugin: any) {
    plugin.id = null;
    plugin.origin = false
    this.plugIns.push(plugin);

    console.log(plugin);

    this.pluginHttpService.save(plugin).subscribe(
      (resp : any) => {
        console.log("===<",resp);
        plugin = resp;
      }
    )

    this.layout.push({
      cols: 1, 
      rows: 1, 
      y: 1, 
      x: 1,
      id: plugin.id, 
      css:{       
        backgroundColor:'',
        borderRadius:'',
        borderWidth: '',
        borderStyle:'none',
        borderColor: ''
      },
      content : {
        nom: plugin.nom,
        config: plugin.config
      }
    });        
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
    let plugInIdDtos : PlugInIdDto[] = [];

    for (let index = 0; index < this.layout.length; index++) {
      let plugInsId : PlugInIdDto = new PlugInIdDto(this.layout[index].id);
      plugInIdDtos.push(plugInsId);
    }

    this.modelSheetDto.setComposants(plugInIdDtos);
    this.modelSheetDto.setName("test");
    this.modelSheetDto.setUser(this.mockUser);
    this.modelSheetDto.setIsPublic(true); 

    console.log(this.modelSheetDto);

    for(let plugin of this.plugIns){
      
      this.updatePlugInConfig(plugin);
    }    

    this.modelSheetHttpService.save(this.modelSheetDto).subscribe(
      (resp : ModelSheet) => {
        console.log(resp);
      }
    );
  }
  /**
   * met à jour la config du plug in
   * appellée quand au moment de l'neregistrement de la modelSheet
   * @param plugin the plug in to update
   */
  updatePlugInConfig(plugin : any){
    this.pluginHttpService.update(plugin).subscribe(
      (resp : PlugIn) => {
        console.log(resp);
      }
    )
  }

  /**
   * Fonction qui load une fiche en fonction de son ID
   * @param sheetId l'ID de la fiche que l'on souhaite retrouver
   */
  loadSheet(sheetId : string){
    this.modelSheetHttpService.getById(sheetId).subscribe(
      (resp : ModelSheet) => {
        this.modelSheet = resp;
        console.log(resp);
      }
    );

    localStorage.setItem(
      "idModelSheet", 
      this.modelSheet.getId()
      )
  }
}