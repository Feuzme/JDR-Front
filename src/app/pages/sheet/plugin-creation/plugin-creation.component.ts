import { Component, OnInit } from '@angular/core';
import { ProgressBarComponent } from 'src/app/components/sheet/plugin-base/default-components/progress-bar/progress-bar.component';
import { BasePlugIn } from 'src/app/models/BasePlugin';

@Component({
  selector: 'app-plugin-creation',
  templateUrl: './plugin-creation.component.html',
  styleUrls: ['./plugin-creation.component.css']
})
export class PluginCreationComponent implements OnInit {

  value: number = 40;
  public plugins : BasePlugIn[] = [];
  private healthBar : BasePlugIn = new BasePlugIn("Bar de vie", {size: "p-col-12", composant: ProgressBarComponent}, null, null, null, null)

  constructor() { }

  ngOnInit(): void {
    this.plugins.push(this.healthBar);
  }

}
