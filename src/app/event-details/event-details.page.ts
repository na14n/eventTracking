import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {

  eventList = [
    {
      eventName: 'PLV Blood Drive 2022',
      eventDate: 'November 11, 2022',
      eventTime: '08:00 AM',
      eventHost: 'PLV Red Cross Youth'
    },
  ]

  today : number = Date.now()

  constructor() { }

  ngOnInit() {
  }

}
