import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, LazyLoadEvent, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Subject } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserFriends } from 'src/app/models/UserFriends';
import { UserFriendService } from 'src/app/services/search/user-friend.service';
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
  myFriends: string[];
  users: User[];
  totalRecords: number;
  //friends :UserFriends[];
  lesids :String[];

  user: User;
  //userFriend: UserFriends;

  selectedProducts: User[];
  submitted: boolean;
  statuses: any[];

  constructor( private userService: UserService, 
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private userFriendsService : UserFriendService
    ) { }

  ngOnInit() {
    this.userService.getAll().subscribe(data => this.users = data);

  }
  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for ( var i = 0; i < 5; i++ ) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}


addFriend = (user : User) => {
  //userFriend = new UserFriends();
  this.messageService.add({severity:'success', summary: 'Succès', detail: 'Ami ajouter en favoris', life: 1000});
  this.lesids.push(this.user.id); 
  this.userService.update(this.user); 
  
  
}
  saveProductFavoris() {
    this.submitted = true;
    this.messageService.add({severity:'success', summary: 'succès', detail: 'Ajouter aux favoris', life: 3000});
    this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});

}

  deleteProduct(product: User) {
      this.confirmationService.confirm({
          message: 'Enlever des favoris ' + product.nom + '?',
          header: 'Confirmer',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.users = this.users.filter(val => val.id !== product.id);
              this.user  = null;
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

      if (this.user.nom.trim()) {
          if (this.user.id) {
              this.users[this.findIndexById(this.user.id)] = this.user;                
              this.messageService.add({severity:'success', summary: 'succès', detail: 'Ajouter aux favoris', life: 3000});
          }
          else {
              this.user.id = this.createId();
              this.user.avatar = 'product-placeholder.svg';
              this.users.push(this.user);
              this.messageService.add({severity:'success', summary: 'Successful', detail: 'Product Created', life: 3000});
          }

          this.users = [...this.users];
          this.productDialog = false;
          this.user = null;
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

  isSame(product: any): boolean {
    let isfriend = false;
    if (this.myFriends){
        for (const friend of this.myFriends) {
            if (friend === product.id){
                isfriend = true;
                break;
            }
        }
    }
    console.log(isfriend);
    return product.id !== localStorage.getItem('utilisateurId')
        && !isfriend && localStorage.getItem('utilisateurId') != null;
}


}
