import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  baseURL: string = `https://api.openweathermap.org/data/2.5/`;
  currentWeatherURL: string = `weather`;

  constructor(private http: HttpClient) { }

  getCurrentWeather(city: string) {
    const params = new HttpParams({
      fromObject: {
        q: city,
        units: 'metric',
        appid: environment.openWeatherAPIKey
      }
    });
    return this.http.get(`${this.baseURL}${this.currentWeatherURL}`, { params: params });
  }

}
