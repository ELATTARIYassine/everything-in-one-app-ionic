import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  contact = {
    name     : "DISCORD",
    email    : "yassineattari64@gmail.com",
    tel      : "0766773216",
    logo     : "assets/images/logo.png",
    location : "assets/images/location.png"
  }

}
