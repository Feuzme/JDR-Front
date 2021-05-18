import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  game= {
    name: "Donjons & Dragons",
    logo: "assets/images/dragon.jpg",
    gm:"El megaBG 59"
  }
  constructor() { }

  ngOnInit(): void {
  }

}