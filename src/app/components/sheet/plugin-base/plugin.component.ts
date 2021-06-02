import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BasePlugIn } from 'src/app/models/BasePlugin';
import { ProgressBarComponent } from './default-components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.component.html',
  styleUrls: ['./plugin.component.css']
})
export class PluginComponent implements OnInit {

  defaultComponent: any;

  inputValue : FormGroup;

  public basePlugins : BasePlugIn[] = [

  ];

  constructor() {
    this.inputValue = new FormGroup({
      size : new FormControl()
    });
   }

  ngOnInit(): void {
  }

  addBar() {
    this.defaultComponent = ProgressBarComponent;
    let columnSize: string = this.currentColumn(this.getValue());
    console.log(this.currentColumn(this.getValue()));
    let basePlugin: BasePlugIn = new BasePlugIn("Bar de vie", this.defaultComponent, columnSize);
    this.basePlugins.push(basePlugin);
    console.log(this.basePlugins)
  }

  addText() {
  }

  getValue() {
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
