import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GameService } from 'src/app/services/game/game.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  // Listes des parties du joueur naviguant sur l'agenda
  parties: any[];

  // Listes des parties de gameType 'Donjons et Dragons'
  listeParties_Dd: any[];

  // Listes des parties de gameType 'Game of Thrones'
  listeParties_Got: any[];

  // Listes des parties de gameType 'Autres'
  listeParties_Autres: any[];

  partieChoisie: any;
  idPartieChoisie: String;

  constructor(private gameService: GameService) {
    this.initListeDeroulantePartie();
  }

  ngOnInit(): void {
  }

  /**
   * Fonction qui permet d'initialiser la liste déroulante au dessus de l'agenda en récupérant les parties du joueur connecté
   */
  initListeDeroulantePartie(): void {
    this.gameService.getGamesByPlayerId(localStorage.getItem("utilisateurId")).subscribe(result => {
      result.forEach(partie => {
        this.listeParties_Dd = [];
        this.listeParties_Got = [];
        this.listeParties_Autres = [];
        if (partie.gameType.name == "Donjons et dragons") {

          this.listeParties_Dd.push({ cname: partie.name, code: partie.id });
        } else if (partie.gameType.name == "Game of thrones") {

          this.listeParties_Got.push({ cname: partie.name, code: partie.id });
        } else if (partie.gameType.name == "Autres") {

          this.listeParties_Autres.push({ cname: partie.name, code: partie.id });
        }
      });
      this.parties = [];
      if (this.listeParties_Dd.length > 0) {
        this.parties.push({
          name: "Donjons et Dragons",
          code: "DD",
          nomPartie: this.listeParties_Dd
        });
      }
      if (this.listeParties_Got.length > 0) {
        this.parties.push({
          name: "Game of Thrones",
          code: "GOT",
          nomPartie: this.listeParties_Got
        });
      }
      if (this.listeParties_Autres.length > 0) {
        this.parties.push({
          name: "Autres",
          code: "Other",
          nomPartie: this.listeParties_Autres
        });
      }
    });
  }

  choixPartie(): void {
    this.idPartieChoisie = this.partieChoisie.code;
  }

}
