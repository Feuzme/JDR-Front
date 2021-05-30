import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-plugin-card',
  templateUrl: './plugin-card.component.html',
  styleUrls: ['./plugin-card.component.css']
})
export class PluginCardComponent implements OnInit {

  @Input() plugin;

  constructor() { }

  ngOnInit(): void {
  }

}
