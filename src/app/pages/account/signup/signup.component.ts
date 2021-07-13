import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthHttpService} from 'src/app/services/auth-http.service';
import {UserService} from 'src/app/services/user.service';
import {Message} from 'primeng/api';
import {User} from "../../../models/User";


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    form: FormGroup;
    signupForm: FormGroup;
    cutilisation: any[] = [];
    msgs: Message[];
    isExist: boolean;

    constructor(
        private serviceC: AuthHttpService,
        private service: UserService,
        private fb: FormBuilder,
        private router: Router
    ) {
        this.signupForm = this.fb.group({
            nom: '',
            email: '',
            password: '',
            repassword: '',
            cutilisation: ''
        });
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            nom: new FormControl('', Validators.required),
            email: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required),
            repassword: new FormControl('', Validators.required),
            cutilisation: new FormControl(''),
        });
        this.isExist = false;
    }


    ajouter = () => {
        this.router.navigate(['/home']);
    }


    onSubmit(): void {
        if (this.form.valid) {
            if (this.form.value.password === this.form.value.repassword) {
                this.service.create(this.form.value).subscribe(user => {
                    if (user != null) {
                        const dto = {
                            email: user.email,
                            nom: user.nom,
                            password: user.password,
                        };
                        this.serviceC.connexion(dto).subscribe((user: User) => {
                            localStorage.setItem('utilisateurId', user.id);
                            localStorage.setItem('myFriends', JSON.stringify(user.ids));
                            window.location.href = 'users/resume';
                        });
                    }else{
                        this.msgs = [{
                            severity: 'error',
                            summary: 'Erreur',
                            detail: 'Utilisateur enregistré'
                        }];
                        this.isExist = true;
                    }
                }, (err) => {
                    this.msgs = [{
                        severity: 'error',
                        summary: 'Erreur',
                        detail: 'Une erreur est survenu lors de l\'enregistrement'
                    }];
                });
            } else {
                this.msgs = [{
                    severity: 'error',
                    summary: 'Erreur',
                    detail: 'Vos mots de passe ne sont pas identiques'
                }];
            }
        } else {
            this.msgs = [{
                severity: 'error',
                summary: 'Erreur',
                detail: 'Vérifiez vos champs'
            }];
        }


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
