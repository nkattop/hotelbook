import { Component, OnInit } from '@angular/core';
import { HOTELIST } from '../hotel-list';

@Component({
  selector: 'kt-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  constructor() { }
  hotelList = HOTELIST;
  ngOnInit() {
    this.hotelList.map(hotel => {
      hotel['hotelFullName'] = hotel.hotelName;
      hotel.hotelName = hotel.hotelName.length > 25 ? hotel.hotelName.substr(0, 25) + '...' :  hotel.hotelName;
    })
  }

}
