import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy } from '@angular/core';
import { City } from "../../models/city.model";
import { catchError, Subject, take, takeUntil, throwError } from "rxjs";
import { CitiesDataService } from "../../services/cities-data.service";
import { CitiesStoreService } from "../../services/cities-store.service";

@Component({
  selector: 'app-city-card',
  templateUrl: './city-card.component.html',
  styleUrls: ['./city-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityCardComponent implements OnDestroy {
  @Input() public city!: City;
  private notifier$: Subject<null> = new Subject();

  constructor(
    private dataService: CitiesDataService,
    private dataStore: CitiesStoreService,
    private cdr: ChangeDetectorRef,
    // public dialog: MatDialog,
  ) {
  }

  ngOnDestroy() {
    this.notifier$.next(null);
    this.notifier$.complete();
  }

  toggleFavorite() {
    const previousFavorite = this.city.favorite;
    this.city.favorite = !this.city.favorite;
    this.dataService.updateCity(this.city)
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


  editCity() {
    // const dialogRef: MatDialogRef<CityEditorComponent> = this.dialog.open(CityEditorComponent, {
    //   data: this.city
    // });
    // dialogRef.afterClosed().subscribe(result => {
    //   !!result && this.updateTask(result);
    // });
  }

  deleteCity() {
    // const dialogRef: MatDialogRef<DeleteConfirmationComponent> = this.dialog.open(DeleteConfirmationComponent,
    //   {width: '250px'});
    // dialogRef.afterClosed().subscribe(res => {
    //   if (!!res) {
    //     this.dataService.deleteCity(this.city.id)
    //       .pipe(
    //         take(1),
    //         takeUntil(this.notifier$),
    //         catchError((err) => throwError(() => err))
    //       )
    //       .subscribe(() => this.dataStore.deleteCity(this.city.id));
    //   }
    // });
  }

  private updateTask(city: City) {
    this.dataService.updateCity(city)
      .pipe(
        take(1),
        takeUntil(this.notifier$),
        catchError((err) => throwError(() => err)))
      .subscribe((result) => {
          if (result) {
            this.city = city;
            this.dataStore.updateCity(this.city);
            this.cdr.detectChanges();
          }
        }
      );
  }
}
