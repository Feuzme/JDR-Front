import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edition-menu-right',
  templateUrl: './edition-menu-right.component.html',
  styleUrls: ['./edition-menu-right.component.css']
})
export class EditionMenuRightComponent implements OnInit {

  //Border Radius par coin (brHD = border radius Haut droite etc...)
  brHD: number = 0;
  brHG: number = 0;
  brBD: number = 0;
  brBG: number = 0;

  borderWidth: number = 0;
  colorBorder: string;
  colorBack: string;

  checkedRadius: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
