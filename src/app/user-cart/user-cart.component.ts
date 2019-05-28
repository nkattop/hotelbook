import { Component, OnInit } from '@angular/core';
import { HOTELIST } from '../hotels/hotel-list';

@Component({
  selector: 'kt-user-cart',
  templateUrl: './user-cart.component.html',
  styleUrls: ['./user-cart.component.scss']
})
export class UserCartComponent implements OnInit {

  constructor() { }

  hotelList = [{
    "hotelImage": "../../../assets/images/download.jpg",
    "hotelName": "Orritel",
    "rating": 3,
    "address": "Pune, 14.8 km to City Centre",
    "discountValue": "-29%",
    "oldRate": "1,999",
    "newRate": "1,399",
  }];
  
  ngOnInit() {
    this.hotelList.map(hotel => {
      hotel['hotelFullName'] = hotel.hotelName;
      hotel.hotelName = hotel.hotelName.length > 25 ? hotel.hotelName.substr(0, 25) + '...' : hotel.hotelName;
    })
  }

}
