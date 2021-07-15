import { GameType } from './../../../models/GameType';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BasePlugIn } from 'src/app/models/BasePlugin';

import { PluginHttpService } from 'src/app/services/plugin-http.service';
import { BasePluginService } from 'src/app/services/base-plugin-service/base-plugin.service';

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.component.html',
  styleUrls: ['./plugin.component.css']
})
export class PluginComponent implements OnInit {

  @Output() currentBpEvent = new EventEmitter();

  defaultComponent: any;

  inputValue : FormGroup;

  public  donjonsEtDragon : GameType = new GameType('1', "Dungeon&Dragons", "");

  public basePlugins : BasePlugIn[] = [];

  constructor(
    private bPService : BasePluginService,
    private pService :  PluginHttpService
    ) {
    this.inputValue = new FormGroup({
      size : new FormControl()
    });
   }

  ngOnInit(): void {
    this.bPService.getAll().subscribe(data => {
      this.basePlugins = data;
      Object.values(data).forEach(basePlugin => {
        basePlugin.config.composant = this.bPService.currentComposant(basePlugin);
      });
    })
  }

  createPlugin = (bp : BasePlugIn) => {
    let plugin : any = this.bPService.bpToPlugin(bp);
    this.pService.save(plugin).subscribe(p => {
      console.log(p);
    })
    
  }

  delete = (basePlugin : BasePlugIn) => {
    this.bPService.delete(basePlugin).subscribe(basePlugin => {
      this.ngOnInit();
    })
  }

  transferObject = (basePlugin : BasePlugIn) => {
    this.currentBpEvent.emit(basePlugin)
  }

  addText() {
  }

  getSizeValue() {
    this.inputValue.patchValue({
      size : this.inputValue.get("size").value
    })
    let value : number = this.inputValue.value.size;
    return value;
  }

  currentColumn(column : number) {
    let result: string;
    switch (column) {
      case 0:
        result = 'p-col-12';
        return result;        
        
      case 1:
          result = 'p-col-1';
          return result;          
          
      case 2:
          result = 'p-col-2';
          return result;          
          
      case 3:
          result = 'p-col-3';
          return result;          
          
      case 4:
          result = 'p-col-4';
          return result;          
          
      case 5:
          result = 'p-col-5';
          return result;          
          
      case 6:
          result = 'p-col-6';
          return result;

      case 7:
          result = 'p-col-7';
          return result;  

      case 8:
          result = 'p-col-8';
          return result;          
          
      case 9:
          result = 'p-col-9';
          return result;          
          
      case 10:
          result = 'p-col-10';
          return result;          
          
      case 11:
          result = 'p-col-11';
          return result;          
          
      case 12:
          result = 'p-col-12';
          return result;
      default:
          result = 'p-col-12';
          return result;
    }
  }

}
