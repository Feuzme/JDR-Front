import { Component, OnInit } from '@angular/core';
import { CompactType, DisplayGrid, GridsterConfig, GridsterItem, GridsterItemComponent, GridType } from 'angular-gridster2';

@Component({
  selector: 'app-plugin-preview',
  templateUrl: './plugin-preview.component.html',
  styleUrls: ['./plugin-preview.component.css']
})
export class PluginPreviewComponent implements OnInit {
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
        enabled: false
      },
      resizable: {
        enabled: false
      },
      disableWindowResize: true,
      scrollToNewItems:false
    };
    
    this.dashboard = [
      { cols: 1, rows: 1, y: 0, x: 0 }
    ];
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  // addItem() {
  //   alert("coucou");
  // }

}
