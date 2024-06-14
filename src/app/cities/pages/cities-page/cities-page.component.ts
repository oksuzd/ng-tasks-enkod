import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, Subject, take, takeUntil, throwError } from "rxjs";
import { City } from "../../models/city.model";
import { CitiesService } from "../../state/cities.service";

@Component({
  selector: 'app-cities-page',
  templateUrl: './cities-page.component.html',
  styleUrls: ['./cities-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class CitiesPageComponent implements OnInit, OnDestroy {
  private notifier$ = new Subject<void>();

  constructor(
    private citiesService: CitiesService,
  ) {}

  ngOnInit() {
    this.loadCities();
  }

  ngOnDestroy() {
    this.notifier$.next();
    this.notifier$.complete();
  }

  onDataReceived(data: City) {
    this.createNewCity(data);
  }

  private createNewCity(city: City) {
    this.citiesService.addCity(city)
      .pipe(
        takeUntil(this.notifier$),
        catchError((err) => throwError(() => err))
      )
      .subscribe();
  }

  private loadCities() {
    this.citiesService.getCities()
      .pipe(
        take(1),
        takeUntil(this.notifier$),
        catchError((err) => throwError(() => err))
      )
      .subscribe();
  }
}
