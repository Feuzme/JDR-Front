import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game/game.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  parties: any[];

  constructor(private gameService : GameService) { }

  ngOnInit(): void {
    this.parties = [
      {
          name: 'Donjons & Dragons',
          code: 'DD',
          nomPartie: [
              {
                  cname: 'La fin du multivers',
                  code: '1'
              },
              {
                  cname: 'La fin du multivers 2',
                  code: '2'
              }, 
          ]
      },
      {
          name: 'GoT', 
          code: 'GOT',
          nomPartie: [
              {
                  cname: 'La maison secrète',
                  code: '11'
              },              
          ]
      }
  ];

  }

}
