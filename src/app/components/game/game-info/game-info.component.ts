import { Component, OnInit } from '@angular/core';
import { GameDto } from 'src/app/models/dto/GameDto';
import { GameIdDto } from 'src/app/models/dto/GameIdDto';
import { GameTypeDto } from 'src/app/models/dto/GameTypeDto';
import { UserIdDto } from 'src/app/models/dto/UserIdDto';
import { Game } from 'src/app/models/Game';
import { GameType } from 'src/app/models/GameType';
import { User } from 'src/app/models/user';
import { GameService } from 'src/app/services/game/game.service';
import { GametypeService } from 'src/app/services/gametype/gametype.service';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})

export class GameInfoComponent implements OnInit {

  typeJeu: any[];
  idPartie: string;
  selectedTypeJeu: any;
  isPrivate: boolean = false;
  privacy: String = "Publique";
  privacyImg: string = "../../../../assets/images/public.png";
  url: any = '';
  tab_gameTypePic: string[] = ["gp_dd.jpg", "gp_got.jpg", "gp_other.jpg"];
  gameTypePic: string = this.tab_gameTypePic[0];
  gameName: string;
  nbPlayers: number;
  gameStory: string;
  isNotMj : boolean = true;
  isPresent : boolean = false;

  dateSession: string = 'Date de la prochaine session non définie';

  constructor(private gameService: GameService, private gameTypeService: GametypeService) {
    this.typeJeu = [];
    this.gameTypeService.getAll().subscribe(listGameType => {
      listGameType.forEach((gameType, index) => {
        this.typeJeu.push({
          id: index,
          nom: gameType.name,
          gametypeId: gameType.id
        });
      })
    });
    
  }

  ngOnInit(): void {
    if (localStorage.getItem("gameId") != undefined) {
      this.idPartie = localStorage.getItem("gameId");
      this.gameService.getById(localStorage.getItem("gameId")).subscribe(gameInfo => {
        gameInfo.listPlayers.forEach(joueurPresent =>{
          if(joueurPresent.id == localStorage.getItem("utilisateurId")){
            this.isPresent = true;
          }
        });
        this.isPrivate = !gameInfo.isPublic;
        if(gameInfo.mjUser.id == localStorage.getItem("gameId")){
          this.isNotMj = false;
        }else{
          this.isNotMj = true;
        }
        this.typeJeu.forEach((type,index) =>{
          if(type.nom == gameInfo.gameType.name){
            this.selectedTypeJeu = this.typeJeu[index];
          }
        });
        this.changeGameType();
        this.gameName = gameInfo.name;
        this.nbPlayers = gameInfo.nbPlayers;
        this.gameStory = gameInfo.story;

      });
    }else{
      this.idPartie = null;
    }
    
  }

  openAgenda = () => {
    window.location.href = "calendar";
  }

  changePrivacy() {
    this.privacyImg = this.privacyImg == "../../../../assets/images/public.png" ? "../../../../assets/images/notpublic.png" : "../../../../assets/images/public.png";
    document.getElementById("imgPrivacy").setAttribute("src", this.privacyImg);
    this.privacy = this.privacy == "Publique" ? "Privée" : "Publique";
  }

  changeGameType() {
    this.gameTypePic = this.tab_gameTypePic[this.selectedTypeJeu.id];
  }

  createGame() {
    let mjUser: UserIdDto;
    mjUser = new UserIdDto(localStorage.getItem("utilisateurId"));
    let gameType: GameTypeDto;
    gameType = new GameTypeDto(this.selectedTypeJeu.gametypeId);
    let newGame: GameDto;
    newGame = new GameDto(this.gameName, this.nbPlayers, this.gameStory, !this.isPrivate, mjUser, gameType, [mjUser]);
    this.gameService.create(newGame).subscribe(newgame => {
      localStorage.setItem("gameId", newgame.id);
      window.location.href = "game";
      console.log("Creation de nouvelle partie OK");
    });
  }

  joinGame(){
    this.gameService.addPlayer(localStorage.getItem("gameId"),localStorage.getItem("utilisateurId")).subscribe();
    window.location.href = "game";    
  }

  leaveGame(){
    this.gameService.removePlayer(localStorage.getItem("gameId"),localStorage.getItem("utilisateurId")).subscribe();
    window.location.href = "game";    
  }
}
