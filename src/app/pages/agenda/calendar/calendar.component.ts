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
    initialView: 'dayGridMonth',
    headerToolbar:{
      right:'prev,today,next,dayGridMonth,dayGridWeek,dayGridDay'
    },
    locale: 'fr',
    firstDay: 1,
    buttonText :{
      today:'Aujourd\'hui'
    }
  };

}
