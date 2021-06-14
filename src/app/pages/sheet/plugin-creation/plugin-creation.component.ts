import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plugin-creation',
  templateUrl: './plugin-creation.component.html',
  styleUrls: ['./plugin-creation.component.css']
})
export class PluginCreationComponent implements OnInit {

  value: number = 40;

  constructor() { }

  ngOnInit(): void {

  }

}
