import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, Output,  } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { PlugIn } from 'src/app/models/PlugIn';
import { PluginHttpService } from 'src/app/services/plugin-http.service';
import { IComponent, LayoutService } from '../../../services/sheet/layout.service';


@Component({
  selector: 'app-creation-menu-left',
  templateUrl: './creation-menu-left.component.html',
  styleUrls: ['./creation-menu-left.component.css']
})
export class CreationMenuLeftComponent implements OnInit {
  plugins : PlugIn[] = [];
  
  constructor(
    private plugInHttpService : PluginHttpService
  ) { }

  ngOnInit(): void {
    this.plugInHttpService.getAll().subscribe(
      (resp : PlugIn[]) => {
        console.log(resp);
        for (let plugin of resp) {
          
          console.log(plugin); 

          this.plugins.push(plugin);
        }
      }
    );         
  }
}
