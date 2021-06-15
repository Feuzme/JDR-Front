import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './components/user/user/user.component';
import { LoginComponent } from './pages/account/login/login.component';
import { SignupComponent } from './pages/account/signup/signup.component';
import { UserProfileComponent } from './pages/account/user-profile/user-profile.component';
import { UsersComponent } from './pages/account/users/users.component';
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
  {path:"signup",component:SignupComponent},
  {path: "user", component: UserProfileComponent},
  {path:"login",component:LoginComponent},
  {path:"calendar",component:AgendaComponent},
  {path:"sheet-creation",component:SheetCreationComponent},
  {path:"plugin-creation", component:PluginCreationComponent},
  {path:"game",component:GameComponent},
  {path:"users",component:UserComponent},
  {path: "", redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
