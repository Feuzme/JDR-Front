import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Subject } from 'rxjs';
import { Representative, User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-recherche-player',
  templateUrl: './recherche-player.component.html',
  styleUrls: ['./recherche-player.component.css'],
  styles: [`
        :host ::ng-deep .p-dialog .product-image {
            width: 150px;
            margin: 0 auto 2rem auto;
            display: block;
        }
    `],
    providers: [MessageService,ConfirmationService]
})
export class RecherchePlayerComponent implements OnInit {
  productDialog: boolean;

  users: User[];

  product: User;

  selectedProducts: User[];

  submitted: boolean;

  statuses: any[];

  constructor( private userService: UserService, 
    private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(data => this.users = data);

  }

/*
  openNew() {
      this.product = null;
      this.submitted = false;
      this.productDialog = true;
  

  deleteSelectedProducts() {
      this.confirmationService.confirm({
          message: 'Vous voulez enlever cet utilisateur de votre liste d amis ?',
          header: 'Confirm',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.users = this.users.filter(val => !this.selectedProducts.includes(val));
              this.selectedProducts = null;
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Products Deleted', life: 3000});
          }
      });
  }
*/
  editProduct(product: User) {
      this.product = {...product};
      this.productDialog = true;
  }

  deleteProduct(product: User) {
      this.confirmationService.confirm({
          message: 'Enlever des favoris ' + product.nom + '?',
          header: 'Confirmer',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.users = this.users.filter(val => val.id !== product.id);
              this.product  = null;
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

      if (this.product.nom.trim()) {
          if (this.product.id) {
              this.users[this.findIndexById(this.product.id)] = this.product;                
              this.messageService.add({severity:'success', summary: 'succès', detail: 'Ajouter aux favoris', life: 3000});
          }
          else {
              this.product.id = this.createId();
              this.product.avatar = 'product-placeholder.svg';
              this.users.push(this.product);
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
          }

          this.users = [...this.users];
          this.productDialog = false;
          this.product = null;
      }
  }

  findIndexById(id: string): number {
      let index = -1;
      for (let i = 0; i < this.users.length; i++) {
          if (this.users[i].id === id) {
              index = i;
              break;
          }
      }

      return index;
  }

  createId(): string {
      let id = '';
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      for ( var i = 0; i < 5; i++ ) {
          id += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      return id;
  }

}
