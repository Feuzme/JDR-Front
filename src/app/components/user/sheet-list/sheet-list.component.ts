import { Component, Input, OnInit } from '@angular/core';
import { ModelSheet } from 'src/app/models/ModelSheet';
import { ModelSheetHttpService } from 'src/app/services/sheet/model-sheet-http.service';

@Component({
  selector: 'app-sheet-list',
  templateUrl: './sheet-list.component.html',
  styleUrls: ['./sheet-list.component.css']
})
export class SheetListComponent implements OnInit {
  modelSheets : ModelSheet[] = [];
  @Input() sheets;
  constructor(
    private modelSheetHttpService: ModelSheetHttpService
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

}
