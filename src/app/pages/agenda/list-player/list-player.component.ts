import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-player',
  templateUrl: './list-player.component.html',
  styleUrls: ['./list-player.component.css']
})
export class ListPlayerComponent implements OnInit {

  @Input() showLegend;
  @Input() mj;
  @Input() player;
  @Input() index;

  constructor() { }

  ngOnInit(): void {
  }

}
