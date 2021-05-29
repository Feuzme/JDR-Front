import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-edition-menu-right',
  templateUrl: './edition-menu-right.component.html',
  styleUrls: ['./edition-menu-right.component.css']
})
export class EditionMenuRightComponent implements OnInit {

  @Input('editingPlugin') editingPlugin : GridsterItem;
  
  //Border Radius par coin (brHD = border radius Haut droite etc...)
  brHD: number = 0;
  brHG: number = 0;
  brBD: number = 0;
  brBG: number = 0;

  borderWidth: number = 0;
  colorBorder: any = {r:255,g:255,b:255};
  colorBack: any = {r:255,g:255,b:255};

  checkedRadius: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.initValuesGridster();
  }

  ngOnChanges(changes: SimpleChanges): void{
    this.initValuesGridster();
  }

  chgColorBorder(){
    this.editingPlugin.css.borderColor = this.colorBorder;
  }

  chgColorBack(){
    this.editingPlugin.css.backgroundColor = this.colorBack;
  }

  // Fonction permettant d'initialiser les valeurs du formulaire avec ceux du plugin que l'on veut éditer
  initValuesGridster(){
    this.initBorderRadius();
    this.initColors();
  }

  // Fonction permettant d'initialiser les valeurs du border radius ainsi que de la taille de la bordure
  initBorderRadius(){
    this.borderWidth = this.editingPlugin.css.border != null ? this.editingPlugin.css.border.replace('px','') : 0;
    this.brHD = this.editingPlugin.css.borderTopRightRadius != null ? this.editingPlugin.css.borderTopRightRadius.replace('px','') : 0;
    this.brHG = this.editingPlugin.css.borderTopLeftRadius != null ? this.editingPlugin.css.borderTopLeftRadius.replace('px','') : 0;
    this.brBD = this.editingPlugin.css.borderBottomRightRadius != null ? this.editingPlugin.css.borderBottomRightRadius.replace('px','') : 0;
    this.brBG = this.editingPlugin.css.borderBottomLeftRadius != null ? this.editingPlugin.css.borderBottomLeftRadius.replace('px','') : 0;
  }

  // Fonction permettant d'initialiser les p-colorpicker avec les couleurs du plugin
  initColors(){
    this.colorBack = this.editingPlugin.css.backgroundColor != null ? this.formatColorForEditing(this.editingPlugin.css.backgroundColor) : {r:255,g:255,b:255};
    this.colorBorder = this.editingPlugin.css.borderColor != null ? this.formatColorForEditing(this.editingPlugin.css.borderColor) : {r:255,g:255,b:255};
  }

  // Fonction permettant de transformer le string rgb(128,0,128) en {r: 117, g: 101, b: 101}
  formatColorForEditing(CouleurGridsterItem){
    let tabTmp = [];
    CouleurGridsterItem = CouleurGridsterItem.replace('rgb(','');
    CouleurGridsterItem = CouleurGridsterItem.replace(')','');
    tabTmp = CouleurGridsterItem.split(',');
    return {r:tabTmp[0],g:tabTmp[1],b:tabTmp[2]};
  }

  checkAllSame(model){
    if(this.checkedRadius){
      switch(model){
        case 'brHD':
          this.brHG = this.brHD;
          this.brBD = this.brHD;
          this.brBG = this.brHD;
        case 'brHG':
          this.brHD = this.brHG;
          this.brBD = this.brHG;
          this.brBG = this.brHG;
        case 'brBD':
          this.brHG = this.brBD;
          this.brHD = this.brBD;
          this.brBG = this.brBD;
        case 'brBG':
          this.brHG = this.brBG;
          this.brHD = this.brBG;
          this.brBD = this.brBG;
      }
    }  
  }

  save(){
  }

}
