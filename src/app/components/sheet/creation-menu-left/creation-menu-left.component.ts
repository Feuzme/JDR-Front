import { Component, Input, OnInit, Output,  } from '@angular/core';
import { PlugIn } from 'src/app/models/PlugIn';
import { PluginHttpService } from 'src/app/services/plugin-http.service';


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
      (resp : any[]) => {
        console.log(resp);
        for (let plugin of resp) {
          
          console.log(plugin); 
          if (plugin.origin == true)
            this.plugins.push(plugin);
        }
      }
    );         
  }
}
