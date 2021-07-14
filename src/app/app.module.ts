import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {FullCalendarModule} from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import timeGridPlugin from '@fullcalendar/timegrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import listPlugin from '@fullcalendar/list';
import {PasswordModule} from 'primeng/password';
import {DividerModule} from 'primeng/divider';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {MessageModule} from 'primeng/message';
import {HomeComponent} from './pages/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import {CarouselModule} from 'primeng/carousel';
import {TableModule} from 'primeng/table';
import {SelectButtonModule} from 'primeng/selectbutton';
import {TabViewModule} from 'primeng/tabview';
import {MultiSelectModule} from 'primeng/multiselect';
import {ColorPickerModule} from 'primeng/colorpicker';
import {SliderModule} from 'primeng/slider';
import {SheetListComponent} from './components/user/sheet-list/sheet-list.component';
import {SheetCardComponent} from './components/sheet/sheet-card/sheet-card.component';
import {GridsterModule} from 'angular-gridster2';
import {SheetCreationComponent} from './pages/sheet/sheet-creation/sheet-creation.component';
import {SheetPreviewComponent} from './components/sheet/sheet-preview/sheet-preview.component';
import {CreationMenuLeftComponent} from './components/sheet/creation-menu-left/creation-menu-left.component';
import {RechercheComponent} from './pages/recherche/recherche.component';

import {AvatarModule} from 'primeng/avatar';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {InputTextModule} from 'primeng/inputtext';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {DialogModule} from 'primeng/dialog';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';

import {InputNumberModule} from 'primeng/inputnumber';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import {NavbarComponent} from './nav-bar/navbar/navbar.component';
import {LoginComponent} from './pages/account/login/login.component';
import {SignupComponent} from './pages/account/signup/signup.component';
import {UsersComponent} from './pages/account/users/users.component';
import {UserProfileComponent} from './pages/account/user-profile/user-profile.component';
import {UserCardComponent} from './components/user/user-card/user-card.component';
import {GameCardComponent} from './components/game/game-card/game-card.component';
import {FriendListComponent} from './components/user/friend-list/friend-list.component';
import {CalendarComponent} from './pages/agenda/calendar/calendar.component';
import {AgendaComponent} from './pages/agenda/agenda/agenda.component';
import {ListPlayersComponent} from './pages/agenda/list-players/list-players.component';
import {ListPlayerComponent} from './pages/agenda/list-player/list-player.component';
import {GameListComponent} from './components/user/game-list/game-list.component';
import {NotificationsComponent} from './components/notifications/notifications/notifications.component';
import {PluginCreationComponent} from './pages/sheet/plugin-creation/plugin-creation.component';
import {PluginPreviewComponent} from './components/sheet/plugin-preview/plugin-preview.component';
import {ProgressBarModule} from 'primeng/progressbar';
import {PluginComponent} from './components/sheet/plugin-base/plugin.component';
import {NoSanitizePipe} from './util/nosanitizerpipe';
import {PluginCardComponent} from './components/plugin/plugin-card/plugin-card.component';
import {EditionMenuRightComponent} from './components/sheet/edition-menu-right/edition-menu-right.component';
import {GameInfoComponent} from './components/game/game-info/game-info.component';
import {ListSummaryComponent} from './components/game/list-summary/list-summary.component';
import {GameInfoBottomComponent} from './components/game/game-info-bottom/game-info-bottom.component';
import {GameComponent} from './pages/game/game/game.component';
import {UserComponent} from './components/user/user/user.component';
import {ProgressBarComponent} from './components/sheet/plugin-base/default-components/progress-bar/progress-bar.component';
import {EditBasePluginComponent} from './components/sheet/plugin-base/edit-base-plugin/edit-base-plugin.component';
import {UpdateComponent} from './components/user/update/update.component';
import {ResumePageComponent} from './pages/account/resume-page/resume-page.component';
import {UtilisateurProfileComponent} from './pages/account/utilisateur-profile/utilisateur-profile.component';
import {NouvelUtilisateurComponent} from './pages/account/nouvel-utilisateur/nouvel-utilisateur.component';
import {UtilisateurProfilePageComponent} from './pages/account/utilisateur-profile-page/utilisateur-profile-page.component';
import {RecherchePlayerComponent} from './pages/search/recherche-player/recherche-player.component';
import {DataTablesModule} from 'angular-datatables';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {UserService} from './services/user.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {RechercheFicheComponent} from './pages/search/recherche-fiche/recherche-fiche.component';
import {RecherchePartieComponent} from './pages/search/recherche-partie/recherche-partie.component';
import {MessagesModule} from "primeng/messages";
import { SearchSheetComponent } from './components/sheet/search-sheet/search-sheet.component';
import {ToolbarModule} from 'primeng/toolbar';
import {Toast, ToastModule} from 'primeng/toast';
import { CreationBasePluginComponent } from './components/sheet/plugin-base/creation-base-plugin/creation-base-plugin.component';
import { BasePluginCardComponent } from './components/sheet/plugin-base/base-plugin-card/base-plugin-card.component';
import { AvatarComponent } from './components/sheet/plugin-base/default-components/avatar/avatar.component';


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
    HomeComponent,
    RechercheComponent,
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
    PluginCreationComponent,
    PluginPreviewComponent,
    PluginComponent,
    NoSanitizePipe,
	  PluginCardComponent,
    EditionMenuRightComponent,
    GameInfoComponent,
    ListSummaryComponent,
    GameInfoBottomComponent,
    GameComponent,
    UserComponent,
    ProgressBarComponent,
    EditBasePluginComponent,
    UserComponent,
    UpdateComponent,
    ResumePageComponent,
    UtilisateurProfileComponent,
    NouvelUtilisateurComponent,
    UtilisateurProfilePageComponent,
    SearchSheetComponent,
    RechercheFicheComponent,
    RecherchePartieComponent,
    RecherchePlayerComponent,
    CreationBasePluginComponent,
    BasePluginCardComponent,
    AvatarComponent
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
    MenubarModule,
    FontAwesomeModule,
    OverlayPanelModule,
    CarouselModule,
    ToastModule,
    HttpClientModule,
    TableModule,
    SelectButtonModule,
    TabViewModule,
    DialogModule,
    MultiSelectModule,
    AvatarModule,
    AvatarGroupModule,
    ScrollPanelModule,
    FullCalendarModule, // register FullCalendar with you app
    CascadeSelectModule,
    GridsterModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
    InputSwitchModule,
    ProgressBarModule,
    ColorPickerModule,
    SliderModule,
    MessageModule,
    InputTextareaModule,
    DataTablesModule,
    ToolbarModule,
    ConfirmDialogModule,
    MessagesModule,
    ToolbarModule
  ],
    providers: [UserService, MessageService, ConfirmationService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
