import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/account/signup/signup.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent}
];
  {path: "user", component: UserProfileComponent}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
