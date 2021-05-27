import { Component, OnInit } from '@angular/core';
import { CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridsterItemComponent, GridType } from 'angular-gridster2';

@Component({
  selector: 'app-sheet-preview',
  templateUrl: './sheet-preview.component.html',
  styleUrls: ['./sheet-preview.component.css']
})
export class SheetPreviewComponent implements OnInit {
  options: GridsterConfig = {

  };
  dashboard: Array<GridsterItem>;
  layout: GridsterItem[] = [];

  constructor() { }

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
    this.options = {
      // itemChangeCallback: SheetPreviewComponent.itemChange,
      // itemResizeCallback: SheetPreviewComponent.itemResize,
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
    };
    
    this.dashboard = [
      { cols: 2, rows: 1, y: 2, x: 2 , id:0, css:
        {
          backgroundColor:'purple',
          borderRadius:'10% 20% 20% 10%',
          border: '15px solid #1C6EA4'
        }},
      { cols: 2, rows: 1, y: 2, x: 2 , id:1, css:''},
      { cols: 2, rows: 1, y: 2, x: 2 , id:2, css:''},
      { cols: 2, rows: 1, y: 2, x: 2 , id:3, css:''},
      { cols: 2, rows: 1, y: 2, x: 2 , id:4, css:''},
      { cols: 1, rows: 1, y: 2, x: 4 , id:5, css:''},
    ];
  }

  getStyles(item){
    document.getElementById("gridster"+item.id).style.backgroundColor=item.css.backgroundColor;
    document.getElementById("gridster"+item.id).style.borderRadius=item.css.borderRadius;
    document.getElementById("gridster"+item.id).style.border=item.css.border;
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  addItem() {
    this.dashboard.push({ cols: 1, rows: 1, y: 1, x: 1, id:this.dashboard.length });
  }

  trackBy(index: number, item: GridsterItem): number {
    return item.id;
  }

  removeItem($event: MouseEvent | TouchEvent, item): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  editing(elementEdit){
    console.log(elementEdit);
    console.log("ok");
  }

}
