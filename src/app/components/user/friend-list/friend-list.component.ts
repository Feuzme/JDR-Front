import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  @Input() friends;

  users: User[];
  user: User;
  
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(data => this.users = data);

  }

}
