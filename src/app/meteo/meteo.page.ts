import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MeteoService} from '../services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {

  public city:string;
  public dataMeteo;

  constructor(private Mservice:MeteoService) { }

  ngOnInit() {
  }

    onLoadMeteo() {
      this.Mservice.getWeather(this.city)
          .subscribe(data=>{
              console.log(data);
              this.dataMeteo = data;
          },err=>{
              console.log(err);
          })
    }
}
