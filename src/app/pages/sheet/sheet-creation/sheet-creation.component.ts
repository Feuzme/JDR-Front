import { Component, OnInit, ViewChild } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { CreationMenuLeftComponent } from 'src/app/components/sheet/creation-menu-left/creation-menu-left.component';
import { BasePlugIn } from 'src/app/models/BasePlugin';
import { GameName } from 'src/app/models/GameName';
import { PositionSize } from 'src/app/models/PositionSize';

@Component({
  selector: 'app-sheet-creation',
  templateUrl: './sheet-creation.component.html',
  styleUrls: ['./sheet-creation.component.css']
})
export class SheetCreationComponent implements OnInit {
  item: GridsterItem;
  private donjonsEtDragon : GameName = new GameName(1, "Dungeon&Dragons")
  public plugins : BasePlugIn[] = [];
  private healthBar : BasePlugIn = new BasePlugIn("HealthBar", "config", "Toto", this.donjonsEtDragon, "assets/images/Balrog.png", new PositionSize(1, 2, 1, 1))
  private inventory : BasePlugIn = new BasePlugIn("Inventory", "config", "Weeb99", this.donjonsEtDragon, "assets/images/dragon.jpg", new PositionSize(1, 2, 1, 1));
  private stats : BasePlugIn = new BasePlugIn("Stats", "config", "Dewee", this.donjonsEtDragon, "assets/images/unicorn.jpg", new PositionSize(1, 2, 1, 1));
  private magic : BasePlugIn = new BasePlugIn("Magic", "config", "Marco", this.donjonsEtDragon, "assets/images/Smaug.png", new PositionSize(1, 2, 1, 1));

  editingPlugin : GridsterItem;
  choiceEditing : any;

  displayEditingMenu: boolean = false;


  @ViewChild (CreationMenuLeftComponent) creationMenuComp;

  constructor() { }
  // receiveItem($event: GridsterItem){
  //   this.item = $event;
  // }

  ngOnInit(): void {
    this.plugins.push(this.healthBar, this.inventory, this.stats, this.magic);     
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
