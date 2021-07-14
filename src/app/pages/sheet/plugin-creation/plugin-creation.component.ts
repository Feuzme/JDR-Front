import { Component, OnInit } from '@angular/core';
import { ProgressBarComponent } from 'src/app/components/sheet/plugin-base/default-components/progress-bar/progress-bar.component';
import { BasePlugIn } from 'src/app/models/BasePlugin';
import { BasePluginService } from 'src/app/services/base-plugin-service/base-plugin.service';

@Component({
  selector: 'app-plugin-creation',
  templateUrl: './plugin-creation.component.html',
  styleUrls: ['./plugin-creation.component.css']
})
export class PluginCreationComponent implements OnInit {

  value: number = 40;
  public basePlugins : BasePlugIn[] = [];

  currentBp : BasePlugIn;

  constructor() { }

  ngOnInit(): void {
  }

  getCurrentBp = (bp : BasePlugIn) => {
    this.currentBp = bp;
  }

}
