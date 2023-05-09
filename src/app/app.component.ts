import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICurrentWeather } from 'src/interfaces/ICurrentWeather';
import { IHourlyWeather } from 'src/interfaces/IHourlyWeather';
import { GetLocationService } from 'src/services/getLocation.service';
import { GetWeatherService } from 'src/services/getWeather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  currentWeather:ICurrentWeather = {}
  userCity: string
  hourlyWeather: IHourlyWeather = {}
  date: Date = new Date

  constructor(getLocation: GetLocationService, getWeather: GetWeatherService) {
    getLocation.getPosition().subscribe((res: any) => {
      this.userCity = res.city
      getWeather.getWeather(res.latitude ?? '', res.longitude ?? '')?.subscribe((res: any) => {
        this.currentWeather = {
          temperature: res.current_weather.temperature,
          windSpeed: res.current_weather.windspeed,
          windDirrection: res.current_weather.winddirection,
          weatherCode: res.current_weather.weathercode
        }
        console.log(this.currentWeather);
        this.hourlyWeather = res.hourly
        console.log(this.hourlyWeather);
        
      })
    })
    }
  ngOnInit(): void {
    setInterval(() => {
      this.date = new Date
    }, 1000)
  }
  ngOnDestroy(): void {
    
  }
}
