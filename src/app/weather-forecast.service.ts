import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(private _http: HttpClient) { }

  dailyForecast () {
    return this._http.get('api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=xml&units=metric&cnt=7')
    .map(result => result);
  }
}
