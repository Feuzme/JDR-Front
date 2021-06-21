import { Component, Input, OnInit } from '@angular/core';
import { BasePlugIn } from 'src/app/models/BasePlugin';
import { BasePluginService } from 'src/app/services/base-plugin-service/base-plugin.service';

@Component({
  selector: 'app-edit-base-plugin',
  templateUrl: './edit-base-plugin.component.html',
  styleUrls: ['./edit-base-plugin.component.css']
})
export class EditBasePluginComponent implements OnInit {

  basePlugin : BasePlugIn;

  constructor(private service : BasePluginService) { }

  ngOnInit(): void {
    this.basePlugin = this.service.editBasePlugin;
  }

}
