import { ModelSheet } from '../../../models/ModelSheet';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-search-sheet',
  templateUrl: './search-sheet.component.html',
  styleUrls: ['./search-sheet.component.css']
})
export class SearchSheetComponent implements OnInit {

  mockUser: User = new User("10",
    "toto",
    "test@test.com",
    "password",
    "avatar",
    "bio",
    "lille",
    false
  );
  modelSheets: ModelSheet[] = [
    new ModelSheet("1", "test1", true, this.mockUser, []),
    new ModelSheet("2", "test2", true, this.mockUser, []),
    new ModelSheet("3", "test3", true, this.mockUser, [])
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
