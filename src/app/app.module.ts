import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CardModule} from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav-bar/navbar/navbar.component';
import { LoginComponent } from './pages/account/login/login.component';
import { SignupComponent } from './pages/account/signup/signup.component';
import { UsersComponent } from './pages/account/users/users.component';
import { UserProfileComponent } from './pages/account/user-profile/user-profile.component';
import { UserCardComponent } from './components/user/user-card/user-card.component';
import { GameCardComponent } from './components/game/game-card/game-card.component';
import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import { FriendListComponent } from './components/user/friend-list/friend-list.component';
import { GameListComponent } from './components/user/game-list/game-list.component';

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
    GameListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    AvatarModule,
    AvatarGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
