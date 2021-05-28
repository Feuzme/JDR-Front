import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {OverlayPanelModule} from 'primeng/overlaypanel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav-bar/navbar/navbar.component';
import { LoginComponent } from './pages/account/login/login.component';
import { SignupComponent } from './pages/account/signup/signup.component';
import { UsersComponent } from './pages/account/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UserProfileComponent } from './pages/account/user-profile/user-profile.component';
import { UserCardComponent } from './components/user/user-card/user-card.component';

import { PasswordModule } from "primeng/password";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from "primeng/divider";
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {CarouselModule} from 'primeng/carousel';
import {ToastModule} from 'primeng/toast';
import { RechercheComponent } from './pages/recherche/recherche.component';
import {TableModule} from 'primeng/table';
import {SelectButtonModule} from 'primeng/selectbutton';
import {TabViewModule} from 'primeng/tabview';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    UsersComponent,    
    UserProfileComponent,
    UserCardComponent,
    HomeComponent,
    RechercheComponent
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
    DividerModule,
    MenubarModule,
    FontAwesomeModule,
    OverlayPanelModule,
    CarouselModule,
    ToastModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    SelectButtonModule,
    TabViewModule,
    DialogModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
