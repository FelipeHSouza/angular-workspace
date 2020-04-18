import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiPrefix } from './core/interceptors/api-prefix.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { SiteRoutingModule } from './modules/site/site-routing.module';
import { MaterialAngularModule } from './modules/material-angular/material-angular.module';
import { CoreModule } from './core/core.module';
import { SiteModule } from './modules/site/site.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SiteRoutingModule,
    MaterialAngularModule,
    CoreModule,
    SiteModule
  ],
  exports: [
    MaterialAngularModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiPrefix,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
