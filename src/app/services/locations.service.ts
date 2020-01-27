import { Injectable } from '@angular/core';
import {Place} from '../model/place';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  private Locations:Array<Place> = [];
  public currentLocation: Place;

  constructor(private storage:Storage) {
    this.Locations.push({title:"A"});
    this.Locations.push({title:"B"});
    this.Locations.push({title:"C"});
    this.Locations.push({title:"D"});
  }

  public getLocations(){
    return this.storage.get("locations").then(data=>{
      this.Locations = data!=null?data:[];
      return this.Locations.slice();
    })
  }
  public addLocation(place:Place){
    this.Locations.push(place);
    this.storage.set("locations",this.Locations);
  }
  public updateLocations(locations) {
    this.storage.set("locations",locations);
  }
}
