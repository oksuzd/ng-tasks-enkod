import { ChangeDetectionStrategy, Component, Input, OnDestroy } from '@angular/core';
import { City } from "../../models/city.model";
import { catchError, Subject, take, takeUntil, throwError } from "rxjs";
import { ConfirmationService } from "primeng/api";
import { Router } from "@angular/router";
import { CitiesService } from "../../state/cities.service";

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
    private citiesService: CitiesService,
    private confirmationService: ConfirmationService,
    private router: Router,
  ) {
  }

  ngOnDestroy() {
    this.notifier$.next(null);
    this.notifier$.complete();
  }

  get cityImage(): string {
    return this.city.image ? this.city.image : "assets/img/cities/city-placeholder.jpg";
  }

  toggleFavorite() {
    const updatedCity = {...this.city, favorite: !this.city.favorite};
    this.citiesService.updateCity(updatedCity)
      .pipe(
        takeUntil(this.notifier$),
        catchError((err) => throwError(() => {
          this.city = {...this.city, favorite: this.city.favorite};
          return err;
        }))
      )
      .subscribe(() => {
        this.city = updatedCity;
      });
  }

  deleteCity(): void {
    this.confirmationService.confirm({
      message: 'Вы уверены, что хотите удалить этот город?',
      header: 'Удаление города',
      acceptLabel: 'Да',
      rejectLabel: 'Нет',
      accept: () => {
        this.citiesService.deleteCity(this.city.id)
          .pipe(
            take(1),
            takeUntil(this.notifier$),
            catchError((err) => throwError(() => err))
          )
          .subscribe();
      }
    });
  }

  editCity() {
    this.router.navigate([`cities/edit/${this.city.id}`]).then();
  }
}
