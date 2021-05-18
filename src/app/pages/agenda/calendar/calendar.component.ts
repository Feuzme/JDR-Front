import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  calendarOptions: CalendarOptions = {
    initialView: 'timeGridWeek',
    headerToolbar:{
      right:'prev,today,next,dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    selectable: true,
    locale: 'fr',
    firstDay: 1,
    buttonText :{
      today:'Aujourd\'hui',
      month:'Mois',
      day:'Jour',
      week:'Semaine',
      listWeek:'Liste des dispos'
    },
    allDayText:'Jour complet',
    nowIndicator: true,
    navLinks: true,
    select: function(info) {
      alert('selected ' + info.startStr + ' to ' + info.endStr);
    },
    events: [
      {
        title  : 'event1',
        start  : '2021-05-18',
        end    : '2021-05-18',
        color : 'blue'
      },
      {
        title  : 'event5',
        start  : '2021-05-18',
        end    : '2021-05-18',
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

}
