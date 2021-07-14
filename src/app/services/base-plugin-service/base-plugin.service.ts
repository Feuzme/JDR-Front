import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AvatarComponent } from 'src/app/components/sheet/plugin-base/default-components/avatar/avatar.component';
import { ProgressBarComponent } from 'src/app/components/sheet/plugin-base/default-components/progress-bar/progress-bar.component';
import { BasePlugIn } from 'src/app/models/BasePlugin';

@Injectable({
  providedIn: 'root'
})
export class BasePluginService {

  public basePlugins: BasePlugIn[] = [];

  public editBasePlugin : BasePlugIn;

  public defaultComponent: any;

  // inputValue : FormGroup;

  constructor(private http : HttpClient, private router : Router) { }

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

  currentComposant(basePlugin : BasePlugIn) {
    if (basePlugin.config.composant == "progressBar") {
      return ProgressBarComponent;
    }
    else if (basePlugin.config.composant == "avatar") {
      return AvatarComponent;
    }
  }

  reversedCurrentComposant(basePlugin : BasePlugIn) {
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



  
}
