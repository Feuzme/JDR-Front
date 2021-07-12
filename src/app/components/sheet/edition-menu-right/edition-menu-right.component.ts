import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { GridsterItem } from 'angular-gridster2';
import { PlugIn } from 'src/app/models/PlugIn';
import { PluginHttpService } from 'src/app/services/plugin-http.service';

@Component({
  selector: 'app-edition-menu-right',
  templateUrl: './edition-menu-right.component.html',
  styleUrls: ['./edition-menu-right.component.css']
})
export class EditionMenuRightComponent implements OnInit {

  @Input('editingPlugin') editingPlugin: GridsterItem;
  @Output() choiceEditing: EventEmitter<any> = new EventEmitter<any>();

  //Border Radius par coin (brHD = border radius Haut droite etc...)
  brHD: number = 0;
  brHG: number = 0;
  brBD: number = 0;
  brBG: number = 0;
  positionBorder : string  = '';

  borderWidth: number = 0;
  colorBorder: any = { r: 255, g: 255, b: 255 };
  colorBack: any = { r: 255, g: 255, b: 255 };

  checkedRadius: boolean = false;

  constructor(
    private plugInHttpService : PluginHttpService
  ) { }

  ngOnInit(): void {
    this.initValuesGridster();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initValuesGridster();
  }

  chgColorBorder() {
    this.editingPlugin.css.borderColor = 'rgb(' + this.colorBorder.r + ',' + this.colorBorder.g + ',' + this.colorBorder.b + ')';
  }

  chgColorBack() {
    this.editingPlugin.css.backgroundColor = 'rgb(' + this.colorBack.r + ',' + this.colorBack.g + ',' + this.colorBack.b + ')';
  }

  chgBorderSize() {
    switch(this.positionBorder){
      case "all":
        this.editingPlugin.css.borderWidth = this.borderWidth+"px "+this.borderWidth+"px "+this.borderWidth+"px "+this.borderWidth+"px";
        break;
      case "top":
        this.editingPlugin.css.borderWidth = this.borderWidth+"px 0px 0px 0px";
        break;
      case "right":
        this.editingPlugin.css.borderWidth = "0px "+this.borderWidth+"px 0px 0px";
        break;
      case "bottom":
        this.editingPlugin.css.borderWidth = "0px 0px "+this.borderWidth+"px 0px";
        break;
      case "left":
        this.editingPlugin.css.borderWidth = "0px 0px 0px "+this.borderWidth+"px";
        break;
    }
  }

  initBorderButton() {
    this.resetBorderStyleButton();
    this.resetBorderPositionButton();
    if(this.editingPlugin.css.borderStyle != ''){ 
      document.getElementById(this.editingPlugin.css.borderStyle + "Border").classList.add("borderActive");
    }else{
      document.getElementById("noneBorder").classList.add("borderActive");
    }
    if(this.positionBorder != ''){
      document.getElementById(this.positionBorder+"Border").classList.add("borderPositionActive");
    }else{
      this.positionBorder = "all";
      document.getElementById("allBorder").classList.add("borderPositionActive");
    }
  }

  // Fonction permettant d'initialiser la valeur de la taille de la bordure et sa position
  initBorderPositionAndSize(){
    this.resetBorderPositionButton();
    let sizeBorder = 0;
    if(this.editingPlugin.css.borderWidth != ''){
      let tabTmp = this.editingPlugin.css.borderWidth.split("px");
      if(tabTmp[0]>0 && tabTmp[1]>0 && tabTmp[2]>0 && tabTmp[3]>0 && tabTmp[4]>0){
        this.positionBorder = "all";
      }else if(tabTmp[0]>0){
        this.positionBorder = "top";
        sizeBorder = tabTmp[0];
      }else if(tabTmp[1]>0){
        this.positionBorder = "right";
        sizeBorder = tabTmp[1];
      }else if(tabTmp[2]>0){
        this.positionBorder = "bottom";
        sizeBorder = tabTmp[2];
      }else if(tabTmp[3]>0){
        this.positionBorder = "left";
        sizeBorder = tabTmp[3];
      }
    }
    this.borderWidth = sizeBorder;
  }

  // Fonction permettant d'initialiser les valeurs du formulaire avec ceux du plugin que l'on veut éditer
  initValuesGridster() {
    this.initBorderPositionAndSize();
    this.initBorderButton();
    this.initBorderRadius();
    this.initColors();
  }

