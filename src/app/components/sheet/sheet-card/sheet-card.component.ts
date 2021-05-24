import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet-card',
  templateUrl: './sheet-card.component.html',
  styleUrls: ['./sheet-card.component.css']
})
export class SheetCardComponent implements OnInit {

  @Input() sheet;
  constructor() { }

  ngOnInit(): void {
  }

}
