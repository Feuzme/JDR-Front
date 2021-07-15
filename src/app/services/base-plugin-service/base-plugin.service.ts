import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AvatarComponent } from 'src/app/components/sheet/plugin-base/default-components/avatar/avatar.component';
import { ProgressBarComponent } from 'src/app/components/sheet/plugin-base/default-components/progress-bar/progress-bar.component';
import { BasePlugIn } from 'src/app/models/BasePlugin';
import { PluginHttpService } from '../plugin-http.service';

@Injectable({
  providedIn: 'root'
})
export class BasePluginService {

  public basePlugins: BasePlugIn[] = [];

  public editBasePlugin : BasePlugIn;

  public defaultComponent: any;

  // inputValue : FormGroup;

  constructor(private http : HttpClient, private router : Router, service : PluginHttpService) { }

  getAll = () : Observable<BasePlugIn[]> => {
    return this.http.get<BasePlugIn[]>("http://localhost:8080/base_plugins"); 
  }

  getById = (id : number) : Observable<BasePlugIn> => {
    return this.http.get<BasePlugIn>(`http://localhost:8080/base_plugins/${id}`);
  }

  update = (basePlugin : BasePlugIn) : Observable<BasePlugIn> => {
    return this.http.patch<BasePlugIn>(`http://localhost:8080/base_plugins`, basePlugin)
  }

  create = (basePlugin : BasePlugIn) : Observable<BasePlugIn> => {
    return this.http.post<BasePlugIn>(`http://localhost:8080/base_plugins`, basePlugin);
  }

  delete = (basePlugin : BasePlugIn) : Observable<BasePlugIn> => {
    return this.http.request<BasePlugIn>('delete', `http://localhost:8080/base_plugins`, { body : basePlugin});
  }

  addItem(plugin: BasePlugIn) {
    let basePlugin: BasePlugIn = plugin;
    basePlugin.config.size = "p-col-2";
    let columnSize: string = "p-col-2";//this.currentColumn(this.getSizeValue());
    let config : any = {size: columnSize, composant: this.reversedCurrentComposant(plugin)};
    let basePluginBody: any = {name: this.getBasePluginName(plugin), config: config};
    this.basePlugins.push(basePlugin);
    this.create(basePluginBody).subscribe(basePluginBody => {
      this.reloadCurrentRoute();
    });
  }

  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
    });  
  }

  getCurrentBasePlugin = (bp : BasePlugIn) => {
    this.editBasePlugin = bp;
  }

  currentComposant(basePlugin : any) {
    console.log(basePlugin)
    if (basePlugin.config.composant == "progressBar") {
      return ProgressBarComponent;
    }
    else if (basePlugin.config.composant == "avatar") {
      return AvatarComponent;
    }
  }

  reversedCurrentComposant(basePlugin : any) {
    if (basePlugin.config.composant == ProgressBarComponent) {
      return "progressBar";
    }
    else if (basePlugin.config.composant == AvatarComponent) {
      return "avatar";
    }
  }

  getBasePluginName(bp : BasePlugIn) {
    if (bp.config.composant == ProgressBarComponent) {
      return "Barre";
    }
    if (bp.config.composant == AvatarComponent) {
      return "Avatar";
    }
  }

  bpToPlugin = (bp : BasePlugIn) : any => {
    let plugin : any = {
      nom: bp.name,
      auteur:"Najib",
      origin: true,
      gameType: {
          id: "60eee17c3226143290214597"
      },
      config: { size: bp.config.size,
                composant: this.reversedCurrentComposant(bp),
                id: bp.id,
      }
    }
    return plugin;
  }



  
}
