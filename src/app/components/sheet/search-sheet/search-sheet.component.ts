import { ModelSheetHttpService } from 'src/app/services/sheet/model-sheet-http.service';
import { ModelSheet } from '../../../models/ModelSheet';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-sheet',
  templateUrl: './search-sheet.component.html',
  styleUrls: ['./search-sheet.component.css']
})
export class SearchSheetComponent implements OnInit {
  displayLoadModal : boolean;
  modelSheets: ModelSheet[] = [];

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
    console.log("event =",$event)
    // this.displayLoadModal = false;
  }
}
