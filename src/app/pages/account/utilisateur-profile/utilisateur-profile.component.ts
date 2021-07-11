import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-utilisateur-profile',
  templateUrl: './utilisateur-profile.component.html',
  styleUrls: ['./utilisateur-profile.component.css']
})
export class UtilisateurProfileComponent implements OnInit {

  authLabel:string="Loggin";
  @Input() user:User;

  users:User[];
 

  constructor(private service:UserService, private router: Router) { }
  

  ngOnInit(): void {
    this.service.getAll().subscribe((data:User[])=>this.users=data, console.error);
    this.setAuthLabel();
  }



  onSupress(user:User){
    this.service.delete(user).subscribe(()=>{
      this.users = this.users.filter(user=>user.id!==user.id);
    }) 
  }

  onModification(user:User){
    this.router.navigate(["update",user.id])
  }  
  onDeconnecte(user:User){
    this.router.navigate(["update",user.id])
  }  

  onHome(user:User){
    //alert(" Test Redirection home")
    this.router.navigate(["home"])
  } 
  

  onDeConnect(){
    if (localStorage.getItem("utilisateurId")){
      localStorage.removeItem("utilisateurId");
      this.authLabel = "Connexion";
    }
    this.router.navigate(["login"]);
  }

  private setAuthLabel() {
    if (localStorage.getItem("utilisateurId")) {
      this.authLabel = "Deconnexion";
    } else {
      this.authLabel = "Connexion";
    }
  }
  /*modifierParc = (id: number) => {
    this.router.navigate([`/update/${id}`]);
  }
*/


games = [
  {
    name: "Donjons & Dragons",
    logo: "assets/images/dragon.jpg",
    gm:"El megaBG 59"
  },
  {
    name: "Star Wars",
    logo: "assets/images/weeb.jpg",
    gm:"El megaBG 59"
  },
  {
    name: "Pokemon",
    logo: "assets/images/unicorn.jpg",
    gm:"El megaBG 59"
  }
]

sheets = [
  {
    name: "Donjons & Dragons",
    logo: "assets/images/dragon.jpg",
    creator: "Zouzou"
  },
  {
    name: "Star Wars",
    logo: "assets/images/weeb.jpg",
    creator: "Zouzou"
  },
  {
    name: "Pokemon",
    logo: "assets/images/unicorn.jpg",
    creator: "Zouzou"
  }
]



}
