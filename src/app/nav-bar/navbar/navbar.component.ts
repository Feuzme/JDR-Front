import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: MenuItem[];

  ngOnInit() {
      this.items = [
          {
            icon:'far fa-bell',
            styleClass: 'menuItemFlex'
            },
          {
            icon:'pi pi-user',
            styleClass: 'menuItemFlex'
          },
          {
            icon:'pi pi-calendar',
            styleClass: 'menuItemFlex'
          },
          {
            icon:'fas fa-cog',
            styleClass: 'menuItemFlex'
          },
          {
            icon:'pi pi-fw pi-power-off',
            styleClass: 'menuItemFlex'
          }
      ];
  }

}
