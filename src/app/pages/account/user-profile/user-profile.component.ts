import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
user = {
  id:1,
  pseudo:"pseudo",
  profilePicUrl:"../../../../assets/img/profilePic.jpg",
  bio:"I love RPG !",
  city:"lille",
  mail: "smaug@lonelymountain.me"
}
  constructor() { }

  ngOnInit(): void {
  }

}
