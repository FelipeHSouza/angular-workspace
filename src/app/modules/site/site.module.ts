import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { RouterModule } from '@angular/router';
import { MaterialAngularModule } from '../material-angular/material-angular.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SiteRoutingModule,
    MaterialAngularModule
  ]
})
export class SiteModule { }
