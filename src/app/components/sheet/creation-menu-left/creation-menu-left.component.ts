import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-creation-menu-left',
  templateUrl: './creation-menu-left.component.html',
  styleUrls: ['./creation-menu-left.component.css']
})
export class CreationMenuLeftComponent implements OnInit {
  @Input() plugins;
  
  constructor() { }

  ngOnInit(): void {
  }

}
