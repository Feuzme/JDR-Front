import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {

  mj = {pseudo: "Balrog-nrv",role:"MJ",avatar:"assets/images/Balrog.png",couleur:"red"}

  players = [
    {pseudo: "Smaug",role:"P",avatar:"assets/images/Smaug.png",couleur:"brown"},
    {pseudo: "Kart-man59",role:"P",avatar:"assets/images/Kart.png",couleur:"blue"},
    {pseudo: "D20",role:"P",avatar:"assets/images/D20.png",couleur:"yellow"},
    {pseudo: "Gérard2Riv",role:"P",avatar:"assets/images/Gerard.png",couleur:"white"}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
