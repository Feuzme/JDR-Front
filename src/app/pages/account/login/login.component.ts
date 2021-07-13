import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthHttpService} from 'src/app/services/auth-http.service';
import {Message, MessageService} from 'primeng/api';
import {User} from '../../../models/User';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    form: FormGroup;
    msgs: Message[];

    constructor(private service: AuthHttpService, private router: Router) {
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            nameOrEmail: new FormControl(''),
            password: new FormControl('')
        });
    }


    onSubmit(): void {

        this.service.connexion(this.form.value).subscribe((user: User) => {
            localStorage.setItem('utilisateurId', user.id);
            localStorage.setItem('myFriends', JSON.stringify(user.ids));
            window.location.href = 'users/resume';
            //this.router.navigate(["utilisateur/resume"]);
        }, (err) => {
            this.msgs = [{
                severity: 'error',
                summary: 'Erreur',
                detail: 'Pseudo / Email ou mot de passe incorrect'
            }];
        });

        //alert(JSON.stringify(this.form.value));
    }


    onPass(): void {
        this.router.navigate(['reinitialisation']);
    }

}




