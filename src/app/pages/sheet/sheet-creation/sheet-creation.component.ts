import { Component, OnInit, ViewChild } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { GameType } from 'src/app/models/GameType';
import { PlugIn } from 'src/app/models/PlugIn';

@Component({
  selector: 'app-sheet-creation',
  templateUrl: './sheet-creation.component.html',
  styleUrls: ['./sheet-creation.component.css']
})
export class SheetCreationComponent implements OnInit {
  item: GridsterItem;  

  public plugins : PlugIn[] = [];

  editingPlugin : GridsterItem;
  choiceEditing : any;

  displayEditingMenu: boolean = false;

  constructor(
    
  ) { } //add http PlugIns Services

  // receiveItem($event: GridsterItem){
  //   this.item = $event;
  // }

  ngOnInit(): void {

  }

  // ngAfterViewInit(){
  //   this.item = this.creationMenuComp.item;
  // }

  transferToEditMenu($event: GridsterItem){
    this.editingPlugin = $event;
    this.displayEditingMenu = true;
  }

  transferToGridster($event: any){
    this.choiceEditing = $event;
    this.displayEditingMenu = false;
  }
}
