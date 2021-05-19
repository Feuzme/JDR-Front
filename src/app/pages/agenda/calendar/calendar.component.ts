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
    initialView: 'dayGridWeek',
    allDaySlot:false,
    headerToolbar:{
      left:'prev,today,next',
      center:'title',
      right:'dayGridMonth,dayGridWeek,timeGridDay,listWeek'
    },
    selectable: true,
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
    allDayText:'Jour complet',
    listDaySideFormat:false,
    listDayFormat:{ // will produce something like "Tuesday, September 18, 2018"
      month: 'long',
      year: 'numeric',
      day: 'numeric',
      weekday: 'long'
    },
    nowIndicator: true,
    navLinks: true,
    select: function(info) {
        if(new Date(info.startStr).getTime() < Date.now()){
            // Previous Day. show message if you want otherwise do nothing.
            // So it will be unselectable
            alert('Date déjà passée');
        }
        else
        {
            // Its a right date
            // Do something
            alert('selected ' + info.startStr + ' to ' + info.endStr);
        } 
    },
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

}
