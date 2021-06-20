import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-utilisateur-profile-page',
  templateUrl: './utilisateur-profile-page.component.html',
  styleUrls: ['./utilisateur-profile-page.component.css']
})
export class UtilisateurProfilePageComponent implements OnInit {

  user:User;

  constructor(private route: ActivatedRoute, private service:UserService) {
    this.route.params.subscribe(params=>
      this.service.findByIdDetail(params.id).subscribe((user:any)=>
        this.user=user))
   }

  ngOnInit(): void {
  }

}
