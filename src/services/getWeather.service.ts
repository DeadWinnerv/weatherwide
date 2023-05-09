import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetWeatherService {
  private url: string;

  constructor(private http: HttpClient) {
  }

  public getWeather(lat: string, long: string) {
    this.url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&windspeed_unit=ms&hourly=temperature_2m&hourly=weathercode`;
    return this.http.get(this.url).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
