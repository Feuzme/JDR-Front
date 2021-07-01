import { ModelSheet } from './../../../models/ModelSheet';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-sheet',
  templateUrl: './search-sheet.component.html',
  styleUrls: ['./search-sheet.component.css']
})
export class SearchSheetComponent implements OnInit {

  modelSheets: ModelSheet[] = [
    new ModelSheet("1", "test1", true, {id:"userId1"}, []),
    new ModelSheet("2", "test2", true, {id:"userId2"}, []),
    new ModelSheet("3", "test3", true, {id:"userId3"}, [])
  ];

  constructor() {}

  ngOnInit(): void {
    
  }

}
