import { Component, EventEmitter, Input, OnInit, Output,  } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';


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

  @Output() itemEmitter = new EventEmitter<GridsterItem>();
  
  constructor() { }

  ngOnInit(): void {
  }

  emitItem() {
    this.itemEmitter.emit(this.item);
  }
}
