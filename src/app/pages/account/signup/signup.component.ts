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

    avatarChecked = -1;
    avatarLink: string = this.getAvatarRandom();

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
            avatar: this.avatarLink,
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
            avatar: new FormControl(this.avatarLink, Validators.required),
            cutilisation: new FormControl(''),
        });
        this.isExist = false;
    }

    getAvatarRandom(): string {
        const num = this.getRandomInt(6);
        this.avatarChecked = num;
        return 'avatar-' + num + '.png';
    }

    getRandomInt(max): number {
        return Math.floor(Math.random() * max);
    }

    ajouter = () => {
        this.router.navigate(['/home']);
    }

    counter(i: number): any[] {
        return new Array(i);
    }

    onSubmit(): void {
        if (this.form.valid) {
            if (this.form.value.password === this.form.value.repassword) {
                this.service.create(this.form.value).subscribe(user => {
                    if (user != null) {
                        const dto = {
                            nameOrEmail: user.email,
                            password: user.password,
                        };
                        this.serviceC.connexion(dto).subscribe((user: User) => {
                            localStorage.setItem('utilisateurId', user.id);
                            localStorage.setItem('myFriends', JSON.stringify(user.ids));
                            window.location.href = 'users/resume';
                        });
                    } else {
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

    selectAvatar(link: string, index: number): void {
        console.log(link);
        this.avatarLink = link;
        this.avatarChecked = index;
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
