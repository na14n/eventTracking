import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.page.html',
  styleUrls: ['./bookmark.page.scss'],
})
export class BookmarkPage implements OnInit {

  constructor() { }

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

  ngOnInit() {
  }

}
