import { ChangeDetectionStrategy, Component, Input, OnDestroy } from '@angular/core';
import { City } from "../../models/city.model";
import { catchError, Subject, take, takeUntil, throwError } from "rxjs";
import { CitiesDataService } from "../../services/cities-data.service";
import { CitiesStoreService } from "../../services/cities-store.service";
import { ConfirmationService } from "primeng/api";
import { Router } from "@angular/router";

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
  providers: [ConfirmationService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityCardComponent implements OnDestroy {
  @Input() public city!: City;
  private notifier$: Subject<null> = new Subject();

  constructor(
    private dataService: CitiesDataService,
    private dataStore: CitiesStoreService,
    private confirmationService: ConfirmationService,
    private router: Router,
  ) {
  }

  ngOnDestroy() {
    this.notifier$.next(null);
    this.notifier$.complete();
  }

  toggleFavorite() {
    const previousFavorite = this.city.favorite;
    this.city.favorite = !this.city.favorite;
    this.dataService.updateCity(this.city.id, this.city)
      .pipe(
        take(1),
        takeUntil(this.notifier$),
        catchError((err) => throwError(() => {
          this.city.favorite = previousFavorite;
          return err;
        }))
      )
      .subscribe(() => this.dataStore.updateCity(this.city));
  }


  deleteCity(): void {
    this.confirmationService.confirm({
      message: 'Вы уверены, что хотите удалить этот город?',
      header: 'Удаление города',
      acceptLabel: 'Да',
      rejectLabel: 'Нет',
      accept: () => {
        this.dataService.deleteCity(this.city.id)
          .pipe(
            take(1),
            takeUntil(this.notifier$),
            catchError((err) => throwError(() => err))
          )
          .subscribe(() => this.dataStore.deleteCity(this.city.id));
      }
    });
  }

  editCity() {
    this.router.navigate([`cities/edit/${this.city.id}`]).then();
  }
}
