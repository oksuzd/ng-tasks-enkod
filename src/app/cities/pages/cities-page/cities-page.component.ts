import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, Subject, take, takeUntil, throwError } from "rxjs";
import { City } from "../../models/city.model";
import { CitiesDataService } from "../../services/cities-data.service";
import { CitiesStoreService } from "../../services/cities-store.service";

@Component({
  selector: 'app-cities-page',
  templateUrl: './cities-page.component.html',
  styleUrls: ['./cities-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CitiesPageComponent implements OnInit, OnDestroy {
  private notifier$: Subject<null> = new Subject();

  constructor(
    private dataService: CitiesDataService,
    private dataStore: CitiesStoreService,
  ) {}

  ngOnInit() {
    this.createSubscription();
  }

  ngOnDestroy() {
    this.notifier$.next(null);
    this.notifier$.complete();
  }

  onDataReceived(data: City) {
    this.createNewCity(data);
  }

  private createNewCity(city: City) {
    this.dataService.addCity(city)
      .pipe(
        take(1),
        takeUntil(this.notifier$),
        catchError((err) => throwError(() => err))
      )
      .subscribe((result: City) => this.dataStore.addCity(result));
  }

  private createSubscription() {
    this.dataService.getCities()
      .pipe(
        take(1),
        takeUntil(this.notifier$),
        catchError((err) => throwError(() => err))
      )
      .subscribe((data) => {
        this.dataStore.setCitiesToStore(data);
      });
  }
}
