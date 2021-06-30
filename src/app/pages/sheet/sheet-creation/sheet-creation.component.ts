import { LayoutService } from './../../../services/sheet/layout.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { CreationMenuLeftComponent } from 'src/app/components/sheet/creation-menu-left/creation-menu-left.component';
import { GameType } from 'src/app/models/GameType';
import { PlugIn } from 'src/app/models/PlugIn';
import { PositionSize } from 'src/app/models/PositionSize';

@Component({
  selector: 'app-sheet-creation',
  templateUrl: './sheet-creation.component.html',
  styleUrls: ['./sheet-creation.component.css']
})
export class SheetCreationComponent implements OnInit {
  item: GridsterItem;  

  private donjonsEtDragon : GameType = new GameType(1, "Dungeon&Dragons", "assets/images/dragon.jpg")

  public plugins : PlugIn[] = [];
  private healthBar : PlugIn = new PlugIn("60d899dbb281df7d3dcbc6a9","HealthBar", "Toto", this.donjonsEtDragon, null)
  private inventory : PlugIn = new PlugIn("60d899eeb281df7d3dcbc6aa","Inventory", "Weeb99", this.donjonsEtDragon, null);
  private stats : PlugIn = new PlugIn("60d899feb281df7d3dcbc6ab","Stats", "Dewee", this.donjonsEtDragon, null);
  private magic : PlugIn = new PlugIn("60d89a04b281df7d3dcbc6ac","Magic", "Marco", this.donjonsEtDragon,  null);

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