  // Fonction permettant d'initialiser les valeurs du border radius
  initBorderRadius() {
    if(this.editingPlugin.css.borderRadius != ''){
      let tabTmp = this.editingPlugin.css.borderRadius.split("%");
      this.brHG = tabTmp[0];
      this.brHD = tabTmp[1];
      this.brBD = tabTmp[2];
      this.brBG = tabTmp[3];
    }
  }

  // Fonction permettant d'initialiser les p-colorpicker avec les couleurs du plugin
  initColors() {
    this.colorBack = this.editingPlugin.css.backgroundColor != '' ? this.formatColorForEditing(this.editingPlugin.css.backgroundColor) : { r: 255, g: 255, b: 255 };
    this.colorBorder = this.editingPlugin.css.borderColor != '' ? this.formatColorForEditing(this.editingPlugin.css.borderColor) : { r: 255, g: 255, b: 255 };
  }

  // Fonction permettant de transformer le string rgb(128,0,128) en {r: 117, g: 101, b: 101}
  formatColorForEditing(CouleurGridsterItem) {
    let tabTmp = [];
    CouleurGridsterItem = CouleurGridsterItem.replace('rgb(', '');
    CouleurGridsterItem = CouleurGridsterItem.replace(')', '');
    tabTmp = CouleurGridsterItem.split(',');
    return { r: tabTmp[0], g: tabTmp[1], b: tabTmp[2] };
  }

  checkAllSame(model) {
    if (this.checkedRadius) {
      switch (model) {
        case 'brHD':
          this.brHG = this.brHD;
          this.brBD = this.brHD;
          this.brBG = this.brHD;
          break;
        case 'brHG':
          this.brHD = this.brHG;
          this.brBD = this.brHG;
          this.brBG = this.brHG;
          break;
        case 'brBD':
          this.brHG = this.brBD;
          this.brHD = this.brBD;
          this.brBG = this.brBD;
          break;
        case 'brBG':
          this.brHG = this.brBG;
          this.brHD = this.brBG;
          this.brBD = this.brBG;
          break;
      }
    }
    this.editingPlugin.css.borderRadius = this.brHG+"% "+this.brHD+"% "+this.brBD+"% "+this.brBG+"%";
  }

  chgBorderStyle(elementActive) {
    this.editingPlugin.css.borderStyle = elementActive;
    this.resetBorderStyleButton();
    document.getElementById(elementActive+"Border").className += " borderActive";
  }

  resetBorderStyleButton(){
    // Get the container element
    let btnContainer = document.getElementById("bStyles");
    // Get all buttons with class="btn" inside the container
    let anchors = btnContainer.getElementsByTagName("a");
    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < anchors.length; i++) {       
        anchors[i].className = anchors[i].className.replace(" borderActive", "");
    }
  }

  resetBorderPositionButton(){
    this.positionBorder = "all";
    // Get the container element
    let btnContainer = document.getElementById("bPosition");
    console.log(btnContainer);
    // Get all buttons with class="btn" inside the container
    let anchors = btnContainer.getElementsByTagName("a");
    // Loop through the buttons and add the active class to the current/clicked button
    for (var i = 0; i < anchors.length; i++) {       
        anchors[i].className = anchors[i].className.replace(" borderPositionActive", "");
    }
  }

  chgBorderPosition(positionActive) {
    this.resetBorderPositionButton();
    document.getElementById(positionActive+"Border").className += " borderPositionActive";
    this.positionBorder = positionActive;
    this.chgBorderSize();
  }

  /**
   * Modifie la configuration en bdd du plugin sur la fiche
   */
  save() {
    this.choiceEditing.emit({choice:'save',id:this.editingPlugin.id});

    console.log(this.editingPlugin.id)
    let plugInFull : PlugIn = new PlugIn(
      this.editingPlugin.id,
      null, 
      null, 
      null, 
      this.editingPlugin
    );

    this.plugInHttpService.update(plugInFull).subscribe(
      (resp : any)=>{
        console.log(resp);
      }
    )

    //TODO put this in a service
  }

  delete(){
    console.log(this.editingPlugin.id)
    this.choiceEditing.emit({choice:'delete',id:this.editingPlugin.id});
  }
}
