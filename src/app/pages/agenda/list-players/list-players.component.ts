import { Component, Input, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game/game.service';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {

  @Input() showLegend: boolean;
  @Input() idPartie: String;

  couleurLegend: String[];

  mj: any;

  players: any[];

  constructor(private gameService: GameService) {
    this.couleurLegend = ["red", "purple", "rgb(80, 80, 202)", "yellow", "green", "orange","brown"];
  }

  ngOnInit(): void {
    //this.initListeJoueurs(this.idPartie);
  }

  /**
   * Fonction qui permet d'initialiser la liste des joueurs en fonction de la partie
   */
  @Input() set initListeJoueurs(idPartieChoisie : String) {
    this.players = [];
    this.mj = undefined;
    this.gameService.getById(idPartieChoisie).subscribe(result => {
      result.listPlayers.forEach((joueur, index) => {
        // Traitement pour le MJ
        if (index == 0) {
          this.mj = {
            pseudo: joueur.nom,
            role: "MJ",
            avatar: "assets/images/Balrog.png",
            couleur: this.couleurLegend[index]
          };
        } // Traitement pour les joueurs
        else {
          this.players.push({
            pseudo: joueur.nom,
            role: "P",
            avatar: "assets/images/Gerard.png",
            couleur: this.couleurLegend[index]
          });
        }

      });
    });
  }
}
