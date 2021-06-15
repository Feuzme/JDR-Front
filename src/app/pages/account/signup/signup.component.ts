import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Password } from 'primeng/password';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm : FormGroup ;
  
  
  cutilisation: any[] = [];
  //value1: string;


  constructor(
    private service : UserService,
    private fb : FormBuilder,
    private router : Router

  ) { 

    this.signupForm = this.fb.group({
      nom : "",
      password : ""
     
    })

  }

  ngOnInit(): void {
  }


  ajouter = () => {
    this.service.create(this.signupForm.value).subscribe(user => {
      this.router.navigate(["/home"]);
      console.log("lecture");
    });
  }



}
