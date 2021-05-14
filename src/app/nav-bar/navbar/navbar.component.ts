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
            icon:'fa-buysellads'
          },
          {
            icon:'pi pi-user'
          },
          {
            icon:'pi pi-calendar'
          },
          {
            icon:'pi pi-settings'
          },
          {
            icon:'pi pi-fw pi-power-off'
          }
      ];
  }

}
