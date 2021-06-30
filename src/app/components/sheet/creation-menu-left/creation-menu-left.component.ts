import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { IComponent, LayoutService } from '../../../services/sheet/layout.service';


@Component({
  selector: 'app-creation-menu-left',
  templateUrl: './creation-menu-left.component.html',
  styleUrls: ['./creation-menu-left.component.css']
})
export class CreationMenuLeftComponent implements OnInit {
  @Input() plugins : Plugin[];
  
  get options(): GridsterConfig {
    return this.layoutService.options
  }
  get dashboard(): GridsterItem[]{
    return this.layoutService.layout
  }

  get components(): IComponent[] {
    return this.layoutService.components;
  }
  
  constructor(
    private layoutService : LayoutService
  ) { }

  ngOnInit(): void {
  }

  // emitItem() {
  //   this.itemEmitter.emit(this.item);
  // }

  getLayoutService(){
    return this.layoutService;
  }
}
