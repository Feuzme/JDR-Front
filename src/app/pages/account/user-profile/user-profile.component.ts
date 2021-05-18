import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
user = {
  id:1,
  pseudo:"Fyfe",
  profilePicUrl:"../../../../assets/img/profilePic.jpg",
  bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis laboriosam quia doloremque aperiam. Mollitia maiores modi dolor reiciendis deleniti. Dolorem, vero obcaecati? At delectus fugiat consequuntur, ut quia nihil?",
  city:"Lille",
  mail: "smaug@lonelymountain.me"
}
  constructor() { }

  ngOnInit(): void {
  }

}
