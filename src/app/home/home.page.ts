import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  eventList = [
    {
      eventName: 'PLV Blood Drive 2022',
      eventDate: 'November 11, 2022',
      eventTime: '08:00 AM',
      eventHost: 'PLV Red Cross Youth'
    },
  ]

  today : number = Date.now()

  constructor() {}

}
