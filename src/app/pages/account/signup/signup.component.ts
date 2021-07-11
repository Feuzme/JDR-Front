import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Password } from 'primeng/password';
import { AuthHttpService } from 'src/app/services/auth-http.service';
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

  constructor(
    private serviceC:AuthHttpService,
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
   
      this.router.navigate(["/home"]);
    
  }
  



  onSubmit(){
    if(this.form.valid)
      this.service.create(this.form.value).subscribe(user=>{
      this.serviceC.connexion(this.form.value).subscribe((utilisateurId:string)=>{
        localStorage.setItem("utilisateurId",utilisateurId);
        window.location.href ="users/resume";
      })  
      }, (err)=>{});



    
  }


/*
onSubmit(){
  if(this.form.valid)
      this.service.create(this.form.value).subscribe(user=>{
        this.router.navigate(["users/resume"])
      })
    else
      alert("Le formulaire n'est pas valide")
      }
*/

}
