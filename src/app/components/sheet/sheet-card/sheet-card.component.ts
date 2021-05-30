import { Component, Input, OnInit } from '@angular/core';
import { LayoutService } from '../../services/sheet/layout.service';

@Component({
  selector: 'app-sheet-card',
  templateUrl: './sheet-card.component.html',
  styleUrls: ['./sheet-card.component.css']
})
export class SheetCardComponent implements OnInit {

  @Input() sheet;
  constructor(
    private layoutService : LayoutService
  ) { }

  ngOnInit(): void {
  }

  getLayoutService(){
    return this.layoutService;
  }
}