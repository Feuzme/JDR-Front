import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.component.html',
  styleUrls: ['./plugin.component.css']
})
export class PluginComponent implements OnInit {

  inputValue : FormGroup;

  value : number = 40;

  column : number;

  infos = [

  ];


  
  bar: string = '<p-progressBar></p-progressBar>';
  // bar: string = 'p-progressbar p-progressbar-value';

  constructor() {
    this.inputValue = new FormGroup({
      size : new FormControl()
    });
   }

  ngOnInit(): void {
  }

  addBar() {
    let bar = this.bar;
    this.infos.push({balise: bar, columnSize: this.currentColumn(this.getValue())});
    console.log(this.infos)
  }

  addText() {
    console.log(this.column);
  }

  getValue() {
    this.inputValue.patchValue({
      size : this.inputValue.get("size").value
    })
    let value : number = this.inputValue.value.size;
    return value;
  }

  currentColumn(column : number) {
    switch (column) {
      case 0:
        return 'p-col-12';        
        
      case 1:
          return 'p-col-1';          
          
      case 2:
          return 'p-col-2';          
          
      case 3:
          return 'p-col-3';          
          
      case 4:
          return 'p-col-4';          
          
      case 5:
          return 'p-col-5';          
          
      case 6:
          return 'p-col-6';

      case 7:
          return 'p-col-7';  

      case 8:
          return 'p-col-8';          
          
      case 9:
          return 'p-col-9';          
          
      case 10:
          return 'p-col-10';          
          
      case 11:
          return 'p-col-11';          
          
      case 12:
          return 'p-col-12';
      default:
        return 'p-col-12';
    }
  }

}
