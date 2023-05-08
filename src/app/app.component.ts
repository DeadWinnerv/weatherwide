import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { GetLocationService } from 'src/services/getLocation.service';
import { GetWeatherService } from 'src/services/getWeather.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  userPosition: any;
  userWeather: any

  constructor(getLocation: GetLocationService, getWeather: GetWeatherService) {
    getLocation.getPosition().subscribe((res: any) => {
      this.userPosition = res
      getWeather.getWeather(this.userPosition.latitude ?? '', this.userPosition.longitude ?? '')?.subscribe((res: any) => {
        this.userWeather = res
      })
    })
    }
  ngOnDestroy(): void {
    this.userPosition.unsubscribe()
  }
}
