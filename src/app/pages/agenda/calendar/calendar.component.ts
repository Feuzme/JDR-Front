import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { PrimeNGConfig } from 'primeng/api';
import { CreneauDto } from 'src/app/models/dto/CreneauDto';
import { GameIdDto } from 'src/app/models/dto/GameIdDto';
import { UserIdDto } from 'src/app/models/dto/UserIdDto';
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
  minutes: any[];
  tabDispo: any[] = [];
  couleurLegende: string = "";
  idPartie: string = "";

  constructor(private primengConfig: PrimeNGConfig, private fb: FormBuilder,
    private gameService: GameService,
    private creneauService: CreneauService,
    private userService: UserService) {
    this.dispoForm = fb.group({
      dateDeb: [''],
      isJourComplet: [''],
      heureDeb: [''],
      minuteDeb: [''],
      heureFin: [''],
      minuteFin: [''],
      freq: [''],
      isNextSession: ['']
    });
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.minDateValue = new Date();
    this.heures = [];
    this.minutes = [];

    this.frequences = [
      { name: 'Une seule fois', code: 'ONE' },
      { name: 'Tous les jours', code: 'WEEKLY' },
      { name: 'Toutes les semaines le même jour', code: 'WEEKLYONE' }
    ];

    for (let hours = 0; hours < 24; hours++) {
      this.heures.push({ heures: String(hours).padStart(2, '0') });
    }

    for (let mins = 0; mins < 60; mins += 15) {
      this.minutes.push({ minutes: String(mins).padStart(2, '0') });
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

  /**
   * Fonction appelée lorsqu'on ajoute une disponibilité dans la fenêtre modale
   */
  addingDispo(): void {
    let pseudoJ: String;
    this.displayModal = false;
    this.userService.getByid(localStorage.getItem("utilisateurId")).subscribe(result => {
      pseudoJ = result.nom;
      if (this.dispoForm.value.heureDeb == "") {
        this.dispoForm.value.heureDeb = "00";
      }
      if (this.dispoForm.value.heureFin == "") {
        this.dispoForm.value.heureFin = "00";
      }
      if (this.dispoForm.value.minuteDeb == "") {
        this.dispoForm.value.minuteDeb = "00";
      }
      if (this.dispoForm.value.minuteFin == "") {
        this.dispoForm.value.minuteFin = "00";
      }
      let dDeb = new Date(Date.parse(this.dispoForm.value.dateDeb[0]));
      let dFin;
      let moisDebu = dDeb.getMonth() + 1;
      let startDispo: string = dDeb.getFullYear() + "-" + moisDebu.toString().padStart(2, '0') + "-" + dDeb.getDate() + "T" + this.dispoForm.value.heureDeb + ":" + this.dispoForm.value.minuteDeb + ":00";
      let endDispo: string = "";
      let newUserDTO: UserIdDto = new UserIdDto(localStorage.getItem("utilisateurId"));
      let newGameDto: GameIdDto = new GameIdDto(this.idPartie);
      let newCreneau: CreneauDto;
      if (this.dispoForm.value.dateDeb[1] != undefined) {
        dFin = new Date(Date.parse(this.dispoForm.value.dateDeb[1]));
        let moisFin = dFin.getMonth() + 1
        endDispo = dFin.getFullYear() + "-" + moisFin.toString().padStart(2, '0') + "-" + dFin.getDate() + "T" + this.dispoForm.value.heureFin + ":" + this.dispoForm.value.minuteFin + ":00";
        newCreneau = new CreneauDto(startDispo, endDispo, false, newUserDTO, newGameDto);
      } else {
        endDispo = dDeb.getFullYear() + "-" + moisDebu.toString().padStart(2, '0') + "-" + dDeb.getDate() + "T" + this.dispoForm.value.heureFin + ":" + this.dispoForm.value.minuteFin + ":00";
        newCreneau = new CreneauDto(startDispo.toString(), endDispo.toString(), false, newUserDTO, newGameDto);
      }
      this.creneauService.create(newCreneau).subscribe(creneau => {
        console.log("Creation de nouveau creneau OK");
      });
      this.tabDispo.push({
        title:pseudoJ,
        start:startDispo.toString(),
        end:endDispo.toString(),
        color:this.couleurLegende
      });
    });
  }

  /**
   * Fonction permettant d'afficher ou non la possibilité de définir la prochaine session de la partie
   * Elle vérifie si le joueur connecté est le MJ de la partie
   */
  @Input() set initDialogDispo(idPartieChoisie: string) {
    this.idPartie = idPartieChoisie;
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

  /**
   * Fonction permettant d'afficher les créneaux déjà présents en BDD
   * Et d'assigner la couleur des événements sur l'agenda en fonction de la légende présente dans la liste des joueurs
   */
  @Input() set loadDispoCalendar(idPartieChoisie: string) {
    this.idPartie = idPartieChoisie;
    this.reloadDispoAgenda(idPartieChoisie);
    if (this.couleurLegende == "") {
      this.assignerCouleurLegende(null, null);
    }
  }

  /**
   * Fonction permettant de recharger les créneaux présents en BDD
   * @param idPartie : id de la partie choisie
   */
  async reloadDispoAgenda(idPartie: string) {
    this.creneauService.getAllDispoByGameId(idPartie).subscribe(result => {
      result.forEach(creneau => {
        this.tabDispo.push({
          title: creneau.user.nom,
          start: creneau.dateDeb,
          end: creneau.dateFin,
          color: environment.colorLegend[this.assignerCouleurLegende(creneau.game.listPlayers, creneau.user)]
        });
      });
    });
  }

  assignerCouleurLegende(listeJoueurs: User[], joueurCouleurAffichage: User): number {
    let result = 0;
    if (listeJoueurs != null) {
      listeJoueurs.forEach((joueur, index) => {
        if (joueur.id == localStorage.getItem("utilisateurId")) {
          this.couleurLegende = environment.colorLegend[index];
        }
        if (joueur.id == joueurCouleurAffichage.id) {
          result = index;
        }
      });
    }
    // Cas où il n'y a pas encore de créneaux sur la partie
    if (result == 0) {
      this.gameService.getById(this.idPartie).subscribe(partie => {
        partie.listPlayers.forEach((joueur, index) => {
          if (joueur.id == localStorage.getItem("utilisateurId")) {
            this.couleurLegende = environment.colorLegend[index];
          }
        });
      });
    }
    return result;
  }
}
