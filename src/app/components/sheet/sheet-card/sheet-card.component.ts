import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LayoutService } from '../../../services/sheet/layout.service';

@Component({
  selector: 'app-sheet-card',
  templateUrl: './sheet-card.component.html',
  styleUrls: ['./sheet-card.component.css']
})
export class SheetCardComponent implements OnInit {

  @Input() displayButton : any;
  @Input() modelSheet : any;
  @Output() loadEvent : EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor(
    private layoutService : LayoutService
  ) { }

  ngOnInit(): void {
    console.log(this.modelSheet.gameType.logo);
  }

  loadSheet(id : string){
    this.loadEvent.emit(false);
    this.layoutService.loadSheet(id);
  }

}
