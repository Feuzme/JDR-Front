import { Injectable } from '@angular/core';
import { BasePlugIn } from 'src/app/models/BasePlugin';

@Injectable({
  providedIn: 'root'
})
export class BasePluginService {

  public basePlugins: BasePlugIn[] = [];

  constructor() { }

  addBasePlugin(basePlugin: BasePlugIn) {
    this.basePlugins.push(basePlugin);
  }
}
