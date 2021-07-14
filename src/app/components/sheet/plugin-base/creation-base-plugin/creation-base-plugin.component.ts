import { Component, Input, OnInit } from '@angular/core';
import { BasePlugIn } from 'src/app/models/BasePlugin';
import { PlugIn } from 'src/app/models/PlugIn';
import { AvatarComponent } from '../default-components/avatar/avatar.component';
import { ProgressBarComponent } from '../default-components/progress-bar/progress-bar.component';

@Component({
  selector: 'app-creation-base-plugin',
  templateUrl: './creation-base-plugin.component.html',
  styleUrls: ['./creation-base-plugin.component.css']
})
export class CreationBasePluginComponent implements OnInit {

  @Input() basePlugins : BasePlugIn[] = [];


  private healthBar : BasePlugIn = new BasePlugIn("Barre de vie", {size: "p-col-12", composant: ProgressBarComponent});

  private avatar : BasePlugIn = new BasePlugIn("Avatar", {size: "p-col-12", composant: AvatarComponent});

  constructor() { }

  ngOnInit(): void {
    console.log(this.healthBar, this.avatar);
    this.basePlugins.push(this.healthBar);
    this.basePlugins.push(this.avatar);
  }

}
