import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { ListAndTableComponent } from './list-and-table/list-and-table.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { PostTilesComponent } from './post-tiles/post-tiles.component';
import { WeatherForecastService } from './weather-forecast.service';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    ListAndTableComponent,
    HomeComponent,
    ImagesComponent,
    PostTilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [WeatherForecastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
