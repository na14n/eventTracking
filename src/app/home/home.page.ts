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
    {
      eventName: 'Sambayanang Sanduguan 2022',
      eventDate: 'November 18, 2022',
      eventTime: '10:00 AM',
      eventHost: 'Dugo Inc.'
    },
  ]

  today : number = Date.now()

  constructor() {}

}
