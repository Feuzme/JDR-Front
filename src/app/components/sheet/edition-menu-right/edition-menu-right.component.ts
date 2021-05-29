import { Component, Input, OnInit } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';

@Component({
  selector: 'app-edition-menu-right',
  templateUrl: './edition-menu-right.component.html',
  styleUrls: ['./edition-menu-right.component.css']
})
export class EditionMenuRightComponent implements OnInit {

  @Input('editingPlugin') editedPlugin : GridsterItem;
  
  //Border Radius par coin (brHD = border radius Haut droite etc...)
  brHD: number = 0;
  brHG: number = 0;
  brBD: number = 0;
  brBG: number = 0;

  borderWidth: number = 0;
  colorBorder: any;
  colorBack: any;

  checkedRadius: boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.editedPlugin);
    this.initValuesGridster();
  }

  chgColorBorder(){
    console.log(this.colorBorder);
    this.editedPlugin.css.backgroundColor = this.colorBack;
  }

  // Fonction permettant d'initialiser les valeurs du formulaire avec ceux du plugin que l'on veut éditer
  initValuesGridster(){
    this.initBorderRadius();
    this.initColors();
  }

  // Fonction permettant d'initialiser les valeurs du border radius ainsi que de la taille de la bordure
  initBorderRadius(){
    this.borderWidth = this.editedPlugin.css.border.replace('px','');
    this.brHD = this.editedPlugin.css.borderTopRightRadius.replace('px','');
    this.brHG = this.editedPlugin.css.borderTopLeftRadius.replace('px','');
    this.brBD = this.editedPlugin.css.borderBottomRightRadius.replace('px','');
    this.brBG = this.editedPlugin.css.borderBottomLeftRadius.replace('px','');
  }

  // Fonction permettant d'initialiser les p-colorpicker avec les couleurs du plugin
  initColors(){
    this.colorBack = this.formatColorForEditing(this.editedPlugin.css.backgroundColor);
    this.colorBorder = this.formatColorForEditing(this.editedPlugin.css.borderColor);
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

}
