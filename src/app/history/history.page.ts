import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  historyList = [
    {
      eventName: 'PLV Blood Drive 2021',
      eventDate: 'November 11, 2021',
      eventTime: '09:00 AM',
      eventHost: 'PLV Red Cross Youth'
    },
    {
      eventName: 'Sambayanang Sanduguan Summer 2022',
      eventDate: 'August 8, 2022',
      eventTime: '11:00 AM',
      eventHost: 'Dugo Inc.'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
