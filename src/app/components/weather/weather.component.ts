import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  city: string = "";

  currentWeather: any;
  error: string = "";

  constructor(private weather: WeatherService) { }

  ngOnInit(): void {
  }

  search() {
    // I need to look up the weather!
  }

}
