import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { City } from "../../models/city.model";
import { ActivatedRoute } from "@angular/router";
import { catchError, Subject, take, takeUntil, throwError } from "rxjs";
import { Location } from "@angular/common";
import { CitiesService } from "../../state/cities.service";

@Component({
  selector: 'app-city-editor',
  templateUrl: './city-editor.component.html',
  styleUrls: ['./city-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CityEditorComponent implements OnInit, OnDestroy {

  data: Partial<City> = {};
  private notifier$ = new Subject<void>();

  cityForm: FormGroup = this.fb.group({
    id: [''],
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(24)]],
    description: ['',
      [Validators.required, Validators.minLength(3), Validators.maxLength(70)]],
    image: [''],
    favorite: [false]
  });

  constructor(
    private fb: FormBuilder,
    public route: ActivatedRoute,
    private citiesService: CitiesService,
    private cdr: ChangeDetectorRef,
    private location: Location
  ) {
  }

  ngOnInit() {
    const itemId = this.route.snapshot.params['id'];
    if (itemId) {
      this.data = this.citiesService.getCityById(itemId)!;
      const { id, name, description, image, favorite } = this.data;
      this.cityForm.patchValue({ id, name, description, image, favorite });
      this.cdr.detectChanges();
    }
  }

  ngOnDestroy() {
    this.notifier$.next();
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
    this.citiesService.addCity(this.cityForm.value)
      .pipe(
        take(1),
        takeUntil(this.notifier$),
        catchError((err) => throwError(() => err))
      )
      .subscribe();
  }

  private editCity() {
    this.citiesService.updateCity(this.cityForm.value)
      .pipe(
        takeUntil(this.notifier$),
        catchError((err) => throwError(() => err))
      )
      .subscribe();
  }
}
