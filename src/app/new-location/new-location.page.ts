import { Component, OnInit } from '@angular/core';
import {Place} from '../model/place';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {LocationsService} from '../services/locations.service';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.page.html',
  styleUrls: ['./new-location.page.scss'],
})
export class NewLocationPage implements OnInit {

  constructor(private geolocation: Geolocation, private locationService:LocationsService, private router:Router, private navCtrl:NavController) { }

  ngOnInit() {
  }

    onAddLocation(data:Place) {
        data.timestamp = new Date().getTime();
        data.photos = [];
        this.geolocation.getCurrentPosition().then((resp)=>{
            data.coordinates = {
                longitude:resp.coords.longitude,
                latitude:resp.coords.latitude
            }
            console.log(data.coordinates);
        });
        this.locationService.addLocation(data);
        this.navCtrl.back();
    }

    backToLocations() {
        this.router.navigateByUrl("/menu/locations");
    }
}
