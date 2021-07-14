import { Component, Input, OnInit } from '@angular/core';
import { BasePluginService } from 'src/app/services/base-plugin-service/base-plugin.service';

@Component({
  selector: 'app-base-plugin-card',
  templateUrl: './base-plugin-card.component.html',
  styleUrls: ['./base-plugin-card.component.css']
})
export class BasePluginCardComponent implements OnInit {

  @Input() basePlugin : any;

  constructor(private basePluginService : BasePluginService) { }

  ngOnInit(): void {
  }

  getLayoutService(){
    return this.basePluginService;   
  }

}
