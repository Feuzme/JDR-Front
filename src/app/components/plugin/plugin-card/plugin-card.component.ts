import { Component, Input, OnInit } from '@angular/core';
import { BasePlugIn } from 'src/app/models/BasePlugin';
import { BasePluginService } from 'src/app/services/base-plugin-service/base-plugin.service';
import { LayoutService } from '../../../services/sheet/layout.service';

@Component({
  selector: 'app-plugin-card',
  templateUrl: './plugin-card.component.html',
  styleUrls: ['./plugin-card.component.css']
})
export class PluginCardComponent implements OnInit {

  @Input() plugin :BasePlugIn;

  constructor(
    private layoutService : LayoutService,
    private basePluginService : BasePluginService
  ) { }

  ngOnInit(): void {
  }

  getLayoutService(){
    if (this.plugin instanceof BasePlugIn) {
      return this.basePluginService;
    }
    else {
      return this.layoutService;
    }     
  }
}
