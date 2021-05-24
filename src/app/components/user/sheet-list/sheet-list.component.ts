import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet-list',
  templateUrl: './sheet-list.component.html',
  styleUrls: ['./sheet-list.component.css']
})
export class SheetListComponent implements OnInit {
  @Input() sheets;
  constructor() { }

  ngOnInit(): void {
  }

}
