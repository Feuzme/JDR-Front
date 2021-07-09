import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
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

editProduct(product: Session) {
  //this.product = {...product};
  this.productDialog = true;
}

deleteProduct(product: Session) {
  this.confirmationService.confirm({
      message: 'Enlever des favoris ' + product.getName + '?',
      header: 'Confirmer',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          //this.sessions = this.session.filter(val => val.id !== product.id);
          //this.product  = null;
          this.messageService.add({severity:'success', summary: 'succès', detail: 'Enlever des favoris', life: 3000});
      }
  });
}


hideDialog() {
  this.productDialog = false;
  this.submitted = false;
}

saveProduct() {
  this.submitted = true;

  if (this.session.getName().trim()) {
      if (this.session.getId()) {
          //this.sessions[this.findIndexById(this.session.getId())] = this.session;                
          this.messageService.add({severity:'success', summary: 'succès', detail: 'Ajouter aux favoris', life: 3000});
      }
      else {
          //this.session.getId() = this.createId();
    
          this.sessions.push(this.session);
          this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
      }

      //this.session = [...this.sessions];
      this.productDialog = false;
      this.session = null;
  }
}

findIndexById(id: string): number {
  let index = -1;
  for (let i = 0; i < this.sessions.length; i++) {
      if (this.sessions[i].getId() === id) {
          index = i;
          break;
      }
  }

  return index;
}


}
