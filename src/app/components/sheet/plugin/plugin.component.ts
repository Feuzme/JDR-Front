import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.component.html',
  styleUrls: ['./plugin.component.css']
})
export class PluginComponent implements OnInit {

  value : number = 40;

  column : number;

  infos = [

  ];
  
  bar: string = '<p-progressBar class="p-progressbar p-progressbar-value" [value]="value"></p-progressBar>';

  constructor() { }

  ngOnInit(): void {
  }

  addBar() {
    console.log(this.column);
    let bar = this.bar;
    this.infos.push({balise: bar, columnSize: this.currentColumn(this.column)});
    console.log(this.infos)
  }

  addText() {
    console.log(this.column);
  }

  getValue(event : any) {
    this.column = event.target.value;
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
    }
  }

}
