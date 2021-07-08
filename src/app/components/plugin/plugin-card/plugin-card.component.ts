import { Component, Input, OnInit } from '@angular/core';
import { PlugIn } from 'src/app/models/PlugIn';
import { LayoutService } from '../../../services/sheet/layout.service';

@Component({
  selector: 'app-plugin-card',
  templateUrl: './plugin-card.component.html',
  styleUrls: ['./plugin-card.component.css']
})
export class PluginCardComponent implements OnInit {

  @Input() plugin : any;

  constructor(
    private layoutService : LayoutService,
  ) { }

  ngOnInit(): void {
    console.log("===<", this.plugin)
  }

  getLayoutService() {
    return this.layoutService;
  }
}
