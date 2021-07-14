import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Game } from 'src/app/models/Game';
import { Session } from 'src/app/models/Session';
import { PartieService } from 'src/app/services/search/partie.service';

@Component({
  selector: 'app-recherche-partie',
  templateUrl: './recherche-partie.component.html',
  styleUrls: ['./recherche-partie.component.css'],
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
    providers: [MessageService,ConfirmationService]
})
export class RecherchePartieComponent implements OnInit {



  productDialog: boolean;

  sessions: Session[];

  session: Session;

  selectedProducts: Session[];

  submitted: boolean;

  statuses: any[];

  constructor( private partieService: PartieService, 
    private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.partieService.getAll().subscribe(data => this.sessions = data);
}


ajouterPartie = (game : Game) => {
  //userFriend = new UserFriends();
  this.messageService.add({severity:'success', summary: 'Succès', detail: 'Partie ajouter en favoris', life: 1000});
  //this.userService.update(this.game); 
}
suprimerPartie(session: Session) {
  this.confirmationService.confirm({
    
      message: 'Enlever des favoris ' + session.getName() + '?',
      header: 'Confirmer',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          //this.session = this.sessions.filter(val => val.getName() !== session.getName());
          this.session  = null;
          this.messageService.add({severity:'success', summary: 'succès', detail: 'Enlever des favoris', life: 3000});
      }
  });
}

}
