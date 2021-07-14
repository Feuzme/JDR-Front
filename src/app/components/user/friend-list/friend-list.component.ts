import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {UserService} from '../../../services/user.service';

@Component({
    selector: 'app-friend-list',
    templateUrl: './friend-list.component.html',
    styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

    friends: User[] = [];

    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.getFriends();
    }

    getFriends(): void {
        const l = localStorage.getItem('myFriends');
        if (l) {
            const ids = JSON.parse(localStorage.getItem('myFriends'));
            for (const id of ids) {
                this.userService.findByIdWithoutPassword(id).subscribe(user => {
                    console.log(user);
                    this.friends.push(user);
                });
            }
            console.log(this.friends);
        }
    }

    deleteFriend(user: User) {
        const my = localStorage.getItem('utilisateurId');
        if (my){
            this.userService.deleteFriend(my, user).subscribe(user => {
                console.log(user);
                localStorage.setItem('myFriends', JSON.stringify(user.ids));
                this.friends.forEach((friend, index) => {
                    let isExist = false;
                    for (const u of user.ids) {
                        if (u === friend.id){
                            isExist = true;
                            break;
                        }
                    }
                    if (!isExist){
                        this.friends.splice(index, 1);
                    }
                });
                console.log(this.friends);
            });
        }
    }
}
