import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Password } from 'primeng/password';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form:FormGroup;
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
    this.form = new FormGroup({
      nom: new FormControl("", Validators.required),
      email:new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      
    })
  }


  ajouter = () => {
    this.service.create(this.signupForm.value).subscribe(user => {
      this.router.navigate(["/home"]);
      console.log("lecture");
    });
  }


  onSubmit(){
    if(this.form.valid)
      this.service.save(this.form.value).subscribe(()=>{
        this.router.navigate(["users"])
      })
    else
      alert("Le formulaire n'est pas valide")
  }


}
