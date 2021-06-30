import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {

 

  utilisateurId:string;
  user:User;
  constructor(private service: UserService) { }

  ngOnInit(): void {
    this.utilisateurId = localStorage.getItem("utilisateurId");
    this.service.findByIdDetail(this.utilisateurId).subscribe((user:User)=>{
      this.user = user;
    })
  }


}
