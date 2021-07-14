import { ModelSheet } from './../../models/ModelSheet';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/services/game/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  monImage: string = "../../../assets/images/image1.jpg";

  fiches : ModelSheet[] = [];

  jeuxMj = [
    {type:"Donjons et Dragons",nom:"La fin du multivers",image:"gp_dd.jpg",mj:"utilisateur1",story:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error",id:""},
    {type:"Games of Thrones",nom:"La chute du mur",image:"gp_got.jpg",mj:"utilisateur2",story:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error",id:""},
    {type:"Star wars",nom:"La quête infinie",image:"gp_other.jpg",mj:"utilisateur3",story:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error",id:""}
  ]

  jeuxDispo = [
    {type:"Donjons et Dragons",nom:"La fin du multivers",image:"gp_dd.jpg",mj:"utilisateur1",story:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error",id:""},
    {type:"Games of Thrones",nom:"La chute du mur",image:"gp_got.jpg",mj:"utilisateur2",story:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error",id:""},
    {type:"Star wars",nom:"La quête infinie",image:"gp_other.jpg",mj:"utilisateur3",story:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error",id:""}
  ]

  responsiveOptions;

  constructor(private router: Router,private gameService : GameService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  ngOnInit() {
    this.gameService.initCarousel(localStorage.getItem("utilisateurId")).then(games => {
      games.forEach(game=>{
        if(game.mjUser.id == localStorage.getItem("utilisateurId")){
          this.jeuxMj.push({
            type: game.gameType.name,
            nom: game.name,
            image: game.gameType.logo,
            mj: game.mjUser.nom,
            story: game.story,
            id: game.id
           });
        }
      });
    });
    this.gameService.getAll().subscribe(games => {
      games.forEach(game=>{
        if(game.mjUser.id != localStorage.getItem("utilisateurId")){
          this.jeuxDispo.push({
            type: game.gameType.name,
            nom: game.name,
            image: game.gameType.logo,
            mj: game.mjUser.nom,
            story: game.story,
            id: game.id
           });
        }
      });
    });
   }

  newGame = () => {
    localStorage.removeItem("gameId");
    this.router.navigate(['/game']);
  }

  newSheet = () => {
    this.router.navigate(['/sheet-creation']);
  }

  openGame = (idGame :string) =>{
    localStorage.setItem("gameId",idGame);
    window.location.href = "game";
  }

}
