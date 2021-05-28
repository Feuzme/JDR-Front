import {​ NgModule }​ from '@angular/core';
import {​ BrowserModule }​ from '@angular/platform-browser';
import {​ BrowserAnimationsModule }​ from '@angular/platform-browser/animations';
import {​ AppRoutingModule }​ from './app-routing.module';
import {​ AppComponent }​ from './app.component';
import {​ FormsModule, ReactiveFormsModule }​ from '@angular/forms';

import {​CardModule}​ from 'primeng/card';
import {​MenubarModule}​ from 'primeng/menubar';
import {​ FontAwesomeModule }​ from '@fortawesome/angular-fontawesome';
import {​OverlayPanelModule}​ from 'primeng/overlaypanel';
import {​CascadeSelectModule}​ from 'primeng/cascadeselect';
import {​ FullCalendarModule }​ from '@fullcalendar/angular'; // the main connector. must go first

import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import listPlugin from '@fullcalendar/list';

import { SheetListComponent } from './components/user/sheet-list/sheet-list.component';
import { SheetCardComponent } from './components/sheet/sheet-card/sheet-card.component';
import { GridsterModule } from 'angular-gridster2';
import { SheetCreationComponent } from './pages/sheet/sheet-creation/sheet-creation.component';
import { SheetPreviewComponent } from './components/sheet/sheet-preview/sheet-preview.component';
import { CreationMenuLeftComponent } from './components/sheet/creation-menu-left/creation-menu-left.component';
import { RechercheComponent } from './pages/recherche/recherche.component';

import {​AvatarModule}​ from 'primeng/avatar';
import {​AvatarGroupModule}​ from 'primeng/avatargroup';
import {​ PasswordModule }​ from "primeng/password";
import {​ DividerModule }​ from "primeng/divider";
import {​InputTextModule}​ from 'primeng/inputtext';
import {​ ButtonModule }​ from "primeng/button";
import {​ CheckboxModule }​ from "primeng/checkbox";
import {​ScrollPanelModule}​ from 'primeng/scrollpanel';
import {DialogModule} from 'primeng/dialog';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {SelectButtonModule} from 'primeng/selectbutton';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputSwitchModule} from 'primeng/inputswitch';

import {​ NavbarComponent }​ from './nav-bar/navbar/navbar.component';
import {​ LoginComponent }​ from './pages/account/login/login.component';
import {​ SignupComponent }​ from './pages/account/signup/signup.component';
import {​ UsersComponent }​ from './pages/account/users/users.component';
import {​ UserProfileComponent }​ from './pages/account/user-profile/user-profile.component';
import {​ UserCardComponent }​ from './components/user/user-card/user-card.component';
import {​ GameCardComponent }​ from './components/game/game-card/game-card.component';
import {​ FriendListComponent }​ from './components/user/friend-list/friend-list.component';
import {​ CalendarComponent }​ from './pages/agenda/calendar/calendar.component';
import {​ AgendaComponent }​ from './pages/agenda/agenda/agenda.component';
import {​ ListPlayersComponent }​ from './pages/agenda/list-players/list-players.component';
import {​ ListPlayerComponent }​ from './pages/agenda/list-player/list-player.component';
import {​ GameListComponent }​ from './components/user/game-list/game-list.component';
import { NotificationsComponent } from './components/notifications/notifications/notifications.component';


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
  listPlugin
]);

@NgModule({​
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
    CalendarComponent,
    AgendaComponent,
    ListPlayersComponent,
    ListPlayerComponent,
    NotificationsComponent,
    SheetListComponent,
    SheetCardComponent,
    SheetCreationComponent,
    SheetPreviewComponent,
    CreationMenuLeftComponent,
    RechercheComponent,
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
    AvatarGroupModule,
    ScrollPanelModule,
    FullCalendarModule, // register FullCalendar with you app
    CascadeSelectModule,
    GridsterModule,
    DialogModule,
    CalendarModule,
    DropdownModule,
    SelectButtonModule,
    InputNumberModule,
    InputSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }