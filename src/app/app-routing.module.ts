import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/account/login/login.component';
import { SignupComponent } from './pages/account/signup/signup.component';
import { UserProfileComponent } from './pages/account/user-profile/user-profile.component';
import { AgendaComponent } from './pages/agenda/agenda/agenda.component';
import { SheetCreationComponent } from './pages/sheet/sheet-creation/sheet-creation.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path: "user", component: UserProfileComponent},
  {path:"login",component:LoginComponent},
  {path:"calendar",component:AgendaComponent},
  {path:"sheet-creation",component:SheetCreationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
