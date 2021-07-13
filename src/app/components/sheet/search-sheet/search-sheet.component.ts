import { ModelSheetHttpService } from 'src/app/services/sheet/model-sheet-http.service';
import { ModelSheet } from '../../../models/ModelSheet';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search-sheet',
  templateUrl: './search-sheet.component.html',
  styleUrls: ['./search-sheet.component.css']
})
export class SearchSheetComponent implements OnInit {
  displayLoadModal : boolean;
  modelSheets: ModelSheet[] = [];
  displayModal : any;

  @Output() loadEvent : EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    private modelSheetHttpService : ModelSheetHttpService
  ) { }

  ngOnInit(): void {
    this.modelSheetHttpService.getAll().subscribe(
      (resp : any[]) => {
        for(let sheet of resp){
          this.modelSheets.push(sheet);
        }
      }
    );
  }

  transfertToPreview($event){
    this.loadEvent.emit($event);
  }
}
