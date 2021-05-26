import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/account/login/login.component';
import { SignupComponent } from './pages/account/signup/signup.component';
import { UserProfileComponent } from './pages/account/user-profile/user-profile.component';
import { HomeComponent } from './pages/home/home.component';
import { RechercheComponent } from './pages/recherche/recherche.component';

const routes: Routes = [
  {path:"signup",component: SignupComponent},
  {path:"user", component: UserProfileComponent},
  {path:"login", component: LoginComponent},
  {path:"home", component: HomeComponent},
  {path:"recherche", component:RechercheComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
