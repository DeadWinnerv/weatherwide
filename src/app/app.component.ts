import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { subscriptionLogsToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { GetLocationService } from 'src/services/getLocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  userPosition: any;

  constructor(getLocation: GetLocationService) {
    getLocation.getPosition().subscribe((res: any) => {
      this.userPosition = res
    })
    }
  ngOnDestroy(): void {
    this.userPosition.unsubscribe()
  }
}
