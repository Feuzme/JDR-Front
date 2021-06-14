import { Component, OnInit, ViewChild } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { CreationMenuLeftComponent } from 'src/app/components/sheet/creation-menu-left/creation-menu-left.component';
import { PlugIn } from 'src/app/models/plugin';

@Component({
  selector: 'app-sheet-creation',
  templateUrl: './sheet-creation.component.html',
  styleUrls: ['./sheet-creation.component.css']
})
export class SheetCreationComponent implements OnInit {
  item: GridsterItem;

  public plugins : PlugIn[] = [];
  private healthBar : PlugIn = new PlugIn("greg", "HealthBar", "Dungeons&Dragons", "assets/images/dragon.jpg", 2 ,1);
  private inventory : PlugIn = new PlugIn("Weeb99", "Inventory", "Dungeons&Dragons", "assets/images/dragon.jpg", 4 ,4);
  private stats : PlugIn = new PlugIn("Dewee","Stats", "Dungeons&Dragons", "assets/images/unicorn.jpg", 1 ,2);
  private magic : PlugIn = new PlugIn("Marco", "Magic","ESRPG","assets/images/Smaug.png", 1 ,1);

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
