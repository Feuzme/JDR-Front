import { Component, OnInit } from '@angular/core';
import { MessageService,ConfirmationService } from 'primeng/api';
import { ModelSheet } from 'src/app/models/ModelSheet';
import { FicheService } from 'src/app/services/search/fiche.service';

@Component({
  selector: 'app-recherche-fiche',
  templateUrl: './recherche-fiche.component.html',
  styleUrls: ['./recherche-fiche.component.css'],
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

  users: ModelSheet[];

  product: ModelSheet;

  selectedProducts: ModelSheet[];

  submitted: boolean;

  statuses: any[];

  constructor( private ficheService: FicheService, 
    private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.ficheService.getAll().subscribe(data => this.users = data);

  }


  


}
