import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router:Router, private authService:AuthenticationService) { }

  ngOnInit() {
  }
  public menus =
      [
        {title:"Home", url:"/menu/home", icon:"ios-home"},
        {title:"Meteo", url:"/menu/meteo", icon:"snow"},
        {title:"Gallery", url:"/menu/gallery", icon:"ios-images"},
        {title:"Locations", url:"/menu/locations", icon:"sync"},
        {title:"Logout", url:"logout", icon:"log-out"},
      ]

  onMenuItem(menu) {
    if(menu.url == "logout"){
      this.authService.logout();
      this.router.navigateByUrl("/login");
    }else
    this.router.navigateByUrl(menu.url);
  }
}
