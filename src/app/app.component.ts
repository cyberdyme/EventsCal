import { Component } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  view = 'week';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    { start: new Date(),
      end: new Date(),
      title: 'TESTING NUNIT version 1 something else',
      allDay: true
    },
    { start: new Date('2019-01-12 04:30:00'),
      end: new Date('2019-01-12 16:45:00'),
      title: 'Liverpool fc',
      allDay: false
    },
    { start: new Date('2019-01-12 13:30:00'),
      end: new Date('2019-01-12 15:45:00'),
      title: 'Man Utd',
      allDay: false
    },
    { start: moment().add(7, 'days').toDate(),
      end: moment().add(8, 'days').toDate(),
      title: 'girish thanki',
      allDay: true
    },
    {
      start: moment().add(2, 'days').toDate(),
      end: moment().add(2, 'days').toDate(),
      title: 'C# Programming Language'
    },
    {
      start: moment().add(2, 'days').toDate(),
      end: moment().add(2, 'days').toDate(),
      title: 'Dot Net Core 2.0',
      allDay: true
    },
    {
      start: moment().add(2, 'days').toDate(),
      end: moment().add(2, 'days').toDate(),
      title: 'Javascript Version 6',
      allDay: true
    },
  ];

  oneventClicked(arg: any) {
    console.log(JSON.stringify(arg));
  }
}

// moment().add(7, 'days');
