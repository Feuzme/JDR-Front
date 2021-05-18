import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user = {
    id: 1,
    pseudo: "Fyfe",
    profilePicUrl: "assets/images/profilePic.jpg",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis laboriosam quia doloremque aperiam. Mollitia maiores modi dolor reiciendis deleniti. Dolorem, vero obcaecati? At delectus fugiat consequuntur, ut quia nihil?",
    city: "Lille",
    mail: "smaug@lonelymountain.me"
  }

  friends = [
    {
      id: 1,
      pseudo: "Fyfe",
      profilePicUrl: "assets/images/profilePic.jpg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis laboriosam quia doloremque aperiam. Mollitia maiores modi dolor reiciendis deleniti. Dolorem, vero obcaecati? At delectus fugiat consequuntur, ut quia nihil?",
      city: "Lille",
      mail: "smaug@lonelymountain.me"
    },
    {
      id: 2,
      pseudo: "DarkSasuke",
      profilePicUrl: "assets/images/weeb.jpg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis laboriosam quia doloremque aperiam. Mollitia maiores modi dolor reiciendis deleniti. Dolorem, vero obcaecati? At delectus fugiat consequuntur, ut quia nihil?",
      city: "Lille",
      mail: "smaug@lonelymountain.me"
    },
    {
      id: 3,
      pseudo: "Jojo",
      profilePicUrl: "assets/images/unicorn.jpg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis laboriosam quia doloremque aperiam. Mollitia maiores modi dolor reiciendis deleniti. Dolorem, vero obcaecati? At delectus fugiat consequuntur, ut quia nihil?",
      city: "Lille",
      mail: "smaug@lonelymountain.me"
    },
    {
      id: 3,
      pseudo: "Smaug",
      profilePicUrl: "assets/images/dragon.jpg",
      bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt blanditiis laboriosam quia doloremque aperiam. Mollitia maiores modi dolor reiciendis deleniti. Dolorem, vero obcaecati? At delectus fugiat consequuntur, ut quia nihil?",
      city: "Lille",
      mail: "smaug@lonelymountain.me"
    }
  ]

  games = [
    {
      name: "Donjons & Dragons",
      logo: "assets/images/dragon.jpg",
      gm:"El megaBG 59"
    },
    {
      name: "Star Wars",
      logo: "assets/images/weeb.jpg",
      gm:"El megaBG 59"
    },
    {
      name: "Pokemon",
      logo: "assets/images/unicorn.jpg",
      gm:"El megaBG 59"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
