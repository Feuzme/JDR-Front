import { Component, OnInit, ViewChild } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { CreationMenuLeftComponent } from 'src/app/components/sheet/creation-menu-left/creation-menu-left.component';

@Component({
  selector: 'app-sheet-creation',
  templateUrl: './sheet-creation.component.html',
  styleUrls: ['./sheet-creation.component.css']
})
export class SheetCreationComponent implements OnInit {
  item: GridsterItem;

  editingPlugin : GridsterItem;
  choiceEditing : any;

  displayEditingMenu: boolean = false;

  plugins = [
    {
      author:"greg",
      name:"HealthBar",
      game:"Dungeons&Dragons",
      gamePic:"assets/images/dragon.jpg",
      width:2,
      height:1
    },
    {
      author:"Weeb99",
      name:"Inventory",
      game:"Dungeons&Dragons",
      gamePic:"assets/images/dragon.jpg",
      width:4,
      height:4
    },   
    {
      author:"Dewee",
      name:"Stats",
      game:"POKEMON",
      gamePic:"assets/images/unicorn.jpg",
      width:1,
      height:2
    },   
    {
      author:"Marco",
      name:"Competences",
      game:"Fallout",
      gamePic:"assets/images/Gerard.png",
      width:2,
      height:4
    }, 
    {
      author:"Marco",
      name:"Magic",
      game:"ESRPG",
      gamePic:"assets/images/Smaug.png",
      width:1,
      height:1
    },   
  ]

  @ViewChild (CreationMenuLeftComponent) creationMenuComp;

  constructor() { }
  receiveItem($event: GridsterItem){
    this.item = $event;
  }

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
