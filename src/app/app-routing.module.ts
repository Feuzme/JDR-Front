import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponent } from './components/user/update/update.component';
import { UserComponent } from './components/user/user/user.component';
import { LoginComponent } from './pages/account/login/login.component';
import { NouvelUtilisateurComponent } from './pages/account/nouvel-utilisateur/nouvel-utilisateur.component';
import { ResumePageComponent } from './pages/account/resume-page/resume-page.component';
import { SignupComponent } from './pages/account/signup/signup.component';
import { UserProfileComponent } from './pages/account/user-profile/user-profile.component';
import { UsersComponent } from './pages/account/users/users.component';
import { UtilisateurProfilePageComponent } from './pages/account/utilisateur-profile-page/utilisateur-profile-page.component';
import { AgendaComponent } from './pages/agenda/agenda/agenda.component';
import { GameComponent } from './pages/game/game/game.component';
import { HomeComponent } from './pages/home/home.component';
import { RechercheComponent } from './pages/recherche/recherche.component';
import { PluginCreationComponent } from './pages/sheet/plugin-creation/plugin-creation.component';
import { SheetCreationComponent } from './pages/sheet/sheet-creation/sheet-creation.component';

const routes: Routes = [
  {path:"signup",component: SignupComponent},
  {path:"user", component: UserProfileComponent},
  {path:"login", component: LoginComponent},
  {path:"home", component: HomeComponent},
  {path:"recherche", component:RechercheComponent},
  {path:"users/signup",component:SignupComponent},
  {path: "user", component: UserProfileComponent},
  {path:"login",component:LoginComponent},
  {path:"calendar",component:AgendaComponent},
  {path:"sheet-creation",component:SheetCreationComponent},
  {path:"plugin-creation", component:PluginCreationComponent},
  {path:"game",component:GameComponent},
  {path:"users",component:UserComponent},
  {path:"update/:id", component : UpdateComponent},
  {path:"users/resume", component:ResumePageComponent},
  {path:"users/new", component:NouvelUtilisateurComponent},
  {path:"user/:id", component:UtilisateurProfilePageComponent},
  {path: "", redirectTo: 'home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
