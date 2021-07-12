import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { PrimeNGConfig } from 'primeng/api';
import { Creneau } from 'src/app/models/Creneau';
import { User } from 'src/app/models/user';
import { CreneauService } from 'src/app/services/agenda/creneau.service';
import { GameService } from 'src/app/services/game/game.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
declare var $: any;

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  isMj: boolean;
  dispoForm: FormGroup;
  displayModal: boolean;
  minDateValue: Date;
  frequences: any[];
  stateOptions: any[];
  heures: any[];
  tabDispo : any[] = [{}];
  couleurLegende : String = "";

  constructor(private primengConfig: PrimeNGConfig, private fb: FormBuilder,
    private gameService: GameService,
    private creneauService: CreneauService,
    private userService : UserService) {
    this.dispoForm = fb.group({
      dateDeb: [''],
      isJourComplet: [''],
      heureDeb: [''],
      heureFin: [''],
      freq: [''],
      isNextSession: ['']
    });
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.minDateValue = new Date();
    this.heures = [];

    this.frequences = [
      { name: 'Une seule fois', code: 'ONE' },
      { name: 'Tous les jours', code: 'WEEKLY' },
      { name: 'Toutes les semaines le même jour', code: 'WEEKLYONE' }
    ];
    
    for (let hours = 0; hours < 24; hours++) {
      for (let mins = 0; mins < 60; mins += 15) {
        this.heures.push({ heure: String(hours).padStart(2, '0') + ":" + String(mins).padStart(2, '0') });
      }
    }

    this.stateOptions = [
      { label: "Oui", value: "true" },
      { label: "Non", value: "false" }
    ];
  }
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridWeek',
    allDaySlot: false,
    headerToolbar: {
      left: 'prev,today,next',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,timeGridDay,listWeek'
    },
    locale: 'fr',
    firstDay: 1,
    displayEventEnd: true,
    buttonText: {
      today: 'Aujourd\'hui',
      month: 'Mois',
      day: 'Jour',
      week: 'Semaine',
      listWeek: 'Liste des dispos'
    },
    listDaySideFormat: false,
    listDayFormat: { // will produce something like "Tuesday, September 18, 2018"
      month: 'long',
      year: 'numeric',
      day: 'numeric',
      weekday: 'long'
    },
    nowIndicator: true,
    navLinks: true,
    events: this.tabDispo
  };

  showModalDialog = () => {
    this.displayModal = true;
  }

  addingDispo(): void {
    this.displayModal = false;
    this.userService.getByid(localStorage.getItem("utilisateurId")).subscribe(result => {
      let pseudoJ : String = result.nom;
    });
    console.log(this.dispoForm.value);
    if(this.dispoForm.value.heureDeb==""){
      this.dispoForm.value.heureDeb=="00:00:00";
    }
    if(this.dispoForm.value.heureFin==""){
      this.dispoForm.value.heureFin=="00:00:00";
    }
    let dDeb = new Date(Date.parse(this.dispoForm.value.dateDeb[0]));
    let dFin;
    let startDispo = dDeb.getFullYear()+"-"+dDeb.getMonth()+1+"-"+dDeb.getDate()+"T"+this.dispoForm.value.heureDeb;
    let endDispo = "";
    if(this.dispoForm.value.dateDeb[1] != undefined){
      dFin = new Date(Date.parse(this.dispoForm.value.dateDeb[1]));
      endDispo = dFin.getFullYear()+"-"+dFin.getMonth()+1+"-"+dFin.getDate()+"T"+this.dispoForm.value.heureFin;
    }else{
      endDispo = dDeb.getFullYear()+"-"+dDeb.getMonth()+1+"-"+dDeb.getDate()+"T"+this.dispoForm.value.heureFin;
    }
    //newCreneau = new Creneau();
    //this.creneauService.create();
    this.tabDispo.push({
      title: 'event1',
      start: '2021-07-14T00:00:00',
      end: '2021-07-14T23:59:00',
      color: 'rgb(80, 80, 202)'
    });
  }

  @Input() set initDialogDispo(idPartieChoisie: String) {
    if (idPartieChoisie != undefined) {
      this.gameService.getById(idPartieChoisie).subscribe(gameSelected => {
        if (gameSelected.mjUser.id == localStorage.getItem("utilisateurId")) {
          this.isMj = true;
        } else {
          this.isMj = false;
        }
      });
    }
  }

  @Input() set loadDispoCalendar(idPartieChoisie: String){
    this.creneauService.getAllDispoByGameId(idPartieChoisie).subscribe(result => {
      result.forEach(creneau =>{
        this.assignerCouleurLegende(creneau.game.listPlayers);
        this.tabDispo.push({
          title:creneau.user.nom,
          start:creneau.dateDeb,
          end:creneau.dateFin,
          color: this.couleurLegende
        });
      });
    });
  }

  assignerCouleurLegende(listeJoueurs : User[]):void{
    listeJoueurs.forEach((joueur,index) =>{
      if (joueur.id == localStorage.getItem("utilisateurId")) {
        this.couleurLegende = environment.colorLegend[index];
      }
    })
  }
}
