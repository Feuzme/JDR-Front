import { Component, Input, OnInit } from '@angular/core';
import { BasePlugIn } from 'src/app/models/BasePlugin';
import { LayoutService } from '../../../services/sheet/layout.service';

@Component({
  selector: 'app-plugin-card',
  templateUrl: './plugin-card.component.html',
  styleUrls: ['./plugin-card.component.css']
})
export class PluginCardComponent implements OnInit {

  @Input() plugin :BasePlugIn;

  constructor(
    private layoutService : LayoutService
  ) { }

  ngOnInit(): void {
  }

  getLayoutService(){
    return this.layoutService;
  }
}
