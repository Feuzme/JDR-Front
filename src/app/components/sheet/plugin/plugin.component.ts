import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plugin',
  templateUrl: './plugin.component.html',
  styleUrls: ['./plugin.component.css']
})
export class PluginComponent implements OnInit {

  value : number = 40;

  progressBars = [];

  barStyle: 'red';

  constructor() { }

  ngOnInit(): void {
  }

  addBlueBar() {
    this.progressBars.push({});
  }

  addRedBar() {
    this.progressBars.push({});
  }

}
