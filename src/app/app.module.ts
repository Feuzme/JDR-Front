import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CardModule} from 'primeng/card';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import listPlugin from '@fullcalendar/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './nav-bar/navbar/navbar.component';
import { LoginComponent } from './pages/account/login/login.component';
import { SignupComponent } from './pages/account/signup/signup.component';
import { UserComponent } from './pages/account/user/user.component';
import { UsersComponent } from './pages/account/users/users.component';
import { CalendarComponent } from './pages/agenda/calendar/calendar.component';
import { AgendaComponent } from './pages/agenda/agenda/agenda.component';
import { ListPlayersComponent } from './pages/agenda/list-players/list-players.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin,
  listPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    UserComponent,
    UsersComponent,
    CalendarComponent,
    AgendaComponent,
    ListPlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CardModule,
    FormsModule,
    FullCalendarModule, // register FullCalendar with you app
    CascadeSelectModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
