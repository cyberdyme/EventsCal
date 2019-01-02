import { Component } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  view: string = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    { start: new Date(),
      end: new Date(),
      title: "TESTING NUNIT version 1 something else"
    },
    { start: new Date(),
      end: new Date(),
      title: "Liverpool fc"
    },
    { start: moment().add(7, 'days').toDate(),
      end: moment().add(8, 'days').toDate(),
      title: "girish thanki"
    },
    { 
      start: moment().add(2, 'days').toDate(),
      end: moment().add(2, 'days').toDate(),
      title: "C# Programming Language"
    },
    { 
      start: moment().add(2, 'days').toDate(),
      end: moment().add(2, 'days').toDate(),
      title: "Dot Net Core 2.0"
    },
    { 
      start: moment().add(2, 'days').toDate(),
      end: moment().add(2, 'days').toDate(),
      title: "Javascript Version 6"
    },
  ];
}

//moment().add(7, 'days');