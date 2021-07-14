import { Component, Input, OnInit, Output,  } from '@angular/core';
import { BasePlugIn } from 'src/app/models/BasePlugin';
import { PlugIn } from 'src/app/models/PlugIn';
import { PluginHttpService } from 'src/app/services/plugin-http.service';
import { ProgressBarComponent } from '../plugin-base/default-components/progress-bar/progress-bar.component';


@Component({
  selector: 'app-creation-menu-left',
  templateUrl: './creation-menu-left.component.html',
  styleUrls: ['./creation-menu-left.component.css']
})
export class CreationMenuLeftComponent implements OnInit {
  plugins : PlugIn[] = [];
  basePlugins : BasePlugIn[] = [];
  private healthBar : BasePlugIn = new BasePlugIn("Bar de vie", {size: "p-col-12", composant: ProgressBarComponent})
  constructor(
    private plugInHttpService : PluginHttpService
  ) { }

  ngOnInit(): void {
    this.basePlugins.push(this.healthBar);
    this.plugInHttpService.getAll().subscribe(
      (resp : any[]) => {
        for (let plugin of resp) {
          if (plugin.origin == true){
            this.plugins.push(plugin);
          }
        }
      }
    );         
  }
}
