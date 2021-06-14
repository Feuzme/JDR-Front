import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthHttpService } from 'src/app/services/auth-http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  form:FormGroup;
  
  constructor(private service:AuthHttpService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      usernameOrEmail: new FormControl(""),
      password: new FormControl("")
    })
  }




  onSubmit(){
    this.service.connexion(this.form.value).subscribe((utilisateurId:string)=>{
      localStorage.setItem("utilisateurId",utilisateurId);
      window.location.href ="utilisateur/resume";
      //this.router.navigate(["utilisateur/resume"]);
    }, (err)=>{});
        
    alert(JSON.stringify(this.form.value));
  }


  
  inscription() {
    this.router.navigate(['signup']);
  }
}




