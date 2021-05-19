import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSpanTransform } from '@fullcalendar/angular'; // useful for typechecking
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  displayModal: boolean;
  minDateValue : Date;
  frequences: any[];
  stateOptions: any[];

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.minDateValue = new Date();

    this.frequences = [
      {name: 'Une seule fois', code: 'ONE'},
      {name: 'Tous les jours', code: 'WEEKLY'},
      {name: 'Toutes les semaines le même jour', code: 'WEEKLYONE'}
    ];

    this.stateOptions = [
      { label: "Oui", value: "1" },
      { label: "Non", value: "0" }
    ];
  }

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridWeek',
    allDaySlot:false,
    headerToolbar:{
      left:'prev,today,next',
      center:'title',
      right:'dayGridMonth,dayGridWeek,timeGridDay,listWeek'
    },
    locale: 'fr',
    firstDay: 1,
    displayEventEnd:true,
    buttonText :{
      today:'Aujourd\'hui',
      month:'Mois',
      day:'Jour',
      week:'Semaine',
      listWeek:'Liste des dispos'
    },
    listDaySideFormat:false,
    listDayFormat:{ // will produce something like "Tuesday, September 18, 2018"
      month: 'long',
      year: 'numeric',
      day: 'numeric',
      weekday: 'long'
    },
    nowIndicator: true,
    navLinks: true,
    events: [
      {
        title  : 'event1',
        start  : '2021-05-18T00:00:00',
        end  : '2021-05-18T23:59:00',
        color : 'blue'
      },
      {
        title  : 'event5',
        start  : '2021-05-18T00:00:00',
        end  : '2021-05-18T23:59:00',
        color : 'white',
        textColor: 'black'
      },
      {
        title  : 'event2',
        start  : '2010-01-05',
        end    : '2010-01-07'
      },
      {
        title  : 'event3',
        start  : '2021-05-19T12:30:00',
        end  : '2021-05-19T14:30:00',
        color : 'blue',
        allDay : false // will make the time show
      },
      {
        title  : 'event6',
        start  : '2021-05-19T12:30:00',
        end  : '2021-05-19T14:30:00',
        allDay : false, // will make the time show
        color : 'white',
        textColor: 'black'
      },
      {
        title  : 'event7',
        start  : '2021-05-19T12:30:00',
        end  : '2021-05-19T14:30:00',
        allDay : false, // will make the time show
        color : 'red',
        textColor: 'black'
      }
    ]
  };
  
  showModalDialog=()=>{
    this.displayModal = true;
  }
}
