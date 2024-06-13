import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { City } from "../../models/city.model";
import { ActivatedRoute } from "@angular/router";
import { CitiesDataService } from "../../services/cities-data.service";
import { CitiesStoreService } from "../../services/cities-store.service";
import { catchError, Subject, take, takeUntil, throwError } from "rxjs";
import { Location } from "@angular/common";

@Component({
  selector: 'app-city-editor',
  templateUrl: './city-editor.component.html',
  styleUrls: ['./city-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityEditorComponent implements OnInit, OnDestroy {

  data: Partial<City> = {};
  private notifier$: Subject<null> = new Subject();

  cityForm: FormGroup = this.fb.group({
    id: [''],
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(24)]],
    description: ['',
      [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
    image: [''],
  });

  constructor(
    private fb: FormBuilder,
    public route: ActivatedRoute,
    private dataService: CitiesDataService,
    private dataStore: CitiesStoreService,
    private cdr: ChangeDetectorRef,
    private location: Location
  ) {
  }

  ngOnInit() {
    const itemId = Number(this.route.snapshot.params['id']);
    if (itemId) {
      const city = this.dataStore.getCityById(itemId);
      if (city) {
        this.data = city;
        this.cityForm.patchValue({
          id: city.id,
          name: city.name,
          description: city.description,
          image: city.image
        });
        this.cdr.detectChanges();
      }
    }
  }

  ngOnDestroy() {
    this.notifier$.next(null);
    this.notifier$.complete();
  }

  submitForm() {
    if (this.cityForm.valid) {
      if (this.data.id) {
        this.editCity();
      } else {
        this.createCity();
      }
    }
    this.location.back();
  }

  private createCity() {
    this.dataService.createCity(this.cityForm.value)
      .pipe(
        take(1),
        takeUntil(this.notifier$),
        catchError((err) => throwError(() => err))
      )
      .subscribe((res: City) => this.dataStore.addCity(res));
  }

  private editCity() {
    this.dataService.updateCity(this.cityForm.value)
      .pipe(
        take(1),
        takeUntil(this.notifier$),
        catchError((err) => throwError(() => err))
      )
      .subscribe(() => this.dataStore.updateCity(this.cityForm.value));
  }

}
