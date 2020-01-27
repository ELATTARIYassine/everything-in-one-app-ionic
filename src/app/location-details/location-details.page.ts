import { Component, OnInit } from '@angular/core';
import {LocationsService} from '../services/locations.service';
import {Place} from '../model/place';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.page.html',
  styleUrls: ['./location-details.page.scss'],
})
export class LocationDetailsPage implements OnInit {
  private currentPlace: Place;

  constructor(private locationService:LocationsService) { }

  ngOnInit() {
    this.currentPlace = this.locationService.currentLocation;
    console.log(this.currentPlace);
  }

}
