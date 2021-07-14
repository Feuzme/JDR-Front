import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info-bottom',
  templateUrl: './game-info-bottom.component.html',
  styleUrls: ['./game-info-bottom.component.css']
})
export class GameInfoBottomComponent implements OnInit {

  affichageOk : boolean = false; 

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("gameId")!=null){
      this.affichageOk = true;
    }
  }

}
