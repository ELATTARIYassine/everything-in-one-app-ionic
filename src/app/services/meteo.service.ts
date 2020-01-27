import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  constructor(private _http:HttpClient) { }
  getWeather(city){
   return  this._http.get("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&&APPID=b3fa6d2303d0eb6b1a20dd3626a5177b");
  }
}
