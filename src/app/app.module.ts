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
import { GameCardComponent } from './components/game/game-card/game-card.component';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { FriendListComponent } from './components/user/friend-list/friend-list.component';
import { GameListComponent } from './components/user/game-list/game-list.component';

import { PasswordModule } from "primeng/password";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DividerModule } from "primeng/divider";
import {InputTextModule} from 'primeng/inputtext';
import { ButtonModule } from "primeng/button";
import { CheckboxModule } from "primeng/checkbox";
import { SheetListComponent } from './components/user/sheet-list/sheet-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    UsersComponent,    
    UserProfileComponent,
    UserCardComponent,
    GameCardComponent,
    FriendListComponent,
    GameListComponent,
    SheetListComponent
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
    AvatarModule,
    AvatarGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
