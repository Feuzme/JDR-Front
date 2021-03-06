import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  users: User[];
  
  constructor(
    private service: UserService,
    private router: Router

  ) { }

  ngOnInit(): void {
    this.service.getAll().subscribe((data:User[])=>this.users=data, console.error);
  }


  onSupress(user:User){
    this.service.deleteById(user.id).subscribe(()=>{
      this.users = this.users.filter(user=>user.id!==user.id);
    }) 
  }

  onDetail(user:User){
    this.router.navigate(["users/resume",user.id])
  }  

  /*
  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.users = data;
    })
  }


  afficheUser = (user: User) => {
    alert(user.nom);
  }

  supprimerUser = (user: User) => {
    this.service.delete(user).subscribe(user => {
      this.ngOnInit();
    }
    );

  }
   modifierUser = (id: String) => {
    this.router.navigate([`/update/${id}`]);
  }


  */




}


