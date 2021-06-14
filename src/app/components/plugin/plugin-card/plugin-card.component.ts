import { Component, Input, OnInit } from '@angular/core';
import { BasePlugIn } from 'src/app/models/BasePlugin';
import { PlugIn } from 'src/app/models/plugin';
import { BasePluginService } from 'src/app/services/base-plugin-service/base-plugin.service';
import { LayoutService } from '../../../services/sheet/layout.service';
import { PluginComponent } from '../../sheet/plugin-base/plugin.component';

@Component({
  selector: 'app-plugin-card',
  templateUrl: './plugin-card.component.html',
  styleUrls: ['./plugin-card.component.css']
})
export class PluginCardComponent implements OnInit {

  @Input() plugin;

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
    if (this.plugin instanceof PlugIn) {
      return this.layoutService;
    }     
  }
}
