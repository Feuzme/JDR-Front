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

  @Input() user:User;

  constructor(private service:UserService, private router: Router) { }
  users:User[];

  ngOnInit(): void {
  }



  onSupress(user:User){
    this.service.delete(user).subscribe(()=>{
      this.users = this.users.filter(user=>user.id!==user.id);
    }) 
  }

  onDetail(user:User){
    this.router.navigate(["user",user.id])
  }  

}
