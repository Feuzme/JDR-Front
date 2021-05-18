import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CardModule} from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav-bar/navbar/navbar.component';
import { LoginComponent } from './pages/account/login/login.component';
import { SignupComponent } from './pages/account/signup/signup.component';
import { UserComponent } from './pages/account/user/user.component';
import { UsersComponent } from './pages/account/users/users.component';

import { PasswordModule } from "primeng/password";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from "primeng/divider";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    UsersComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    PasswordModule,
    FormsModule,
    DividerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    DividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
