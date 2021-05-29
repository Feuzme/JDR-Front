import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {   GridsterConfig, GridsterItem } from 'angular-gridster2';
import { LayoutService, IComponent } from '../../services/sheet/layout.service'
@Component({
  selector: 'app-sheet-preview',
  templateUrl: './sheet-preview.component.html',
  styleUrls: ['./sheet-preview.component.css']
})
export class SheetPreviewComponent implements OnInit {

  @Output() editingPlugin: EventEmitter<GridsterItem> = new EventEmitter<GridsterItem>();

  get options(): GridsterConfig {
    return this.layoutService.options
  }
  get dashboard(): GridsterItem[]{
    return this.layoutService.layout
  }

  get components(): IComponent[] {
    return this.layoutService.components;
  }
  
  // dashboard: Array<GridsterItem>;
  // layout: GridsterItem[] = [];

  
  constructor(
    private layoutService : LayoutService
    ) { }

  static itemChange(item, itemComponent) {
    console.info('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit() {
  //   // this.options = {
  //   //   // itemChangeCallback: SheetPreviewComponent.itemChange,
  //   //   // itemResizeCallback: SheetPreviewComponent.itemResize,
  //   //   gridType: GridType.Fit,
  //   //   displayGrid: DisplayGrid.Always,
  //   //   pushItems: true,
  //   //   pushDirections: { north: true, east: false, south: true, west: true },
  //   //   pushResizeItems: true,
  //   //   swap: false,
  //   //   draggable: {
  //   //     enabled: true
  //   //   },
  //   //   resizable: {
  //   //     enabled: true
  //   //   },
  //   //   disableWindowResize: true,
  //   //   scrollToNewItems:false
  //   // };
    
    this.layoutService.layout = [
      { cols: 2, rows: 1, y: 2, x: 2, id:1, css:
        {       
          backgroundColor:'rgb(128, 0, 128)',
          borderTopLeftRadius:'20px',
          borderTopRightRadius:'20px',
          borderBottomLeftRadius:'20px',
          borderBottomRightRadius:'20px',
          border: '15px',
          borderTop: '15px',
          borderRight: '15px',
          borderBottom: '15px',
          borderLeft: '15px',
          borderStyle:'solid',
          borderColor: 'rgb(100, 0, 0)'
        }
      },
      { cols: 2, rows: 1, y: 2, x: 2, id:2, css:'' },
      { cols: 2, rows: 1, y: 2, x: 2, id:3, css:'' },
      { cols: 2, rows: 1, y: 2, x: 2, id:4, css:'' },
      { cols: 2, rows: 1, y: 2, x: 2, id:5, css:'' },
      { cols: 1, rows: 1, y: 2, x: 4, id:6, css:'' },
    ];

  }

  // changedOptions() {
  //   this.options.api.optionsChanged();
  // }
  getLayoutService(){
    return this.layoutService;
  }

  editPlugin = (item) =>{
    this.editingPlugin.emit(item);
  }
}