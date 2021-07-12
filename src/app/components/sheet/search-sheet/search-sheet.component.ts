import { ModelSheetHttpService } from 'src/app/services/sheet/model-sheet-http.service';
import { ModelSheet } from '../../../models/ModelSheet';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-search-sheet',
  templateUrl: './search-sheet.component.html',
  styleUrls: ['./search-sheet.component.css']
})
export class SearchSheetComponent implements OnInit {

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
    )
  }

}
