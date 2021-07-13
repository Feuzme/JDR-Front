import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {User} from 'src/app/models/user';
import {UserService} from 'src/app/services/user.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    /*Amir voir pour la deconnexion au clic sur l'icone */
    authLabel = 'Loggin';
    @Input() user: User;
    // lien:string = "ng-reflect-ng-class" ;
    users: User[];

    constructor(private service: UserService, private router: Router) {
    }

    ngOnInit(): void {
        this.service.getAll().subscribe((data: User[]) => this.users = data, console.error);
        this.setAuthLabel();
    }

    onConnect(user: User) {
        const id: string = localStorage.getItem('utilisateurId');
        if (id) {
            console.log(id);
            alert('avec local storage');
            this.router.navigate([`update/${id}`]);
        } else {
            alert('sans localstrorag');
            // this.router.navigate(["update",user.id])
            // console.log(user.id)
            // alert(user.id)
        }


        // this.router.navigate([""]);
    }


    private setAuthLabel() {
        if (localStorage.getItem('utilisateurId')) {
            this.authLabel = 'd';
        } else {
            this.authLabel = 'c';
        }
    }

    onDeConnect() {
        if (localStorage.getItem('utilisateurId')) {
            localStorage.removeItem('utilisateurId');
            // this.authLabel = "c";
        }
        this.router.navigate(['login']);
    }

    onModification(user: User) {
        const lien = localStorage.getItem('utilisateurId');
        this.router.navigate(['update/{{lien}}']);
    }

}


