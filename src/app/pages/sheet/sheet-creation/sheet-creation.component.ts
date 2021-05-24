import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sheet-creation',
  templateUrl: './sheet-creation.component.html',
  styleUrls: ['./sheet-creation.component.css']
})
export class SheetCreationComponent implements OnInit {
  
  plugins = [
    {
      author:"greg",
      name:"HealthBar",
      game:"Dungeons&Dragons",
      gamePic:"assets/images/dragon.jpg",
      width:2,
      height:1
    },
    {
      author:"Weeb99",
      name:"Inventory",
      game:"Dungeons&Dragons",
      gamePic:"assets/images/dragon.jpg",
      width:4,
      height:4
    },   
    {
      author:"Dewee",
      name:"Stats",
      game:"POKEMON",
      gamePic:"assets/images/unicorn.jpg",
      width:1,
      height:2
    },   
    {
      author:"Marco",
      name:"Competences",
      game:"Fallout",
      gamePic:"assets/images/Gerard.png",
      width:2,
      height:4
    }, 
    {
      author:"Marco",
      name:"Magic",
      game:"ESRPG",
      gamePic:"assets/images/Smaug.png",
      width:1,
      height:1
    },   
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
