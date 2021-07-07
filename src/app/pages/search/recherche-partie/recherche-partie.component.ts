import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Session } from 'src/app/models/Session';

import { PartieService } from 'src/app/services/search/partie.service';

@Component({
  selector: 'app-recherche-partie',
  templateUrl: './recherche-partie.component.html',
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
providers: [MessageService,ConfirmationService]
})
export class RechercheFicheComponent implements OnInit {
  productDialog: boolean;

  sessions: Session[];

  product: Session;

  selectedProducts: Session[];

  submitted: boolean;

  statuses: any[];

  constructor( private partieService: PartieService, 
    private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.partieService.getAll().subscribe(data => this.sessions =data);

  }
}

