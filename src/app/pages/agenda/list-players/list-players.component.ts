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

  idPartieChoisie: String;

  constructor(private gameService: GameService) {
    this.couleurLegend = ["red", "purple", "blue", "yellow", "green", "orange","brown"];
    this.initListeJoueurs();
  }

  ngOnInit(): void {
  }

  /**
   * Fonction qui permet d'initialiser la liste des joueurs en fonction de la partie
   */
  initListeJoueurs(): void {
    this.idPartieChoisie = "60dc701089f43f4b0494fe1d";
    this.gameService.getById(this.idPartieChoisie).subscribe(result => {
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
          this.players = [];
          this.players.push({
            pseudo: joueur.nom,
            role: "MJ",
            avatar: "assets/images/Gerard.png",
            couleur: this.couleurLegend[index]
          });
        }

      });
    });
  }
}
