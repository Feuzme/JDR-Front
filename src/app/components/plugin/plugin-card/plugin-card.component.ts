import { Component, Input, OnInit } from '@angular/core';
import { PlugIn } from 'src/app/models/PlugIn';
import { LayoutService } from '../../../services/sheet/layout.service';

@Component({
  selector: 'app-plugin-card',
  templateUrl: './plugin-card.component.html',
  styleUrls: ['./plugin-card.component.css']
})
export class PluginCardComponent implements OnInit {

  @Input() plugin : PlugIn;

  constructor(
    private layoutService : LayoutService,
    // private basePluginService : BasePluginService
  ) { }

  ngOnInit(): void {
  }

  getLayoutService() {
    return this.layoutService;
  }
}
