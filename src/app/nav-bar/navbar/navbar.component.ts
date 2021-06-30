import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /*Amir voir pour la deconnexion au clic sur l'icone */
  authLabel:string="Loggin";

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.setAuthLabel();
  }
  onConnect(){
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


  onDeConnect(){
    if (localStorage.getItem("utilisateurId")){
      localStorage.removeItem("utilisateurId");
      //this.authLabel = "Connexion";
    }
    this.router.navigate(["login"]);
  }



}
