import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LocationDetailsPage } from './location-details.page';
import {AgmCoreModule} from '@agm/core';

const routes: Routes = [
  {
    path: '',
    component: LocationDetailsPage
  }
];

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCIc8ZhxLQ3aMw3iWn8OBzRxYaAyeyCBtw'
    }),
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LocationDetailsPage]
})
export class LocationDetailsPageModule {}
