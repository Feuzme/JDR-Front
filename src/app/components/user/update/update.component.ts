import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {


    userForm : FormGroup = new FormGroup({

    nom : new FormControl(""),
    email : new FormControl(""),
    bio : new FormControl(""),
    ville : new FormControl(""),
    avatar: new FormControl(""),
    logging: new FormControl()

  });

  

  user : User = new User("","", "", "", "","","",true);

  

  constructor(

    private service : UserService,

    private fb : FormBuilder,

    private router : Router,

    private route : ActivatedRoute

  ) {

    let id : string ;

    this.route.paramMap.subscribe(params => {

       id = String (params.get("id"));

       this.service.getByid(id).subscribe(user => {

         this.user = user;
         this.userForm = this.fb.group({

          nom : this.user.nom,
          email : this.user.email,
          bio : this.user.bio,
          ville : this.user.ville,
          avatar : this.user.avatar,
          

        })

       })

    });

   }


  ngOnInit(): void {
  }

  modifier = () => {
    this.user.nom = this.userForm.value.nom;
    this.user.email = this.userForm.value.email;
    this.user.bio = this.userForm.value.bio;
    this.user.ville = this.userForm.value.ville;
    this.user.avatar = this.userForm.value.avatar;
    
    alert(" Test Redirection home")
    
    this.service.update(this.user).subscribe(user => {
      this.router.navigate([`/home`]);
      
    }
    );
  
  }

}


