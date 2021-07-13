import { Component, Input, OnInit } from '@angular/core';
import { BasePlugIn } from 'src/app/models/BasePlugin';
import { BasePluginService } from 'src/app/services/base-plugin-service/base-plugin.service';

@Component({
  selector: 'app-edit-base-plugin',
  templateUrl: './edit-base-plugin.component.html',
  styleUrls: ['./edit-base-plugin.component.css']
})
export class EditBasePluginComponent implements OnInit {

  @Input() bp: BasePlugIn;

  constructor(private service: BasePluginService) { }

  ngOnInit(): void {
  }

  updateSize(size: number) {
    let result: string;
    switch (size) {
      case 0:
        result = 'p-col-12';
        this.bp.config.size = result;
        this.bp.config.composant = this.service.reversedCurrentComposant(this.bp);
        console.log(this.bp.config.size);
        this.service.update(this.bp).subscribe(basePlugin => {
          this.service.reloadCurrentRoute();
        });
        break;

      case 1:
        result = 'p-col-1';
        this.bp.config.size = result;
        this.bp.config.composant = this.service.reversedCurrentComposant(this.bp);
        console.log(this.bp.config.size);
        this.service.update(this.bp).subscribe(basePlugin => {
          this.service.reloadCurrentRoute();
        });
        break;

      case 2:
        result = 'p-col-2';
        this.bp.config.size = result;
        this.bp.config.composant = this.service.reversedCurrentComposant(this.bp);
        console.log(this.bp.config.size);
        this.service.update(this.bp).subscribe(basePlugin => {
          this.service.reloadCurrentRoute();
        });
        break;

      case 3:
        result = 'p-col-3';
        this.bp.config.size = result;
        this.bp.config.composant = this.service.reversedCurrentComposant(this.bp);
        console.log(this.bp.config.size);
        this.service.update(this.bp).subscribe(basePlugin => {
          this.service.reloadCurrentRoute();
        });
        break;

      case 4:
        result = 'p-col-4';
        this.bp.config.size = result;
        this.bp.config.composant = this.service.reversedCurrentComposant(this.bp);
        console.log(this.bp.config.size);
        this.service.update(this.bp).subscribe(basePlugin => {
          this.service.reloadCurrentRoute();
        });
        break;

      case 5:
        result = 'p-col-5';
        this.bp.config.size = result;
        this.bp.config.composant = this.service.reversedCurrentComposant(this.bp);
        console.log(this.bp.config.size);
        this.service.update(this.bp).subscribe(basePlugin => {
          this.service.reloadCurrentRoute();
        });
        break;

      case 6:
        result = 'p-col-6';
        this.bp.config.size = result;
        this.bp.config.composant = this.service.reversedCurrentComposant(this.bp);
        console.log(this.bp.config.size);
        this.service.update(this.bp).subscribe(basePlugin => {
          this.service.reloadCurrentRoute();
        });
        break;

      case 7:
        result = 'p-col-7';
        this.bp.config.size = result;
        this.bp.config.composant = this.service.reversedCurrentComposant(this.bp);
        console.log(this.bp.config.size);
        this.service.update(this.bp).subscribe(basePlugin => {
          this.service.reloadCurrentRoute();
        });
        break;

      case 8:
        result = 'p-col-8';
        this.bp.config.size = result;
        this.bp.config.composant = this.service.reversedCurrentComposant(this.bp);
        console.log(this.bp.config.size);
        this.service.update(this.bp).subscribe(basePlugin => {
          this.service.reloadCurrentRoute();
        });
        break;

      case 9:
        result = 'p-col-9';
        this.bp.config.size = result;
        this.bp.config.composant = this.service.reversedCurrentComposant(this.bp);
        console.log(this.bp.config.size);
        this.service.update(this.bp).subscribe(basePlugin => {
          this.service.reloadCurrentRoute();
        });
        break;

      case 10:
        result = 'p-col-10';
        this.bp.config.size = result;
        this.bp.config.composant = this.service.reversedCurrentComposant(this.bp);
        console.log(this.bp.config.size);
        this.service.update(this.bp).subscribe(basePlugin => {
          this.service.reloadCurrentRoute();
        });
        break;

      case 11:
        result = 'p-col-11';
        this.bp.config.size = result;
        this.bp.config.composant = this.service.reversedCurrentComposant(this.bp);
        console.log(this.bp.config.size);
        this.service.update(this.bp).subscribe(basePlugin => {
          this.service.reloadCurrentRoute();
        });
        break;

      case 12:
        result = 'p-col-12';
        this.bp.config.size = result;
        this.bp.config.composant = this.service.reversedCurrentComposant(this.bp);
        console.log(this.bp.config.size);
        this.service.update(this.bp).subscribe(basePlugin => {
          this.service.reloadCurrentRoute();
        });
        break;
      default:
        result = 'p-col-12';
        this.bp.config.size = result;
        this.bp.config.composant = this.service.reversedCurrentComposant(this.bp);
        console.log(this.bp.config.size);
        this.service.update(this.bp).subscribe(basePlugin => {
          this.service.reloadCurrentRoute();
        });
        break;
    }
  }

}
