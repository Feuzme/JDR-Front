import { Component, Input, OnInit } from '@angular/core';
import { Avatar } from 'primeng/avatar';
import { GameService } from 'src/app/services/game/game.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-players',
  templateUrl: './list-players.component.html',
  styleUrls: ['./list-players.component.css']
})
export class ListPlayersComponent implements OnInit {

  @Input() showLegend: boolean;

  couleurLegend: String[];

  mj: any;

  players: any[];

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem("gameId") != null) {
      this.initListJoueurs();
    }
  }

  /**
   * Fonction qui permet d'initialiser la liste des joueurs en fonction de la partie
   */
  @Input() set initListeJoueurs(idPartieChoisie: String) {
    this.players = [];
    this.mj = undefined;
    this.gameService.getById(idPartieChoisie).subscribe(result => {
      result.listPlayers.forEach((joueur, index) => {
        // Traitement pour le MJ
        if (index == 0) {
          this.mj = {
            pseudo: joueur.nom,
            role: "MJ",
            avatar: "assets/images/avatars/" + joueur.avatar,
            couleur: environment.colorLegend[index]
          };
        } // Traitement pour les joueurs
        else {
          this.players.push({
            pseudo: joueur.nom,
            role: "P",
            avatar: "assets/images/avatars/" + joueur.avatar,
            couleur: environment.colorLegend[index]
          });
        }
      });
    });
  }

  initListJoueurs() {
    this.players = [];
    this.mj = undefined;
    this.gameService.getById(localStorage.getItem("gameId")).subscribe(result => {
      this.players = [];
      result.listPlayers.forEach((joueur, index) => {
        // Traitement pour le MJ
        if (index == 0) {
          this.mj = {
            pseudo: joueur.nom,
            role: "MJ",
            avatar: "assets/images/avatars/" + joueur.avatar,
            couleur: environment.colorLegend[index]
          };
        } // Traitement pour les joueurs
        else {
          console.log("init");
          this.players.push({
            pseudo: joueur.nom,
            role: "P",
            avatar: "assets/images/avatars/" + joueur.avatar,
            couleur: environment.colorLegend[index]
          });
        }
      });
    });
  }
}
