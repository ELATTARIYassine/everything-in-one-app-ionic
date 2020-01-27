import { Component, OnInit } from '@angular/core';
import {LocationsService} from '../services/locations.service';
import {Place} from '../model/place';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

  public Locations:Array<Place>;

  constructor(private locationService:LocationsService, private router:Router, private alertCtrl:AlertController) { }

  ngOnInit() {

  }
  ionViewWillEnter(){
    this.onGetLocations();
  }

  onNewLocation() {
    this.router.navigateByUrl("/menu/new-location");
  }

    async onRemove(l: Place) {
      let alert = await this.alertCtrl.create({
       // title: 'Confirmation',
        message: 'Are u sure?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.removeLocation(l);
            }
          },
          {
            text: 'No',
            handler: () => {
            }
          }
        ]
      });
      await alert.present();
    }

  private onGetLocations() {
    this.locationService.getLocations().then(data=>{
      this.Locations = data;
    });
  }

  private removeLocation(l: Place) {
      let index = this.Locations.indexOf(l);
      this.Locations.splice(index,1);
      this.locationService.updateLocations(this.Locations);
  }

  onDetailLocation(l:Place) {
    this.locationService.currentLocation = l;
    this.router.navigateByUrl("/menu/location-details");
  }
}
