import { Component, Input, OnInit, Output } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import * as EventEmitter from 'events';

@Component({
  selector: 'app-creation-menu-left',
  templateUrl: './creation-menu-left.component.html',
  styleUrls: ['./creation-menu-left.component.css']
})
export class CreationMenuLeftComponent implements OnInit {
  @Input() plugins;

  item: GridsterItem = {
    x:1,
    y:1,
    rows:1,
    cols:1
  };

  @Output() itemEmitter = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  emitItem() {
    this.itemEmitter.emit("Item",this.item);
  }
}
