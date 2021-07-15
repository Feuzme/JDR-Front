import { UserIdDto } from './../../models/dto/UserIdDto';
import { PlugInIdDto } from './../../models/dto/PlugInIdDto';
import { Injectable } from '@angular/core';
import { DisplayGrid, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { ModelSheet } from 'src/app/models/ModelSheet';
import { PlugIn } from 'src/app/models/PlugIn';
import { ModelSheetHttpService } from './model-sheet-http.service';
import { ModelSheetDto } from 'src/app/models/dto/ModelSheetDto';
import { PluginHttpService } from '../plugin-http.service';
import { GameTypeDto } from 'src/app/models/dto/GameTypeDto';
import { BasePluginService } from '../base-plugin-service/base-plugin.service';
import { ProgressBarComponent } from 'src/app/components/sheet/plugin-base/default-components/progress-bar/progress-bar.component';
import { AvatarComponent } from 'src/app/components/sheet/plugin-base/default-components/avatar/avatar.component';

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
  public modelSheet : any;
  public modelSheetDto : ModelSheetDto;
  
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
    private pluginHttpService : PluginHttpService,
    private basePluginService : BasePluginService
  ) {     
    this.modelSheetDto = new ModelSheetDto("", "",false, null, null, null);
    this.modelSheet = new ModelSheet("", "",false, null, null);    
  }

  /**
   * ajoute un item à la grille avec le style par défaut.
   */
  addItem(plugin: any) {
    plugin.id = null;
    plugin.origin = false    

    this.pluginHttpService.save(plugin).subscribe(
      (resp : any) => {
        plugin = resp;
        this.plugIns.push(plugin);

        this.layout.push({
          cols: 1, 
          rows: 1, 
          y: 0, 
          x: 0,
          id: resp.id, 
          css:{       
            backgroundColor:'',
            borderRadius:'',
            borderWidth: '',
            borderStyle:'none',
            borderColor: ''
          },
          content : {
            nom: resp.nom,
            config: resp.config
          },
          config : {
            size: plugin.config.size,
            composant : this.basePluginService.currentComposant(plugin),
            id : plugin.config.id
          }
        });        
      }
    )

    
  }

  /**
   *  method to remove item and components from the grid
   * @param id id of the component to remove
   */
  removeItem(id: string) : void {
    const item = this.layout.find(item => item.id === id);
    this.layout.splice(this.layout.indexOf(item), 1);
    const comp = this.components.find(c => c.id === id);
    this.components.splice(this.components.indexOf(comp), 1);
    //TODO delete the item from database
    this.pluginHttpService.delete(id).subscribe();
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
  saveSheet(name : string, isPublic : string, gameType : string){
    let plugInIdDtos : PlugInIdDto[] = [];

    for (let index = 0; index < this.layout.length; index++) {
      let plugInsId : PlugInIdDto = new PlugInIdDto(this.layout[index].id);
      plugInIdDtos.push(plugInsId);
    }

    this.modelSheetDto.setComposants(plugInIdDtos);
    this.modelSheetDto.setName(name);
    this.modelSheetDto.setUser(new UserIdDto(localStorage.getItem("utilisateurId")));
    this.modelSheetDto.setGameType(new GameTypeDto(gameType))
    
    if(isPublic == "public")
      this.modelSheetDto.setIsPublic(true); 
    else
    this.modelSheetDto.setIsPublic(false);  

    this.modelSheetHttpService.save(this.modelSheetDto).subscribe(
      (resp : any) => {
        console.log("sheetId:", resp.id);
        console.log(">===", resp);
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
      (resp : any) => {
        this.modelSheet = resp;
        this.layout = [];
        for(let plugin of resp.composants){
          plugin.config.content.config.composant = this.currentComposant(plugin); // Ajout par Najib pour chargé le composant visuel au Load de la fiche
          console.log(plugin.config.content.config.composant);
          // this.basePluginService.reloadCurrentRoute();
          this.layout.push(
            plugin.config
          )
        }
      }
    );

    localStorage.setItem(
      "idModelSheet", 
      this.modelSheet.id
      )
  }

  //Pour reload l'item et afficher le visuel du plugin
  currentComposant(item : any) {
    console.log(item.config.content.config.composant);
    if (item.config.content.config.composant == "progressBar") {
      return ProgressBarComponent;
    }
    else if (item.config.content.config.composant == "avatar") {
      return AvatarComponent;
    }
  }
}