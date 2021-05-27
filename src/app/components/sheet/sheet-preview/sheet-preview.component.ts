import { Component, OnInit } from '@angular/core';
import {  DisplayGrid, GridsterConfig, GridsterItem, GridType } from 'angular-gridster2';
import { LayoutService } from '../../services/sheet/layout.service'
@Component({
  selector: 'app-sheet-preview',
  templateUrl: './sheet-preview.component.html',
  styleUrls: ['./sheet-preview.component.css']
})
export class SheetPreviewComponent implements OnInit {
  // get options(): GridsterConfig {
  //   return this.
  // }
  
  dashboard: Array<GridsterItem>;
  layout: GridsterItem[] = [];

  options: GridsterConfig = {};
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
      { cols: 2, rows: 1, y: 2, x: 2 },
      { cols: 2, rows: 1, y: 2, x: 2 },
      { cols: 2, rows: 1, y: 2, x: 2 },
      { cols: 2, rows: 1, y: 2, x: 2 },
      { cols: 2, rows: 1, y: 2, x: 2 },
      { cols: 1, rows: 1, y: 2, x: 4 },
    ];
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  

  

}
